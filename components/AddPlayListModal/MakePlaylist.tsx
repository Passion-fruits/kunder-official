import React from "react";
import { COLOR } from "./../../styles/index";

export default function MakePlaylist() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [playlistName, setPlaylistName] = React.useState<string>("");
  const limitLength = 20;

  const inputHandler = ({ target }) => {
    setPlaylistName(target.value);
  };

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="playlist-make-container">
      <input
        type="text"
        placeholder="플레이리스트 이름"
        ref={inputRef}
        onChange={inputHandler}
      />
      <div
        className="title-length"
        style={
          playlistName.length > limitLength ? { color: COLOR.red_text } : {}
        }
      >
        {playlistName.length} / {limitLength}
      </div>
      <button>만들기</button>
    </div>
  );
}
