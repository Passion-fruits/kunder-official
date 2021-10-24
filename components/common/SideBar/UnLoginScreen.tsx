import AddFuncMenu from "./AddFuncMenu";
import { useRouter } from "next/dist/client/router";

export default function UnLoginScreen() {
  const router = useRouter();
  return (
    <>
      <h1 className="title">
        아직 <b>계정</b>이 없으신가요?
      </h1>
      <p className="description">로그인시 추가기능이 제공됩니다</p>
      <button className="login-btn" onClick={() => router.push("/login")}>
        로그인/가입 {">"}
      </button>
      <h3 className="line-title">로그인시 추가기능</h3>
      <AddFuncMenu contents="음악 업로드" />
      <AddFuncMenu contents="플레이리스트 제작" />
      <AddFuncMenu contents="음악활동 및 수익 창출" />
      <AddFuncMenu contents="나만을 위한 음악 추천" />
      <AddFuncMenu contents="음악 댓글 / 좋아요" />
      <AddFuncMenu contents="내 채널 자동분석" />
      <AddFuncMenu contents="내 보관함 제공" />
    </>
  );
}
