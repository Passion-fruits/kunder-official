import MusicColumnCardList from "../../common/MusicColumnCardList";
import * as S from "./styles";
import feed from "../../../api/feed";
import { useEffect, useState } from "react";
import { musicCardObject } from "../../../lib/interfaces/music";
import Spiner from "../../common/Spiner";
import { CheckScroll } from "./../../../lib/util/checkScroll";

export default function FeedPage() {
  const [feedList, setFeedList] = useState<musicCardObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const getFeedList = () => {
    setLoading(true);
    feed
      .getFeedList({ page: page, size: 15 })
      .then((res) => {
        setFeedList(feedList.concat(res.data));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        return;
      });
  };

  useEffect(() => {
    getFeedList();
    setPage(2);
    let pageIndex = 2;
    window.addEventListener("scroll", () => {
      if (CheckScroll()) {
        getFeedList();
        pageIndex++;
        setPage(pageIndex);
      }
    });
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <h1 className="title">내 피드</h1>
        <p className="description">
          내가 팔로우하는 사람의 최신 음악을 만나보세요
        </p>
        <MusicColumnCardList musicList={feedList} />
        {loading && (
          <S.LoadingWrap>
            <Spiner size={50} />
          </S.LoadingWrap>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
