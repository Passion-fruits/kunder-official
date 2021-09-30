import LitCard from "./LitCard";
import * as S from "./styles";
import React from "react";
import { getValue, setValue } from "./../../lib/context/index";
import feed from "../../api/feed";
import { musicCardObject } from "./../../lib/interfaces/music";

export default function LitPage() {
  const dispatch = setValue();
  const audioListIndex = getValue().list_index;
  const [indexNum, setIndexNum] = React.useState<number>(0);
  const [musicList, setMusicList] = React.useState<musicCardObject[]>([]);

  React.useEffect(() => {
    if (musicList.length > 0) {
      dispatch({
        type: "SET_MUSIC_LIST",
        list: musicList,
      });
      dispatch({
        type: "MUSIC_CHANGE",
        musicInformation: musicList[0],
      });
    }
  }, [musicList]);

  React.useEffect(() => {
    feed
      .getFeedList(1, 1, 2)
      .then((res) => {
        setMusicList(res.data);
      })
      .catch(() => {
        return;
      });
  }, []);

  React.useEffect(() => {
    setIndexNum(audioListIndex);
  }, [audioListIndex]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.LitCardWrap indexNum={indexNum}>
          {musicList.map((music, index) => (
            <LitCard
              nowIndex={index === indexNum}
              artist={music.artist}
              title={music.title}
              created_at={music.created_at}
              cover_url={music.cover_url}
              mood={music.mood}
              genre={music.genre}
              song_id={music.song_id}
              song_url={music.song_url}
              like={music.like}
              key={index}
            />
          ))}
        </S.LitCardWrap>
      </S.Container>
    </S.Wrapper>
  );
}
