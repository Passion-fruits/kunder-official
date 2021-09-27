import * as S from "./styles";
import React from "react";
import { ACCESS_TOKEN } from "./../../lib/export/localstorage";
import { setValue } from "./../../lib/context/index";
import { toast } from "react-toastify";
import playlist from "../../api/playlist";
import { playList } from "./../../lib/interfaces/playlist";

export default function AddPlayListModal() {
  const dispatch = setValue();
  const [playListArr, setPlayListArr] = React.useState<playList[]>([]);

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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <S.Wrapper>
      <h1 className="title">플레이리스트 저장</h1>
      <S.PlayListContainer></S.PlayListContainer>
      <button className="add-btn">+플레이리스트 만들기</button>
    </S.Wrapper>
  );
}
