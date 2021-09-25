import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import Link from "./Link";

export default function Menu() {
  const router = useRouter();
  return (
    <S.MenuWrap>
      <h1 className="web-logo" onClick={() => router.push("/")}>
        kunder
      </h1>
      <Link menu="둘러보기" route="" />
      <Link menu="스트리밍" route="" />
      <Link menu="음악 피드" route="" />
      <Link menu="플레이리스트" route="" />
    </S.MenuWrap>
  );
}
