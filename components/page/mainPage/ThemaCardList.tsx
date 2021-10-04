import MusicColumnCardList from "../../MusicColumnCardList";
import * as S from "./styles";
import CircleArrowIcon from "../../../assets/circleArrow";
import { ThemaCardListProps } from "../../../lib/interfaces/mainPage";
import MusicRowCardList from "../../MusicRowCardList";

export default function ThemaCardList({
  title,
  descripton,
  isColumn,
  data,
}: ThemaCardListProps) {
  return (
    <S.ThemaCardListWrapper>
      <button className="more-button">
        <CircleArrowIcon />
      </button>
      <div className="infor-wrap">
        <h1 className="title">{title}</h1>
        <p className="description">{descripton}</p>
      </div>
      {isColumn ? (
        <MusicColumnCardList musicList={data} />
      ) : (
        <MusicRowCardList musicList={data} />
      )}
    </S.ThemaCardListWrapper>
  );
}