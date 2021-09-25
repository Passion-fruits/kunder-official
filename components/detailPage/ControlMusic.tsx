import { HeartIcon } from "../../assets";
import * as S from "./styles";
import { COLOR } from "./../../styles/index";
import PlayListAddIcon from "./../../assets/playListAdd";
import React from "react";
import music from "../../api/music";
import { useRouter } from "next/dist/client/router";
import { comment, musicObject } from "../../lib/interfaces/music";
import { toast } from "react-toastify";
import { ACCESS_TOKEN } from "./../../lib/export/localstorage";
import Comment from "./Comment";

interface props {
  musicObj: musicObject;
}

export default function ControlMusic({ musicObj }: props) {
  const [likeCnt, setLikeCnt] = React.useState<number>();
  const [isLike, setIsLike] = React.useState<boolean>(false);
  const [commentList, setCommentList] = React.useState<comment[]>([]);
  const commentRef = React.useRef(null);
  const router = useRouter();

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

  const sendComment = (event: React.FormEvent) => {
    event.preventDefault();
    const commentContents = commentRef.current.value;
    if (!window.localStorage.getItem(ACCESS_TOKEN)) {
      toast.info("로그인 후 이용해주세요.");
      return;
    }
    if (commentContents) {
      music
        .sendComment(musicObj.song_id, commentContents)
        .then(() => {
          commentRef.current.value = "";
          toast.success("댓글이 등록되었습니다");
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
          <button>
            <PlayListAddIcon /> 추가
          </button>
        </div>
        <form onSubmit={sendComment}>
          <input
            type="text"
            ref={commentRef}
            placeholder="댓글을 작성하여 의견을 남겨주세요"
          />
        </form>
      </S.ControlMusicContainer>
      <Comment commentList={commentList} />
    </>
  );
}
