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
  index,
}: playList) {
  const router = useRouter();
  const [coverImg, setCoverImg] = React.useState<string>("/playlist.png");

  React.useEffect(() => {
    const img = new Image();
    img.src = cover_url;
    img.onload = () => {
      cover_url && setCoverImg(cover_url);
    };
  }, [cover_url]);

  return (
    <S.Wrapper onClick={() => router.push(`/playlist?id=${playlist_id}`)}>
      <S.ResponsiveWrap>
        <div className="sqaure square1" />
        <div className="sqaure square2" />
        {playlist_id === 0 ? (
          <div
            className="recommend-cover"
            style={
              index === 0
                ? {
                    background: "linear-gradient(-45deg,#FF2D26,#FE4FBE)",
                  }
                : index === 1
                ? {
                    background: "linear-gradient(-45deg,#2659FF,#10CFA8)",
                  }
                : index === 2
                ? {
                    background: "linear-gradient(-45deg,#B83DE4,#428BDF)",
                  }
                : index === 3
                ? {
                    background: "linear-gradient(-45deg,#FF9270,#FF3939)",
                  }
                : index === 4
                ? {
                    background: "linear-gradient(-45deg,#07DE00,#7B8DFF)",
                  }
                : index === 5
                ? {
                    background: "linear-gradient(-45deg,#E43D80,#B142DF)",
                  }
                : {}
            }
          >
            <h1>추천믹스{index + 1}</h1>
            <p>
              Mix For You
              <br /> #{index + 1}
            </p>
          </div>
        ) : playlist_id ? (
          <img src={coverImg} className="cover-img" />
        ) : (
          <div className="none" />
        )}
      </S.ResponsiveWrap>
      <h1 className="title text-overflow">{name}</h1>
      <h3 className="musician text-overflow">By {author}</h3>
    </S.Wrapper>
  );
}
