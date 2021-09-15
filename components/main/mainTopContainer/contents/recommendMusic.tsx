import { setValue } from "./../../../../lib/context/index";
import { musicObject } from "./../../../../lib/interfaces/music";
import { useRouter } from "next/dist/client/router";
import * as S from "../styles";
import PlayBtn from "../playBtn";
import music from "../../../../api/music";
import React from "react";

export default function RecommendMusic() {
  const [data, setData] = React.useState<musicObject>();
  const dispatch = setValue();
  const router = useRouter();

  const playMusic = React.useCallback(() => {
    dispatch({
      type: "MUSIC_CHANGE",
      musicInformation: {
        title: data.title,
        artist: data.artist,
        cover_url: data.cover_url,
        song_id: data.song_id,
        song_url: data.song_url,
      },
    });
  }, [data]);

  const routingToMusicDetail = ({ target }) => {
    if (target.id.indexOf("play-button") < 0) {
      router.push(`/detail?id=${data.song_id}`);
    }
  };

  React.useEffect(() => {
    music
      .getStreaming({ size: 1, page: 1, sort: 1, genre: 1 })
      .then((res) => {
        setData(res.data.songs[0]);
      })
      .catch(() => {
        return;
      });
  }, []);

  return (
    <S.RecommendMusicWrapper onClick={routingToMusicDetail}>
      {data && (
        <>
          <div className="img-cover content-box">
            <div className="cover-music-info">
              <div className="music-title">{data.title.slice(0, 17)}</div>
              <div className="artist-name">{data.artist}</div>
              <PlayBtn direction="right" callback={playMusic} />
            </div>
          </div>
          <img src={data.cover_url} />
        </>
      )}
    </S.RecommendMusicWrapper>
  );
}
