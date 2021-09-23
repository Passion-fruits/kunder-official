import Information from "./Information";
import * as S from "./styles";
import React from "react";
import InputToTitle from "./InputToTitle";
import InputToDescription from "./InputToDescription";
import InputToCover from "./InputToCover";
import SelectToGenreMood from "./selectToGenreMood";
import InputToMusic from "./InputToMusic";
import { useRouter } from "next/dist/client/router";
import Spiner from "./../Spiner";
import music from "../../api/music";
import { toast } from "react-toastify";

export default function UploadPage() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const titleRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const coverImgRef = React.useRef(null);
  const genreRef = React.useRef(null);
  const moodRef = React.useRef(null);
  const musicRef = React.useRef(null);
  const router = useRouter();

  const uploadMusic = () => {
    setLoading(true);
    /*     music
      .uploadMusic()
      .then(() => {
        router.push(`/`);
        toast.success("업로드 되었습니다.");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          toast.info("모든 정보를 입력해주세요.");
          setLoading(false);
          return;
        }
        toast.error("에러가 발생하였습니다.");
        setLoading(false);
      }); */
  };

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
        {loading ? (
          <S.UploadBtn>
            <Spiner size={23} />
          </S.UploadBtn>
        ) : (
          <S.UploadBtn onClick={uploadMusic}>Upload</S.UploadBtn>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
