import MyKdtCard from "./MyKdtCard";
import * as S from "./styles";
import KdtDescription from "./KdtDescription";
import KdtHistory from "./kdtHistory";

export default function WalletPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.FlexWrap>
          <MyKdtCard />
          <KdtDescription />
        </S.FlexWrap>
        <KdtHistory />
      </S.Container>
    </S.Wrapper>
  );
}
