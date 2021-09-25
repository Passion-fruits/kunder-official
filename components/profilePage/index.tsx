import * as S from "./styles";
import ProfileInformation from "./profileInformation";

export default function ProfilePage() {
  return (
    <S.Wrapper>
      <S.Container>
        <ProfileInformation />
      </S.Container>
    </S.Wrapper>
  );
}
