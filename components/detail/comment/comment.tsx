import { useRouter } from "next/dist/client/router";
import { getDate } from "../../../lib/util/getDate";

export default function CommentView({ user_id, src, name, date, contents }) {
  const router = useRouter();
  return (
    <article>
      <img
        onClick={() => router.push(`/profile?id=${user_id}`)}
        src={src}
      />
      <div className="comment-wrapper">
        <div className="comment-info">
          {name} <span>{getDate(date)}</span>
        </div>
        <p>{contents}</p>
      </div>
    </article>
  );
}
