import * as S from "./styles";

export default function UserInforMenu({ isCheck, id, contents }) {
  return (
    <S.InforMenu isCheck={isCheck} id={id}>
      {contents}
    </S.InforMenu>
  );
}
