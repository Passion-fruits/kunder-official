import * as S from "./styles";
import Spiner from "./../../common/Spiner/index";
import kdt from "../../../api/kdt";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export default function CheckPayment() {
  const router = useRouter();
  /*   useEffect(() => {
    if (router) {
      const { paymentKey, orderId, amount } = router.query;
      kdt.requestPayment({
        paymentKey: paymentKey,
        orderId: orderId,
        amount: amount,
      });
    }
  }, [router]); */
  return (
    <S.CheckPaymentWrap>
      <Spiner size={50} />
      <h1>결제를 진행중입니다...</h1>
    </S.CheckPaymentWrap>
  );
}
