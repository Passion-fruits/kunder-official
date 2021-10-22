import MusicColumnCardList from "../../common/MusicColumnCardList";
import * as S from "./styles";
import { data, data2 } from "./../../../lib/export/data";

export default function FeedPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <h1 className="title">내 피드</h1>
        <p className="description">내가 팔로우하는 사람의 최신 음악</p>
        <MusicColumnCardList
          musicList={data.concat(data2.concat(data).concat(data2))}
        />
      </S.Container>
    </S.Wrapper>
  );
}
