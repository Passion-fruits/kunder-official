import LitCard from "./LitCard";
import * as S from "./styles";
import React from "react";

export default function LitPage() {
  const [indexNum, setIndexNum] = React.useState<number>(0);
  const arr = [1, 2, 3, 4, 5];
  const nextPage = () => {
    setIndexNum(indexNum + 1);
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.Button onClick={nextPage}>버튼</S.Button>
        <S.LitCardWrap indexNum={indexNum}>
          {arr.map((e, index) => (
            <LitCard nowIndex={index === indexNum} key={index} />
          ))}
        </S.LitCardWrap>
      </S.Container>
    </S.Wrapper>
  );
}
