import styled from "@emotion/styled";
import { BASE_WRAPPER, BASE_CONTAINER, COLOR } from "./../../styles/index";
import { keyframes } from "@emotion/react";

export const Wrapper = styled(BASE_WRAPPER)``;

const UpperAnime = keyframes`
0%{
  opacity:0;
  margin-top:50px;
}
100%{
  opacity:1;
  margin-top:0px;
}
`;

export const Container = styled(BASE_CONTAINER)`
  width: 770px;
  display: flex;
  flex-direction: column;
  animation: ${UpperAnime} 0.5s;
  .title {
    color: white;
    font-size: 25px;
    font-weight: 600;
    margin-top: 40px;
  }
  .description {
    color: ${COLOR.blue_text};
    font-weight: 500;
    font-size: 15px;
    margin-top: 15px;
  }
  .information {
    color: ${COLOR.gray_subText};
    border-bottom: 1px solid ${COLOR.gray_subText};
    font-size: 18px;
    padding-bottom: 10px;
    box-sizing: content-box;
    margin-top: 30px;
  }
`;

export const InputLabel = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  & h3 {
    color: white;
    font-size: 18px;
  }
  & h5 {
    font-size: 15px;
    font-weight: 500;
    color: ${COLOR.gray_subText};
  }
  & span {
    font-size: 18px;
    color: ${COLOR.red_text};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  & .base-input {
    background: ${COLOR.black_subBackground};
    border-radius: 3px;
    transition: 0.5s;
    font-size: 17px;
    color: ${COLOR.gray_subText};
    border: 1px solid ${COLOR.gray_borderColor};
    &:focus {
      border: 1px solid #5d75d6;
      color: ${COLOR.gray_text};
    }
  }
  & input,
  select {
    height: 50px;
    padding: 0 20px;
    width: 100%;
  }
  & textarea {
    width: 540px;
    height: 250px;
    padding: 20px;
  }
  & input[type="file"] {
    display: none;
  }
  & label {
    border: 1px solid ${COLOR.blue_text};
    color: ${COLOR.blue_text};
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CoverUploadWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  position: relative;
  & .cover-image {
    width: 200px;
    height: 200px;
    border: 1px solid ${COLOR.gray_borderColor};
  }
  & .none-cover {
    border: 1px dashed gray;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
      color: ${COLOR.gray_subText};
      font-size: 15px;
    }
  }
  & .upload-button {
    width: 200px;
    height: 35px;
    margin-top: 10px;
    position: absolute;
    bottom: 0;
  }
`;

export const MuiscUploadWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & p {
    color: ${COLOR.gray_subText};
    font-size: 15px;
  }
`;

export const UploadBtn = styled.button`
  width: 100%;
  height: 50px;
  color: white;
  background: #378eff;
  font-size: 18px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 50px;
  border-radius: 3px;
`;
