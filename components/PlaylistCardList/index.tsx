import * as S from "./styles";
import { playList } from "./../../lib/interfaces/playlist";
import PlayListCard from "../PlaylistCard";

interface props {
  playlistArr: playList[];
}

export default function PlaylistCardList({ playlistArr }: props) {
  return (
    <S.Wrapper>
      {playlistArr.map((playlist, index) => (
        <PlayListCard
          key={index}
          name={playlist.name}
          author={playlist.author}
          cover_url={playlist.cover_url}
          playlist_id={playlist.playlist_id}
          like={playlist.like}
        />
      ))}
    </S.Wrapper>
  );
}
