import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import React from "react";
import playlist from "../../api/playlist";
import { getFileData } from "../../lib/util/getFileData";

export default function PlaylistUpdateModal() {
  const [coverImg, setCoverImg] = React.useState<string | null>(null);
  const router = useRouter();
  const playlist_id = router.query.id;

  React.useEffect(() => {
    playlist.getPlaylistDetail(playlist_id).then((res) => {
      setCoverImg(res.data.playlist.cover_url);
    });
  }, []);

  const setUserProfile = (event) => {
    getFileData(event).then((res) => {
      console.log(res.file);
    });
  };

  return (
    <S.Wrapper>
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        id="playlist-cover-input"
        onChange={setUserProfile}
        style={{ display: "none" }}
      />
      <h1 className="title">플레이리스트 정보 수정</h1>
      <label htmlFor="playlist-cover-input">
        <div className="cover-image-wrap">
          <div className="cover">+</div>
          <img src={coverImg ? coverImg : "playlist.png"} />
        </div>
      </label>
    </S.Wrapper>
  );
}
