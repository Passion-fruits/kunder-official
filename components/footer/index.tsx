import Menu from "./menu";
import * as S from "./styles";

export default function Footer() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.MenuWrap>
          <Menu
            title="MADE BY"
            contents={[
              "jidole02",
              "yunjunsick",
              "sonchaegeon",
              "sungyein",
              "younsang",
            ]}
          />
          <Menu
            title="E-MAIL"
            contents={["kunder@naver.com", "kunder@gmail.com"]}
          />
          <Menu
            title="LOCATION"
            contents={["Daejeon", "Seoul", "DSM Highschool"]}
          />
          <Menu
            title="COMPANY"
            contents={["Kunder", "passion-fruit", "GGM"]}
          />
        </S.MenuWrap>
      </S.Container>
    </S.Wrapper>
  );
}
