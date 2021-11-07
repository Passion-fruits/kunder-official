import MyKdtCard from "./MyKdtCard";
import * as S from "./styles";

export default function WalletPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.FlexWrap>
          <MyKdtCard />
          <S.KdtDescriptionWrap></S.KdtDescriptionWrap>
        </S.FlexWrap>
      </S.Container>
    </S.Wrapper>
  );
}
