import * as S from "./styles";
import { SupportHitoryObject } from "./../../../lib/interfaces/support";
import { useRef } from "react";
import kdt from "../../../api/kdt";
import { toast } from "react-toastify";

function Contents({ user = null, kdtAmount = null, content = null }) {
  return (
    <S.ContentsWrap>
      {user ? (
        <>
          {kdtAmount ? (
            <h3>
              {user}님이 <b>{kdtAmount}KDT</b>를 후원하셨어요!
            </h3>
          ) : (
            <>
              {content ? (
                <h3>
                  <b>{user}</b>님의 답장이 왔어요!
                </h3>
              ) : (
                <h3>
                  <b>{user}님</b>의 답장이 오지 않았습니다.
                </h3>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {kdtAmount ? (
            <h3>
              <b>{kdtAmount}KDT</b>를 후원했습니다.
            </h3>
          ) : (
            <h3>내가 보낸 답장</h3>
          )}
        </>
      )}
      {content && <span>{content}</span>}
    </S.ContentsWrap>
  );
}

export default function SupportCard({
  amount,
  tx_hash,
  user_id,
  name,
  profile,
  message_id,
  question,
  answer,
  artist_id,
  artist,
  artist_profile,
  option,
}: SupportHitoryObject) {
  const answerRef = useRef<HTMLInputElement>(null);
  const subAnswer = (event) => {
    if (event.keyCode === 13) {
      kdt
        .writeAnswer({
          message_id: message_id,
          user_id: user_id,
          answer: answerRef.current.value,
        })
        .then((res) => toast.success(`${amount}KDT를 받았습니다!`))
        .catch(() => {
          toast.error("에러가 발생하였습니다.");
        });
    }
  };
  const setCardTsx = () => {
    switch (option) {
      case "notAnswer":
        return (
          <>
            <S.UserProfileWrap>
              <img src={profile} />
              <Contents user={name} kdtAmount={amount} content={question} />
            </S.UserProfileWrap>
            <S.InputToAnswer
              ref={answerRef}
              onKeyDown={subAnswer}
              placeholder="답장 후 후원금을 받아가세요!"
              id="focus"
            />
          </>
        );
      case "haveAnswer":
        return (
          <>
            <S.UserProfileWrap>
              <img src={profile} />
              <Contents user={name} kdtAmount={amount} content={question} />
            </S.UserProfileWrap>
            <S.AnswerContainer>
              <Contents content={answer} />
            </S.AnswerContainer>
          </>
        );
      case "isAnswer":
        return (
          <>
            <Contents kdtAmount={amount} content={question} />
            <S.AnswerContainer>
              <img src={artist_profile} />
              <Contents user={artist} content={question} />
            </S.AnswerContainer>
          </>
        );
      case "isNotAnswer":
        return (
          <>
            <S.UserProfileWrap>
              <Contents kdtAmount={amount} content={question} />
            </S.UserProfileWrap>
            <S.AnswerContainer>
              <img src={artist_profile} />
              <Contents user={artist} />
            </S.AnswerContainer>
          </>
        );
    }
  };
  return <S.SupportCardWrap>{setCardTsx()}</S.SupportCardWrap>;
}
