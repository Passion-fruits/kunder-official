import GenreList from "./GenreList";
import * as S from "./styles";
import ThemaCardList from "./ThemaCardList";

export default function MainPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <ThemaCardList />
        <GenreList />
        <ThemaCardList />
      </S.Container>
    </S.Wrapper>
  );
}
