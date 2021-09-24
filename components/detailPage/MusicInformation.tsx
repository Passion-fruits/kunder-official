import * as S from "./styles";
import PlayIcon from "./../../assets/play";
import DateIcon from "./../../assets/date";
import { InforIcon } from "../../assets";

export default function MusicInformation() {
  return (
    <S.InforWrap>
      <img
        src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"
        className="cover-image"
      />
      <div className="infor-container">
        <div className="title-wrap">
          <button>
            <PlayIcon size={12} callback={() => {}} />
          </button>
          <h1>Best day ever</h1>
        </div>
        <div className="musician">
          <span>Music by</span>
          <h5>김팔복</h5>
        </div>
        <div className="sub-info">
          <div>
            <DateIcon />
            <span>3일 전</span>
          </div>
          <div>
            <InforIcon />
            <span>싱글음악</span>
          </div>
        </div>
        <div className="tag-wrap">
          <div>#힙합음악</div>
          <div>#아침에</div>
        </div>
        <div className="description">
          이 노래는 제가 열심히 써본 노래입니다. 재밌게 들어주세요 ㅎㅎㅎ 이
          곡은 정말 최고에요 ㅎㅎ 알고 계시져??이 노래는 제가 열심히 써본
          노래입니다. 재밌게
        </div>
      </div>
    </S.InforWrap>
  );
}
