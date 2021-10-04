import * as S from "./styles";
import InputLabel from "./InputLabel";
import React from "react";
import { getFileData } from "../../../lib/util/getFileData";

export default function InputToCover({ inputRef }) {
  const [preview, setPreview] = React.useState<string>("");

  const handleFileOnChange = (event) => {
    getFileData(event).then((res) => {
      inputRef.current = res.file;
      setPreview(res.preview);
    });
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
