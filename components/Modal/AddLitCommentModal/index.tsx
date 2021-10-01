import { getValue } from "../../../lib/context";
import * as S from "./styles";
import React from "react";
import music from "../../../api/music";
import { comment } from "../../../lib/interfaces/music";
import { getDate } from "./../../../lib/util/getDate";
import { toast } from "react-toastify";
import Comment from "./Comment";

export default function AddLitCommentModal() {
  const song_id = getValue().song_id;
  const [commentArr, setCommentArr] = React.useState<comment[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const getComment = React.useCallback(() => {
    music
      .getMusicComment(song_id)
      .then((res) => {
        setCommentArr(res.data);
      })
      .catch(() => {
        return;
      });
  }, [song_id]);

  const sendComment = React.useCallback(
    (event: React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      const commentValue = inputRef.current.value;
      if (commentValue.length === 0) return;
      music
        .sendComment(song_id, commentValue)
        .then(() => {
          getComment();
          inputRef.current.value = "";
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
        });
    },
    []
  );

  React.useEffect(() => {
    getComment();
  }, [song_id]);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <S.Wrapper>
      <div className="title">댓글 ({commentArr.length})</div>
      <S.CommentArea>
        {commentArr.length === 0 ? (
          <div className="none">
            아직 댓글이 없습니다. <br /> 가장 먼저 댓글을 작성해보세요!
          </div>
        ) : (
          <>
            {commentArr.map((comment, index) => (
              <Comment
                key={index}
                profile={comment.profile}
                created_at={comment.created_at}
                name={comment.name}
                comment_content={comment.comment_content}
                user_id={comment.user_id}
              />
            ))}
          </>
        )}
      </S.CommentArea>
      <S.InputWrap>
        <form onSubmit={sendComment}>
          <input type="text" ref={inputRef} placeholder="댓글을 입력해주세요" />
        </form>
      </S.InputWrap>
    </S.Wrapper>
  );
}
