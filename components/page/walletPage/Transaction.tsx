import { useEffect, useState } from "react";
import * as S from "./styles";
import kdt from "../../../api/kdt";
import { KdtHistoryObject, KdtTransaction } from "../../../lib/interfaces/kdt";
import { getDate } from "./../../../lib/util/getDate";
import Spiner from "../../common/Spiner";

export default function Transaction() {
  const [historyData, setHistoryData] = useState<KdtHistoryObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    kdt
      .getKdtHistory()
      .then((res) => {
        const data: KdtTransaction = res.data;
        setHistoryData(data.history);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        return;
      });
  }, []);
  return (
    <>
      {loading && (
        <S.LoadingWrap>
          <Spiner size={30} />
        </S.LoadingWrap>
      )}
      {historyData.map((history, index) => (
        <S.TransactionCard key={index}>
          <div className="flex">
            <div className="column-wrap">
              <h1>{history.kdt_type === 1 ? <b>쿤더코인 충전</b> : <></>}</h1>{" "}
              <h3 className="kdt">
                {history.kdt_type === 1 ? (
                  <span>+ {history.amount}KDT</span>
                ) : (
                  <></>
                )}
              </h3>
            </div>
            <div className="column-wrap">
              <div
                className="hax-code text-overflow"
                onClick={() =>
                  window.open(
                    `https://baobab.scope.klaytn.com/tx/${history.tx_hash}`
                  )
                }
              >
                {history.tx_hash}
              </div>
              <span className="date">{getDate(history.created_at)}</span>
            </div>
          </div>
        </S.TransactionCard>
      ))}
    </>
  );
}
