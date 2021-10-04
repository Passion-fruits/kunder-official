import * as S from "./styles";
import InputLabel from "./InputLabel";
import React from "react";
import { toast } from "react-toastify";

export default function InputToMusic({ musicRef, durationRef }) {
  const [fileNmae, setFileName] = React.useState<string>("");

  const checkDuration = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const result: any = e.target.result;
      const audio = new Audio(result);
      audio.oncanplaythrough = () => {
        if (audio.duration < 60 || audio.duration > 360) {
          toast.info("1분 이상, 6분 이하의 곡을 업로드해주세요!");
          durationRef.current = "";
          musicRef.current = "";
        } else {
          durationRef.current = audio.duration.toString();
          musicRef.current = file;
          setFileName(file.name.substring(0, 80));
        }
      };
    };
  };

  const handleFileOnChange = (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      checkDuration(file);
    };
    file && reader.readAsDataURL(file);
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
