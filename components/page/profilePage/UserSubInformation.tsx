import * as S from "./styles";
import React from "react";
import UserInforMenu from "./UserInforMenu";
import MusicColumnCardList from "../../common/MusicColumnCardList";
import { musicCardObject } from "../../../lib/interfaces/music";
import profile from "../../../api/profile";
import playlist from "../../../api/playlist";
import PlaylistCardList from "../../common/PlaylistCardList";
import { playList } from "../../../lib/interfaces/playlist";
import { profileCard } from "../../../lib/interfaces/profile";
import ProfileCardList from "../../common/Modal/ProfileCardList";
import { useRouter } from "next/dist/client/router";
import { isScreenBottom } from "./../../../lib/util/isScreenBottom";

export default function UserSubInformation({ user_id }) {
  const router = useRouter();
  const [musicList, setMusicList] = React.useState<musicCardObject[]>([]);
  const [playlistArr, setPlaylistArr] = React.useState<playList[]>([]);
  const [followerArr, setFollowerArr] = React.useState<profileCard[]>([]);
  const [followingArr, setFollowingArr] = React.useState<profileCard[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [nowMenu, setNowMen] = React.useState<
    "song" | "playlist" | "follower" | "following"
  >("song");

  const changeMenu = React.useCallback(
    ({ target }) => {
      const id = target.id;
      if (id) {
        setNowMen(id);
        router.push(`/profile?id=${router.query.id}&menu=${id}`);
      }
    },
    [router]
  );

  const getUserMusic = React.useCallback(() => {
    console.log(page);
    profile
      .getUserMusic(user_id, page)
      .then((res) => {
        setMusicList(musicList.concat(res.data.songs));
      })
      .catch(() => {
        return;
      });
  }, [user_id, page, musicList]);

  const getUserPlaylist = React.useCallback(() => {
    playlist
      .getUserPlaylist(user_id)
      .then((res) => {
        setPlaylistArr(res.data);
      })
      .catch(() => {
        return;
      });
  }, [user_id, page]);

  const getUserFollower = React.useCallback(() => {
    profile
      .getUserFollower({ user_id: user_id, page: 1 })
      .then((res) => {
        setFollowerArr(res.data.followers);
      })
      .catch(() => {
        return;
      });
  }, [user_id, page]);

  const getUserFollowing = React.useCallback(() => {
    profile
      .getUserFollowing({ user_id: user_id, page: 1 })
      .then((res) => {
        setFollowingArr(res.data.followings);
      })
      .catch(() => {
        return;
      });
  }, [user_id, page]);

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
  }, [user_id, nowMenu, page]);

  React.useEffect(() => {
    setPage(1);
  }, [user_id, nowMenu]);

  React.useEffect(() => {
    let page = 1;
    window.addEventListener("scroll", () => {
      if (isScreenBottom()) {
        page += 1;
        setPage(page);
      }
    });
  }, []);

  React.useEffect(() => {
    setMusicList([]);
    setPlaylistArr([]);
    setFollowerArr([]);
    setFollowingArr([]);
  }, [user_id]);

  React.useEffect(() => {
    const menu: any = router.query.menu;
    if (menu) {
      setNowMen(menu.toString());
    } else {
      setNowMen("song");
    }
  }, [router]);

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
