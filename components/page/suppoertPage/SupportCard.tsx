import { SupportCardObj } from "../../../lib/interfaces/support";
import * as S from "./styles";
import UserComment from "./UserComment";
import NoneAnswer from "./NoneAnswer";

export default function SupportCard({ type }: SupportCardObj) {
  return (
    <S.SupportCard>
      <UserComment />
      <div className="line" />
      {type === 1 ? (
        <NoneAnswer />
      ) : type === 2 ? (
        <UserComment />
      ) : type === 3 ? (
        <S.AnswerWrap>
          <textarea placeholder="답장 후 후원금을 받으세요!" id="focus" />
          <button>답장하기</button>
        </S.AnswerWrap>
      ) : (
        <UserComment />
      )}
    </S.SupportCard>
  );
}
