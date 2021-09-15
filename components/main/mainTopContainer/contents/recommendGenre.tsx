import * as S from "../styles";
import { useRouter } from "next/dist/client/router";
import { genreList } from "./../../../../lib/export/genre";

export default function RecommendGenre({
  backgroundColor,
  height,
  title,
  subTitle,
  imgUrl,
  imgSize,
  genre,
}) {
  const router = useRouter();
  const routing = () => {
    router.push(`/all?page=1&sort=1&genre=${genreList.indexOf(genre) + 1}`);
  };
  return (
    <S.RecommendGenreWrapper
      backgroundColor={backgroundColor}
      height={height}
      imgSize={imgSize}
      className="content-box"
      onClick={routing}
    >
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <img src={imgUrl} alt="" />
    </S.RecommendGenreWrapper>
  );
}
