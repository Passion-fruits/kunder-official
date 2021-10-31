import LitCard from "./LitCard";
import * as S from "./styles";
import React from "react";
import { getValue, setValue } from "../../../lib/context/index";
import music from "../../../api/music";
import { musicCardObject } from "../../../lib/interfaces/music";

export default function LitPage() {
  const dispatch = setValue();
  const audioListIndex = getValue().list_index;
  const [indexNum, setIndexNum] = React.useState<number>(0);
  const [musicList, setMusicList] = React.useState<musicCardObject[]>([]);

  const getLitList = (song_id) => {
    music
      .getLit(song_id, 15)
      .then((res) => {
        setMusicList(musicList.concat(res.data));
      })
      .catch((err) => {
        return;
      });
  };

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
    getLitList(2);
  }, []);

  React.useEffect(() => {
    setIndexNum(audioListIndex);
  }, [audioListIndex]);

  React.useEffect(() => {
    if (musicList.length > 0 && audioListIndex > musicList.length - 3) {
      getLitList(musicList[audioListIndex].song_id);
    }
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
              like={music.like}
              indexNum={index}
              comment={music.comment}
              description={music.description}
              key={index}
            />
          ))}
        </S.LitCardWrap>
      </S.Container>
    </S.Wrapper>
  );
}
