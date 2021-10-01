import styled from "@emotion/styled";
import { COLOR } from "../../../styles";

export const Wrapper = styled.div`
  width: 400px;
  border-radius: 5px;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${COLOR.black_subBackground};
  & input[type="file"] {
    display: none;
  }
  & .title {
    color: white;
    font-size: 20px;
    border-bottom: 1px solid ${COLOR.gray_borderColor};
    padding-bottom: 10px;
    margin-bottom: 10px;
    width: 100%;
  }
  & input {
    width: 100%;
    padding: 13px 20px;
    border: 1px solid ${COLOR.gray_borderColor};
    border-radius: 3px;
    color: ${COLOR.gray_text};
    font-size: 17px;
    background: #212121;
    margin-top: 10px;
    transition: 0.3s;
    &:focus {
      color: ${COLOR.gray_text};
      border: 1px solid ${COLOR.blue_text};
    }
  }
  & .cover-image {
    width: 100px;
    height: 100px;
    border: 1px solid ${COLOR.gray_borderColor};
    border-radius: 80%;
    cursor: pointer;
  }
  & .sub-btn {
    width: 100%;
    padding: 13px 0;
    background: #0083e6;
    color: white;
    font-size: 17px;
    font-weight: bold;
    border-radius: 3px;
    margin-top: 20px;
  }
`;
