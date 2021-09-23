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
      <Link menu="전체보기" route="" />
      <Link menu="피드" route="feed" />
      <Link menu="음악업로드" route="upload" />
    </S.MenuWrap>
  );
}
