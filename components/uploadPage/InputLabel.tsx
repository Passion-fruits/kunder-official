import * as S from "./styles";

export default function InputLabel({ title, description }) {
  return (
    <S.InputLabel>
      <h3>{title}</h3>
      {description && <h5>({description})</h5>}
      <span>*</span>
    </S.InputLabel>
  );
}
