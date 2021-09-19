import { SearchIcon } from "../../assets";
import * as S from "./styles";
import { useRouter } from "next/dist/client/router";

export default function SideBar() {
  const router = useRouter();
  return (
    <S.MenuWrap>
      <SearchIcon />
      <button className="login-btn" onClick={() => router.push("/login")}>
        로그인/가입
      </button>
    </S.MenuWrap>
  );
}
