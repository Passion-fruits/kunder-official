import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import { ReactElement, useCallback } from "react";
import { toast } from "react-toastify";

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
              background: "rgb(50,50,50,0.5)",
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
