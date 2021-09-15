import * as S from "../styles";
import Menu from "./menu";

export default function MenuList({
  menu,
  callback,
  songCnt,
  followerCnt,
  followingCnt,
}) {
  return (
    <S.Menu>
      <Menu
        contents="노래"
        cnt={songCnt}
        nowMenu={menu}
        menu="song"
        callback={callback}
      />
      <Menu
        contents="팔로워"
        cnt={followerCnt}
        nowMenu={menu}
        menu="follower"
        callback={callback}
      />
      <Menu
        contents="팔로잉"
        cnt={followingCnt}
        nowMenu={menu}
        menu="following"
        callback={callback}
      />
      <Menu
        contents="플레이리스트"
        cnt="0"
        nowMenu={menu}
        menu="playlist"
        callback={callback}
      />
    </S.Menu>
  );
}
