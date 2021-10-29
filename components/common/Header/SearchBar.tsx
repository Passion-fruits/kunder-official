import { SearchIcon } from "../../../assets";
import * as S from "./styles";
import React from "react";
import search from "../../../api/search";
import { AutoSearchResult } from "./../../../lib/interfaces/search";
import { useRouter } from "next/dist/client/router";

export default function SearchBar() {
  const [isFocusing, setIsFocusing] = React.useState<boolean>(false);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [searchResult, setSearchResult] = React.useState<AutoSearchResult>();
  const router = useRouter();

  const focusOn = React.useCallback(() => {
    setIsFocusing(true);
  }, []);

  const focusOff = React.useCallback(() => {
    setTimeout(() => {
      setIsFocusing(false);
    }, 100);
  }, []);

  const getSearchValue = ({ target }) => {
    setSearchValue(target.value);
  };

  /*   const replaceColor = (str: string, result: string) => {
    const highlight = str.indexOf(result);
    if (highlight > -1) {
      return (
        str.substr(0, highlight) +
        `<b>${result}</b>` +
        str.substr(highlight + 1, str.length)
      );
    }
    return str;
  }; */

  React.useEffect(() => {
    if (isFocusing) {
      searchInputRef.current.focus();
    }
  }, [isFocusing]);

  React.useEffect(() => {
    if (searchValue) {
      search
        .getAutoSearchResult(searchValue)
        .then((res) => {
          setSearchResult(res.data);
        })
        .catch(() => {
          return;
        });
    }
  }, [searchValue]);

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
          onChange={getSearchValue}
        />
        <div className="recommend">
          {searchResult && (
            <>
              {searchResult.song.map((song, index) => (
                <div
                  className="result"
                  key={index}
                  onClick={() => router.push(`/detail?id=${song.id}`)}
                >
                  {song.source.title}
                  <span className="kind">노래</span>
                </div>
              ))}
              {searchResult.playlist.map((playlist, index) => (
                <div
                  className="result"
                  key={index}
                  onClick={() => router.push(`/playlist?id=${playlist.id}`)}
                >
                  {playlist.source.name}
                  <span className="kind">플레이리스트</span>
                </div>
              ))}
              {searchResult.profile.map((profile, index) => (
                <div
                  className="result"
                  key={index}
                  onClick={() => router.push(`/profile?id=${profile.id}`)}
                >
                  {profile.source.name}
                  <span className="kind">프로필</span>
                </div>
              ))}
            </>
          )}
        </div>
      </S.SearchBarWrap>
    </S.SearchMenu>
  );
}
