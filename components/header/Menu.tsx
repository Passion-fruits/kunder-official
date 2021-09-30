import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import Link from "./Link";
import { COLOR } from "./../../styles/index";

export default function Menu() {
  const router = useRouter();
  return (
    <S.MenuWrap>
      <h1 className="web-logo" onClick={() => router.push("/")}>
        kunder
      </h1>
      <Link menu="둘러보기" route="" />
      <Link menu="내 피드" route="" />
      <Link menu="쿤더차트" route="" />
      <Link menu="🔥Lit" route="" color={COLOR.red_text} />
    </S.MenuWrap>
  );
}
