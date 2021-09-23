import * as S from "./styles";
import InputLabel from "./InputLabel";

export default function InputToTitle({ inputRef }) {
  return (
    <S.InputContainer>
      <InputLabel title="제목" description="30자 이하" />
      <input type="text" className="base-input" ref={inputRef} />
    </S.InputContainer>
  );
}
