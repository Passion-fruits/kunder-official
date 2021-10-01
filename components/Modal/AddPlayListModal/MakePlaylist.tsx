import React from "react";
import { COLOR } from "../../../styles/index";
import playlist from "../../../api/playlist";
import { toast } from "react-toastify";

export default function MakePlaylist({ getUserPlaylist }) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [playlistName, setPlaylistName] = React.useState<string>("");
  const limitLength = 20;

  const inputHandler = ({ target }) => {
    setPlaylistName(target.value);
  };

  const createPlaylist = () => {
    if (playlistName.length === 0) {
      toast.info("플레이리스트 이름을 입력하세요");
      return;
    }
    playlist
      .createNewPlaylist(playlistName)
      .then(() => {
        getUserPlaylist();
      })
      .catch(() => {
        toast.error("에러가 발생하였습니다.");
      });
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
      <button onClick={createPlaylist}>만들기</button>
    </div>
  );
}
