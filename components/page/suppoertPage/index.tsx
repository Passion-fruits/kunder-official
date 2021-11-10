import * as S from "./styles";
import { useEffect, useState } from "react";
import SupportCard from "./SupportCard";
import {
  menuType,
  SupportHitoryObject,
  SupportHistory,
} from "../../../lib/interfaces/support";
import kdt from "../../../api//kdt";
import { LoadingWrap } from "../feedPage/styles";
import Spiner from "../../common/Spiner";
import { ACCESS_TOKEN } from "./../../../lib/export/localstorage";
import { useRouter } from "next/dist/client/router";

interface menu {
  title: string;
  path: menuType;
}

export default function SupportPage() {
  const [path, setPath] = useState<menuType>("notAnswer");
  const [data, setData] = useState<SupportHitoryObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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

  const getData = () => {
    switch (path) {
      case "notAnswer":
        kdt
          .getDonateForMeHistory(0)
          .then((res) => {
            const responseData: SupportHistory = res.data;
            setData(data.concat(responseData.history));
          })
          .catch(() => {
            setLoading(false);
            return;
          });
        break;
      case "haveAnswer":
        kdt
          .getDonateForMeHistory(1)
          .then((res) => {
            const responseData: SupportHistory = res.data;
            setData(data.concat(responseData.history));
          })
          .catch(() => {
            setLoading(false);
            return;
          });
        break;
      case "isAnswer":
        kdt
          .getDonateForArtistHistory(1)
          .then((res) => {
            const responseData: SupportHistory = res.data;
            setData(data.concat(responseData.history));
          })
          .catch(() => {
            setLoading(false);
            return;
          });
        break;
      case "isNotAnswer":
        kdt
          .getDonateForArtistHistory(0)
          .then((res) => {
            const responseData: SupportHistory = res.data;
            setData(data.concat(responseData.history));
          })
          .catch(() => {
            setLoading(false);
            return;
          });
        break;
    }
  };

  useEffect(() => {
    setData([]);
    setLoading(true);
  }, [path]);

  useEffect(() => {
    if (data.length === 0) getData();
    else setLoading(false);
  }, [data]);

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
            />
          ))}
        </S.ListWrap>
      </S.Container>
    </S.Wrapper>
  );
}
