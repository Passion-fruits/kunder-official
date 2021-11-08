import * as S from "./styles";
import { useCallback, useEffect, useState } from "react";
import { setValue } from "./../../../lib/context/index";
import kdt from "../../../api/kdt";
import { MyKdtObject } from "./../../../lib/interfaces/kdt";

export default function MyKdtCard() {
  const disaptch = setValue();
  const chargeKdt = useCallback(() => {
    disaptch({ type: "SET_MODAL", modal: "chargeKdt" });
  }, []);
  const [myKdtObject, setMyKdtObject] = useState<MyKdtObject>({
    add_kdt: 0,
    donate_kdt: 0,
    reward_kdt: 0,
    total_kdt: 0,
  });

  useEffect(() => {
    kdt
      .getMyKdt()
      .then((res) => {
        setMyKdtObject(res.data);
      })
      .catch(() => {
        return;
      });
  }, []);
  return (
    <S.MyKdtWrap>
      <div className="padding-wrap">
        <h1 className="title">나의 KDT 보유내역</h1>
        <div className="kdt-amount">
          {myKdtObject.total_kdt / Math.pow(10, 18)}
          <span>KDT</span>
        </div>
        <p className="description">
          1KDT = 100KRW 입니다 ( 2020년 1월 1일 기준 )
        </p>
        <S.KdtHistoryInfor>
          <div>
            <span className="title">후원받은 KDT</span>
            <span className="content">{myKdtObject.donate_kdt}KDT</span>
          </div>
          <div>
            <span className="title">충전한 KDT</span>
            <span className="content">{myKdtObject.add_kdt}KDT</span>
          </div>
          <div>
            <span className="title">보상받은 KDT</span>
            <span className="content">{myKdtObject.reward_kdt}KDT</span>
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
