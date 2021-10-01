import * as S from "./styles";
import HeartIcon from "./../../assets/heart";
import CommentIcon from "./../../assets/comment";
import PlayListAddIcon from "./../../assets/playListAdd";
import { musicCardObject } from "./../../lib/interfaces/music";
import { getDate } from "./../../lib/util/getDate";
import React from "react";
import Vibe from "./Vibe";
import { useRouter } from "next/dist/client/router";
import { getValue, setValue } from "./../../lib/context/index";

interface props extends musicCardObject {
  nowIndex?: boolean;
}

export default function LitCard({
  nowIndex = false,
  artist,
  title,
  cover_url,
  like,
  mood = "느낌있는",
  created_at,
  genre,
  song_id,
  indexNum,
  comment,
  description,
}: props) {
  const router = useRouter();
  const dispatch = setValue();
  const contextObj = getValue();

  const routingToDetail = React.useCallback(() => {
    router.push(`/detail?id=${song_id}`);
  }, [song_id]);

  const addMusicToPlaylist = React.useCallback(() => {
    dispatch({
      type: "SET_MODAL",
      modal: "addPlayList",
    });
    dispatch({
      type: "SET_MUSIC_ID",
      song_id: song_id,
    });
  }, [song_id]);

  const changeShowCard = () => {
    dispatch({
      type: "SET_MUSIC_LIST_INDEX",
      list_index: indexNum,
    });
    dispatch({
      type: "MUSIC_CHANGE",
      musicInformation: contextObj.list[indexNum],
    });
  };

  const addComment = React.useCallback(() => {
    dispatch({
      type: "SET_MODAL",
      modal: "addLitComment",
    });
    dispatch({
      type: "SET_MUSIC_ID",
      song_id: song_id,
    });
  }, [song_id]);

  return (
    <S.LitCard
      onClick={!nowIndex ? changeShowCard : () => {}}
      style={!nowIndex ? { cursor: "pointer" } : {}}
    >
      <div
        className="music-info-wrap"
        style={!nowIndex ? { pointerEvents: "none" } : {}}
        id={nowIndex ? "now-index-wrap" : ""}
      >
        <div className="square">
          <div className="cover-image-wrap">
            <div className="on-cover-info">
              <S.MusicSubInfoWrap>
                <div className="profile-wrap">
                  <img src="https://images.unsplash.com/photo-1586672806791-3a67d24186c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292ZXIlMjBhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" />
                  {nowIndex && <Vibe />}
                </div>
                <div className="tag-wrap">
                  <span>{genre}음악</span>
                  <span>{mood}</span>
                  <span>{getDate(created_at)}</span>
                </div>
                <button onClick={routingToDetail}>전체듣기{" >"}</button>
              </S.MusicSubInfoWrap>
              <S.IconWrap>
                <button>
                  <HeartIcon size={30} callback={() => {}} color="white" />
                  {like}
                </button>
                <button onClick={addComment}>
                  <CommentIcon size={30} />
                  {comment}
                </button>
                <button className="korean" onClick={addMusicToPlaylist}>
                  <PlayListAddIcon size={20} />
                  추가
                </button>
              </S.IconWrap>
            </div>
            <img src={cover_url} className="cover-img" />
          </div>
        </div>
        <h1 className="title">{title}</h1>
        <div className="description">{description}</div>
      </div>
    </S.LitCard>
  );
}
