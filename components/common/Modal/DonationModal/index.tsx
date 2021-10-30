import { useState } from "react";
import * as S from "./styles";

export default function DonationModal() {
  const [kdtCnt, setKdtCnt] = useState<number>(10);

  const handleKdtCnt = ({ target }) => {
    const value = target.value;
    if (value < 10) return;
    setKdtCnt(target.value);
  };

  return (
    <S.Wrapepr>
      <h1 className="title">후원하기</h1>
      <p className="description">후원 후 아티스트의 답장을 받아보세요!</p>
      <div className="line" />
      <h3 className="kdt-cnt">후원 수량</h3>
      <input type="number" id="focus" value={kdtCnt} onChange={handleKdtCnt} />
      <textarea placeholder="남길 말을 입력하세요" id="focus" />
      <button className="submit-btn">후원하기</button>
    </S.Wrapepr>
  );
}
