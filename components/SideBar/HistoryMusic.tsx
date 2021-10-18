import * as S from "./styles";
import { data2 } from "./../../lib/export/data";
import { useRouter } from "next/dist/client/router";
import PlayIcon from "./../../assets/play";
import { setValue } from "./../../lib/context/index";

export default function HistoryMusic() {
  const router = useRouter();
  const dispatch = setValue();
  return (
    <>
      <div className="line" />
      <h1 className="line-title">최근 들은 음악</h1>
      <S.HistoryMusicList>
        {data2.slice(0, 5).map((music, index) => (
          <div
            className="music-card-wrap"
            key={index}
            onClick={() => {
              dispatch({ type: "MUSIC_CHANGE", musicInformation: music });
            }}
          >
            <div className="cover-img-wrap">
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
