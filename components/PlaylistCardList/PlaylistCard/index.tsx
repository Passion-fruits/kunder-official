import { PlaylistIcon } from "../../../assets";
import * as S from "./styles";
import { playList } from "../../../lib/interfaces/playlist";
import { useRouter } from "next/dist/client/router";
import React from "react";

export default function PlayListCard({
  name,
  author,
  cover_url,
  playlist_id,
  like,
}: playList) {
  const router = useRouter();
  const [coverImg, setCoverImg] = React.useState<string>("/playlist.png");
  React.useEffect(() => {
    const img = new Image();
    img.src = cover_url;
    img.onload = () => {
      cover_url && setCoverImg(cover_url);
    };
  }, []);
  return (
    <S.Wrapper>
      <S.ResponsiveWrap>
        <div className="cover-image-wrap">
          <img
            src={coverImg}
            onClick={() => router.push(`/playlist?id=${playlist_id}`)}
          />
          <div className="bottom-wrap">
            <PlaylistIcon size={13} />
          </div>
        </div>
      </S.ResponsiveWrap>
      <h3 className="title">{name}</h3>
      <h5 className="user-name">
        <span>만든사람</span> {author}
      </h5>
    </S.Wrapper>
  );
}
