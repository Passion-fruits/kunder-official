import * as S from "../styled";
import { useRouter } from "next/dist/client/router";

export default function MusicInfo({ coverImg, title, name, songId }) {
  const router = useRouter();

  const routingToMusicDetail = () => {
    router.push(`/detail?id=${songId}`);
  };
  return (
    <S.Info>
      {coverImg ? (
        <img src={coverImg} onClick={routingToMusicDetail} />
      ) : (
        <div className="none-img"></div>
      )}
      <div>
        <h3 onClick={routingToMusicDetail}>{title}</h3>
        <span>{name}</span>
      </div>
    </S.Info>
  );
}
