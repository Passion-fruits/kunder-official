import { comment } from "../../lib/interfaces/music";
import * as S from "./styles";
import { getDate } from "./../../lib/util/getDate";

interface props {
  commentList: comment[];
}

export default function Comment({ commentList }: props) {
  return (
    <S.CommentWrap>
      {commentList.length === 0 ? (
        <span className="none-comment">아직 댓글이 없습니다</span>
      ) : (
        <>
          {commentList.map((comment, index) => (
            <S.CommentContainer key={index}>
              <img className="cover-image" src={comment.profile} />
              <div className="comment-contents">
                <div className="writer-date">
                  <h3 id="noto">{comment.name}</h3>
                  <span>{getDate(comment.created_at)}</span>
                </div>
                <p className="description">{comment.comment_content}</p>
              </div>
            </S.CommentContainer>
          ))}
        </>
      )}
    </S.CommentWrap>
  );
}
