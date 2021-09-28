import styled from "@emotion/styled";
import { COLOR } from "../../styles";

export const Wrapper = styled.div`
  width: 400px;
  padding: 20px;
  background: ${COLOR.black_subBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  & .title {
    width: 100%;
    color: white;
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${COLOR.gray_borderColor};
  }
  & .cover-image-wrap {
    width: 100px;
    height: 100px;
    border: 1px solid ${COLOR.gray_borderColor};
    margin-top: 20px;
    position: relative;
    & img {
      width: 100%;
      height: 100%;
    }
    & .cover {
      width: 100%;
      height: 100%;
      position: absolute;
      background: blue;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      color: white;
      background: rgb(0, 0, 0, 0.5);
      cursor: pointer;
    }
  }
`;
