import { SongIcon, PeopleIcon } from "../../assets";
import * as S from "./styles";
import { profileCard } from "./../../lib/interfaces/profile";
import { useRouter } from "next/dist/client/router";

export default function ProfileCard({
  image_path,
  name,
  follower,
  id,
}: profileCard) {
  const router = useRouter();
  return (
    <S.Wrapper>
      <div
        className="img-wrap"
        onClick={() => router.push(`/profile?id=${id}`)}
      >
        <img src={image_path} className="profile-image" />
      </div>
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
