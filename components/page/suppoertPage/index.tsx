import * as S from "./styles";
import SupportCard from "./SupportCard";

/* 
상태 1 : 후원 하고 답장 안옴
상태 2 : 후원 하고 답장 옴
상태 3 : 후원 온거 답장 안함
상태 4 : 후원 온거 답장 함
*/

export default function SupportPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <h1 className="title">후원 내역</h1>
        <p className="description">후원받은 기록, 후원한 기록을 표시합니다.</p>
        <S.ListWrapper>
          <SupportCard type={1} />
          <SupportCard type={2} />
          <SupportCard type={3} />
          <SupportCard type={4} />
        </S.ListWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
