import * as S from "./styles";
import React from "react";
import { comment } from "../../../../lib/interfaces/music";
import { getDate } from "../../../../lib/util/getDate";
import { useRouter } from "next/dist/client/router";
import { setValue } from "../../../../lib/context/index";

export default function Comment({
  name,
  profile,
  created_at,
  comment_content,
  user_id,
}: comment) {
  const router = useRouter();
  const dispatch = setValue();
  const routingToProfile = React.useCallback(() => {
    dispatch({
      type: "SET_MODAL",
      modal: null,
    });
    router.push(`/profile?id=${user_id}`);
  }, [user_id]);
  return (
    <S.CommentWrap>
      <img src={profile} onClick={routingToProfile} />
      <div className="infor-container">
        <div className="writer-date">
          <h3>{name.slice(0, 10)}</h3>
          <span>{getDate(created_at)}</span>
        </div>
        <p className="contents">{comment_content}</p>
      </div>
    </S.CommentWrap>
  );
}
