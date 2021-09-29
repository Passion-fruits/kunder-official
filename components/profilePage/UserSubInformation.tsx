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
    follower: "follower",
    following: "following",
  };
  const [nowMenu, setNowMen] = React.useState<
    "song" | "playlist" | "follower" | "following"
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
        setMusicList([]);
      });
  }, [user_id]);

  React.useEffect(() => {
    if (nowMenu === menuObj.playlist) {
      playlist
        .getUserPlaylist(user_id)
        .then((res) => {
          setPlaylistArr(res.data);
        })
        .catch(() => {
          setPlaylistArr([]);
        });
    }
  }, [nowMenu, user_id]);

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
          isCheck={menuObj.follower === nowMenu}
          id={menuObj.follower}
          contents="팔로워"
        />
        <UserInforMenu
          isCheck={menuObj.following === nowMenu}
          id={menuObj.following}
          contents="팔로잉"
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
