import * as S from "./styles";
import { HeartIcon, PlayIcon } from "../../assets";
import { musicCardObject } from "../../lib/interfaces/music";
import { getDate } from "./../../lib/util/getDate";

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
  return (
    <S.Wrapper>
      <h3 className="index-num">{indexNum + 1}</h3>
      <img src={cover_url} className="cover-image" />
      <PlayIcon callback={() => {}} size={13} />
      <div className="music-information">
        <h1>{title}</h1>
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
