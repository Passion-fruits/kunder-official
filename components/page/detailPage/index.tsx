import * as S from "./styles";
import MusicInformation from "./MusicInformation";
import ControlMusic from "./ControlMusic";
import SimilarMusic from "./SimilarMusic";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import music from "../../../api/music";
import { musicCardObject } from "../../../lib/interfaces/music";

export default function DetailPage() {
  const [musicObj, setMusicObj] = useState<musicCardObject | null>(null);
  const [similarMusicList, setSimilarMusicList] = useState<musicCardObject[]>(
    []
  );
  const router = useRouter();
  const music_id = router.query.id;

  React.useEffect(() => {
    if (music_id) {
      music.getMusicDetail(music_id).then(({ data }) => {
        setMusicObj(data);
      });
    }
  }, [router]);

  React.useEffect(() => {
    if (music_id) {
      music
        .getSimilarMusic({ song_id: music_id, size: 6 })
        .then((res) => {
          setSimilarMusicList(res.data);
        })
        .catch(() => {
          return;
        });
    }
  }, [router]);

  return (
    <S.Wrapper>
      {musicObj && (
        <>
          <S.Container>
            <MusicInformation musicObj={musicObj} />
            <ControlMusic musicObj={musicObj} />
            <SimilarMusic data={similarMusicList} />
          </S.Container>
        </>
      )}
    </S.Wrapper>
  );
}
