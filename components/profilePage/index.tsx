import * as S from "./styles";
import ProfileInformation from "./profileInformation";
import React from "react";
import { profileObj } from "./../../lib/interfaces/profile";
import { useRouter } from "next/dist/client/router";
import profile from "../../api/profile";
import UserSubInformation from "./UserSubInformation";
import { getValue } from "../../lib/context";

export default function ProfilePage() {
  const [profileObj, setProfileObj] = React.useState<profileObj | null>(null);
  const router = useRouter();
  const contextObj = getValue();
  const user_id = router.query.id;

  const getData = React.useCallback(() => {
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
    if (contextObj.modal === null) {
      getData();
    }
  }, [router, contextObj.modal]);

  return (
    <S.Wrapper>
      <S.Container>
        {profileObj && (
          <>
            <ProfileInformation profileObj={profileObj} getData={getData} />
            <UserSubInformation user_id={user_id} />
          </>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
