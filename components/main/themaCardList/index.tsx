import CardList from "../../cardList";
import * as S from "./styles";
import React from "react";
import music from "../../../api/music";
import { genreList } from "./../../../lib/export/genre";
import { musicObject } from "../../../lib/interfaces/music";

export default function ThemaCardList({ title, genre }) {
  const [data, setData] = React.useState<musicObject[]>([]);

  React.useEffect(() => {
    music
      .getStreaming({
        genre: genreList.indexOf(genre) + 1,
        page: 1,
        sort: 3,
        size: 5,
      })
      .then((res) => {
        setData(res.data.songs);
      })
      .catch(() => {
        return;
      });
  }, []);

  return (
    <S.Wrapper>
      <h1>{title}</h1>
      <CardList data={data} />
    </S.Wrapper>
  );
}
