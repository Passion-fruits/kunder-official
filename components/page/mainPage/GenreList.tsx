import * as S from "./styles";

export default function GenreList() {
  return (
    <S.GenreListWrapper>
      <S.GenreCard img="/hiphop.jpg">
        <h1>힙합 음악</h1>
      </S.GenreCard>
      <S.GenreCard img="/jazz.jpg">
        <h1>재즈 음악</h1>
      </S.GenreCard>
      <S.GenreCard img="/rock.jpg">
        <h1>록 음악</h1>
      </S.GenreCard>
      <S.GenreCard img="/classic.jpg">
        <h1>클래식 음악</h1>
      </S.GenreCard>
    </S.GenreListWrapper>
  );
}
