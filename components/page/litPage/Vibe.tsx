import * as S from "./styles";

export default function Vibe() {
  return (
    <S.VibeWrap>
      <S.VibeBar second={2} />
      <S.VibeBar second={3} />
      <S.VibeBar second={1} />
      <S.VibeBar second={5} />
      <S.VibeBar second={3} />
      <S.VibeBar second={1} />
    </S.VibeWrap>
  );
}
