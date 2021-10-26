import * as S from "./styles";
import MusicInformation from "./MusicInformation";
import ControlMusic from "./ControlMusic";
import SimilarMusic from "./SimilarMusic";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import music from "../../../api/music";
import { musicCardObject } from "../../../lib/interfaces/music";

export default function DetailPage() {
  const router = useRouter();
  const [musicObj, setMusicObj] = useState<musicCardObject | null>(null);

  React.useEffect(() => {
    const music_id = router.query.id;
    if (music_id) {
      music.getMusicDetail(music_id).then(({ data }) => {
        setMusicObj(data);
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
            <SimilarMusic />
          </S.Container>
        </>
      )}
    </S.Wrapper>
  );
}
