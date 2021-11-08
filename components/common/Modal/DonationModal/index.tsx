import { useRef, useState } from "react";
import * as S from "./styles";
import kdt from "../../../../api/kdt";
import { useRouter } from "next/dist/client/router";
import { toast } from "react-toastify";
import Spiner from "../../Spiner";
import { AxiosError } from "axios";
import { setValue } from "./../../../../lib/context/index";

export default function DonationModal() {
  const [kdtCnt, setKdtCnt] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);
  const questionRef = useRef<HTMLTextAreaElement>(null);
  const user_id = useRouter().query.id;
  const dispatch = setValue();

  const handleKdtCnt = ({ target }) => {
    const value = target.value;
    if (value < 10) return;
    setKdtCnt(target.value);
  };

  const donateToUser = () => {
    if (!questionRef.current.value) {
      toast.info("남길 말을 적어주세요!");
      return;
    }
    if (confirm(`${kdtCnt}KDT를 후원하시겠습니까?`)) {
      setLoading(true);
      kdt
        .donateToUser({
          user_id: user_id,
          amount: kdtCnt,
          question: questionRef.current.value,
        })
        .then(() => {
          toast.success("후원이 완료되었습니다");
          setLoading(false);
          dispatch({
            type: "SET_MODAL",
            modal: null,
          });
        })
        .catch((err: AxiosError) => {
          setLoading(false);
          if (err.response.status === 400) {
            toast.error("보유 KDT가 부족합니다");
            return;
          }
          toast.error("에러가 발생하였습니다.");
        });
    } else {
      toast.info("후원이 취소되었습니다.");
    }
  };

  return (
    <S.Wrapepr>
      <h1 className="title">후원하기</h1>
      <p className="description">후원 후 아티스트의 답장을 받아보세요!</p>
      <div className="line" />
      <h3 className="kdt-cnt">후원 수량</h3>
      <input type="number" id="focus" value={kdtCnt} onChange={handleKdtCnt} />
      <textarea
        placeholder="남길 말을 입력하세요"
        id="focus"
        ref={questionRef}
      />
      <button className="submit-btn" onClick={donateToUser}>
        {loading ? <Spiner size={20} /> : "후원하기"}
      </button>
    </S.Wrapepr>
  );
}
