import { useRouter } from "next/dist/client/router";
import MusicColumnCardList from "../../common/MusicColumnCardList";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import main from "../../../api/main";
import { musicCardObject } from "../../../lib/interfaces/music";
import { genreList } from "./../../../lib/export/genre";
import music from "../../../api/music";
import { isScreenBottom } from "../../../lib/util/isScreenBottom";

export default function ListToOptionPage() {
  const { option, genre } = useRouter().query;
  const size = 13;
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<musicCardObject[]>([]);
  const [end, setEnd] = useState<boolean>(false);
  const pageRef = useRef(page);

  useEffect(() => {
    if (end) return;
    if (option === "recent") {
      main
        .getRecentMusic({
          page: page,
          size: size,
        })
        .then((res) => {
          setData(data.concat(res.data.song));
        })
        .catch(() => {
          setEnd(true);
        });
    }
    if (option === "popular") {
      main
        .getPopularMusic({ page: page, size: size })
        .then((res) => {
          setData(data.concat(res.data.song));
        })
        .catch(() => {
          setEnd(true);
        });
    }
    if (option === "genre") {
      music
        .getStreaming({
          genre: parseInt(genre.toString()) + 1,
          page: page,
          sort: 3,
          size: size,
        })
        .then((res) => {
          setData(data.concat(res.data.songs));
        })
        .catch(() => {
          setEnd(true);
        });
    }
    if (option === "history") {
      music
        .getHistoryMusic({ page: page, size: size })
        .then((res) => {
          setData(data.concat(res.data.song));
        })
        .catch(() => {
          setEnd(true);
        });
    }
    if (option === "like") {
    }
  }, [page, option]);

  useEffect(() => {
    setData([]);
    setPage(1);
    pageRef.current = 1;
  }, [option, genre]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (isScreenBottom() && window.scrollY > 50) {
        setPage(pageRef.current + 1);
        pageRef.current += 1;
      }
    });
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <h1>
          {option === "recent"
            ? "?????? ??????"
            : option === "popular"
            ? "??????"
            : option === "genre"
            ? genreList[parseInt(genre.toString())]
            : option === "like"
            ? "????????? ?????????"
            : option === "history"
            ? "?????? ??????"
            : ""}{" "}
          ?????? ????????????
        </h1>
        <MusicColumnCardList musicList={data} />
      </S.Container>
    </S.Wrapper>
  );
}
