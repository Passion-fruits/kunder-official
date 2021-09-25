import * as S from "./styles";
import { HeartIcon, PlayIcon } from "../../assets";
import { musicCardObject } from "../../lib/interfaces/music";
import { getDate } from "./../../lib/util/getDate";
import { useRouter } from "next/dist/client/router";
import { setValue } from "./../../lib/context/index";

export default function MusicRowCard({
  title,
  artist,
  cover_url,
  song_id,
  song_url,
  like,
  genre,
  indexNum,
  created_at,
}: musicCardObject) {
  const router = useRouter();
  const dispatch = setValue();

  const routingToDetail = (): void => {
    router.push(`/detail?id=${song_id}`);
  };

  const musicChange = (event) => {
    event.stopPropagation();
    dispatch({
      type: "MUSIC_CHANGE",
      musicInformation: {
        title: title,
        artist: artist,
        cover_url: cover_url,
        song_url: song_url,
        song_id: song_id,
      },
    });
  };

  return (
    <S.Wrapper>
      <h3 className="index-num">{indexNum + 1}</h3>
      <img src={cover_url} className="cover-image" />
      <PlayIcon callback={musicChange} size={13} />
      <div className="music-information">
        <h1 onClick={routingToDetail}>{title}</h1>
        <span id="noto">{artist}</span>
      </div>
      <div className="hashtag-container">
        <div className="tag"># {genre}음악</div>
        <div className="tag"># 아침에</div>
        <div className="tag">{getDate(created_at)}</div>
        <div className="heart-wrap">
          <HeartIcon size={18} callback={() => {}} />
          <span>{like}</span>
        </div>
      </div>
    </S.Wrapper>
  );
}
