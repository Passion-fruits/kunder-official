import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import { ReactElement } from "react";
import { COLOR } from "./../../../styles/index";

interface Props {
  content: string;
  route: string;
  svg: ReactElement;
}

export default function Menu({ content, route, svg }: Props) {
  const router = useRouter();
  return (
    <S.Menu
      style={
        router.pathname === route
          ? {
              borderRight: `3px solid ${COLOR.green_main}`,
            }
          : {}
      }
      onClick={() => router.push(route)}
    >
      {svg}
      {content}
    </S.Menu>
  );
}
