import { useEffect } from "react";
import MusicCardList from "./MusicCardList";
import PlaylistList from "./PlaylistList";
import * as S from "./styles";

export default function MainPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <MusicCardList />
        {/*         <PlaylistList />
        <MusicCardList />
        <PlaylistList />
        <MusicCardList />
        <PlaylistList /> */}
      </S.Container>
    </S.Wrapper>
  );
}
