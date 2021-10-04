import * as S from "./styles";
import InputLabel from "./InputLabel";

export default function InputToDescription({ inputRef }) {
  return (
    <S.InputContainer style={{ height: "100%" }}>
      <InputLabel title="설명" description="300자 이하" />
      <textarea className="base-input" ref={inputRef} />
    </S.InputContainer>
  );
}
