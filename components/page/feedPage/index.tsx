import MusicColumnCardList from "../../MusicColumnCardList";
import * as S from "./styles";
import { data, data2 } from "./../../../lib/export/data";

export default function FeedPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <h1 className="title">팔로우하는 사람들의 음악</h1>
        <p className="description">
          팔로우하는 사람들의 최신 음악을 만나보세요!
        </p>
        <MusicColumnCardList
          musicList={data.concat(data2.concat(data).concat(data2))}
        />
      </S.Container>
    </S.Wrapper>
  );
}
