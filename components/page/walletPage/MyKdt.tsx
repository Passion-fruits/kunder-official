import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { setValue } from "./../../../lib/context/index";

export default function MyKdt() {
  const dispatch = setValue();
  const router = useRouter();

  const chargeTokenModalOn = () => {
    dispatch({ type: "SET_MODAL", modal: "chargeKdt" });
  };

  return (
    <>
      <h5 className="my-wallet">My Wallet</h5>
      <h1 className="kdt-cnt">30 KDT</h1>
      <p className="description">쿤더코인을 통해 아티스트를 후원해주세요!</p>
      <S.KdtChart>
        <div />
        <div />
      </S.KdtChart>
      <S.ChartInfo>
        <div>
          <span>후원받은 코인</span>
          <h3 className="kdt-percent">10/20개</h3>
        </div>
        <div>
          <span>충전한 코인</span>
          <h3 className="kdt-percent">10/20개</h3>
        </div>
      </S.ChartInfo>
      <S.ControlBtnWrap>
        <button onClick={chargeTokenModalOn}>충전하기</button>
        <button>환전하기</button>
      </S.ControlBtnWrap>
    </>
  );
}
