import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import React, { MouseEvent } from "react";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER_ID,
} from "../../../lib/export/localstorage";
import Link from "next/link";
import profile from "../../../api/profile";
import SearchBar from "./SearchBar";

export default function SideBar() {
  const router = useRouter();
  const [isLogin, setIsLogin] = React.useState<boolean>();
  const [profileImg, setProfileImg] = React.useState<string>(null);
  const [isProfileModal, setIsProfileModal] = React.useState<boolean>(false);

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

  React.useEffect(() => {
    window.addEventListener("click", (event: any) => {
      if (event.target.id === "header_profile_img") {
        setIsProfileModal(true);
      } else {
        setIsProfileModal(false);
      }
    });
  }, []);

  return (
    <S.MenuWrap>
      <SearchBar />
      {isLogin ? (
        <S.ProfileContainer>
          <img
            className="mypage-btn"
            id="header_profile_img"
            src={profileImg}
          />
          {isProfileModal && (
            <S.ProfileMenu>
              <Link href={`/profile?id=${localStorage.getItem(USER_ID)}`}>
                <button>내 프로필</button>
              </Link>
              <Link href={`/wallet`}>
                <button>내 지갑</button>
              </Link>
              <Link href={`/support`}>
                <button>후원 내역</button>
              </Link>
              <Link href={`/upload`}>
                <button>음악 업로드</button>
              </Link>
              <button onClick={logout}>로그아웃</button>
            </S.ProfileMenu>
          )}
        </S.ProfileContainer>
      ) : (
        <button className="login-btn" onClick={() => router.push("/login")}>
          로그인/가입
        </button>
      )}
    </S.MenuWrap>
  );
}
