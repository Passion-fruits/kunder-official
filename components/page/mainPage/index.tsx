import MusicCardList from "./MusicCardList";
import * as S from "./styles";

export default function MainPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <MusicCardList option="music" />
        <MusicCardList option="playlist" />
        <MusicCardList option="music" />
        <MusicCardList option="playlist" />
        <MusicCardList option="music" />
        <MusicCardList option="playlist" />
        <MusicCardList option="music" />
        <MusicCardList option="playlist" />
      </S.Container>
    </S.Wrapper>
  );
}
