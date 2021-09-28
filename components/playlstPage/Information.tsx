import { HeartIcon, PlayIcon } from "../../assets";
import { playlistInfor } from "../../lib/interfaces/playlist";
import * as S from "./styles";
import { getDate } from "./../../lib/util/getDate";

export default function PlaylistInformation({
  name,
  author,
  like,
  cover_url,
  playlist_id,
  created_at,
}: playlistInfor) {
  return (
    <S.InforWrap>
      <img
        src={cover_url ? cover_url : "/playlist.png"}
        className="cover-image"
      />
      <div className="infor-container">
        <div className="playlist-intro">
          <h5>플레이리스트</h5>
          <span>
            <b>{like}명</b>이 좋아합니다.
          </span>
        </div>
        <h1 className="playlist-title">{name}</h1>
        <div className="playlist-sub-infor">
          <h3>
            만든사람 <b>{author}</b>
          </h3>
          <div className="circle" />
          <h3>
            최초공개 <b>{getDate(created_at)}</b>
          </h3>
        </div>
        <div className="control-wrap">
          <button className="play-btn">
            <PlayIcon callback={() => {}} size={20} />
          </button>
          <HeartIcon callback={() => {}} size={35} color="white" />
        </div>
      </div>
    </S.InforWrap>
  );
}
