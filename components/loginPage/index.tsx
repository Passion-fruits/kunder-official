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
import { genreList } from "./../../lib/export/genre";
import Spiner from "../Spiner";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = React.useState<string>("");
  const [name, setName] = React.useState<string | string[]>("");
  const [genreArr, setGenreArr] = React.useState<any[]>([]);
  const [googleName, setGoogleName] = React.useState<string>("");
  const [img, setImg] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

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
        toast.success(`환영합니다 ${googleName}님`);
      })
      .catch(() => {
        toast.error("에러가 발생하였습니다.");
        router.push("/");
      });
  };

  const handleArtistName = (event): void => {
    setName(event.target.value);
  };

  const getCheckboxValue = (): void => {
    const query = 'input[name="genre"]:checked';
    const selectedEls = document.querySelectorAll(query);
    const arr = [];
    selectedEls.forEach((res) => {
      arr.push(res.id);
    });
    setGenreArr(arr);
  };

  const signUp = (): void => {
    if (!name) {
      toast.error("아티스트명을 적어주세요.");
      return;
    }
    if (genreArr.length === 0) {
      toast.error("선호 장르를 하나 이상 선택해주세요.");
      return;
    }
    if (genreArr.length > 3) {
      toast.info("장르는 최대 3개 선택 가능합니다.");
      return;
    }
    setLoading(true);
    auth
      .signUp({ name: name, email: email, genreArr: genreArr, img: img })
      .then((res) => {
        const data = res.data;
        localStorage.setItem(ACCESS_TOKEN, data.access_token);
        localStorage.setItem(REFRESH_TOKEN, data.refresh_token);
        localStorage.setItem(USER_ID, data.user_id);
        router.push("/");
        toast.success("축하합니다 회원가입 되었습니다!");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("에러가 발생하였습니다.");
        setLoading(false);
      });
  };

  return (
    <S.Wrapper>
      {email ? (
        <S.Container>
          <h1 className="title">LOGIN</h1>
          <p className="description">간편 로그인으로 쿤더를 만나보세요</p>
          <button className="login-button" id="focus">
            <FacebookIcon /> 페이스북으로 로그인
          </button>
          <GoogleBtn googleAuthEvent={googleAuthEvent} />
          <div className="line" />
          <span className="privacy-terms">개인정보 약관 보기</span>
        </S.Container>
      ) : (
        <S.Container>
          <h1 className="title">SIGN UP</h1>
          <S.InputWrap>
            <h3 className="input-title">아티스트명 (최대 10자)</h3>
            <input type="text" onChange={handleArtistName} id="focus" />
          </S.InputWrap>
          <S.InputWrap>
            <h3 className="input-title">선호 장르 (최대 3개)</h3>
            <S.GridContainer>
              {genreList.map((genre, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={genre}
                    name="genre"
                    onClick={getCheckboxValue}
                  />
                  <label htmlFor={genre}>{genre}</label>
                </div>
              ))}
            </S.GridContainer>
            {loading ? (
              <button className="loading-button">
                <Spiner size="30" />
              </button>
            ) : (
              <button onClick={signUp}>회원가입</button>
            )}
          </S.InputWrap>
        </S.Container>
      )}
    </S.Wrapper>
  );
}
