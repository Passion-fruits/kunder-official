import * as S from "./styles";
import CircleFacebookIcon from "./../../assets/circleFacebook";
import SoundCloudIcon from "./../../assets/soundCloud";
import { InstaIcon } from "../../assets";
import YoutubeIcon from "./../../assets/youtube";
import { profileObj } from "./../../lib/interfaces/profile";

interface props {
  profileObj: profileObj;
}

export default function ProfileInformation({ profileObj }: props) {
  return (
    <S.ProfileInfoWrap>
      <img src={profileObj.profile} className="cover-img" />
      <S.InfoContainer>
        <div className="followCntContainer">
          <div>
            <h3>{profileObj.follower}</h3>
            <span>팔로우</span>
          </div>
          <div>
            <h3>{profileObj.following}</h3>
            <span>팔로잉</span>
          </div>
        </div>
        <div className="line" />
        <div className="musician">
          <h1>{profileObj.name}</h1>
          <span>아티스트</span>
        </div>
        <p className="description">
          {profileObj.bio ? profileObj.bio : "설명이 없습니다."}
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
              노래 <b>6개</b>
            </div>
          </div>
        </S.FlexContainer>
      </S.InfoContainer>
    </S.ProfileInfoWrap>
  );
}
