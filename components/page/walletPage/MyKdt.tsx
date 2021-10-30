import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { setValue } from "./../../../lib/context/index";
import { IS_ADD_KDT } from "../../../lib/export/localstorage";

export default function MyKdt() {
  const dispatch = setValue();
  const router = useRouter();

  const chargeTokenModalOn = () => {
    dispatch({ type: "SET_MODAL", modal: "chargeKdt" });
  };

  useEffect(() => {
    const tokenAddress = "0xaa27499753d621c79a8d08df8e6e989aba311fe0";
    const tokenSymbol = "KDT";
    const tokenDecimals = 18;
    const tokenImage = "https://avatars.githubusercontent.com/u/64083083?v=4";
    const windowObj: any = window;
    if (typeof windowObj.klaytn !== "undefined") {
      if (localStorage.getItem(IS_ADD_KDT)) {
        console.log("aleady have kdt");
        return;
      }
      console.log("success");
      const klaytn = windowObj.klaytn;
      klaytn
        .enable()
        .then((res) => {
          console.log(res[0]);
        })
        .catch((err) => {
          console.log(err);
        });
      klaytn.sendAsync(
        {
          method: "wallet_watchAsset",
          params: {
            type: "ERC20", // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage, // A string url of the token logo
            },
          },
          id: Math.round(Math.random() * 100000),
        },
        (err, added) => {
          if (added) {
            if (added.result === true) {
              localStorage.setItem(IS_ADD_KDT, "true");
            }
            console.log("Thanks for your interest!");
          } else {
            console.log("Your loss!");
          }
        }
      );
    } else {
      console.log("load fail");
    }
  }, []);

  return (
    <>
      <h5 className="my-wallet">My Wallet</h5>
      <h1 className="kdt-cnt">30 KDT</h1>
      <p className="description">블록체인 지갑으로 출금 가능한 수량입니다</p>
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
