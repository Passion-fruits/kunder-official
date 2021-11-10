import * as S from "./styles";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import LoginScreen from "./LoginScreen";
import UnLoginScreen from "./UnLoginScreen";
import { ACCESS_TOKEN } from "./../../../lib/export/localstorage";

export default function SideBar() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [router]);

  return <S.Wrapper>{isLogin ? <LoginScreen /> : <UnLoginScreen />}</S.Wrapper>;
}
