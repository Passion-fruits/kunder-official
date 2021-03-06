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
  const pageRef = React.useRef(page);
  const [isChange, setIsChange] = React.useState<boolean>(true);

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

  const getUserMusic = () => {
    profile
      .getUserMusic(user_id, page)
      .then((res) => {
        setMusicList(musicList.concat(res.data.songs));
      })
      .catch(() => {
        return;
      });
  };

  const getUserPlaylist = () => {
    playlist
      .getUserPlaylist(user_id)
      .then((res) => {
        setPlaylistArr(res.data);
      })
      .catch(() => {
        return;
      });
  };

  const getUserFollower = () => {
    profile
      .getUserFollower({ user_id: user_id, page: page })
      .then((res) => {
        setFollowerArr(followerArr.concat(res.data.followers));
      })
      .catch(() => {
        return;
      });
  };

  const getUserFollowing = () => {
    profile
      .getUserFollowing({ user_id: user_id, page: page })
      .then((res) => {
        setFollowingArr(followingArr.concat(res.data.followings));
      })
      .catch(() => {
        return;
      });
  };

  // ????????? ??????????????? isChange??? flase???
  React.useEffect(() => {
    setIsChange(false);
    setMusicList([]);
    setPlaylistArr([]);
    setFollowerArr([]);
    setFollowingArr([]);
  }, [router.query, nowMenu]);

  // page??? 1??? ?????? ???????????? ??????????????? ????????????????????? isChange??? true???
  React.useEffect(() => {
    setPage(1);
    pageRef.current = 1;
    setIsChange(true);
  }, [user_id, nowMenu, isChange]);

  // ?????? ????????? ????????????? api ??????
  React.useEffect(() => {
    if (isChange) {
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
    }
  }, [user_id, nowMenu, page, isChange]);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (isScreenBottom() && window.scrollY > 50) {
        setPage(pageRef.current + 1);
        pageRef.current += 1;
      }
    });
  }, []);

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
          contents="????????????"
        />
        <UserInforMenu
          isCheck={nowMenu === "playlist"}
          id="playlist"
          contents="??????????????????"
        />
        <UserInforMenu
          isCheck={nowMenu === "follower"}
          id="follower"
          contents="?????????"
        />
        <UserInforMenu
          isCheck={nowMenu === "following"}
          id="following"
          contents="?????????"
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
