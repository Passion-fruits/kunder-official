import * as S from "./styles";
import { MusicCardListProps } from "./../../lib/interfaces/music";
import MusicCard from "../MusicCard";

export default function MusicCardList({ musicList }: MusicCardListProps) {
  return (
    <S.Wrapper>
      {musicList.map(
        ({ title, artist, song_id, song_url, like, cover_url }, index) => (
          <MusicCard
            title={title}
            artist={artist}
            song_id={song_id}
            song_url={song_url}
            like={like}
            cover_url={cover_url}
            key={index}
          />
        )
      )}
    </S.Wrapper>
  );
}