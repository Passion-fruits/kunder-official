import * as S from "./styles";
import { MusicCardListProps } from "../../../lib/interfaces/music";
import MusicRowCard from "./MusicRowCard/index";

export default function MusicRowCardList({ musicList }: MusicCardListProps) {
  return (
    <S.Wrapper>
      {musicList.map(
        (
          {
            title,
            artist,
            song_id,
            song_url,
            like,
            cover_url,
            created_at,
            genre,
            mood,
          },
          index
        ) => (
          <MusicRowCard
            title={title}
            artist={artist}
            song_id={song_id}
            song_url={song_url}
            like={like}
            cover_url={cover_url}
            created_at={created_at}
            genre={genre}
            indexNum={index}
            mood={mood}
            key={index}
          />
        )
      )}
    </S.Wrapper>
  );
}
