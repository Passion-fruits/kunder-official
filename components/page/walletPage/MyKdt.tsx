import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { setValue } from "./../../../lib/context/index";
import { IS_KDT } from "../../../lib/export/localstorage";
import { toast } from "react-toastify";
import axios from "axios";
import kdt from "../../../api/kdt";

export default function MyKdt() {
  const dispatch = setValue();
  const router = useRouter();
  const [amount, setAmount] = useState<number>(0);

  const chargeTokenModalOn = () => {
    if (localStorage.getItem(IS_KDT)) {
      dispatch({ type: "SET_MODAL", modal: "chargeKdt" });
    } else {
      toast.error("쿤더토큰을 추가해주세요");
    }
  };

  const getMyKdtAmount = () => {
    const windowObj: any = window;
    if (typeof windowObj.klaytn !== "undefined") {
      const klaytn = windowObj.klaytn;
      klaytn
        .enable()
        .then((res) => {
          axios({
            method: "post",
            url: window.location.origin + "/api/kdt",
            data: {
              account: res[0],
            },
          })
            .then((res) => {
              setAmount(res.data.amount);
            })
            .catch(() => {
              return;
            });
        })
        .catch(() => {
          return;
        });
    }
  };

  useEffect(() => {
    const tokenAddress = "0xaa27499753d621c79a8d08df8e6e989aba311fe0";
    const tokenSymbol = "KDT";
    const tokenDecimals = 18;
    const tokenImage = "https://avatars.githubusercontent.com/u/64083083?v=4";
    const windowObj: any = window;
    if (localStorage.getItem(IS_KDT)) {
      console.log("aready have kdt");
      return;
    }
    if (typeof windowObj.klaytn !== "undefined") {
      console.log("success");
      const klaytn = windowObj.klaytn;
      // get user wallet address
      klaytn.sendAsync(
        {
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address: tokenAddress,
              symbol: tokenSymbol,
              decimals: tokenDecimals,
              image: tokenImage,
            },
          },
          id: Math.round(Math.random() * 100000),
        },
        (err, added) => {
          if (added) {
            console.log(added);
            if (added.result === true) {
              localStorage.setItem(IS_KDT, "true");
              klaytn.enable().then((res) => {
                kdt
                  .setKdtWallet(res[0])
                  .then((res) => {
                    toast.success("정상 처리되었습니다");
                  })
                  .catch(() => {
                    toast.error("에러가 발생하였습니다.");
                  });
              });
              toast.success("쿤더토큰이 추가되었습니다");
              getMyKdtAmount();
            }
          } else {
            toast.error("추가에 실패하였습니다");
          }
        }
      );
    } else {
      toast.info("카이카스 지갑 없음");
    }
  }, []);

  useEffect(() => {
    getMyKdtAmount();
  }, []);

  return (
    <>
      <h5 className="my-wallet">My Wallet</h5>
      <h1 className="kdt-cnt">{Math.round(amount)} KDT</h1>
      <p className="description">쿤더코인 보유 내역입니다.</p>
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
