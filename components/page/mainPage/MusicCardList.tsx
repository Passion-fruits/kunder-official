import { data2 } from "../../../lib/export/data";
import * as S from "./styles";
import MusicColumnCard from "./../../MusicColumnCardList/MusicColumnCard/index";
import { useCallback, useEffect, useRef, useState } from "react";

export default function MusicCardList() {
  const [indexing, setIndexing] = useState<number>(6);

  const setIndexingToInnerWidth = useCallback(() => {
    if (window.innerWidth < 1700) {
      setIndexing(5);
      return;
    }
    if (window.innerWidth < 1400) {
      setIndexing(4);
      return;
    }
    setIndexing(6);
  }, []);

  useEffect(() => {
    setIndexingToInnerWidth();
    window.addEventListener("resize", () => {
      setIndexingToInnerWidth();
    });
  }, []);
  console.log(indexing);
  return (
    <S.ListWrap>
      <S.Title>당신이 좋아할 음악</S.Title>
      <S.SubTitle>쿤더에서 추천하는 음악을 들어보세요</S.SubTitle>
      <S.List>
        {data2.slice(0, indexing).map((music, index) => (
          <MusicColumnCard
            key={index}
            title={music.title}
            artist={music.artist}
            song_id={music.song_id}
            cover_url={music.cover_url}
          />
        ))}
      </S.List>
    </S.ListWrap>
  );
}
