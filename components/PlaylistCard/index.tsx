import { PlaylistIcon } from "../../assets";
import * as S from "./styles";
import { playList } from "./../../lib/interfaces/playlist";
import { useRouter } from "next/dist/client/router";

export default function PlayListCard({
  name,
  author,
  cover_url,
  playlist_id,
  like,
}: playList) {
  const router = useRouter();
  return (
    <S.Wrapper>
      <div className="cover-image-wrap">
        <img
          src={cover_url ? cover_url : "/playlist.png"}
          onClick={() => router.push(`/playlist?id=${playlist_id}`)}
        />
        <div className="bottom-wrap">
          <PlaylistIcon size={13} />
        </div>
      </div>
      <h3 className="title">{name}</h3>
      <h5 className="user-name">
        <span>by</span> {author}
      </h5>
    </S.Wrapper>
  );
}
