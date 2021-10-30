import { HeartIcon, PlayIcon } from "../../../assets";
import { playlistInfor } from "../../../lib/interfaces/playlist";
import * as S from "./styles";
import { getDate } from "../../../lib/util/getDate";
import { setValue, getValue } from "../../../lib/context/index";
import React from "react";
import { toast } from "react-toastify";
import UpdateIcon from "../../../assets/update";
import { USER_ID } from "../../../lib/export/localstorage";
import { useRouter } from "next/dist/client/router";

export default function PlaylistInformation({
  name,
  author,
  like,
  cover_url,
  playlist_id,
  created_at,
  user_id,
  songs,
}: playlistInfor) {
  const dispatch = setValue();
  const router = useRouter();

  const startPlaylist = () => {
    if (songs.length > 0) {
      dispatch({
        type: "MUSIC_CHANGE",
        musicInformation: {
          title: songs[0].title,
          cover_url: songs[0].cover_url,
          song_url: songs[0].song_url,
          song_id: songs[0].song_id,
          artist: songs[0].artist,
        },
      });
      dispatch({
        type: "SET_MUSIC_LIST",
        list: songs,
      });
    } else {
      toast.info("곡이 없습니다.");
    }
  };

  const updatePlaylist = React.useCallback(() => {
    dispatch({
      type: "SET_MODAL",
      modal: "updatePlaylist",
    });
  }, []);

  return (
    <S.InforWrap>
      {user_id ? (
        <img
          src={cover_url ? cover_url : "/playlist.png"}
          className="cover-image"
        />
      ) : (
        <div className="recommend-cover" />
      )}
      <div className="infor-container">
        <div className="playlist-intro">
          <h5>플레이리스트</h5>
          <span>
            <b>{like}명</b>이 좋아합니다.
          </span>
        </div>
        <h1 className="playlist-title">{name}</h1>
        <div className="playlist-sub-infor">
          <h3>
            만든사람{" "}
            <b onClick={() => router.push(`/profile?id=${user_id}`)}>
              {author}
            </b>
          </h3>
          <div className="circle" />
          <h3>
            최초공개 <b>{getDate(created_at)}</b>
          </h3>
        </div>
        <div className="control-wrap">
          <button className="play-btn" onClick={startPlaylist}>
            <PlayIcon callback={() => {}} size={20} />
          </button>
          <HeartIcon callback={() => {}} size={35} color="white" />
        </div>
        {localStorage.getItem(USER_ID) === user_id.toString() && (
          <button className="update-button" onClick={updatePlaylist}>
            <UpdateIcon />
          </button>
        )}
      </div>
    </S.InforWrap>
  );
}
