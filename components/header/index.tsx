import { useRouter } from "next/dist/client/router";
import { toast } from "react-toastify";
import { SearchIcon } from "../../assets/index";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER_ID,
} from "./../../lib/export/localstorage";
import * as S from "./styled";
import React from "react";
import profile from "../../api/profile";

export default function Header() {
  const router = useRouter();
  const [isLogin, setIsLogin] = React.useState<boolean>();

  const routing = React.useCallback((path) => {
    router.push(`/${path}`);
  }, []);

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

  React.useEffect(() => {
    profile
      .checkFollow(1000)
      .then(() => {
        setIsLogin(true);
      })
      .catch(() => {
        setIsLogin(false);
        return;
      });
  }, []);

  return (
    <S.Wrapper>
      <S.Cotainer>
        <S.LEFT_SIDE>
          <img onClick={() => routing("")} src="/kunder-logo.png" />
          <span onClick={() => routing("all?genre=1&sort=1&page=1")}>
            전체보기
          </span>
          <span onClick={() => routing("feed?genre=1&sort=1")}>피드</span>
          <span onClick={() => routing("upload")}>음악업로드</span>
        </S.LEFT_SIDE>
        <S.RIGHT_SIDE>
          <div>
            <SearchIcon />
            <input type="text" placeholder="검색어를 입력하세요." />
          </div>
          {isLogin ? (
            <>
              <button onClick={logout}>로그아웃</button>
              <button
                onClick={() =>
                  routing(`profile?id=${localStorage.getItem(USER_ID)}`)
                }
              >
                마이페이지
              </button>
            </>
          ) : (
            <button
              style={{ padding: "8px 24px" }}
              onClick={() => routing("login")}
            >
              로그인
            </button>
          )}
        </S.RIGHT_SIDE>
      </S.Cotainer>
    </S.Wrapper>
  );
}
