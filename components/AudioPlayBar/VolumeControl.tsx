import * as S from "./styled";
import React from "react";
import { VolumeIcon, MuteIcon } from "../../assets/index";

export default function VolumeControl({ audio }) {
  const [volume, setVolume] = React.useState(50);

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

  React.useEffect(() => {
    audio.current.volume = volume / 100;
  }, [volume]);

  return (
    <>
      {volume == 0 ? (
        <MuteIcon size={20} callback={volumeIconEvent} />
      ) : (
        <VolumeIcon size={20} callback={volumeIconEvent} />
      )}
      <S.VolumeControlWrap progress={volume}>
        <input type="range" onClick={controleMusicVolume} />
      </S.VolumeControlWrap>
    </>
  );
}
