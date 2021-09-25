import { SearchIcon } from "../../assets";
import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import React from "react";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER_ID,
} from "./../../lib/export/localstorage";
import { toast } from "react-toastify";
import Link from "./Link";

export default function SideBar() {
  const router = useRouter();
  const [isLogin, setIsLogin] = React.useState<boolean>();

  const logout = React.useCallback(() => {
    toast.success("로그아웃 되었습니다.");
    localStorage.setItem(ACCESS_TOKEN, "");
    localStorage.setItem(REFRESH_TOKEN, "");
    localStorage.setItem(USER_ID, "");
    setIsLogin(false);
    router.push("/");
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [router]);

  return (
    <S.MenuWrap>
      <SearchIcon />
      <Link menu="음악 업로드" route="/upload" />
      {isLogin ? (
        <div className="btn-container">
          <button className="login-btn" onClick={logout}>
            로그아웃
          </button>
          <button className="mypage-btn">내 정보</button>
          {/* 내 정보 나중에 프사로 수정 요함 */}
        </div>
      ) : (
        <button className="login-btn" onClick={() => router.push("/login")}>
          로그인/가입
        </button>
      )}
    </S.MenuWrap>
  );
}
