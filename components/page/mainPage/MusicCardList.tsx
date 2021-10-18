import { data2 } from "../../../lib/export/data";
import MusicColumnCardList from "../../MusicColumnCardList";
import * as S from "./styles";

export default function MusicCardList() {
  return (
    <S.ListWrap>
      <S.Title>당신이 좋아할 음악</S.Title>
      <S.SubTitle>쿤더에서 추천하는 음악을 들어보세요</S.SubTitle>
      <MusicColumnCardList musicList={data2.slice(0, 6)} />
    </S.ListWrap>
  );
}
