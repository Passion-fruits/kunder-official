import * as S from "./styles";
import React from "react";
import UserInforMenu from "./UserInforMenu";
import MusicColumnCardList from "../../MusicColumnCardList";
import { musicCardObject } from "../../../lib/interfaces/music";
import profile from "../../../api/profile";
import playlist from "../../../api/playlist";
import PlaylistCardList from "../../PlaylistCardList";
import { playList } from "../../../lib/interfaces/playlist";
import { profileCard } from "../../../lib/interfaces/profile";
import ProfileCardList from "../../ProfileCardList";

export default function UserSubInformation({ user_id }) {
  const [musicList, setMusicList] = React.useState<musicCardObject[]>([]);
  const [playlistArr, setPlaylistArr] = React.useState<playList[]>([]);
  const [followerArr, setFollowerArr] = React.useState<profileCard[]>([]);
  const [followingArr, setFollowingArr] = React.useState<profileCard[]>([]);
  const [nowMenu, setNowMen] = React.useState<
    "song" | "playlist" | "follower" | "following"
  >("song");

  const changeMenu = React.useCallback(({ target }) => {
    if (target.id) {
      setNowMen(target.id);
    }
  }, []);

  const getUserMusic = React.useCallback(() => {
    profile
      .getUserMusic(user_id, 1)
      .then((res) => {
        setMusicList(res.data.songs);
      })
      .catch(() => {
        return;
      });
  }, [user_id]);

  const getUserPlaylist = React.useCallback(() => {
    playlist
      .getUserPlaylist(user_id)
      .then((res) => {
        setPlaylistArr(res.data);
      })
      .catch(() => {
        return;
      });
  }, [user_id]);

  const getUserFollower = React.useCallback(() => {
    profile
      .getUserFollower({ user_id: user_id, page: 1 })
      .then((res) => {
        setFollowerArr(res.data.followers);
      })
      .catch(() => {
        return;
      });
  }, [user_id]);

  const getUserFollowing = React.useCallback(() => {
    profile
      .getUserFollowing({ user_id: user_id, page: 1 })
      .then((res) => {
        setFollowingArr(res.data.followings);
      })
      .catch(() => {
        return;
      });
  }, [user_id]);

  React.useEffect(() => {
    switch (nowMenu) {
      case "song":
        getUserMusic();
        break;
      case "playlist":
        getUserPlaylist();
        break;
      case "follower":
        getUserFollower();
        return;
      case "following":
        getUserFollowing();
        return;
    }
  }, [user_id, nowMenu]);

  React.useEffect(() => {
    setMusicList([]);
    setPlaylistArr([]);
    setFollowerArr([]);
    setFollowingArr([]);
  }, [user_id]);

  return (
    <>
      <S.UserInforWrap onClick={changeMenu}>
        <UserInforMenu
          isCheck={nowMenu === "song"}
          id="song"
          contents="전체트랙"
        />
        <UserInforMenu
          isCheck={nowMenu === "playlist"}
          id="playlist"
          contents="플레이리스트"
        />
        <UserInforMenu
          isCheck={nowMenu === "follower"}
          id="follower"
          contents="팔로워"
        />
        <UserInforMenu
          isCheck={nowMenu === "following"}
          id="following"
          contents="팔로잉"
        />
      </S.UserInforWrap>
      {nowMenu === "song" ? (
        <MusicColumnCardList musicList={musicList} />
      ) : nowMenu === "playlist" ? (
        <PlaylistCardList playlistArr={playlistArr} />
      ) : nowMenu === "follower" ? (
        <ProfileCardList profileList={followerArr} />
      ) : nowMenu === "following" ? (
        <ProfileCardList profileList={followingArr} />
      ) : (
        <></>
      )}
    </>
  );
}
