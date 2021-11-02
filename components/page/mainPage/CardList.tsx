import * as S from "./styles";
import MusicColumnCard from "../../common/MusicColumnCardList/MusicColumnCard/index";
import { useCallback, useEffect, useState } from "react";
import { musicCardObject } from "../../../lib/interfaces/music";
import PlayListCard from "../../common/PlaylistCardList/PlaylistCard/index";
import { playList } from "./../../../lib/interfaces/playlist";
import { useRouter } from "next/dist/client/router";

interface Props {
  option: "music" | "playlist";
  data: musicCardObject[] | playList[];
  title: string;
  description: string;
  collectOption?: "popular" | "recent" | "genre";
  genre?: number;
}

export default function CardList({
  option,
  data,
  title,
  description,
  collectOption,
  genre,
}: Props) {
  const router = useRouter();
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

  return (
    <S.ListWrap>
      {option === "music" ? (
        <S.MusicTitle
          onClick={() =>
            router.push(`/allList?option=${collectOption}&genre=${genre}`)
          }
        >
          {title}
        </S.MusicTitle>
      ) : (
        <S.Title>{title}</S.Title>
      )}
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
                user_id={music.user_id}
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
                index={index}
                base_song_id={playlist.base_song_id}
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
