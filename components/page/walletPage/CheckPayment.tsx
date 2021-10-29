import * as S from "./styles";
import Spiner from "./../../common/Spiner/index";

export default function CheckPayment() {
  return (
    <S.CheckPaymentWrap>
      <Spiner size={50} />
      <h1>잠시만 기다려주세요...</h1>
    </S.CheckPaymentWrap>
  );
}
