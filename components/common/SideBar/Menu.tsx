import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import { COLOR } from "./../../../styles/index";

interface Props {
  content: string;
  route: string;
}

export default function Menu({ content, route }: Props) {
  const router = useRouter();
  return (
    <S.Menu
      style={
        router.pathname === route
          ? {
              color: `${COLOR.green_main}`,
              backgroundColor: "rgb(50, 50, 50, 0.5)",
            }
          : {}
      }
      onClick={() => router.push(route)}
    >
      {content}
    </S.Menu>
  );
}
