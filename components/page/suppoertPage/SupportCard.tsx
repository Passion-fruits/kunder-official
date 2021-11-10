import * as S from "./styles";

function Contents({ user = null, kdtAmount = null, content }) {
  return (
    <S.ContentsWrap>
      {user ? (
        <>
          {kdtAmount ? (
            <h3>
              {user}님이 <b>{kdtAmount}KDT</b>를 후원하셨어요!
            </h3>
          ) : (
            <h3>
              <b>{user}</b>님의 답장이 왔어요!
            </h3>
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
      <span>{content}</span>
    </S.ContentsWrap>
  );
}

export default function SupportCard() {
  return (
    <S.SupportCardWrap>
      <S.UserProfileWrap>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9RUqE41QpOHLWYexujM_kb_7Rl65ELVA_DK2u7zERE7x1nrFdOXZBIeXNFEXcWo9Vsg0&usqp=CAU" />
        <Contents user="adsf" kdtAmount={100} content="저 내일 군대가여" />
      </S.UserProfileWrap>
      {/*       <S.InputToAnswer placeholder="답장 후 후원금을 받아가세요!" id="focus" /> */}
      <S.AnswerContainer>
        <Contents content="저 내일 군대가여" />
      </S.AnswerContainer>
    </S.SupportCardWrap>
  );
}
