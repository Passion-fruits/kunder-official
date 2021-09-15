import * as S from "../styles";

export default function Input({ title, name, placeholder, callback, isText=false }) {
  return (
    <S.InpContainer>
      <span>{title}</span>
      {isText ? (
        <textarea name={name} placeholder={placeholder} onChange={callback} />
      ) : (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          onChange={callback}
        />
      )}
    </S.InpContainer>
  );
}
