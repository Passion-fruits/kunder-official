import * as S from "./styles";
import kdt from "../../../api/kdt";
import { useEffect, useState } from "react";
import { KdtTransaction } from "../../../lib/interfaces/kdt";
import { KdtHistoryObject } from "./../../../lib/interfaces/kdt";
import { getDate } from "./../../../lib/util/getDate";
import Spiner from "../../common/Spiner";

export default function KdtHistory() {
  const [history, setHistory] = useState<KdtHistoryObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    kdt
      .getKdtHistory()
      .then((res) => {
        const data: KdtTransaction = res.data;
        setHistory(data.history);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        return;
      });
  }, []);

  return (
    <S.HistoryWrapper>
      {loading ? (
        <div className="spiner-wrap">
          <Spiner size={30} />
        </div>
      ) : (
        <>
          <th>기록</th>
          <th>날짜</th>
          <th>거래내역</th>
          <th>수량</th>
          {history.map((obj, index) => (
            <tr key={index}>
              <td className="text-overflow">
                <b>KDT 충전</b>
              </td>
              <td>{getDate(obj.created_at)}</td>
              <td>
                <div
                  className="text-overflow"
                  onClick={() =>
                    window.open(
                      `https://baobab.scope.klaytn.com/tx/${obj.tx_hash}`
                    )
                  }
                >
                  {obj.tx_hash}
                </div>
              </td>
              <td>
                <span className="minus">+{obj.amount}KDT</span>
              </td>
            </tr>
          ))}
        </>
      )}
    </S.HistoryWrapper>
  );
}
