import { HeartIcon, PlayIcon } from "../../assets";
import MusicRowCardList from "../MusicRowCardList";
import * as S from "./styles";
import { data } from "./../../lib/export/data";

export default function PlaylistPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.InforWrap>
          <img
            src="https://cdna.artstation.com/p/assets/images/images/029/031/880/medium/universegfx-juice-wrld-album-cover-behance-version.jpg?1596238538"
            className="cover-image"
          />
          <div className="infor-container">
            <div className="playlist-intro">
              <h5>플레이리스트</h5>
              <span>
                <b>300명</b>이 좋아합니다.
              </span>
            </div>
            <h1 className="playlist-title">밤에 듣기 좋은 노래</h1>
            <div className="playlist-sub-infor">
              <h3>
                만든사람 <b>김팔복</b>
              </h3>
              <div className="circle" />
              <h3>
                최초공개 <b>3일 전</b>
              </h3>
            </div>
            <div className="control-wrap">
              <button className="play-btn">
                <PlayIcon callback={() => {}} size={20} />
              </button>
              <HeartIcon callback={() => {}} size={35} color="white" />
            </div>
          </div>
        </S.InforWrap>
        <S.MusicListWrap>
          <MusicRowCardList musicList={data} />
        </S.MusicListWrap>
      </S.Container>
    </S.Wrapper>
  );
}
