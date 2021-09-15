import { HeartIcon, PlayIcon } from "../../assets";
import * as S from "./styles";

export default function MusicCard() {
  return (
    <S.Wrapper>
      <div className="cover-image-wrap">
        <div className="cover">
          <S.PlayBtn>
            <PlayIcon size={16} color="white" callback={() => {}} />
          </S.PlayBtn>
        </div>
        <img src="/cover.jpg" />
      </div>
      <h1 className="music-title">나를 찾아줘</h1>
      <h3 className="musician-name">jungjiwon</h3>
      <S.IconWrap>
        <div className="wrap">
          <HeartIcon size={13} callback={() => {}} />
          <span>13</span>
        </div>
      </S.IconWrap>
    </S.Wrapper>
  );
}
