import * as S from "./styles";
import PlayIcon from "./../../assets/play";
import DateIcon from "./../../assets/date";
import { InforIcon } from "../../assets";
import { musicObject } from "../../lib/interfaces/music";
import { getDate } from "./../../lib/util/getDate";
import React from "react";

interface props {
  musicObj: musicObject;
}

export default function MusicInformation({ musicObj }: props) {
  return (
    <S.InforWrap>
      <img className="cover-image" src={musicObj.cover_url} />
      <div className="infor-container">
        <div className="title-wrap">
          <button>
            <PlayIcon size={12} callback={() => {}} />
          </button>
          <h1>{musicObj.title}</h1>
        </div>
        <div className="musician">
          <span>Music by</span>
          <h5>{musicObj.artist}</h5>
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
