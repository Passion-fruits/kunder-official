import * as S from "./styles";
import { loadTossPayments } from "@tosspayments/sdk";
import { v4 as uuidv4 } from "uuid";
import { useCallback, useEffect, useState } from "react";

export default function ChargeKdtModal() {
  const minKdtCnt = 10;
  const clientKey = "test_ck_mnRQoOaPz8L7bZe1MJvry47BMw6v";
  const tossPayments = loadTossPayments(clientKey);
  const [kdtCnt, setKdtCnt] = useState<number>(10);

  const changeKdtValue = () => {
    return (kdtCnt * 100 * 12) / 10;
  };

  const chargeToken = () => {
    tossPayments.then((res) => {
      res.requestPayment("가상계좌", {
        amount: changeKdtValue(),
        orderId: uuidv4(),
        orderName: "쿤더코인 충전",
        customerName: "쿤더 후원자님",
        successUrl: window.location.origin + "/wallet/checkPayment",
        failUrl: window.location.origin + "/wallet",
      });
    });
  };

  const priceChange = useCallback(({ target }) => {
    const value = target.value;
    if (value < minKdtCnt) {
      return;
    }
    setKdtCnt(value);
  }, []);
  return (
    <S.Wrapper>
      <h1 className="title">충전 금액 설정</h1>
      <p className="description">충전할 쿤더코인 갯수를 선택하세요</p>
      <input type="number" value={kdtCnt} onChange={priceChange} id="focus" />
      <h3 className="total-price">
        총 <b>{changeKdtValue()}</b>원 결제
      </h3>
      <button onClick={chargeToken}>충전하기</button>
    </S.Wrapper>
  );
}
