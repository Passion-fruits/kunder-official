import * as S from "./styles";

export default function MyKdt() {
  return (
    <>
      <h5 className="my-wallet">My Wallet</h5>
      <h1 className="kdt-cnt">30 KDT</h1>
      <p className="description">현재 쿤더코인 보유 내역</p>
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
      <S.UseKdtChart>
        <div>
          <h1>1 KDT</h1>
          <span>100원</span>
        </div>
        <div>
          <h1>후원받은 코인</h1>
          <span>112 KDT</span>
        </div>
        <div>
          <h1>후원한 코인</h1>
          <span>10 KDT</span>
        </div>
      </S.UseKdtChart>
      <S.ControlBtnWrap>
        <button>충전하기</button>
        <button>환전하기</button>
      </S.ControlBtnWrap>
    </>
  );
}
