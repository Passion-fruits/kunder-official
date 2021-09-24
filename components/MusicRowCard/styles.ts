import styled from "@emotion/styled";
import { COLOR } from "./../../styles/index";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border-radius: 6px;
  background-color: ${COLOR.black_background};
  transition: 0.3s;
  position: relative;
  margin-top: 5px;
  cursor: pointer;
  & svg {
    cursor: pointer;
    opacity: 0.7;
    margin-left: 20px;
    &:hover {
      opacity: 1;
    }
  }
  &:hover {
    background-color: ${COLOR.black_subBackground};
  }
  & .index-num {
    color: ${COLOR.gray_subText};
    font-size: 15px;
    font-weight: 500;
  }
  & .cover-image {
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid ${COLOR.gray_borderColor};
    margin-left: 20px;
  }
  & .music-information {
    display: flex;
    flex-direction: column;
    gap: 0px;
    margin-left: 20px;
    width: 35%;
    & h1 {
      font-size: 15px;
      font-weight: 500;
      color: ${COLOR.gray_text};
      &:hover {
        text-decoration: underline;
      }
    }
    & span {
      color: ${COLOR.green_subMain};
      font-size: 13px;
    }
  }
  & .hashtag-container {
    display: flex;
    gap: 10px;
    position: absolute;
    right: 0;
    padding-right: 30px;
    & .tag {
      padding: 7px 15px;
      border-radius: 24px;
      border: 1px solid ${COLOR.gray_borderColor};
      color: #a8a8a8;
      font-size: 15px;
    }
  }
  & .heart-wrap {
    margin-left: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    & span {
      font-size: 16px;
      color: ${COLOR.green_main};
    }
  }
`;
