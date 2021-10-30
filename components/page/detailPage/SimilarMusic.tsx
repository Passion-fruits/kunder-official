import * as S from "./styles";
import MusicColumnCardList from "../../common/MusicColumnCardList";
import { musicCardObject } from "./../../../lib/interfaces/music";

interface Props {
  data: musicCardObject[];
}

export default function SimilarMusic({ data }: Props) {
  return (
    <S.SimilarMusicWrap>
      <h1>이 노래와 유사한 음악</h1>
      <div className="line" />
      <MusicColumnCardList musicList={data} />
    </S.SimilarMusicWrap>
  );
}
