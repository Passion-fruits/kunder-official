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
          <div className="recommend-playlist">
            <div
              className="cover"
              style={
                index === 0
                  ? {
                      background:
                        "linear-gradient(134.42deg, rgba(249, 102, 120, 0.8) 7.99%, rgba(95, 156, 119, 0.7) 92.85%)",
                    }
                  : index === 1
                  ? {
                      background:
                        "linear-gradient(134.42deg, rgba(70, 99, 255, 0.7) 7.99%, rgba(91, 255, 165, 0.7) 92.85%, rgba(95, 156, 119, 0.7) 92.85%)",
                    }
                  : index === 2
                  ? {
                      background:
                        "linear-gradient(134.96deg, rgba(172, 151, 255, 0.65) 17.06%, rgba(99, 152, 255, 0.65) 101.79%)",
                    }
                  : index === 3
                  ? {
                      background:
                        "linear-gradient(134.96deg, rgba(255, 70, 192, 0.7) 17.06%, rgba(82, 255, 214, 0.7) 101.79%)",
                    }
                  : index === 4
                  ? {
                      background:
                        " linear-gradient(134.96deg, rgba(125, 130, 255, 0.7) 17.06%, rgba(255, 192, 147, 0.7) 101.79%)",
                    }
                  : index === 5
                  ? {
                      background:
                        "linear-gradient(134.96deg, rgba(70, 210, 255, 0.7) 17.06%, rgba(255, 147, 212, 0.7) 101.79%)",
                    }
                  : {}
              }
            >
              Daily Mix
              <br /> #{index + 1}
            </div>
            <img src={coverImg} />
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
