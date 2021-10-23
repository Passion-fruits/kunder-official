import { data2, data3 } from "../../../lib/export/data";
import * as S from "./styles";
import MusicColumnCard from "../../common/MusicColumnCardList/MusicColumnCard/index";
import { useCallback, useEffect, useState } from "react";
import PlayListCard from "../../common/PlaylistCardList/PlaylistCard";

interface Props {
  option: "music" | "playlist";
}

export default function MusicCardList({ option }: Props) {
  const [indexing, setIndexing] = useState<number>(6);

  const setIndexingToInnerWidth = useCallback(() => {
    if (window.innerWidth < 1300) {
      setIndexing(4);
      return;
    }
    if (window.innerWidth < 1700) {
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
      <S.Title>당신이 좋아할 음악</S.Title>
      <S.SubTitle>쿤더에서 추천하는 음악을 들어보세요</S.SubTitle>
      <S.List>
        {option === "music" ? (
          <>
            {data2.slice(0, indexing).map((music, index) => (
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
            {data3.slice(0, indexing).map((playlist, index) => (
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
