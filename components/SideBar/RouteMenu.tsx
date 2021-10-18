import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  content: string;
  route: string;
}

export default function RouteMenu({ icon, content, route }: Props) {
  const router = useRouter();
  return (
    <S.RouteMenu onClick={() => router.push(`/${route}`)}>
      {icon}
      <span>{content}</span>
    </S.RouteMenu>
  );
}
