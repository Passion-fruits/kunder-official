import CardList from "./CardList";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { musicCardObject } from "../../../lib/interfaces/music";
import main from "../../../api/main";
import music from "../../../api/music";
import { playlistInfor } from "../../../lib/interfaces/playlist";
import { getRandNum } from "./../../../lib/export/getRandNum";
import { genreList } from "./../../../lib/export/genre";
import { music_none_data, playlist_none_data } from "../../../lib/export/data";
import { ACCESS_TOKEN } from "./../../../lib/export/localstorage";
import { useRouter } from "next/dist/client/router";

export default function MainPage() {
  const [randNum, setRandNum] = useState<number>(null);
  const [recentMusicList, setRecentMusicList] =
    useState<musicCardObject[]>(music_none_data);
  const [randomPlaylists, setRandomPlaylists] =
    useState<playlistInfor[]>(playlist_none_data);
  const [genreMusicList, setGenreMusicList] =
    useState<musicCardObject[]>(music_none_data);
  const [popularMusicList, setPopularMusicList] =
    useState<musicCardObject[]>(music_none_data);
  const [recommendPlaylists, setRecommendPlaylists] =
    useState<playlistInfor[]>(playlist_none_data);
  const router = useRouter();

  useEffect(() => {
    setRandNum(null);
    setRandNum(getRandNum(0, genreList.length - 2));
  }, []);

  useEffect(() => {
    if (randNum > -1) {
      music
        .getStreaming({ genre: randNum + 1, page: 1, sort: 3, size: 6 })
        .then((res) => {
          setGenreMusicList(res.data.songs);
        })
        .catch(() => {
          setGenreMusicList([]);
          return;
        });
    }
  }, [randNum]);

  useEffect(() => {
    main
      .getRecentMusic({ page: 1, size: 6 })
      .then((res) => {
        setRecentMusicList(res.data.song);
      })
      .catch(() => {
        return;
      });
    main
      .getRandomPlaylist({ page: 1, size: 6 })
      .then((res) => {
        setRandomPlaylists(res.data.playlist);
      })
      .catch(() => {
        return;
      });
    main
      .getPopularMusic({ page: 1, size: 6 })
      .then((res) => {
        setPopularMusicList(res.data.song);
      })
      .catch(() => {
        return;
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      main
        .getRecommendPlaylist(6)
        .then((res) => {
          setRecommendPlaylists(res.data);
        })
        .catch(() => {
          setRecommendPlaylists([]);
          return;
        });
    } else {
      setRecommendPlaylists([]);
    }
  }, [router]);

  return (
    <S.Wrapper>
      <S.Container>
        {recommendPlaylists.length > 0 && (
          <CardList
            option="playlist"
            data={recommendPlaylists}
            title="?????? ?????? ??? ?????? ??????"
            description="?????? ???????????? ?????? ??????"
          />
        )}
        <CardList
          option="music"
          data={popularMusicList}
          title="?????????? ???????????? ??????"
          description="?????? ?????? ?????? ????????? ???????????????"
          collectOption="popular"
        />
        <CardList
          option="playlist"
          data={randomPlaylists}
          title="?????? ??????????????????"
          description="?????? ????????????????????? ???????????????"
        />
        <CardList
          option="music"
          data={recentMusicList}
          title="?????? ?????? ??????"
          description="?????????????????? ????????? ????????? ???????????????"
          collectOption="recent"
        />
        <CardList
          option="music"
          data={genreMusicList}
          title={`${genreList[randNum]} ??????`}
          description={`${genreList[randNum]} ????????? ?????? ?????? ???????????????`}
          collectOption="genre"
          genre={randNum}
        />
      </S.Container>
    </S.Wrapper>
  );
}
