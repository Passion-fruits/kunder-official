import * as S from "./styles";
import HeartIcon from "./../../assets/heart";
import CommentIcon from "./../../assets/comment";
import PlayListAddIcon from "./../../assets/playListAdd";

interface props {
  nowIndex?: boolean;
}

export default function LitCard({ nowIndex = false }: props) {
  return (
    <S.LitCard>
      <div
        className="music-info-wrap"
        style={nowIndex ? { width: "550px", opacity: "1" } : {}}
      >
        <div className="square">
          <div className="cover-image-wrap">
            <div className="on-cover-info">
              <S.MusicSubInfoWrap>
                <div className="profile-wrap">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1607362705516-R5Q22H4FVIVPNMW8OWD7/SamSpratt_KidCudi_ManOnTheMoon3_AlbumCover_Web.jpg?format=1500w"
                    alt=""
                  />
                </div>
                <div className="tag-wrap">
                  <span>힙합음악</span>
                  <span>느낌있는</span>
                  <span>2주 전</span>
                </div>
                <button>전체듣기{" >"}</button>
              </S.MusicSubInfoWrap>
              <S.IconWrap>
                <button>
                  <HeartIcon size={30} callback={() => {}} color="white" />
                  12
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
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
              className="cover-img"
              alt=""
            />
          </div>
        </div>
        <h1 className="title">Nikes on my feet</h1>
        <div className="description">
          제가 이번에 열심히 쓴 곡입니다. 재밌게 들어주세요!! 그리고 다음곡도
          기대해주세요~
        </div>
      </div>
    </S.LitCard>
  );
}
