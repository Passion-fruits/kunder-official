import Menu from "./Menu";
import { HomeIcon, ListIcon, MedalIcon, FireIcon } from "../../../assets";
import * as S from "./styles";

export default function GeneralMenu() {
  return (
    <S.MenuWrap>
      <Menu content="메인 페이지" route="/" svg={<HomeIcon />} />
      <Menu content="내 피드" route="/feed" svg={<ListIcon />} />
      <Menu content="쿤더 차트" route="/chart" svg={<MedalIcon />} />
      <Menu content="LIT" route="/lit" svg={<FireIcon />} />
    </S.MenuWrap>
  );
}
