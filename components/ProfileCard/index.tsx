import { SongIcon, PeopleIcon } from "../../assets";
import * as S from "./styles";

export default function ProfileCard() {
  return (
    <S.Wrapper>
      <img
        src="https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        className="profile-image"
      />
      <div className="infor-wrap">
        <div className="line" />
        <h1 className="name">정지원</h1>
        <div className="music-follow-cnt">
          <div>
            <SongIcon />
            12
          </div>
          <div>
            <PeopleIcon />
            12
          </div>
        </div>
      </div>
    </S.Wrapper>
  );
}
