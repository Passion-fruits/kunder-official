import MusicRowCardList from "../MusicRowCardList";
import * as S from "./styles";
import { data } from "./../../lib/export/data";

export default function SimilarMusic() {
  return (
    <S.SimilarMusicWrap>
      <h1>이 노래와 유사한 음악</h1>
      <div className="line" />
      <MusicRowCardList musicList={data} />
    </S.SimilarMusicWrap>
  );
}
