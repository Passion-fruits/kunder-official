import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import SupportCard from "./SupportCard";

type menuType = "notAnswer" | "haveAnswer" | "isAnswer" | "isNotAnswer";

interface menu {
  title: string;
  path: menuType;
}

export default function SupportPage() {
  const router = useRouter();
  const [path, setPath] = useState<menuType>("notAnswer");
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
        <S.ListWrap>
          <SupportCard />
        </S.ListWrap>
      </S.Container>
    </S.Wrapper>
  );
}
