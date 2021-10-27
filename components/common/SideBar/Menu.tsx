import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import { ReactElement, useCallback } from "react";
import { toast } from "react-toastify";
import { COLOR } from "./../../../styles/index";

interface Props {
  content: string;
  route: string;
  svg: ReactElement;
}

export default function Menu({ content, route, svg }: Props) {
  const router = useRouter();

  const routing = useCallback(() => {
    if (route === "/chart") {
      toast.info("아직 개발중입니다!");
      return;
    }
    router.push(route);
  }, []);

  return (
    <S.Menu
      style={
        router.pathname === route
          ? {
              background: COLOR.black_subBackground,
            }
          : {}
      }
      onClick={routing}
    >
      {svg}
      {content}
    </S.Menu>
  );
}
