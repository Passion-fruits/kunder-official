import * as S from "../styles";

export default function Select({ title, name, list, callback }) {
  return (
    <S.InpContainer>
      <span>{title}</span>
      <select name={name} onChange={callback}>
        {list.map((content, index) => (
          <option key={index} value={list.indexOf(content) + 1}>
            {content}
          </option>
        ))}
      </select>
    </S.InpContainer>
  );
}
