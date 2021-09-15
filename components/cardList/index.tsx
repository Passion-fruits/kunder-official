import { setValue } from "../../lib/context/index";
import MusicCard from "../musicCard";
import * as S from "./styles";
import React from "react";

interface props {
  data: any[];
}

export default function CardList({ data }: props) {
  const dispatch = setValue();

  React.useEffect(() => {
    dispatch({
      type: "SET_MUSIC_LIST",
      list: data,
    });
  }, [data]);

  return (
    <S.Wrapper>
      {data.map((obj, index) => (
        <MusicCard
          key={index}
          writerName={obj.artist}
          imgSrc={obj.cover_url}
          musicSrc={obj.song_url}
          like={obj.like}
          id={obj.song_id}
          title={obj.title}
        />
      ))}
    </S.Wrapper>
  );
}
