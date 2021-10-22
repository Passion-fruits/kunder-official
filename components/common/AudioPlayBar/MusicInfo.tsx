import { useRouter } from "next/dist/client/router";
import * as S from "./styled";

export default function MusicInfo({ coverImg, title, name, songId }) {
  const router = useRouter();

  const routingToMusicDetail = () => {
    songId && router.push(`/detail?id=${songId}`);
  };

  return (
    <S.Info>
      {coverImg ? (
        <img
          src={coverImg}
          onClick={routingToMusicDetail}
          className="cover-image"
        />
      ) : (
        <div className="none-img"></div>
      )}
      <div>
        <h3 onClick={routingToMusicDetail} className="music-title">
          {title}
        </h3>
        <span className="musician-name">{name}</span>
      </div>
    </S.Info>
  );
}
