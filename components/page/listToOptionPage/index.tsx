import { useRouter } from "next/dist/client/router";
import MusicColumnCardList from "../../common/MusicColumnCardList";
import * as S from "./styles";
import { data } from "./../../../lib/export/data";

export default function ListToOptionPage() {
  const router = useRouter();
  const { option } = router.query;
  return (
    <S.Wrapper>
      <S.Container>
        <h1>힙합 음악 전체보기</h1>
        <MusicColumnCardList musicList={data} />
      </S.Container>
    </S.Wrapper>
  );
}
