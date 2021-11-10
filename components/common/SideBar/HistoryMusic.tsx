import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import PlayIcon from "../../../assets/play";
import { setValue } from "../../../lib/context/index";
import { useEffect, useState } from "react";
import music from "../../../api/music";
import { musicCardObject } from "./../../../lib/interfaces/music";

export default function HistoryMusic() {
  const router = useRouter();
  const dispatch = setValue();
  const [musicList, setMusicList] = useState<musicCardObject[]>([]);

  useEffect(() => {
    if (musicList.length === 0) {
      music
        .getHistoryMusic({ page: 1, size: 5 })
        .then((res) => {
          setMusicList(res.data.song);
        })
        .catch(() => {
          return;
        });
    }
  }, [router]);
  return (
    <>
      <div className="line" />
      <h1 className="line-title">최근 들은 음악</h1>
      <S.HistoryMusicList>
        {musicList.map((music, index) => (
          <div className="music-card-wrap" key={index}>
            <div
              className="cover-img-wrap"
              onClick={() => {
                dispatch({ type: "MUSIC_CHANGE", musicInformation: music });
              }}
            >
              <div className="cover">
                <PlayIcon size={12} callback={() => {}} />
              </div>
              <img src={music.cover_url} />
            </div>
            <div className="info-wrap">
              <h1
                className="text-overflow"
                onClick={() => router.push(`/detail?id=${music.song_id}`)}
              >
                {music.title}
              </h1>
              <span>{music.artist}</span>
            </div>
          </div>
        ))}
      </S.HistoryMusicList>
    </>
  );
}
