import * as S from "./styles";
import React from "react";
import InputLabel from "./InputLabel";
import { genreList, moodList } from "./../../lib/export/genre";

export default function SelectToGenreMood({ genreRef, moodRef }) {
  return (
    <S.FlexContainer>
      <S.InputContainer style={{ width: "48%" }}>
        <InputLabel title="장르" description="" />
        <select name="genre" className="base-input" ref={genreRef}>
          {genreList.map((genre) => (
            <option>{genre}</option>
          ))}
        </select>
      </S.InputContainer>
      <S.InputContainer style={{ width: "48%" }}>
        <InputLabel title="분위기" description="" />
        <select name="sort" className="base-input" ref={moodRef}>
          {moodList.map((mood) => (
            <option>{mood}</option>
          ))}
        </select>
      </S.InputContainer>
    </S.FlexContainer>
  );
}
