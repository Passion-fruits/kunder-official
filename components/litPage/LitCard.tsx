import * as S from "./styles";
import HeartIcon from "./../../assets/heart";
import CommentIcon from "./../../assets/comment";
import PlayListAddIcon from "./../../assets/playListAdd";
import { musicCardObject } from "./../../lib/interfaces/music";
import { getDate } from "./../../lib/util/getDate";

interface props extends musicCardObject {
  nowIndex?: boolean;
}

export default function LitCard({
  nowIndex = false,
  artist,
  title,
  cover_url,
  like,
  mood = "느낌있는",
  created_at,
  genre,
  song_id,
  song_url,
}: props) {
  return (
    <S.LitCard>
      <div className="music-info-wrap" id={nowIndex ? "now-index-wrap" : ""}>
        <div className="square">
          <div className="cover-image-wrap">
            <div className="on-cover-info">
              <S.MusicSubInfoWrap>
                <div className="profile-wrap">
                  <img src="https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
                </div>
                <div className="tag-wrap">
                  <span>{genre}음악</span>
                  <span>{mood}</span>
                  <span>{getDate(created_at)}</span>
                </div>
                <button>전체듣기{" >"}</button>
              </S.MusicSubInfoWrap>
              <S.IconWrap>
                <button>
                  <HeartIcon size={30} callback={() => {}} color="white" />
                  {like}
                </button>
                <button>
                  <CommentIcon size={30} />
                  12
                </button>
                <button className="korean">
                  <PlayListAddIcon size={20} />
                  추가
                </button>
              </S.IconWrap>
            </div>
            <img src={cover_url} className="cover-img" />
          </div>
        </div>
        <h1 className="title">{title}</h1>
        <div className="description">
          제가 이번에 열심히 쓴 곡입니다. 재밌게 들어주세요!! 그리고 다음곡도
          기대해주세요~
        </div>
      </div>
    </S.LitCard>
  );
}
