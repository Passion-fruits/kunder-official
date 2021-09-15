import MainTopContainer from "./mainTopContainer";
import * as S from "./styles";
import ThemaCardList from "./themaCardList";
import React from "react";

export default function MainPage() {
  const randArr: number[] = [];
  const [randArrState, setRandArrState] = React.useState<number[]>([]);
  const themaArr = [
    {
      title: "나를 힙하게 만드는 음악, 힙합",
      genre: "힙합",
    },
    {
      title: "밤과 함께 들어요, 재즈",
      genre: "재즈",
    },
    {
      title: "오늘을 설레게 할 팝 음악",
      genre: "팝",
    },
    {
      title: "감성을 복돋는 음악, 클래식",
      genre: "클래식",
    },
    {
      title: "정처 없이 즐길 때, 레게",
      genre: "레게",
    },
    {
      title: "미친듯이 즐길 때 록 음악",
      genre: "록",
    },
    {
      title: "korean pop snog, k-pop",
      genre: "k-pop",
    },
    {
      title: "그 시절로 돌아가봐요, 트로트",
      genre: "트로트",
    },
    {
      title: "같이 춤추실래요? 댄스 음악",
      genre: "댄스",
    },
    {
      title: "다른 장르의 음악을 만나보세요!",
      genre: "기타",
    },
  ];

  const rand = (min, max) => {
    let isSame = false;
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    randArr.forEach((item) => {
      if (item === randNum) {
        isSame = true;
      }
    });
    !isSame && randArr.push(randNum);
  };

  React.useEffect(() => {
    while (randArr.length < 7) {
      rand(0, themaArr.length - 1);
      setRandArrState(randArr);
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <MainTopContainer />
        {randArrState.map((item, index) => {
          return (
            <ThemaCardList
              key={index}
              title={themaArr[item].title}
              genre={themaArr[item].genre}
            />
          );
        })}
      </S.Container>
    </S.Wrapper>
  );
}
