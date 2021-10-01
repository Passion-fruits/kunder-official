import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import React from "react";
import profile from "../../../api/profile";
import { profileObj } from "../../../lib/interfaces/profile";
import { setValue } from "../../../lib/context/index";
import { toast } from "react-toastify";
import { getFileData } from "../../../lib/util/getFileData";

export default function PrfoileUpdateModal() {
  const [profileObj, setProfileObj] = React.useState<profileObj>();
  const router = useRouter();
  const dispatch = setValue();

  const handleInput = ({ target }) => {
    setProfileObj({
      ...profileObj,
      [target.name]: target.value,
    });
  };

  const updateProfile = () => {
    if (profileObj.name === "") {
      toast.info("아티스트명을 입력하세요.");
      return;
    }
    profile
      .updateProfile(profileObj)
      .then(() => {
        toast.success("정보가 수정되었습니다.");
        dispatch({
          type: "SET_MODAL",
          modal: null,
        });
      })
      .catch(() => {
        toast.error("에러가 발생하였습니다.");
      });
  };

  const setUserProfile = (event) => {
    getFileData(event).then((res) => {
      setProfileObj({
        ...profileObj,
        profile: res.preview,
      });
      profile
        .updateProfileImg(res.file)
        .then(() => {
          toast.success("사진이 변경되었습니다.");
        })
        .catch(() => {
          toast.error("에러가 발생하였습니다.");
        });
    });
  };

  React.useEffect(() => {
    profile
      .getUserProfile(router.query.id)
      .then((res) => {
        setProfileObj(res.data);
      })
      .catch(() => {
        return;
      });
  }, []);

  return (
    <S.Wrapper className="scroll-container">
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        id="profile-cover-input"
        onChange={setUserProfile}
      />
      <h1 className="title">프로필 정보 수정</h1>
      {profileObj && (
        <>
          <label htmlFor="profile-cover-input">
            <img className="cover-image" src={profileObj.profile} />
          </label>
          <input
            type="text"
            placeholder="아티스트명"
            defaultValue={profileObj.name}
            name="name"
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="자기소개"
            defaultValue={profileObj.bio}
            name="bio"
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="페이스북 링크"
            defaultValue={profileObj.facebook}
            name="facebook"
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="인스타그램 링크"
            defaultValue={profileObj.insta}
            name="insta"
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="사운드클라우드 링크"
            defaultValue={profileObj.soundcloud}
            name="soundcloud"
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="유튜브 링크"
            defaultValue={profileObj.youtube}
            name="youtube"
            onChange={handleInput}
          />
        </>
      )}
      <button className="sub-btn" onClick={updateProfile}>
        정보 수정
      </button>
    </S.Wrapper>
  );
}
