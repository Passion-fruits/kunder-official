import { HeartIcon, PlayIcon } from "../../assets";
import { COLOR } from "../../styles";
import { getDate } from "./../../lib/util/getDate";
import { setValue } from "./../../lib/context/index";
import { useRouter } from "next/dist/client/router";
import * as S from "./styles";
import React from "react";

export default function MusicListCard({
  indexNumber,
  title,
  artist,
  genre,
  mood,
  like,
  cover_url,
  song_url,
  song_id,
  artist_id,
  created_at,
}) {
  const router = useRouter();
  const dispatch = setValue();

  const routingToUserProfile = React.useCallback(() => {
    router.push(`/profile?id=${artist_id}`);
  }, [artist_id]);

  const routingToMusicDetail = React.useCallback(() => {
    router.push(`/detail?id=${song_id}`);
  }, [song_id]);

  const changeMusic = React.useCallback(() => {
    dispatch({
      type: "MUSIC_CHANGE",
      musicInformation: {
        title: title,
        cover_url: cover_url,
        song_id: song_id,
        song_url: song_url,
        artist: artist,
      },
    });
  }, [song_url]);

  return (
    <S.Wrapper>
      <S.MusicInformatino className="list-contents">
        <div className="index-number">{indexNumber}</div>
        <button className="play-button" onClick={changeMusic}>
          <PlayIcon size={13} callback={changeMusic} color="#DBDBDB" />
        </button>
        <img
          className="cover-img"
          onClick={routingToMusicDetail}
          src={cover_url}
        />
        <div className="music-title-writter">
          <h3 onClick={routingToMusicDetail}>{title}</h3>
          <h5 onClick={routingToUserProfile}>{artist}</h5>
        </div>
      </S.MusicInformatino>
      <S.MusicGenreMood className="list-contents">
        <div>
          <span>{genre}음악</span>
        </div>
        <div>
          <span>{mood}</span>
        </div>
        <div>
          <span>{getDate(created_at)}</span>
        </div>
      </S.MusicGenreMood>
      <S.HeartCotainer>
        <HeartIcon color={COLOR.main} size={20} callback={() => {}} />
        <span>{like}</span>
      </S.HeartCotainer>
    </S.Wrapper>
  );
}
