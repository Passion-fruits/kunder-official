import * as S from "./styles";
import CircleFacebookIcon from "../../../assets/circleFacebook";
import SoundCloudIcon from "../../../assets/soundCloud";
import { CoinIcon, InstaIcon } from "../../../assets";
import YoutubeIcon from "../../../assets/youtube";
import { profileObj } from "../../../lib/interfaces/profile";
import SnsButton from "./SnsButton";
import React from "react";
import { useRouter } from "next/dist/client/router";
import profile from "../../../api/profile";
import { USER_ID } from "../../../lib/export/localstorage";
import { setValue } from "../../../lib/context/index";

interface props {
  profileObj: profileObj;
  getData(): void;
}

export default function ProfileInformation({ profileObj, getData }: props) {
  const [isFollow, setIsFollow] = React.useState<boolean>(false);
  const router = useRouter();
  const user_id = router.query.id;
  const dispatch = setValue();

  React.useEffect(() => {
    if (user_id) {
      profile
        .checkFollow(user_id)
        .then((res) => {
          if (res.data.is_follow) {
            setIsFollow(true);
          }
        })
        .catch(() => {
          return;
        });
    }
  }, [profileObj]);

  const follow = React.useCallback(() => {
    if (isFollow) {
      setIsFollow(false);
      profile
        .unFollow(user_id)
        .then(() => {
          getData();
        })
        .catch(() => {
          return;
        });
    } else {
      setIsFollow(true);
      profile
        .follow(user_id)
        .then(() => {
          getData();
        })
        .catch(() => {
          return;
        });
    }
  }, [profileObj, isFollow]);

  const profileUpdate = React.useCallback(() => {
    dispatch({
      type: "SET_MODAL",
      modal: "updateProfile",
    });
  }, []);

  const donation = React.useCallback(() => {
    dispatch({
      type: "SET_MODAL",
      modal: "donation",
    });
  }, []);

  return (
    <S.ProfileInfoWrap>
      <img src={profileObj.profile} className="cover-img" />
      <S.InfoContainer>
        <div className="followCntContainer">
          <div>
            <h3>{profileObj.follower}</h3>
            <span>팔로워</span>
          </div>
          <div>
            <h3>{profileObj.following}</h3>
            <span>팔로잉</span>
          </div>
        </div>
        <div className="line" />
        <div className="musician">
          <h1>{profileObj.name}</h1>
          <span>프로필</span>
        </div>
        <p className="description">
          {profileObj.bio ? profileObj.bio : "설명이 없습니다."}
        </p>
        <div className="snsContainer">
          <SnsButton
            snsLogo={<CircleFacebookIcon />}
            snsName="페이스북"
            snsLink={profileObj.facebook}
          />
          <SnsButton
            snsLogo={<InstaIcon />}
            snsName="인스타그램"
            snsLink={profileObj.insta}
          />
          <SnsButton
            snsLogo={<SoundCloudIcon />}
            snsName="사운드 클라우드"
            snsLink={profileObj.soundcloud}
          />
          <SnsButton
            snsLogo={<YoutubeIcon />}
            snsName="유튜브"
            snsLink={profileObj.youtube}
          />
        </div>
        <S.FlexContainer>
          {user_id === localStorage.getItem(USER_ID) ? (
            <button onClick={profileUpdate}>정보수정</button>
          ) : (
            <>
              <button onClick={follow}>
                {isFollow ? "언팔로우" : "팔로우"}
              </button>
              <button className="coinBtn" onClick={donation}>
                <CoinIcon size={23} /> 후원하기
              </button>
            </>
          )}
          <div className="detail-contents">
            <div className="content">
              플레이리스트 <b>{profileObj.playlist_count}개</b>
            </div>
            <div className="circle" />
            <div className="content">
              노래 <b>{profileObj.song_count}개</b>
            </div>
          </div>
        </S.FlexContainer>
      </S.InfoContainer>
    </S.ProfileInfoWrap>
  );
}
