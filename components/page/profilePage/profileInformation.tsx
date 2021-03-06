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
            <span>?????????</span>
          </div>
          <div>
            <h3>{profileObj.following}</h3>
            <span>?????????</span>
          </div>
        </div>
        <div className="line" />
        <div className="musician">
          <h1>{profileObj.name}</h1>
          <span>?????????</span>
        </div>
        <p className="description">
          {profileObj.bio ? profileObj.bio : "????????? ????????????."}
        </p>
        <div className="snsContainer">
          <SnsButton
            snsLogo={<CircleFacebookIcon />}
            snsName="????????????"
            snsLink={profileObj.facebook}
          />
          <SnsButton
            snsLogo={<InstaIcon />}
            snsName="???????????????"
            snsLink={profileObj.insta}
          />
          <SnsButton
            snsLogo={<SoundCloudIcon />}
            snsName="????????? ????????????"
            snsLink={profileObj.soundcloud}
          />
          <SnsButton
            snsLogo={<YoutubeIcon />}
            snsName="?????????"
            snsLink={profileObj.youtube}
          />
        </div>
        <S.FlexContainer>
          {user_id === localStorage.getItem(USER_ID) ? (
            <button onClick={profileUpdate}>????????????</button>
          ) : (
            <>
              <button onClick={follow}>
                {isFollow ? "????????????" : "?????????"}
              </button>
              <button className="coinBtn" onClick={donation}>
                <CoinIcon size={23} /> ????????????
              </button>
            </>
          )}
          <div className="detail-contents">
            <div className="content">
              ?????????????????? <b>{profileObj.playlist_count}???</b>
            </div>
            <div className="circle" />
            <div className="content">
              ?????? <b>{profileObj.song_count}???</b>
            </div>
          </div>
        </S.FlexContainer>
      </S.InfoContainer>
    </S.ProfileInfoWrap>
  );
}
