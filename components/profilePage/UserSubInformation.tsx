import * as S from "./styles";
import React from "react";
import { menuObj } from "../../lib/interfaces/profile";
import UserInforMenu from "./UserInforMenu";
import MusicColumnCardList from "../MusicColumnCardList";
import { musicCardObject } from "./../../lib/interfaces/music";
import profile from "../../api/profile";
import playlist from "../../api/playlist";
import PlaylistCardList from "../PlaylistCardList";
import { playList } from "./../../lib/interfaces/playlist";

export default function UserSubInformation({ user_id }) {
  const menuObj: menuObj = {
    song: "song",
    playlist: "playlist",
    follow: "follow",
    follower: "follower",
  };
  const [nowMenu, setNowMen] = React.useState<
    "song" | "playlist" | "follow" | "follower"
  >(menuObj.song);
  const [musicList, setMusicList] = React.useState<musicCardObject[]>([]);
  const [playlistArr, setPlaylistArr] = React.useState<playList[]>([]);

  const changeMenu = React.useCallback(({ target }) => {
    if (target.id) {
      setNowMen(target.id);
    }
  }, []);

  React.useEffect(() => {
    profile
      .getUserMusic(user_id, 1)
      .then((res) => {
        setMusicList(res.data.songs);
      })
      .catch(() => {
        return;
      });
  }, []);

  React.useEffect(() => {
    playlist
      .getUserPlaylist(user_id)
      .then((res) => {
        setPlaylistArr(res.data);
      })
      .catch(() => {
        return;
      });
  }, []);

  return (
    <>
      <S.UserInforWrap onClick={changeMenu}>
        <UserInforMenu
          isCheck={menuObj.song === nowMenu}
          id={menuObj.song}
          contents="전체트랙"
        />
        <UserInforMenu
          isCheck={menuObj.playlist === nowMenu}
          id={menuObj.playlist}
          contents="플레이리스트"
        />
        <UserInforMenu
          isCheck={menuObj.follow === nowMenu}
          id={menuObj.follow}
          contents="팔로우"
        />
        <UserInforMenu
          isCheck={menuObj.follower === nowMenu}
          id={menuObj.follower}
          contents="팔로워"
        />
      </S.UserInforWrap>
      {menuObj.song === nowMenu && (
        <MusicColumnCardList musicList={musicList} />
      )}
      {menuObj.playlist === nowMenu && (
        <PlaylistCardList playlistArr={playlistArr} />
      )}
    </>
  );
}
