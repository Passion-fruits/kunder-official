import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import { ReactElement } from "react";

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
              borderRight: "2px solid #fff",
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
