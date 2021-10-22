import * as S from "./styles";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { USER_ID } from "../../../lib/export/localstorage";
import LoginScreen from "./LoginScreen";
import UnLoginScreen from "./UnLoginScreen";

export default function SideBar() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem(USER_ID)) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [router]);

  return <S.Wrapper>{isLogin ? <LoginScreen /> : <UnLoginScreen />}</S.Wrapper>;
}
