import { HeartIcon, PlayIcon } from "../../assets";
import { musicCardObject } from "../../lib/interfaces/music";
import * as S from "./styles";
import { setValue } from "../../lib/context/index";
import { useRouter } from "next/dist/client/router";

export default function MusicColumnCard({
  title,
  artist,
  cover_url,
  song_id,
  song_url,
  like,
}: musicCardObject) {
  const dispatch = setValue();
  const router = useRouter();

  const routingToDetail = (): void => {
    router.push(`/detail?id=${song_id}`);
  };

  const musicChange = (event) => {
    event.stopPropagation();
    dispatch({
      type: "MUSIC_CHANGE",
      musicInformation: {
        title: title,
        artist: artist,
        cover_url: cover_url,
        song_url: song_url,
        song_id: song_id,
      },
    });
  };

  return (
    <S.Wrapper>
      <div className="cover-image-wrap">
        <div className="cover" onClick={routingToDetail}>
          <S.PlayBtn onClick={musicChange}>
            <PlayIcon size={17} color="white" callback={() => {}} />
          </S.PlayBtn>
        </div>
        <img src={cover_url} />
      </div>
      <div className="music-title" onClick={routingToDetail}>
        {title}
      </div>
      <h3 className="musician-name" id="noto">
        {artist}
      </h3>
      <S.IconWrap>
        <div className="wrap">
          <HeartIcon size={13} callback={() => {}} />
          <span>{like}</span>
        </div>
      </S.IconWrap>
    </S.Wrapper>
  );
}
