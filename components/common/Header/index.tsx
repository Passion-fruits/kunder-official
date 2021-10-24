import * as S from "./styles";
import SideBar from "./SideBar";

export default function Header() {
  return (
    <S.Wrapper>
      <S.Container>
        <SideBar />
      </S.Container>
    </S.Wrapper>
  );
}
