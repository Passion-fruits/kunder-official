import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import React from "react";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER_ID,
} from "../../lib/export/localstorage";
import Link from "./Link";
import profile from "../../api/profile";
import { COLOR } from "../../styles/index";
import SearchBar from "./SearchBar";

export default function SideBar() {
  const router = useRouter();
  const [isLogin, setIsLogin] = React.useState<boolean>();
  const [profileImg, setProfileImg] = React.useState<string>(null);

  const logout = React.useCallback(() => {
    setProfileImg(null);
    localStorage.setItem(ACCESS_TOKEN, "");
    localStorage.setItem(REFRESH_TOKEN, "");
    localStorage.setItem(USER_ID, "");
    setIsLogin(false);
    router.push("/");
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      setIsLogin(true);
      if (!profileImg) {
        profile
          .getUserProfile(localStorage.getItem(USER_ID))
          .then((res) => {
            setProfileImg(res.data.profile);
          })
          .catch(() => {
            return;
          });
      }
    } else {
      setIsLogin(false);
    }
  }, [router]);

  return (
    <S.MenuWrap>
      <SearchBar />
      <Link menu="음악 업로드" route="upload" color={COLOR.green_subMain} />
      {isLogin ? (
        <div className="btn-container">
          <button className="login-btn" onClick={logout}>
            로그아웃
          </button>
          <img
            onClick={() =>
              router.push(`/profile?id=${localStorage.getItem(USER_ID)}`)
            }
            className="mypage-btn"
            src={profileImg}
          />
        </div>
      ) : (
        <button className="login-btn" onClick={() => router.push("/login")}>
          로그인/가입
        </button>
      )}
    </S.MenuWrap>
  );
}
