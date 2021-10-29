import CardList from "./CardList";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { musicCardObject } from "../../../lib/interfaces/music";
import main from "../../../api/main";
import music from "../../../api/music";
import { playlistInfor } from "../../../lib/interfaces/playlist";
import { getRandNum } from "./../../../lib/export/getRandNum";
import { genreList } from "./../../../lib/export/genre";
import {
  music_none_data,
  playlist_recommend_data,
} from "../../../lib/export/data";
import { playlist_none_data } from "./../../../lib/export/data";

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

  useEffect(() => {
    setGenreMusicList([]);
  }, []);

  useEffect(() => {
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

  return (
    <S.Wrapper>
      <S.Container>
        <CardList
          option="playlist"
          data={playlist_recommend_data}
          title="최근 들은 곡 기반 추천"
          description="여러 플레이리스트를 만나보세요"
        />
        <CardList
          option="music"
          data={popularMusicList}
          title="🔥지금 인기있는 음악"
          description="현재 가장 핫한 음악을 만나보세요"
        />
        <CardList
          option="playlist"
          data={randomPlaylists}
          title="랜덤 플레이리스트"
          description="여러 플레이리스트를 만나보세요"
        />
        <CardList
          option="music"
          data={recentMusicList}
          title="새로 나온 음악"
          description="아티스트들의 새로운 예술을 경험하세요"
        />
        <CardList
          option="music"
          data={genreMusicList}
          title={`${genreList[randNum]} 음악`}
          description={`${genreList[randNum]} 장르를 지금 바로 만나보세요`}
        />
      </S.Container>
    </S.Wrapper>
  );
}
