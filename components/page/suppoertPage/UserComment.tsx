import * as S from "./styles";

export default function UserComment() {
  return (
    <S.SupportInfor>
      <img src="https://www.forbes.com/advisor/wp-content/uploads/2021/03/featured-how-to-hire-contractor.jpeg" />
      <div>
        <p className="who">
          <b>정지원</b>님이 후원하셨어요!
        </p>
        <p className="ment">
          안녕하십니까 형님... 저 내일 군대가는데 진짜 희망의 한마디 듣고싶어
          후원했습니다... 사랑해요!
        </p>
        <p className="state">300 KDT</p>
      </div>
    </S.SupportInfor>
  );
}
