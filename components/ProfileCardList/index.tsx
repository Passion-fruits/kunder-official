import { LIST_WRAPPER } from "./../../styles/index";
import { profileCard } from "./../../lib/interfaces/profile";
import ProfileCard from "../ProfileCard";

interface props {
  profileList: profileCard[];
}

export default function ProfileCardList({ profileList }: props) {
  return (
    <LIST_WRAPPER>
      {profileList.map((profile, index) => (
        <ProfileCard
          name={profile.name}
          id={profile.id}
          image_path={profile.image_path}
          follower={profile.follower}
          key={index}
        />
      ))}
    </LIST_WRAPPER>
  );
}
