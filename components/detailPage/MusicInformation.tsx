import * as S from "./styles";
import PlayIcon from "./../../assets/play";
import DateIcon from "./../../assets/date";
import { InforIcon } from "../../assets";
import { musicObject } from "../../lib/interfaces/music";
import { getDate } from "./../../lib/util/getDate";
import React from "react";
import { setValue } from "./../../lib/context/index";
import { useRouter } from "next/dist/client/router";

interface props {
  musicObj: musicObject;
}

export default function MusicInformation({ musicObj }: props) {
  const dispatch = setValue();
  const router = useRouter();

  const musicChange = () => {
    dispatch({
      type: "MUSIC_CHANGE",
      musicInformation: {
        title: musicObj.title,
        artist: musicObj.artist,
        cover_url: musicObj.cover_url,
        song_url: musicObj.song_url,
        song_id: musicObj.song_id,
      },
    });
  };
  return (
    <S.InforWrap>
      <img className="cover-image" src={musicObj.cover_url} />
      <div className="infor-container">
        <div className="title-wrap">
          <button onClick={musicChange}>
            <PlayIcon size={16} callback={() => {}} />
          </button>
          <h1>{musicObj.title}</h1>
        </div>
        <div className="musician">
          <span>Music by</span>
          <h5 onClick={() => router.push(`/profile?id=${musicObj.user_id}`)}>
            {musicObj.artist}
          </h5>
        </div>
        <div className="sub-info">
          <div>
            <DateIcon />
            <span>{getDate(musicObj.created_at)}</span>
          </div>
          <div>
            <InforIcon />
            <span>싱글음악</span>
          </div>
        </div>
        <div className="tag-wrap">
          <div>#{musicObj.genre} 음악</div>
          <div>#{musicObj.mood}</div>
        </div>
        <div className="description">{musicObj.description}</div>
      </div>
    </S.InforWrap>
  );
}
