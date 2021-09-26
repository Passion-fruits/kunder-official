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
import { USER_ID } from "../../lib/export/localstorage";

export default function UploadPage() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const titleRef = React.useRef(null);
  const descriptionRef = React.useRef(null);
  const coverImgRef = React.useRef(null);
  const genreRef = React.useRef(null);
  const moodRef = React.useRef(null);
  const musicRef = React.useRef(null);
  const durationRef = React.useRef(null);
  const router = useRouter();

  const uploadMusic = () => {
    if (titleRef.current.value.length > 30) {
      toast.info("제목 글자수를 확인하세요");
      return;
    }
    if (descriptionRef.current.value.length > 300) {
      toast.info("설명 글자수를 확인하세요");
      return;
    }
    setLoading(true);
    const dataObject = {
      musicSrc: musicRef.current,
      imgSrc: coverImgRef.current,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      genre: parseInt(genreRef.current.value),
      mood: parseInt(moodRef.current.value),
      duration: durationRef.current,
    };
    music
      .uploadMusic(dataObject)
      .then(() => {
        router.push(`/profile?id=${localStorage.getItem(USER_ID)}`);
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
      });
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
        <InputToMusic musicRef={musicRef} durationRef={durationRef} />
        {loading ? (
          <S.UploadBtn>
            <Spiner size={23} />
          </S.UploadBtn>
        ) : (
          <S.UploadBtn onClick={uploadMusic}>Upload Music</S.UploadBtn>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
