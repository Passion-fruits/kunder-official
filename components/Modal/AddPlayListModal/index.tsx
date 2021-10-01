import * as S from "./styles";
import React from "react";
import { ACCESS_TOKEN, USER_ID } from "../../../lib/export/localstorage";
import { getValue, setValue } from "../../../lib/context/index";
import { toast } from "react-toastify";
import playlist from "../../../api/playlist";
import { playList } from "../../../lib/interfaces/playlist";
import MakePlaylist from "./MakePlaylist";

export default function AddPlayListModal() {
  const dispatch = setValue();
  const contextObj = getValue();
  const [playListArr, setPlayListArr] = React.useState<playList[]>([]);
  const [isMake, setIsMake] = React.useState<boolean>(false);

  const getUserPlaylist = React.useCallback(() => {
    setIsMake(false);
    playlist
      .getUserPlaylist(localStorage.getItem(USER_ID))
      .then((res) => {
        setPlayListArr(res.data);
      })
      .catch(() => {
        return;
      });
  }, []);

  const closeModal = React.useCallback(() => {
    dispatch({
      type: "SET_MODAL",
      modal: null,
    });
  }, []);

  const addMusicToPlaylist = React.useCallback(({ target }) => {
    const playlist_id = target.value;
    playlist
      .addMusicToPlaylist({
        playlist_id: playlist_id,
        song_id: contextObj.song_id,
      })
      .then(() => {
        toast.success("곡이 추가되었습니다.");
        closeModal();
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.info("이미 곡이 존재합니다.");
        } else {
          toast.error("에러가 발생하였습니다.");
        }
        target.checked = false;
      });
  }, []);

  React.useEffect(() => {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
      closeModal();
      toast.info("로그인 후 이용해주세요.");
    }
  }, []);

  React.useEffect(() => {
    getUserPlaylist();
  }, []);

  return (
    <S.Wrapper>
      <h1 className="title">내 플레이리스트</h1>
      <S.PlayListContainer className="scroll-container">
        {playListArr.length === 0 ? (
          <span className="none">플레이리스트가 없습니다.</span>
        ) : (
          <>
            {playListArr.map((playlist, index) => (
              <div className="option" key={index}>
                <input
                  type="checkbox"
                  value={playlist.playlist_id}
                  id={playlist.playlist_id.toString()}
                  onClick={addMusicToPlaylist}
                />
                <label htmlFor={playlist.playlist_id.toString()}>
                  {playlist.name}
                </label>
              </div>
            ))}
          </>
        )}
      </S.PlayListContainer>
      {isMake ? (
        <MakePlaylist getUserPlaylist={getUserPlaylist} />
      ) : (
        <button className="add-btn" onClick={() => setIsMake(true)}>
          + 플레이리스트 만들기
        </button>
      )}
    </S.Wrapper>
  );
}
