import * as S from "./styles";
import CircleFacebookIcon from "./../../assets/circleFacebook";
import SoundCloudIcon from "./../../assets/soundCloud";
import { InstaIcon } from "../../assets";
import YoutubeIcon from "./../../assets/youtube";

export default function ProfileInformation() {
  return (
    <S.ProfileInfoWrap>
      <img
        src="https://post-phinf.pstatic.net/MjAxODEwMDRfOTQg/MDAxNTM4NjM2NDE2NTkw.ov_S7LvCf5MOA3jLSl_jitRkvE_eMkPw1hIfJtEM3iMg.bflQxJOt15oi2RUbZpCKLgKIFb6N8aIZ2-Zz4hTrFCwg.JPEG/%EA%B5%90%ED%8F%AC%EB%9E%98%ED%8D%BC_1.jpg?type=w1200"
        className="cover-img"
      />
      <S.InfoContainer>
        <div className="followCntContainer">
          <div>
            <h3>10</h3>
            <span>팔로우</span>
          </div>
          <div>
            <h3>10</h3>
            <span>팔로잉</span>
          </div>
        </div>
        <div className="line" />
        <div className="musician">
          <h1>김팔복</h1>
          <span>아티스트</span>
        </div>
        <p className="description">
          내 이름은 김팔복내 이름은 김팔복내 이름은 김팔복내 이름은 김팔복내
          이름은 김팔복내 이름은 김팔복내 이름은 김팔복내 이름은 김팔복내 이름은
          김팔복
        </p>
        <div className="snsContainer">
          <button>
            <CircleFacebookIcon />
            페이스북
          </button>
          <button>
            <SoundCloudIcon />
            사운드 클라우드
          </button>
          <button>
            <InstaIcon />
            인스타그램
          </button>
          <button>
            <YoutubeIcon />
            유튜브
          </button>
        </div>
        <S.FlexContainer>
          <button className="follow-btn">팔로우하기</button>
          <div className="detail-contents">
            <div className="content">
              플레이리스트 <b>6개</b>
            </div>
            <div className="circle" />
            <div className="content">
              플레이리스트 <b>6개</b>
            </div>
          </div>
        </S.FlexContainer>
      </S.InfoContainer>
    </S.ProfileInfoWrap>
  );
}
