import * as S from "./styles";
import InputLabel from "./InputLabel";
import React from "react";

export default function InputToCover({ inputRef }) {
  const [preview, setPreview] = React.useState<string>("");

  const handleFileOnChange = (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      inputRef.current = file;
      setPreview(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };

  return (
    <S.InputContainer>
      <InputLabel title="커버사진" description="" />
      <S.CoverUploadWrap>
        {preview ? (
          <img src={preview} className="cover-image" />
        ) : (
          <div className="none-cover cover-image">
            <span>이미지가 없습니다.</span>
          </div>
        )}
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          id="cover-input"
          onChange={handleFileOnChange}
        />
        <label className="upload-button" htmlFor="cover-input">
          Choose File
        </label>
      </S.CoverUploadWrap>
    </S.InputContainer>
  );
}
