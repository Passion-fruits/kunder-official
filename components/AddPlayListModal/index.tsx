import * as S from "./styles";
import React from "react";
import { ACCESS_TOKEN } from "./../../lib/export/localstorage";
import { setValue } from "./../../lib/context/index";
import { toast } from "react-toastify";
import playlist from "../../api/playlist";
import { playList } from "./../../lib/interfaces/playlist";
import MakePlaylist from "./MakePlaylist";

export default function AddPlayListModal() {
  const dispatch = setValue();
  const [playListArr, setPlayListArr] = React.useState<playList[]>([]);
  const [isMake, setIsMake] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
      dispatch({
        type: "SET_MODAL",
        modal: null,
      });
      toast.info("로그인 후 이용해주세요.");
    }
  }, []);

  React.useEffect(() => {
    playlist
      .getUserPlaylist()
      .then((res) => {
        setPlayListArr(res.data);
      })
      .catch(() => {
        return;
      });
  }, []);

  return (
    <S.Wrapper>
      <h1 className="title">내 플레이리스트</h1>
      <S.PlayListContainer>
        <span className="none">플레이리스트가 없습니다.</span>
      </S.PlayListContainer>
      {isMake ? (
        <MakePlaylist />
      ) : (
        <button className="add-btn" onClick={() => setIsMake(true)}>
          +플레이리스트 만들기
        </button>
      )}
    </S.Wrapper>
  );
}
