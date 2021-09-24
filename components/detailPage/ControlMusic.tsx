import { HeartIcon } from "../../assets";
import * as S from "./styles";
import { COLOR } from "./../../styles/index";
import PlayListAddIcon from "./../../assets/playListAdd";

export default function ControlMusic() {
  return (
    <S.ControlMusicContainer>
      <div className="btn-container">
        <button>
          <HeartIcon size={18} callback={() => {}} color={COLOR.gray_text} />
          12
        </button>
        <button>
          <PlayListAddIcon /> 추가
        </button>
      </div>
      <input type="text" placeholder="댓글을 작성하여 의견을 남겨주세요" />
    </S.ControlMusicContainer>
  );
}
