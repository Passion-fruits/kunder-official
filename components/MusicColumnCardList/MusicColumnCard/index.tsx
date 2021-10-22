import { HeartIcon, PlayIcon } from "../../../assets";
import { musicCardObject } from "../../../lib/interfaces/music";
import * as S from "./styles";
import { setValue } from "../../../lib/context/index";
import { useRouter } from "next/dist/client/router";
import { COLOR } from "../../../styles/index";
import PlayListAddIcon from "../../../assets/playListAdd";
import React from "react";

export default function MusicColumnCard({
  title,
  artist,
  cover_url,
  song_id,
  song_url,
  like,
  genre,
}: musicCardObject) {
  const dispatch = setValue();
  const router = useRouter();
  const [coverImg, setCoverImg] = React.useState<string>("/playlist.png");

  const routingToDetail = (): void => {
    router.push(`/detail?id=${song_id}`);
  };

  const musicChange = (event) => {
    event.stopPropagation();
    dispatch({
      type: "MUSIC_CHANGE",
      musicInformation: {
        title: title,
        artist: artist,
        cover_url: cover_url,
        song_url: song_url,
        song_id: song_id,
      },
    });
  };

  const addMusicToPlaylist = () => {
    dispatch({
      type: "SET_MODAL",
      modal: "addPlayList",
    });
    dispatch({
      type: "SET_MUSIC_ID",
      song_id: song_id,
    });
  };

  const setCoverImgToLoading = (): any =>
    new Promise((resolve) => {
      const img = new Image();
      img.src = cover_url;
      img.onload = () => {
        resolve({
          isOnload: true,
        });
      };
    });

  React.useEffect(() => {
    let isComponentMounted = true;
    setCoverImgToLoading().then((res) => {
      if (isComponentMounted) {
        if (res.isOnload) setCoverImg(cover_url);
      }
    });
    return () => {
      isComponentMounted = false;
    };
  }, []);

  return (
    <S.Wrapper>
      <S.ResponsiveWrap>
        <div className="cover-image-wrap">
          <div className="cover" onClick={routingToDetail}>
            <S.PlayBtn onClick={musicChange}>
              <PlayIcon size={17} color="white" callback={() => {}} />
            </S.PlayBtn>
          </div>
          <img src={coverImg} />
        </div>
      </S.ResponsiveWrap>
      <div className="music-title" onClick={routingToDetail}>
        {title}
      </div>
      <h3 className="musician-name" id="noto">
        {artist}
      </h3>
      <S.IconWrap>
        <div className="like">
          <HeartIcon size={11} callback={() => {}} color={COLOR.green_main} />
          {like}
        </div>
        <div className="genre">#{genre}</div>
        <button className="add-playlist" onClick={addMusicToPlaylist}>
          <PlayListAddIcon size={12} color={COLOR.gray_subText} />
        </button>
      </S.IconWrap>
    </S.Wrapper>
  );
}
