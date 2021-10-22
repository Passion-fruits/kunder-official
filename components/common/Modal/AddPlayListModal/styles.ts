import styled from "@emotion/styled";
import { COLOR } from "../../../../styles";

export const Wrapper = styled.div`
  width: 400px;
  background: ${COLOR.black_subBackground};
  border-radius: 0px;
  & .title {
    font-size: 20px;
    font-weight: 500;
    color: white;
    padding: 20px;
    border-bottom: 1px solid ${COLOR.gray_borderColor};
  }
  & .add-btn {
    width: 100%;
    padding: 15px 20px;
    color: ${COLOR.gray_subText};
    font-size: 17px;
    transition: 0.3s;
    border-top: 1px solid ${COLOR.gray_borderColor};
    &:hover {
      opacity: 0.7;
    }
  }
  & .playlist-make-container {
    border-top: 1px solid ${COLOR.gray_borderColor};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    position: relative;
    & input {
      background: none;
      border-bottom: 1px solid ${COLOR.gray_subText};
      width: 80%;
      padding: 10px;
      color: ${COLOR.gray_subText};
      font-size: 17px;
      transition: 0.5s;
      &::placeholder {
        color: ${COLOR.gray_subText};
      }
      &:focus {
        color: ${COLOR.gray_text};
        border-bottom: 1px solid ${COLOR.blue_text};
      }
    }
    & .title-length {
      width: 80%;
      display: flex;
      justify-content: flex-end;
      color: ${COLOR.gray_subText};
      font-size: 14px;
      margin-top: 10px;
    }
    & button {
      width: 80%;
      color: ${COLOR.blue_text};
      border: 1px solid ${COLOR.blue_text};
      font-size: 15px;
      margin-top: 20px;
      padding: 10px 0;
      transition: 0.5s;
      &:hover {
        border: 1px solid ${COLOR.green_subMain};
        color: ${COLOR.green_subMain};
      }
    }
  }
`;

export const PlayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 20px;
  max-height: 300px;
  overflow-y: scroll;
  & .none {
    width: 100%;
    text-align: center;
    padding: 20px 0;
    color: ${COLOR.blue_text};
    font-size: 16px;
  }
  & .option {
    display: flex;
    align-items: center;
    width: 100%;
    & input[type="checkbox"] {
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
    & label {
      color: white;
      font-size: 17px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;
