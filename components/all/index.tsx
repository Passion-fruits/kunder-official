import { genreList } from "../../lib/export/genre";
import { COLOR } from "./../../styles/index";
import { sortList } from "./../../lib/export/sort";
import { useRouter } from "next/dist/client/router";
import { toast } from "react-toastify";
import * as S from "./styles";
import React from "react";
import List from "./genre-sort-selector/selector";
import music from "../../api/music";
import CardList from "../cardList";
import Arrow from "../../assets/arrow";
import LoadingPage from "../loading";

export default function AllPage() {
  const router = useRouter();
  const { genre, sort, page } = router.query;
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<any[]>([]);
  const [maxPage, setMaxPage] = React.useState(0);
  const genreCheckStyle: React.CSSProperties = {
    borderBottom: `2px solid ${COLOR.main}`,
    color: COLOR.main,
  };
  const sortCheckStyle: React.CSSProperties = {
    color: COLOR.main,
  };
  const showCardCnt = 20;
  const perPage = 5;
  const pageToNum = page && parseInt(page.toString());

  const routing = (page, sort, genre) => {
    router.push(`/all?page=${page}&sort=${sort}&genre=${genre}`);
  };

  const changePage = React.useCallback(
    ({ target }) => {
      routing(target.innerHTML, sort, genre);
    },
    [page, sort, genre]
  );

  const changeGenre = React.useCallback(
    ({ target }) => {
      routing(1, sort, target.value);
    },
    [page, sort, genre]
  );

  const changeSort = React.useCallback(
    ({ target }) => {
      routing(1, target.value, genre);
    },
    [page, sort, genre]
  );

  const nextPerPage = React.useCallback(() => {
    const tmp = Math.floor((pageToNum - 1) / perPage) * perPage + perPage + 1;
    const nextPage = maxPage >= tmp ? tmp : maxPage;
    routing(nextPage, sort, genre);
  }, [page, maxPage]);

  const beforePerPage = React.useCallback(() => {
    const tmp = Math.floor((pageToNum - 1) / perPage) * perPage;
    const beforePage = tmp < 1 ? 1 : tmp;
    routing(beforePage, sort, genre);
  }, [page, maxPage]);

  React.useEffect(() => {
    if (genre) {
      setLoading(true);
      music
        .getStreaming({
          genre: genre,
          page: page,
          sort: sort,
          size: showCardCnt,
        })
        .then((res) => {
          setLoading(false);
          setData(res.data.songs);
          setMaxPage(Math.ceil(res.data.max_song / showCardCnt));
        })
        .catch((err) => {
          setLoading(false);
          setData(() => []);
          return;
        });
    }
  }, [router]);

  React.useEffect(() => {
    if (page) {
      const pageBar = document.getElementById("pageBar");
      const startPage = (Math.ceil(pageToNum / perPage) - 1) * perPage + 1;
      const lastPage =
        startPage + perPage <= maxPage ? startPage + perPage : maxPage + 1;
      while (pageBar.firstChild) {
        pageBar.removeChild(pageBar.firstChild);
      }
      for (let i = startPage; i < lastPage; i++) {
        const div = document.createElement("div");
        div.id = "pageIndex";
        div.innerHTML = i.toString();
        if (div.innerHTML === page) {
          div.style.background = "black";
          div.style.color = "white";
        }
        div.onclick = changePage;
        pageBar.insertBefore(div, null);
      }
    }
  }, [genre, sort, page, maxPage]);

  return (
    <S.Wrapper>
      {loading && <LoadingPage />}
      <S.Container>
        <S.GerneList>
          <List
            list={genreList}
            checkStyle={genreCheckStyle}
            name="genre"
            now={genre}
            callback={changeGenre}
          />
        </S.GerneList>
        <S.SortList>
          <List
            list={sortList}
            checkStyle={sortCheckStyle}
            name="sort"
            now={sort}
            callback={changeSort}
          />
        </S.SortList>
        <CardList data={data} />
        <S.PageBarWrap>
          <S.PageSmallWrap>
            <Arrow callback={beforePerPage} isNext={false} />
            <S.pageBar id="pageBar" />
            <Arrow callback={nextPerPage} isNext={true} />
          </S.PageSmallWrap>
        </S.PageBarWrap>
      </S.Container>
    </S.Wrapper>
  );
}
