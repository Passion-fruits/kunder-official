import * as S from "./styles";
import { useCallback } from "react";
import { setValue } from "./../../../lib/context/index";

export default function MyKdtCard() {
  const disaptch = setValue();
  const chargeKdt = useCallback(() => {
    disaptch({ type: "SET_MODAL", modal: "chargeKdt" });
  }, []);
  return (
    <S.MyKdtWrap>
      <div className="padding-wrap">
        <h1 className="title">나의 KDT 보유내역</h1>
        <div className="kdt-amount">
          30.000000
          <span>KDT</span>
        </div>
        <p className="description">
          1KDT = 100KRW 입니다 ( 2020년 1월 1일 기준 )
        </p>
        <S.KdtHistoryInfor>
          <div>
            <span className="title">후원받은 KDT</span>
            <span className="content">0KDT</span>
          </div>
          <div>
            <span className="title">후원한 KDT</span>
            <span className="content">0KDT</span>
          </div>
          <div>
            <span className="title">보상받은 KDT</span>
            <span className="content">0KDT</span>
          </div>
        </S.KdtHistoryInfor>
      </div>
      <S.KdtControlBtnWrap>
        <button>출금하기</button>
        <button onClick={chargeKdt}>충전하기</button>
      </S.KdtControlBtnWrap>
    </S.MyKdtWrap>
  );
}
