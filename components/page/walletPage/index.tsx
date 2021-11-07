import MyKdtCard from "./MyKdtCard";
import * as S from "./styles";
import KdtDescription from "./KdtDescription";

export default function WalletPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.FlexWrap>
          <MyKdtCard />
          <KdtDescription />
        </S.FlexWrap>
      </S.Container>
    </S.Wrapper>
  );
}
