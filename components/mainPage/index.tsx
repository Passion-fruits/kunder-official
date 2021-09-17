import GenreList from "./GenreList";
import * as S from "./styles";
import ThemaCardList from "./ThemaCardList";

export default function MainPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <ThemaCardList
          title="인기 음악"
          descripton="가장 인기있는 음악을 만나보세요"
          isColumn={true}
        />
        <GenreList />
        <ThemaCardList
          title="최신 음악"
          descripton="오늘 나온 음악을 만나보세요"
          isColumn={true}
        />
        <ThemaCardList
          title="힙합 음악"
          descripton="당신의 하루를 힙하게 할 음악"
          isColumn={false}
        />
      </S.Container>
    </S.Wrapper>
  );
}
