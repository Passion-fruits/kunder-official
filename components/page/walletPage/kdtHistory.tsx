import * as S from "./styles";
import kdt from "../../../api/kdt";
import { useEffect, useState } from "react";
import { KdtTransaction } from "../../../lib/interfaces/kdt";
import { KdtHistoryObject } from "./../../../lib/interfaces/kdt";
import { getDate } from "./../../../lib/util/getDate";
import Spiner from "../../common/Spiner";
import { CheckScroll } from "./../../../lib/util/checkScroll";

export default function KdtHistory() {
  const [history, setHistory] = useState<KdtHistoryObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [end, setEnd] = useState<boolean>(false);
  const size = 10;

  const getKdtHistory = () => {
    kdt
      .getKdtHistory({ page: page, size: size })
      .then((res) => {
        const data: KdtTransaction = res.data;
        setHistory(history.concat(data.history));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setEnd(true);
        return;
      });
  };

  useEffect(() => {
    getKdtHistory();
    let page = 1;
    window.addEventListener("scroll", () => {
      if (CheckScroll()) {
        setPage(page + 1);
        page++;
      }
    });
  }, []);

  useEffect(() => {
    if (page > 1 && !end) getKdtHistory();
  }, [page]);

  return (
    <>
      {loading ? (
        <S.SpinerWrap>
          <Spiner size={30} />
        </S.SpinerWrap>
      ) : (
        <S.HistoryWrapper>
          <thead>
            <tr>
              <th>기록</th>
              <th>날짜</th>
              <th>거래내역</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            {history.map((obj, index) => (
              <tr key={index}>
                <td className="text-overflow">
                  {obj.kdt_type === 1 ? (
                    <b>KDT 충전</b>
                  ) : obj.kdt_type === 2 ? (
                    <b>후원한 KDT</b>
                  ) : obj.kdt_type === 3 ? (
                    <b>후원받은 KDT</b>
                  ) : (
                    ""
                  )}
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
                  {obj.kdt_type === 2 ? (
                    <span className="minus">-{obj.amount}KDT</span>
                  ) : (
                    <span className="plus">+{obj.amount}KDT</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </S.HistoryWrapper>
      )}
    </>
  );
}
