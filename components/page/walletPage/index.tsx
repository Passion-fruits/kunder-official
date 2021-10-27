import * as S from "./styles";

export default function WalletPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.MenuWrap>
          <button>보유 내역</button>
          <button>거래 내역</button>
        </S.MenuWrap>
        <h5 className="my-wallet">My Wallet</h5>
        <h1 className="kdt-cnt">30 KDT</h1>
        <p className="description">현재 쿤더코인 보유 내역</p>
      </S.Container>
    </S.Wrapper>
  );
}
