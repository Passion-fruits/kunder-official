import { HeartIcon } from "../../assets";
import * as S from "./styles";
import { COLOR } from "./../../styles/index";
import PlayListAddIcon from "./../../assets/playListAdd";
import React from "react";
import music from "../../api/music";

export default function ControlMusic({ like, music_id }) {
  const [likeCnt, setLikeCnt] = React.useState<number>(parseInt(like));
  const [isLike, setIsLike] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (music_id) {
      music
        .checkIsLike(music_id)
        .then((res) => {
          res.data.is_like ? setIsLike(true) : setIsLike(false);
        })
        .catch(() => {
          return;
        });
    }
  }, []);

  const pushLike = React.useCallback(() => {
    setIsLike(true);
    setLikeCnt(likeCnt + 1);
    music
      .pushLike(music_id)
      .then(() => {
        return;
      })
      .catch(() => {
        return;
      });
  }, [likeCnt]);

  const deleteLike = React.useCallback(() => {
    setIsLike(false);
    setLikeCnt(likeCnt - 1);
    music
      .deleteLike(music_id)
      .then(() => {
        return;
      })
      .catch(() => {
        return;
      });
  }, [likeCnt]);

  return (
    <S.ControlMusicContainer>
      <div className="btn-container">
        <button onClick={isLike ? deleteLike : pushLike}>
          <HeartIcon
            size={18}
            callback={() => {}}
            isLike={isLike}
            color={COLOR.gray_text}
          />
          {likeCnt}
        </button>
        <button>
          <PlayListAddIcon /> 추가
        </button>
      </div>
      <input type="text" placeholder="댓글을 작성하여 의견을 남겨주세요" />
    </S.ControlMusicContainer>
  );
}
