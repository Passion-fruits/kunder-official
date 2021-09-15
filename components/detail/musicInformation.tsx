import { getDate } from "./../../lib/util/getDate";
import { COLOR } from "./../../styles/index";
import { useRouter } from "next/dist/client/router";
import { resizing } from "./../../lib/util/resizing";
import { setValue } from "./../../lib/context/index";
import { genreList } from "../../lib/export/genre";
import { toast } from "react-toastify";
import * as S from "./styles";
import React from "react";
import HeartIcon from "../../assets/heart";
import PlayIcon from "./../../assets/play";
import music from "../../api/music";

export default function MusicInformation({
  cover_url,
  title,
  artist,
  genre,
  mood,
  created_at,
  like,
  user_id,
  description,
  song_url,
}) {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = setValue();
  const [isLike, setIsLike] = React.useState<boolean>(false);
  const [likeCnt, setLikeCnt] = React.useState<number>(parseInt(like));

  const routingToUserProfile = React.useCallback(() => {
    router.push(`/profile?id=${user_id}`);
  }, [user_id]);

  const changeMusic = React.useCallback(() => {
    dispatch({
      type: "MUSIC_CHANGE",
      musicInformation: {
        title: title,
        artist: artist,
        song_id: router.query.id.toString(),
        song_url: song_url,
        cover_url: cover_url,
      },
    });
  }, []);

  const routingToGenre = React.useCallback(({ target }) => {
    router.push(`/all?genre=${genreList.indexOf(target.id) + 1}&page=1&sort=1`);
  }, []);

  const pushLike = React.useCallback(() => {
    setIsLike(true);
    setLikeCnt(likeCnt + 1);
    music
      .pushLike(id)
      .then((res) => {
        if (res.data.message === "success") {
          toast.success("좋아요를 표시하였습니다.");
        }
      })
      .catch((err) => {
        const status = err.response.status;
        if (status === 401) {
          toast.info("로그인 후 이용해주세요.");
        } else {
          toast.error("에러가 발생하였습니다.");
        }
        setIsLike(false);
        setLikeCnt(likeCnt);
      });
  }, [likeCnt]);

  const deleteLike = React.useCallback(() => {
    setIsLike(false);
    setLikeCnt(likeCnt - 1);
    music
      .deleteLike(id)
      .then((res) => {
        if (res.data.message === "success") {
          toast.success("좋아요를 취소하였습니다.");
        }
      })
      .catch((err) => {
        const status = err.response.status;
        if (status === 401) {
          toast.info("로그인 후 이용해주세요.");
        } else {
          toast.error("에러가 발생하였습니다.");
        }
        setIsLike(true);
        setLikeCnt(likeCnt);
      });
  }, [likeCnt]);

  React.useEffect(() => {
    if (song_url) {
      const WaveSurfer = require("wavesurfer.js");
      const wavesurfer =
        WaveSurfer.create &&
        WaveSurfer.create({
          container: "#waveform",
          waveColor: "#E6E6E6",
          progressColor: COLOR.main,
          barWidth: "2",
          cursorColor: "transparent",
          barHeight: "0.7",
        });
      typeof wavesurfer.load !== "undefined" && wavesurfer.load(song_url);
    }
  }, [song_url]);

  React.useEffect(() => {
    resizing(user_id);
  }, [description]);

  React.useEffect(() => {
    if (id) {
      music
        .checkIsLike(id)
        .then((res) => {
          res.data.is_like ? setIsLike(true) : setIsLike(false);
        })
        .catch(() => {
          return;
        });
    }
  }, [router]);

  return (
    <>
      <>
        <S.MusicInformationWrapper>
          <S.CoverImgWrap>
            <img src={cover_url} />
            <button onClick={changeMusic}>
              <PlayIcon size={15} callback={changeMusic} color="white" />
            </button>
          </S.CoverImgWrap>
          <S.MusicInformationTextCotainer>
            <time>{`최초공개 ${getDate(created_at)}`}</time>
            <div onClick={routingToUserProfile} className="artist-name">
              <span>{artist}</span>
            </div>
            <div className="music-title">
              <span>{title}</span>
            </div>
            <div id="waveform" />
          </S.MusicInformationTextCotainer>
        </S.MusicInformationWrapper>
      </>
      <>
        <S.MusicIconContainer>
          <S.GenreWrap>
            <button id={genre} onClick={routingToGenre}>
              #{genre}
            </button>
            <button>#{mood}</button>
          </S.GenreWrap>
          <S.MusicLikeContainer>
            <HeartIcon
              isLike={isLike}
              size={20}
              callback={isLike ? deleteLike : pushLike}
              color={COLOR.main}
            />
            <span>{likeCnt}</span>
          </S.MusicLikeContainer>
        </S.MusicIconContainer>
      </>
      <>
        <S.MusicDescription defaultValue={description} id={user_id} readOnly />
      </>
    </>
  );
}
