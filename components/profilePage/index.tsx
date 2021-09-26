import * as S from "./styles";
import ProfileInformation from "./profileInformation";
import React from "react";
import { profileObj } from "./../../lib/interfaces/profile";
import { useRouter } from "next/dist/client/router";
import profile from "../../api/profile";
import MusicRowCardList from "./../MusicRowCardList/index";
import { data } from "./../../lib/export/data";

export default function ProfilePage() {
  const [profileObj, setProfileObj] = React.useState<profileObj | null>(null);
  const router = useRouter();

  const getData = React.useCallback(() => {
    const user_id = router.query.id;
    if (user_id) {
      profile
        .getUserProfile(user_id)
        .then((res) => {
          setProfileObj(res.data);
        })
        .catch(() => {
          return;
        });
    }
  }, [router]);

  React.useEffect(() => {
    getData();
  }, [router]);

  return (
    <S.Wrapper>
      <S.Container>
        {profileObj && (
          <>
            <ProfileInformation profileObj={profileObj} getData={getData} />
          </>
        )}
        <MusicRowCardList musicList={data} />
      </S.Container>
    </S.Wrapper>
  );
}
