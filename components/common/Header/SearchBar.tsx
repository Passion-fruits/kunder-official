import { SearchIcon } from "../../../assets";
import * as S from "./styles";
import React from "react";

export default function SearchBar() {
  const [isFocusing, setIsFocusing] = React.useState<boolean>(false);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const focusOn = React.useCallback(() => {
    setIsFocusing(true);
  }, []);

  const focusOff = React.useCallback(() => {
    setIsFocusing(false);
  }, []);

  React.useEffect(() => {
    if (isFocusing) {
      searchInputRef.current.focus();
    }
  }, [isFocusing]);

  return (
    <S.SearchMenu>
      <SearchIcon callback={focusOn} />
      <S.SearchBarWrap isFocusing={isFocusing}>
        <input
          type="text"
          placeholder="무엇을 찾으시나요?"
          ref={searchInputRef}
          onBlur={focusOff}
          onFocus={focusOn}
        />
        <div className="recommend">
          <div className="result">
            <b>김</b>팔복
            <span className="kind">노래</span>
          </div>
          <div className="result">
            <b>김</b>치<span className="kind">플레이리스트</span>
          </div>
          <div className="result">
            <b>김</b>치된장국
            <span className="kind">가수</span>
          </div>
        </div>
      </S.SearchBarWrap>
    </S.SearchMenu>
  );
}
