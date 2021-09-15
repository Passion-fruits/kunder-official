import * as S from "./styles";

interface props {
  title: string;
  contents: string[];
}

export default function Menu({ title, contents }: props) {
  return (
    <S.MenuContainer>
      <h3>{title}</h3>
      {contents.map((content, index) => (
        <div key={index}>{content}</div>
      ))}
    </S.MenuContainer>
  );
}
