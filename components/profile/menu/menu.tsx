import * as S from "../styles";

export default function Menu({ contents, cnt, nowMenu, menu, callback }) {
  return (
    <S.Selection
      onClick={() => {
        callback(menu);
      }}
      check={nowMenu === menu}
    >
      {contents} {cnt}
    </S.Selection>
  );
}
