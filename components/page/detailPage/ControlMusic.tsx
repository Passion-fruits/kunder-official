import { CoinIcon, HeartIcon } from "../../../assets";
import * as S from "./styles";
import { COLOR } from "../../../styles/index";
import PlayListAddIcon from "../../../assets/playListAdd";
import React from "react";
import music from "../../../api/music";
import { useRouter } from "next/dist/client/router";
import { comment, musicCardObject } from "../../../lib/interfaces/music";
import { toast } from "react-toastify";
import { ACCESS_TOKEN } from "../../../lib/export/localstorage";
import Comment from "./Comment";
import { setValue } from "../../../lib/context/index";

interface props {
  musicObj: musicCardObject;
}

export default function ControlMusic({ musicObj }: props) {
  const [likeCnt, setLikeCnt] = React.useState<number>();
  const [isLike, setIsLike] = React.useState<boolean>(false);
  const [commentList, setCommentList] = React.useState<comment[]>([]);
  const commentRef = React.useRef(null);
  const dispatch = setValue();

  React.useEffect(() => {
    setLikeCnt(parseInt(musicObj.like.toString()));
  }, [musicObj]);

  React.useEffect(() => {
    music
      .checkIsLike(musicObj.song_id)
      .then((res) => {
        res.data.is_like ? setIsLike(true) : setIsLike(false);
      })
      .catch(() => {
        return;
      });
  }, [musicObj]);

  const pushLike = React.useCallback(() => {
    if (!window.localStorage.getItem(ACCESS_TOKEN)) {
      toast.info("로그인 후 이용해주세요.");
      return;
    }
    if (isLike) {
      setIsLike(false);
      setLikeCnt(likeCnt - 1);
      music
        .deleteLike(musicObj.song_id)
        .then(() => {
          return;
        })
        .catch(() => {
          return;
        });
    } else {
      setIsLike(true);
      setLikeCnt(likeCnt + 1);
      music
        .pushLike(musicObj.song_id)
        .then(() => {
          return;
        })
        .catch(() => {
          return;
        });
    }
  }, [likeCnt, isLike]);

  const addMusicToPlaylist = React.useCallback(() => {
    dispatch({
      type: "SET_MODAL",
      modal: "addPlayList",
    });
    dispatch({
      type: "SET_MUSIC_ID",
      song_id: musicObj.song_id,
    });
  }, [musicObj]);

  const sendComment = (event: React.FormEvent) => {
    event.preventDefault();
    const commentContents = commentRef.current.value;
    if (commentContents) {
      music
        .sendComment(musicObj.song_id, commentContents)
        .then(() => {
          commentRef.current.value = "";
          getComment();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            toast.info("이미 댓글을 작성하셨습니다.");
            return;
          }
          if (err.response.status === 401) {
            toast.info("로그인 후 이용해주세요");
            return;
          }
          toast.error("에러가 발생하였습니다.");
        });
    }
  };

  const getComment = React.useCallback(() => {
    music
      .getMusicComment(musicObj.song_id)
      .then((res) => {
        setCommentList(res.data);
      })
      .catch(() => {
        setCommentList([]);
        return;
      });
  }, [musicObj.song_id]);

  React.useEffect(() => {
    getComment();
  }, [musicObj]);

  return (
    <>
      <S.ControlMusicContainer>
        <div className="btn-container">
          <button onClick={pushLike}>
            <HeartIcon
              size={18}
              callback={() => {}}
              isLike={isLike}
              color={COLOR.gray_text}
            />
            {likeCnt}
          </button>
          <button onClick={addMusicToPlaylist}>
            <PlayListAddIcon size={16} /> 추가
          </button>
          {/*           <button>
            <CoinIcon size={23} /> 후원하기
          </button> */}
        </div>
        <form onSubmit={sendComment}>
          <input
            type="text"
            ref={commentRef}
            placeholder="댓글을 작성하여 의견을 남겨주세요"
            id="focus"
          />
        </form>
      </S.ControlMusicContainer>
      <Comment commentList={commentList} />
    </>
  );
}
