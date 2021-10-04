import MusicRowCardList from "../../MusicRowCardList";
import * as S from "./styles";
import { data } from "../../../lib/export/data";
import MusicColumnCardList from "../../MusicColumnCardList";

export default function SimilarMusic() {
  return (
    <S.SimilarMusicWrap>
      <h1>이 노래와 유사한 음악</h1>
      <div className="line" />
      <MusicColumnCardList musicList={data} />
    </S.SimilarMusicWrap>
  );
}
