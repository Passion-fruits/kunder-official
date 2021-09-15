import Menu from "./Menu";
import * as S from "./styles";
import SideBar from "./SideBar";

export default function Header() {
  return (
    <S.Wrapper>
      <S.Container>
        <Menu />
        <SideBar />
      </S.Container>
    </S.Wrapper>
  );
}
