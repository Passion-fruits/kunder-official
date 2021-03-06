import MusicRowCardList from "../../common/MusicRowCardList";
import * as S from "./styles";
import PlaylistInformation from "./Information";
import { useRouter } from "next/dist/client/router";
import React from "react";
import playlist from "../../../api/playlist";
import { playlistInfor } from "../../../lib/interfaces/playlist";
import { musicCardObject } from "../../../lib/interfaces/music";
import { getValue, setValue } from "../../../lib/context/index";

export default function PlaylistPage() {
  const router = useRouter();
  const dispatch = setValue();
  const contextObj = getValue();
  const playlist_id = router.query.id;
  const playlist_index = router.query.index;
  const base_song_id = router.query.base_song_id;
  const [playlistObj, setPlaylistObj] = React.useState<playlistInfor>();
  const [musicArr, setMusicArr] = React.useState<musicCardObject[]>([]);

  React.useEffect(() => {
    if (playlist_id && contextObj.modal === null) {
      playlist
        .getPlaylistDetail(playlist_id)
        .then((res) => {
          setPlaylistObj(res.data.playlist);
          setMusicArr(res.data.songs);
        })
        .catch(() => {
          return;
        });
    } else {
      playlist
        .getRecommendPlaylistDetail({ base_song_id: base_song_id, size: 15 })
        .then((res) => {
          setPlaylistObj(res.data.playlist);
          setMusicArr(res.data.songs);
        })
        .catch(() => {
          return;
        });
    }
  }, [router, contextObj.modal]);

  React.useEffect(() => {
    dispatch({
      type: "SET_MUSIC_LIST",
      list: musicArr,
    });
  }, [musicArr]);

  return (
    <S.Wrapper>
      <S.Container>
        {playlistObj && (
          <>
            <PlaylistInformation
              name={
                playlistObj.name ||
                `데일리 믹스 #${parseInt(playlist_index.toString()) + 1}`
              }
              author={playlistObj.author}
              like={playlistObj.like}
              cover_url={playlistObj.cover_url}
              playlist_id={playlistObj.playlist_id}
              created_at={playlistObj.created_at}
              user_id={playlistObj.user_id || 0}
              songs={musicArr}
            />
            <S.MusicListWrap>
              {musicArr.length === 0 ? (
                <div className="none">플레이리스트에 곡이 없습니다.</div>
              ) : (
                <MusicRowCardList musicList={musicArr} />
              )}
            </S.MusicListWrap>
          </>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
