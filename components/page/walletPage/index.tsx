import * as S from "./styles";
import MyKdt from "./MyKdt";
import { useState } from "react";
import { COLOR } from "./../../../styles/index";
import Transaction from "./Transaction";

export default function WalletPage() {
  const [menu, setMenu] = useState<"myKdt" | "transaction">("myKdt");
  const activeStyle = {
    borderWidth: "1px 1px 0px 1px",
    background: COLOR.black_subBackground,
    color: COLOR.blue_text,
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.MenuWrap>
          <button
            style={menu === "myKdt" ? activeStyle : {}}
            onClick={() => setMenu("myKdt")}
          >
            보유 내역
          </button>
          <button
            style={menu === "transaction" ? activeStyle : {}}
            onClick={() => setMenu("transaction")}
          >
            거래 내역
          </button>
        </S.MenuWrap>
        {menu === "myKdt" ? <MyKdt /> : <Transaction />}
      </S.Container>
    </S.Wrapper>
  );
}
