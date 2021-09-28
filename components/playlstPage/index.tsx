import MusicRowCardList from "../MusicRowCardList";
import * as S from "./styles";
import { data } from "./../../lib/export/data";
import PlaylistInformation from "./Information";
import { useRouter } from "next/dist/client/router";
import React from "react";
import playlist from "../../api/playlist";
import { playlistInfor } from "../../lib/interfaces/playlist";
import { musicCardObject } from "../../lib/interfaces/music";
import { setValue } from "./../../lib/context/index";

export default function PlaylistPage() {
  const router = useRouter();
  const dispatch = setValue();
  const playlist_id = router.query.id;
  const [playlistObj, setPlaylistObj] = React.useState<playlistInfor>();
  const [musicArr, setMusicArr] = React.useState<musicCardObject[]>([]);

  React.useEffect(() => {
    if (playlist_id) {
      playlist
        .getPlaylistDetail(playlist_id)
        .then((res) => {
          setPlaylistObj(res.data.playlist);
          setMusicArr(res.data.songs);
          dispatch({
            type: "SET_MUSIC_LIST",
            list: res.data.songs,
          });
        })
        .catch(() => {
          return;
        });
    }
  }, [router]);

  return (
    <S.Wrapper>
      <S.Container>
        {playlistObj && (
          <>
            <PlaylistInformation
              name={playlistObj.name}
              author={playlistObj.author}
              like={playlistObj.like}
              cover_url={playlistObj.cover_url}
              playlist_id={playlistObj.playlist_id}
              created_at={playlistObj.created_at}
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
