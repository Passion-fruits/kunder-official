import styled from "@emotion/styled";
import { COLOR } from "./../../styles/index";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 10px;
  border-radius: 3px;
  background-color: ${COLOR.black_background};
  transition: 0.3s;
  position: relative;
  margin-top: 5px;
  &:hover {
    background-color: #202020;
  }
  & .cover-image {
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-left: 20px;
    border-radius: 3px;
  }
  & .music-information {
    display: flex;
    flex-direction: column;
    gap: 0px;
    margin-left: 20px;
    width: 35%;
    & h1 {
      font-size: 16px;
      font-weight: 400;
      color: ${COLOR.gray_text};
    }
    & span {
      color: ${COLOR.gray_subText};
      font-size: 14px;
    }
  }
  & .hashtag-container {
    display: flex;
    gap: 10px;
    width: 40%;
    & div {
      padding: 7px 15px;
      border-radius: 24px;
      border: 1px solid #a1a1a1;
      color: #a1a1a1;
      font-size: 15px;
    }
  }
  & .heart-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    right: 0;
    margin-top: 5px;
    margin-right: 20px;
    & span {
      font-size: 14px;
      color: ${COLOR.green_main};
    }
  }
`;
