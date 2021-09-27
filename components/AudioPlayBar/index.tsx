import { PassIcon, PlayIcon, PauseIcon } from "../../assets/index";
import { getValue } from "../../lib/context";
import React from "react";
import * as S from "./styled";
import MusicInfo from "./MusicInfo";
import PlayListAddIcon from "./../../assets/playListAdd";
import VolumeControl from "./VolumeControl";
import { setValue } from "./../../lib/context/index";

export default function AudioPlayBar() {
  const musicObj = getValue().musicInformation;
  const dispatch = setValue();
  const [isPlay, setIsPlay] = React.useState<boolean>(false);
  const [musicProgress, setMusicProgress] = React.useState<number>(0);
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

  const addPlayList = React.useCallback(() => {
    dispatch({
      type: "SET_MODAL",
      modal: "addPlayList",
      song_id: musicObj.song_id,
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
      musicStop();
      // 다음곡 재생
    }
  }, [musicProgress]);

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
            <PassIcon callback={() => {}} isNext={false} />
            {isPlay ? (
              <PauseIcon size={16} callback={musicStop} />
            ) : (
              <PlayIcon size={16} callback={musicStart} />
            )}
            <PassIcon callback={() => {}} isNext={true} />
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
