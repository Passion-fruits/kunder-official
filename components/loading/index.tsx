import * as S from "./styles";

export default function LoadingPage() {
  return (
    <S.Wrapper>
      <S.Circle>
        <S.BorderCircle />
        <S.BorderCircle className="active" />
      </S.Circle>
    </S.Wrapper>
  );
}
