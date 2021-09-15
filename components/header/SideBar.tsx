import { SearchIcon } from "../../assets";
import * as S from "./styles";

export default function SideBar() {
  return (
    <S.MenuWrap>
      <SearchIcon />
      <button className="login-btn">로그인/가입</button>
    </S.MenuWrap>
  );
}
