import { SongIcon, PeopleIcon } from "../../../assets";
import * as S from "./styles";
import { profileCard } from "../../../lib/interfaces/profile";
import { useRouter } from "next/dist/client/router";
import React from "react";

export default function ProfileCard({
  image_path,
  name,
  follower,
  id,
}: profileCard) {
  const router = useRouter();
  const [profileImg, setProfileImg] = React.useState<string>("/profile.png");
  React.useEffect(() => {
    const img = new Image();
    img.src = image_path;
    img.onload = () => {
      image_path && setProfileImg(image_path);
    };
  }, [image_path]);
  return (
    <S.Wrapper>
      <S.ResponsiveWrap>
        <div
          className="img-wrap"
          onClick={() => router.push(`/profile?id=${id}&menu=song`)}
        >
          <img src={profileImg} className="profile-image" />
        </div>
      </S.ResponsiveWrap>
      <div className="infor-wrap">
        <div className="line" />
        <h1 className="name">{name}</h1>
        <div className="music-follow-cnt">
          <div>
            <SongIcon />
            12
          </div>
          <div>
            <PeopleIcon />
            {follower}
          </div>
        </div>
      </div>
    </S.Wrapper>
  );
}
