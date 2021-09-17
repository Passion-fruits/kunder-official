import MusicCardList from "../MusicCardList";
import * as S from "./styles";
import { data } from "./../../lib/export/data";

export default function ThemaCardList() {
  return (
    <S.ThemaCardListWrapper>
      <h1 className="title">인기 음악</h1>
      <p className="description">가장 인기 음악을 만나보세요</p>
      <MusicCardList musicList={data} />
    </S.ThemaCardListWrapper>
  );
}
