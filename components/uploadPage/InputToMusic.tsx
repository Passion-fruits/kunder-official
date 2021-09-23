import * as S from "./styles";
import InputLabel from "./InputLabel";
import React from "react";

export default function InputToMusic({ inputRef }) {
  const [fileNmae, setFileName] = React.useState<string>("");

  const handleFileOnChange = (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      inputRef.current = file;
      setFileName(file.name.substring(0, 80));
    };
    reader.readAsDataURL(file);
  };

  return (
    <S.InputContainer>
      <InputLabel title="음악" description="1분 이상 6분 이하" />
      <S.MuiscUploadWrap>
        <input
          type="file"
          accept="audio/*"
          id="music-input"
          onChange={handleFileOnChange}
        />
        <label htmlFor="music-input" style={{ padding: "8px 12px" }}>
          Choose Music
        </label>
        <p>{fileNmae ? fileNmae : "곡이 없습니다"}</p>
      </S.MuiscUploadWrap>
    </S.InputContainer>
  );
}
