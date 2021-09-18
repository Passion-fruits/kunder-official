import { FacebookIcon } from "../../assets";
import GoogleBtn from "./googleBtn";
import * as S from "./styles";
import React from "react";
import { useRouter } from "next/dist/client/router";
import auth from "../../api/auth";
import { toast } from "react-toastify";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER_ID,
} from "./../../lib/export/localstorage";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState<string>("");
  const [name, setName] = React.useState<string | string[]>("");
  const [genreArr, setGenreArr] = React.useState<any[]>([]);
  const [googleName, setGoogleName] = React.useState<string>("");
  const [img, setImg] = React.useState<string>("");

  const googleAuthEvent = (event): void => {
    setImg(event.profileObj.imageUrl);
    setGoogleName(event.profileObj.name);
    const token = event.tokenId;
    auth
      .googleLogin(token)
      .then((res) => {
        const data = res.data;
        if (!res.data.isFresh) {
          localStorage.setItem(ACCESS_TOKEN, data.access_token);
          localStorage.setItem(REFRESH_TOKEN, data.refresh_token);
          localStorage.setItem(USER_ID, data.user_id);
          toast.success("로그인 되었습니다.");
          router.push("/");
          return;
        }
        const email: string = res.data.email;
        setEmail(email);
        toast.success(`환영합니다 ${email.split("@", 1)}님`);
      })
      .catch(() => {
        toast.error("에러가 발생하였습니다.");
        router.push("/");
      });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <h1 className="login">로그인</h1>
        <p className="description">간편 로그인으로 쿤더를 만나보세요</p>
        <button className="login-button" id="focus">
          <FacebookIcon /> 페이스북으로 로그인
        </button>
        <GoogleBtn googleAuthEvent={googleAuthEvent} />
        <div className="line" />
        <span className="privacy-terms">개인정보 약관 보기</span>
      </S.Container>
    </S.Wrapper>
  );
}
