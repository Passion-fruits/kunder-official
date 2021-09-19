import * as S from "./styles";
import { useRouter } from "next/dist/client/router";

export default function Menu() {
  const router = useRouter();
  return (
    <S.MenuWrap>
      <h1 className="web-logo" onClick={() => router.push("/")}>
        kunder
      </h1>
      <span>전체보기</span>
      <span>피드</span>
      <span>음악 업로드</span>
    </S.MenuWrap>
  );
}
