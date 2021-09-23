import {
  PassIcon,
  PlayIcon,
  VolumeIcon,
  PauseIcon,
  MuteIcon,
} from "../../assets/index";
import { getValue, setValue } from "../../lib/context";
import { toast } from "react-toastify";
import { musicCardObject } from "./../../lib/interfaces/music";
import React from "react";
import * as S from "./styled";
import MusicInfo from "./MusicInfo";

export default function AudioPlayBar() {
  const dispatch = setValue();
  const musicObj = getValue().musicInformation;
  const musicList = getValue().list;
  const [isPlay, setIsPlay] = React.useState<boolean>(false);
  const [musicProgress, setMusicProgress] = React.useState<number>(0);
  const [volume, setVolume] = React.useState(50);
  const [musicListNowIndex, setMusicListNowIndex] = React.useState<number>(0);
  const [controlToggle, setControlToggle] = React.useState<boolean>(false);
  const controlToggleRef = React.useRef(null);
  const audio = React.useRef(typeof Audio !== "undefined" && new Audio());
  controlToggleRef.current = controlToggle;

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

  const controleMusicVolume = React.useCallback(({ target }) => {
    setVolume(target.value);
  }, []);

  const volumeIconEvent = React.useCallback(() => {
    if (volume === 0) {
      setVolume(50);
    } else {
      setVolume(0);
    }
  }, [volume]);

  const moveBeforeMusic = React.useCallback(() => {
    if (musicListNowIndex - 1 >= 0 && musicList.length > 0) {
      const nextMusicObj: any = musicList[musicListNowIndex - 1];
      dispatch({
        type: "MUSIC_CHANGE",
        musicInformation: {
          title: nextMusicObj.title,
          cover_url: nextMusicObj.cover_url,
          artist: nextMusicObj.artist,
          song_id: nextMusicObj.song_id,
          song_url: nextMusicObj.song_url
            ? nextMusicObj.song_url
            : nextMusicObj.short_url,
        },
      });
      setMusicListNowIndex((value) => value - 1);
    } else {
      toast.info("이전 곡이 없습니다.");
    }
  }, [musicList, musicListNowIndex]);

  const moveNextMusic = React.useCallback(() => {
    if (musicListNowIndex + 1 < musicList.length && musicList.length > 0) {
      const nextMusicObj: musicCardObject = musicList[musicListNowIndex + 1];
      dispatch({
        type: "MUSIC_CHANGE",
        musicInformation: {
          title: nextMusicObj.title,
          cover_url: nextMusicObj.cover_url,
          artist: nextMusicObj.artist,
          song_id: nextMusicObj.song_id,
          song_url: nextMusicObj.song_url
            ? nextMusicObj.song_url
            : nextMusicObj.short_url,
        },
      });
      setMusicListNowIndex((value) => value + 1);
    } else {
      toast.info("다음 곡이 없습니다.");
    }
  }, [musicList, musicListNowIndex]);

  React.useEffect(() => {
    setMusicListNowIndex(-1);
  }, [musicList]);

  React.useEffect(() => {
    musicList.forEach((obj, index) => {
      if (musicObj.song_id === obj.song_id) {
        setMusicListNowIndex(index);
      }
    });
  }, [musicObj]);

  React.useEffect(() => {
    setMusicProgress(0);
    if (musicObj.song_url) {
      audio.current.src = musicObj.song_url;
      audio.current.play();
      setIsPlay(true);
    }
  }, [musicObj]);

  React.useEffect(() => {
    setInterval(() => {
      const progress =
        (audio.current.currentTime / audio.current.duration) * 100 + 1;
      if (!isNaN(progress) && !controlToggleRef.current) {
        setMusicProgress(progress);
      }
    }, 1000);
  }, []);

  React.useEffect(() => {
    if (musicProgress >= 100) {
      if (musicListNowIndex + 1 === musicList.length) {
        musicStop();
        return;
      }
      moveNextMusic();
    }
  }, [musicProgress]);

  React.useEffect(() => {
    audio.current.volume = volume / 100;
  }, [volume]);

  React.useEffect(() => {
    const input: HTMLElement = document.getElementById("input-range");
    input.addEventListener("mousedown", () => setControlToggle(true));
    input.addEventListener("mouseup", () => setControlToggle(false));
    input.addEventListener("input", (event: any) =>
      setMusicProgress(event.target.value)
    );
  }, []);

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
              <PlayIcon size={16} callback={musicStart} />
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
          {volume == 0 ? (
            <MuteIcon size={20} callback={volumeIconEvent} />
          ) : (
            <VolumeIcon size={20} callback={volumeIconEvent} />
          )}
          <S.VolumeControlWrap progress={volume}>
            <input type="range" onClick={controleMusicVolume} />
          </S.VolumeControlWrap>
        </S.Control>
      </S.Container>
    </S.Wrapper>
  );
}
