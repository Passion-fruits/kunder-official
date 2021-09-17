import * as S from "./styles";
import { HeartIcon, PlayIcon } from "../../assets";
import { COLOR } from "../../styles";
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
  created_at,
}: musicCardObject) {
  return (
    <S.Wrapper>
      <PlayIcon callback={() => {}} size={13} color={COLOR.black_text} />
      <img src={cover_url} className="cover-image" />
      <div className="music-information">
        <h1 id="noto">{title}</h1>
        <span id="noto">{artist}</span>
      </div>
      <div className="hashtag-container">
        <div>{genre}음악</div>
        <div>아침에</div>
        <div>{getDate(created_at)}</div>
      </div>
      <div className="heart-wrap">
        <HeartIcon size={16} callback={() => {}} />
        <span>{like}</span>
      </div>
    </S.Wrapper>
  );
}