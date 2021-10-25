import * as S from "./styles";
import MusicColumnCard from "../../common/MusicColumnCardList/MusicColumnCard/index";
import { useCallback, useEffect, useState } from "react";
import { musicCardObject } from "../../../lib/interfaces/music";
import { playlistInfor } from "../../../lib/interfaces/playlist";
import PlayListCard from "../../common/PlaylistCardList/PlaylistCard/index";

interface Props {
  option: "music" | "playlist";
  data: musicCardObject[] | playlistInfor[];
  title: string;
  description: string;
}

export default function CardList({ option, data, title, description }: Props) {
  const [indexing, setIndexing] = useState<number>(6);

  const setIndexingToInnerWidth = useCallback(() => {
    if (window.innerWidth < 1200) {
      setIndexing(4);
      return;
    }
    if (window.innerWidth < 1500) {
      setIndexing(5);
      return;
    }
    setIndexing(6);
  }, []);

  useEffect(() => {
    setIndexingToInnerWidth();
    window.addEventListener("resize", setIndexingToInnerWidth);
    return () => {
      window.removeEventListener("resize", setIndexingToInnerWidth);
    };
  }, []);

  console.log(data);

  return (
    <S.ListWrap>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{description}</S.SubTitle>
      <S.List index={indexing}>
        {option === "music" ? (
          <>
            {data.slice(0, indexing).map((music, index) => (
              <MusicColumnCard
                key={index}
                title={music.title}
                artist={music.artist}
                song_id={music.song_id}
                cover_url={music.cover_url}
                song_url={music.song_url}
                like={music.like}
                genre={music.genre}
              />
            ))}
          </>
        ) : option === "playlist" ? (
          <>
            {data.slice(0, indexing).map((playlist, index) => (
              <PlayListCard
                key={index}
                cover_url={playlist.cover_url}
                name={playlist.name}
                author={playlist.author}
                like={playlist.like}
                playlist_id={playlist.playlist_id}
              />
            ))}
          </>
        ) : (
          ""
        )}
      </S.List>
    </S.ListWrap>
  );
}
