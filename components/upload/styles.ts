import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "../../styles/index";

export const Wrapper = styled(WRAPPER)`
  & input[type="file"] {
    display: none;
  }
`;

export const Container = styled(CONTAINER)`
  padding-top: 30px;
  width: 800px;
  min-width:800px;
`;

export const TipForMusicUpload = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  & div {
    border: 1px solid ${COLOR.main};
    border-radius: 24px;
    font-size: 16px;
    color: ${COLOR.main};
    padding: 5px 15px;
  }
  & p {
    margin: 0;
    padding: 0;
    color: ${COLOR.text};
    font-size: 16px;
  }
`;

export const GetMusicInformationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
`;

export const UploadProfileBtn = styled.button`
  width: 190px;
  height: 190px;
  border-radius: 80%;
  border: 1px dashed ${COLOR.text};
  background-color: white;
  color: ${COLOR.background};
  font-size: 80px;
  font-weight: bold;
  &::after {
    content: "+";
  }
`;

export const MusicCoverImg = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 3px;
  cursor: pointer;
`;

export const FormDataContainer = styled.div`
  width: 570px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 13px;
  & input,
  select,
  textarea {
    padding: 13px 20px;
    color: ${COLOR.black};
    border: 1px solid ${COLOR.black};
    border-radius: 3px;
    font-size: 15px;
    & option {
      font-size: 15px;
      color: ${COLOR.black};
    }
    &::placeholder {
      color: ${COLOR.text};
    }
  }
  & textarea {
    height: 130px;
    resize: none;
  }
  & span {
    color: ${COLOR.main};
    font-size: 16px;
  }
`;

export const SelectContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, 270px);
  & select {
    appearance: none;
    outline: none;
    background-image: ${`linear-gradient(45deg, transparent 50%,  ${COLOR.black} 50%),
      linear-gradient(135deg,  ${COLOR.black} 50%, transparent 50%)`};
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
  }
`;

export const ChooseMusic = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 18px;
  & button {
    font-size: 14px;
    color: white;
    padding: 8px 20px;
    background-color: ${COLOR.black};
    border-radius: 3px;
  }
  & div {
    font-size: 13px;
    color: ${COLOR.black};
  }
`;

export const UploadMusicBtn = styled.button`
  width: 100%;
  padding: 13px 0;
  font-size: 18px;
  color: white;
  background-color: ${COLOR.black};
  border-radius: 3px;
  &:after {
    content: "업로드";
  }
`;
