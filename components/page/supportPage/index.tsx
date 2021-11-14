import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import SupportCard from "./SupportCard";
import {
  menuType,
  SupportHitoryObject,
  SupportHistory,
} from "../../../lib/interfaces/support";
import kdt from "../../../api/kdt";
import { LoadingWrap } from "../feedPage/styles";
import Spiner from "../../common/Spiner";
import { CheckScroll } from "../../../lib/util/checkScroll";

interface menu {
  title: string;
  path: menuType;
}

export default function SupportPage() {
  const size = 10;
  const [page, setPage] = useState<number>(1);
  const [path, setPath] = useState<menuType>("notAnswer");
  const [data, setData] = useState<SupportHitoryObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [renderState, setRenderState] = useState<boolean>(false);
  const [isChange, setIsChange] = useState<boolean>(false);
  const [end, setEnd] = useState<boolean>(false);
  const changeRef = useRef(null);
  changeRef.current = isChange;
  const menuList: menu[] = [
    {
      title: "답장하지 못한 후원",
      path: "notAnswer",
    },
    {
      title: "답장한 후원",
      path: "haveAnswer",
    },
    {
      title: "답장 받은 후원",
      path: "isAnswer",
    },
    {
      title: "답장받지 못한 후원",
      path: "isNotAnswer",
    },
  ];

  const apiDataSet = (
    response_data: SupportHistory,
    p_data: SupportHitoryObject[]
  ) => {
    setData(p_data.concat(response_data.history));
    setLoading(false);
  };

  const apiCatch = () => {
    setLoading(false);
    setEnd(true);
    return;
  };

  const getData = ({ p_page, p_data, p_end }) => {
    if (p_end) return;
    switch (path) {
      case "notAnswer":
        kdt
          .getDonateForMeHistory({ done: 0, size: size, page: p_page })
          .then((res) => {
            apiDataSet(res.data, p_data);
          })
          .catch(() => {
            apiCatch();
          });
        break;
      case "haveAnswer":
        kdt
          .getDonateForMeHistory({ done: 1, size: size, page: p_page })
          .then((res) => {
            apiDataSet(res.data, p_data);
          })
          .catch(() => {
            apiCatch();
          });
        break;
      case "isAnswer":
        kdt
          .getDonateForArtistHistory({ done: 1, size: size, page: p_page })
          .then((res) => {
            apiDataSet(res.data, p_data);
          })
          .catch(() => {
            apiCatch();
          });
        break;
      case "isNotAnswer":
        kdt
          .getDonateForArtistHistory({ done: 0, size: size, page: p_page })
          .then((res) => {
            apiDataSet(res.data, p_data);
          })
          .catch(() => {
            apiCatch();
          });
        break;
    }
  };

  const deleteSupportCard = (index) => {
    data.splice(index, 1);
    setRenderState(!renderState);
  };

  useEffect(() => {
    let page = 2;
    window.addEventListener("scroll", () => {
      if (changeRef.current) {
        changeRef.current = false;
        setIsChange(false);
        page = 2;
      }
      if (CheckScroll()) {
        setPage(page);
        page++;
      }
    });
  }, []);

  useEffect(() => {
    setData([]);
    setEnd(false);
    setLoading(true);
    setPage(1);
    setIsChange(true);
    getData({ p_page: 1, p_data: [], p_end: false });
  }, [path]);

  useEffect(() => {
    if (page > 1) getData({ p_page: page, p_data: data, p_end: end });
  }, [page]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.MenuWrap>
          {menuList.map((menu, index) => (
            <S.Menu
              key={index}
              active={path === menu.path}
              onClick={() => setPath(menu.path)}
            >
              {menu.title}
              {menu.path === path && <div className="line" />}
            </S.Menu>
          ))}
        </S.MenuWrap>
        {loading && (
          <LoadingWrap>
            <Spiner size={50} />
          </LoadingWrap>
        )}
        <S.ListWrap>
          {data.map((support, index) => (
            <SupportCard
              key={index}
              amount={support.amount}
              tx_hash={support.tx_hash}
              user_id={support.user_id}
              name={support.name}
              profile={support.profile}
              message_id={support.message_id}
              question={support.question}
              answer={support.answer}
              artist_id={support.artist_id}
              artist={support.artist}
              artist_profile={support.artist_profile}
              option={path}
              deleteSupportCard={deleteSupportCard}
              index={index}
            />
          ))}
        </S.ListWrap>
      </S.Container>
    </S.Wrapper>
  );
}
