import { playList } from "./../../lib/interfaces/playlist";
import PlayListCard from "../PlaylistCard";
import { LIST_WRAPPER } from "./../../styles/index";

interface props {
  playlistArr: playList[];
}

export default function PlaylistCardList({ playlistArr }: props) {
  return (
    <LIST_WRAPPER>
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
    </LIST_WRAPPER>
  );
}
