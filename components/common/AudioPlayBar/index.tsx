import { PassIcon, PlayIcon, PauseIcon } from "../../../assets/index";
import { getValue } from "../../../lib/context";
import React from "react";
import * as S from "./styled";
import MusicInfo from "./MusicInfo";
import PlayListAddIcon from "../../../assets/playListAdd";
import VolumeControl from "./VolumeControl";
import { setValue } from "../../../lib/context/index";
import { toast } from "react-toastify";

export default function AudioPlayBar() {
  const musicObj = getValue().musicInformation;
  const musicList = getValue().list;
  const modal = getValue().modal;
  const dispatch = setValue();
  const [isPlay, setIsPlay] = React.useState<boolean>(false);
  const [musicProgress, setMusicProgress] = React.useState<number>(0);
  const [controlToggle, setControlToggle] = React.useState<boolean>(false);
  const [musicListNowIndex, setMusicListNowIndex] = React.useState<number>(0);
  const controlToggleRef = React.useRef(null);
  const audio = React.useRef(typeof Audio !== "undefined" && new Audio());
  controlToggleRef.current = controlToggle;

  // 다음 곡 관련
  //======================================
  const moveBeforeMusic = React.useCallback(() => {
    if (musicListNowIndex - 1 >= 0 && musicList.length > 0) {
      const nextMusicObj: any = musicList[musicListNowIndex - 1];
      dispatch({
        type: "MUSIC_CHANGE",
        musicInformation: nextMusicObj,
      });
      setMusicListNowIndex((value) => value - 1);
    } else {
      toast.info("이전 곡이 없습니다.");
    }
  }, [musicList, musicListNowIndex]);

  const moveNextMusic = React.useCallback(() => {
    if (musicListNowIndex + 1 < musicList.length && musicList.length > 0) {
      const nextMusicObj = musicList[musicListNowIndex + 1];
      dispatch({
        type: "MUSIC_CHANGE",
        musicInformation: nextMusicObj,
      });
      setMusicListNowIndex((value) => value + 1);
    } else {
      toast.info("다음 곡이 없습니다.");
    }
  }, [musicList, musicListNowIndex]);

  // 처음에 초기화겸
  React.useEffect(() => {
    setMusicListNowIndex(-1);
  }, [musicList]);

  // 리스트 현재 재생중인 인덱스값 가져오기
  React.useEffect(() => {
    musicList.forEach((obj, index) => {
      if (musicObj.song_id === obj.song_id) {
        setMusicListNowIndex(index);
      }
    });
  }, [musicObj]);

  // 리스트 인덱스 변경
  React.useEffect(() => {
    dispatch({
      type: "SET_MUSIC_LIST_INDEX",
      list_index: musicListNowIndex,
    });
  }, [musicListNowIndex]);
  // =========================

  const musicStop = React.useCallback(() => {
    audio.current.pause();
    setIsPlay(false);
  }, [audio]);

  const musicStart = React.useCallback(() => {
    audio.current.play();
    setIsPlay(true);
  }, [audio]);

  const moveMusic = React.useCallback(
    ({ target }) => {
      if (!musicObj.song_id) return;
      const value = target.value;
      setMusicProgress(value);
      audio.current.currentTime = (audio.current.duration * value) / 100;
      musicStart();
    },
    [musicObj]
  );

  const addPlayList = React.useCallback(() => {
    if (musicObj.song_id) {
      dispatch({
        type: "SET_MODAL",
        modal: "addPlayList",
      });
      dispatch({
        type: "SET_MUSIC_ID",
        song_id: musicObj.song_id,
      });
    } else {
      toast.info("곡이 없습니다.");
    }
  }, [musicObj]);

  // 곡 바뀔때마다 재생
  React.useEffect(() => {
    setMusicProgress(0);
    if (musicObj.song_url) {
      audio.current.src = musicObj.song_url;
      audio.current.play();
      setIsPlay(true);
    }
    if (musicObj.short_url) {
      audio.current.src = musicObj.short_url;
      audio.current.play();
      setIsPlay(true);
    }
  }, [musicObj]);

  // 오디오 시간 1초마다 가져와서 progress 변경
  React.useEffect(() => {
    setInterval(() => {
      const progress =
        (audio.current.currentTime / audio.current.duration) * 100 + 1;
      if (!isNaN(progress) && !controlToggleRef.current) {
        setMusicProgress(progress);
      }
    }, 1000);
  }, []);

  // 음악 끝나면 다음곡 있으면 넘기고 아니면 정지
  React.useEffect(() => {
    if (musicProgress >= 100) {
      if (musicListNowIndex + 1 === musicList.length) {
        musicStop();
        return;
      }
      moveNextMusic();
    }
  }, [musicProgress]);

  // 오디오바 컨트롤 이벤트
  React.useEffect(() => {
    const input: HTMLElement = document.getElementById("input-range");
    input.addEventListener("mousedown", () => setControlToggle(true));
    input.addEventListener("mouseup", () => setControlToggle(false));
    input.addEventListener("input", (event: any) =>
      setMusicProgress(event.target.value)
    );
  }, []);

  // lit 카드 댓글 작성시 정지
  React.useEffect(() => {
    if (modal === "addLitComment") {
      audio.current.loop = true;
    } else {
      audio.current.loop = false;
    }
  }, [modal]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.RangeInput
          type="range"
          onClick={moveMusic}
          progress={musicProgress}
          value={musicProgress}
          id="input-range"
          readOnly
        />
        <S.Center>
          <S.CenterControl>
            <PassIcon callback={moveBeforeMusic} isNext={false} />
            {isPlay ? (
              <PauseIcon size={16} callback={musicStop} />
            ) : (
              <PlayIcon size={17} callback={musicStart} />
            )}
            <PassIcon callback={moveNextMusic} isNext={true} />
          </S.CenterControl>
        </S.Center>
        <MusicInfo
          title={musicObj.title}
          coverImg={musicObj.cover_url}
          name={musicObj.artist}
          songId={musicObj.song_id}
        />
        <S.Control>
          <PlayListAddIcon size={16} callback={addPlayList} />
          <VolumeControl audio={audio} />
        </S.Control>
      </S.Container>
    </S.Wrapper>
  );
}
