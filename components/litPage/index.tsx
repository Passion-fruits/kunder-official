import LitCard from "./LitCard";
import * as S from "./styles";

export default function LitPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LitCardWrap>
          <LitCard />
          <LitCard />
          <LitCard nowIndex={true} />
          <LitCard />
          <LitCard />
        </S.LitCardWrap>
      </S.Container>
    </S.Wrapper>
  );
}
