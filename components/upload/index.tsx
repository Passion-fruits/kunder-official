import { genreList, moodList } from "../../lib/export/genre";
import { toast } from "react-toastify";
import { useRouter } from "next/dist/client/router";
import { USER_ID } from "../../lib/export/localstorage";
import { CheckToMusicDuration } from "./util/checkToMusicDuration";
import React, { CSSProperties } from "react";
import * as S from "./styles";
import Tip from "./tip";
import Input from "./input/input";
import Select from "./input/select";
import FileInput from "./input/fileInput";
import music from "../../api/music";
import LoadingPage from "../../components/loading";

export default function UploadPage() {
  const router = useRouter();
  const [preview, setPreview] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>({
    title: "",
    description: "",
    genre: 1,
    mood: 1,
    duration: "",
    musicSrc: "",
    imgSrc: "",
  });
  const BtnLoadingStyle: CSSProperties = {
    opacity: "0.8",
    pointerEvents: "none",
  };

  const handleData = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setData({
        ...data,
        [name]: value,
      });
    },
    [data]
  );

  const getSrc = React.useCallback(
    (target: HTMLInputElement) => {
      setData({
        ...data,
        [target.name]: target.files[0],
      });
    },
    [data]
  );

  const fileUpload = React.useCallback(({ target }): void => {
    document.getElementById(target.id).click();
  }, []);

  const uploadMusic = React.useCallback(() => {
    setLoading(true);
    music
      .uploadMusic(data)
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
  }, [data]);

  // read img url
  React.useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result.toString());
    data.imgSrc && reader.readAsDataURL(data.imgSrc);
  }, [data.imgSrc]);

  // check music duration
  React.useEffect(() => {
    data.musicSrc && CheckToMusicDuration(data, setData);
  }, [data.musicSrc]);

  return (
    <S.Wrapper>
      {loading && <LoadingPage />}
      <FileInput event={getSrc} />
      <S.Container>
        <>
          <Tip />
          <S.GetMusicInformationContainer>
            {preview ? (
              <S.MusicCoverImg
                id="uploadProfile"
                onClick={fileUpload}
                src={preview}
              />
            ) : (
              <S.UploadProfileBtn id="uploadProfile" onClick={fileUpload} />
            )}
            <S.FormDataContainer>
              <Input
                title="제목 (title)"
                name="title"
                placeholder="제목을 입력해주세요"
                callback={handleData}
              />
              <Input
                isText={true}
                title="설명 (description)"
                name="description"
                placeholder="설명을 입력해주세요"
                callback={handleData}
              />
              <S.SelectContainer>
                <Select
                  title="장르 (genre)"
                  name="genre"
                  list={genreList}
                  callback={handleData}
                />
                <Select
                  title="분위기 (mood)"
                  name="mood"
                  list={moodList}
                  callback={handleData}
                />
              </S.SelectContainer>
              <S.ChooseMusic>
                <button id="uploadMusic" onClick={fileUpload}>
                  음악 선택
                </button>
                <div>
                  {data.musicSrc
                    ? `${data.musicSrc.name.substring(0, 55)}...`
                    : "업로드한 파일이 없습니다."}
                </div>
              </S.ChooseMusic>
              <S.UploadMusicBtn
                style={loading ? BtnLoadingStyle : {}}
                onClick={uploadMusic}
              />
            </S.FormDataContainer>
          </S.GetMusicInformationContainer>
        </>
      </S.Container>
    </S.Wrapper>
  );
}
