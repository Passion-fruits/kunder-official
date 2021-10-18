import { useEffect, useState } from "react";
import { PlaylistIcon } from "../../assets";
import { playlistInfor } from "../../lib/interfaces/playlist";
import * as S from "./styles";
import playlist from "../../api/playlist";
import { USER_ID } from "../../lib/export/localstorage";
import { useRouter } from "next/dist/client/router";

export default function MyPlaylist() {
  const [playlistArr, setPlaylistArr] = useState<playlistInfor[]>([]);
  const router = useRouter();
  useEffect(() => {
    playlist
      .getUserPlaylist(localStorage.getItem(USER_ID))
      .then((res) => {
        setPlaylistArr(res.data);
      })
      .catch(() => {
        return;
      });
  }, []);
  return (
    <>
      <div className="line" />
      <h1 className="line-title">내 플레이리스트</h1>
      <S.PlaylistWrap>
        {playlistArr.map((playlist, index) => (
          <div
            key={index}
            onClick={() => router.push(`/playlist?id=${playlist.playlist_id}`)}
          >
            <PlaylistIcon size={13} />
            <span className="text-overflow">{playlist.name}</span>
          </div>
        ))}
      </S.PlaylistWrap>
    </>
  );
}
