import { PlaylistIcon } from "../../../../assets";
import * as S from "./styles";
import { playList } from "../../../../lib/interfaces/playlist";
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
    <S.Wrapper onClick={() => router.push(`/playlist?id=${playlist_id}`)}>
      <S.ResponsiveWrap>
        <div className="sqaure square1" />
        <div className="sqaure square2" />
        <img src={coverImg} className="cover-img" />
      </S.ResponsiveWrap>
      <h1 className="title text-overflow">{name}</h1>
    </S.Wrapper>
  );
}
