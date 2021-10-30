import * as S from "./styles";
import Spiner from "./../../common/Spiner/index";
import kdt from "../../../api/kdt";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { toast } from "react-toastify";

export default function CheckPayment() {
  const router = useRouter();
  useEffect(() => {
    const { paymentKey, orderId, amount } = router.query;
    const windowObj: any = window;
    if (typeof windowObj.klaytn !== "undefined") {
      const klaytn = windowObj.klaytn;
      // get user wallet address
      klaytn
        .enable()
        .then((res) => {
          // res[0] === user account
          if (amount && orderId && paymentKey) {
            kdt
              .requestPayment({
                paymentKey: paymentKey,
                orderId: orderId,
                amount: amount,
              })
              .then((res) => {
                router.push("/wallet");
                toast.success("충전되었습니다");
              })
              .catch((err) => {
                router.push("/wallet");
                toast.error("에러가 발생하였습니다");
              });
          }
        })
        .catch(() => {
          router.push("/wallet");
          toast.error("에러가 발생하였습니다");
        });
    }
  }, [router]);
  return (
    <S.CheckPaymentWrap>
      <Spiner size={50} />
      <h1>결제를 진행중입니다...</h1>
    </S.CheckPaymentWrap>
  );
}
