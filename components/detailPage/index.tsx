import * as S from "./styles";
import MusicInformation from "./MusicInformation";
import ControlMusic from "./ControlMusic";
import SimilarMusic from "./SimilarMusic";
import Comment from "./Comment";

export default function DetailPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <MusicInformation />
        <ControlMusic />
        <Comment />
        <SimilarMusic />
      </S.Container>
    </S.Wrapper>
  );
}
