import { MusicCardListProps } from "../../../lib/interfaces/music";
import MusicColumnCard from "./MusicColumnCard";
import { LIST_WRAPPER } from "../../../styles/index";

export default function MusicColumnCardList({ musicList }: MusicCardListProps) {
  return (
    <LIST_WRAPPER>
      {musicList.map(
        (
          { title, artist, song_id, song_url, like, cover_url, genre },
          index
        ) => (
          <MusicColumnCard
            title={title}
            artist={artist}
            song_id={song_id}
            song_url={song_url}
            like={like}
            cover_url={cover_url}
            genre={genre}
            key={index}
          />
        )
      )}
    </LIST_WRAPPER>
  );
}
