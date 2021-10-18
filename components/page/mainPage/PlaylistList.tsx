import { data3 } from "../../../lib/export/data";
import PlaylistCardList from "../../PlaylistCardList";
import * as S from "./styles";

export default function PlaylistList() {
  return (
    <S.ListWrap>
      <S.Title>새로 나온 플레이리스트</S.Title>
      <S.SubTitle>플레이리스트로 다양한 음악을 경험하세요</S.SubTitle>
      <PlaylistCardList playlistArr={data3.slice(0, 6)} />
    </S.ListWrap>
  );
}
