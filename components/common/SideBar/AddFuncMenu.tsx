import * as S from "./styles";

interface Props {
  contents: string;
}

export default function AddFuncMenu({ contents }: Props) {
  return (
    <S.AddFuncMenu>
      <div className="circle" />
      <span>{contents}</span>
    </S.AddFuncMenu>
  );
}
