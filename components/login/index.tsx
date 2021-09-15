import FacebookIcon from "../../assets/facebook";
import * as S from "./loginStyles";
import auth from "../../api/auth";
import GoogleBtn from "./googleBtn";
import { useState } from "react";
import { toast } from "react-toastify";
import { genreList } from "./../../lib/export/genre";
import { useRouter } from "next/dist/client/router";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER_ID,
} from "./../../lib/export/localstorage";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string | string[]>("");
  const [genreArr, setGenreArr] = useState<any[]>([]);
  const [googleName, setGoogleName] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const googleAuth = (event): void => {
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
      .catch((err) => {
        toast.error("에러가 발생하였습니다.");
        router.push("/");
      });
  };
  const handleInput = (event): void => {
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
  const subData = (): void => {
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
    console.log(img, genreArr, email, name);
    auth
      .signUp({ name: name, email: email, genreArr: genreArr, img: img })
      .then((res) => {
        const data = res.data;
        localStorage.setItem(ACCESS_TOKEN, data.access_token);
        localStorage.setItem(REFRESH_TOKEN, data.refresh_token);
        localStorage.setItem(USER_ID, data.user_id);
        router.push("/");
        toast.success("축하합니다 회원가입 되었습니다!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("에러가 발생하였습니다.");
      });
  };
  return (
    <S.Wrapper>
      {!email ? (
        <>
          <S.Container>
            <h1>LOGIN</h1>
            <p>간편 로그인으로 쿤더를 만나보세요</p>
            <GoogleBtn googleAuth={googleAuth} />
            <div>
              <FacebookIcon />
              페이스북으로 로그인
            </div>
            <span style={{ textDecoration: "underline" }}>
              개인정보 정책 확인
            </span>
            <p>
              이전 로그인 내역이 있으면 자동 로그인됩니다.
              <br />
              그렇지 않은 경우 회원가입 페이지로 넘어갑니다.
            </p>
          </S.Container>
        </>
      ) : (
        <>
          <S.SignUpContainer>
            <h1>SIGN UP</h1>
            <p>{googleName}님의 가입을 환영합니다.</p>
            <input
              type="text"
              placeholder="사용할 아티스트명을 입력해주세요."
              value={name}
              onChange={handleInput}
            />
            <p>선호하는 장르를 선택해주세요. (최대 3개)</p>
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
            <button onClick={subData}>가입하기</button>
          </S.SignUpContainer>
        </>
      )}
    </S.Wrapper>
  );
}
