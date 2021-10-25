import CardList from "./CardList";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { musicCardObject } from "../../../lib/interfaces/music";
import main from "../../../api/main";
import { playlistInfor } from "../../../lib/interfaces/playlist";

export default function MainPage() {
  const [recentMusicList, setRecentMusicList] = useState<musicCardObject[]>([]);
  const [randomPlaylists, setRandomPlaylists] = useState<playlistInfor[]>([]);

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
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
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
      </S.Container>
    </S.Wrapper>
  );
}
