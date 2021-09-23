import Information from "./Information";
import * as S from "./styles";
import React from "react";
import InputToTitle from "./InputToTitle";
import InputToDescription from "./InputToDescription";
import InputToCover from "./InputToCover";
import SelectToGenreMood from "./selectToGenreMood";
import InputToMusic from "./InputToMusic";

export default function UploadPage() {
  const titleRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const coverImgRef = React.useRef(null);
  const genreRef = React.useRef(null);
  const moodRef = React.useRef(null);
  const musicRef = React.useRef(null);
  return (
    <S.Wrapper>
      <S.Container>
        <Information />
        <InputToTitle inputRef={titleRef} />
        <S.FlexContainer>
          <InputToCover inputRef={coverImgRef} />
          <InputToDescription inputRef={descriptionRef} />
        </S.FlexContainer>
        <SelectToGenreMood genreRef={genreRef} moodRef={moodRef} />
        <InputToMusic inputRef={musicRef} />
      </S.Container>
    </S.Wrapper>
  );
}
