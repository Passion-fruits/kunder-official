import * as S from "./styles";
import { HeartIcon, PlayIcon } from "../../assets";
import { COLOR } from "../../styles";

export default function MusicRowCard() {
  return (
    <S.Wrapper>
      <PlayIcon callback={() => {}} size={13} color={COLOR.black_text} />
      <img
        src="https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        className="cover-image"
      />
      <div className="music-information">
        <h1 id="noto">너의 이름은</h1>
        <span id="noto">정지원</span>
      </div>
      <div className="hashtag-container">
        <div>힙합음악</div>
        <div>아침에</div>
        <div>2015년 1월 22일</div>
      </div>
      <div className="heart-wrap">
        <HeartIcon size={16} callback={() => {}} />
        <span>13</span>
      </div>
    </S.Wrapper>
  );
}
