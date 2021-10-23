import styled from "@emotion/styled";
import { COLOR, SIZE } from "../../../../styles/index";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 0px;
  transition: 0.3s;
  position: relative;
  & svg {
    cursor: pointer;
    opacity: 0.7;
    margin-left: 20px;
    transition: 0.3s;
    &:hover {
      opacity: 1;
    }
  }
  & .index-num {
    color: ${COLOR.gray_subText};
    font-size: 17px;
    font-weight: 600;
    width: 30px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
  }
  & .cover-image {
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: 1px solid ${COLOR.gray_borderColor};
    border-radius: 3px;
    margin-left: 10px;
    transition: 0.3s;
    @media screen and (max-width: ${SIZE.medium_width}) {
      width: 40px;
      height: 40px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  & .music-information {
    display: flex;
    flex-direction: column;
    gap: 0px;
    margin-left: 20px;
    width: 30%;
    & h1 {
      font-size: 17px;
      font-weight: 500;
      color: ${COLOR.gray_text};
      cursor: pointer;
      transition: 0.3s;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 15px;
      }
      &:hover {
        opacity: 0.8;
      }
    }
    & span {
      color: ${COLOR.gray_subText};
      font-size: 13px;
      margin-top: 2px;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 11px;
      }
    }
  }
  & .right {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
  }
  & .hashtag-container {
    margin-left: 50px;
    display: flex;
    gap: 10px;
    & .tag {
      padding: 7px 15px;
      border-radius: 24px;
      border: 2px solid ${COLOR.gray_borderColor};
      color: ${COLOR.gray_subText};
      font-size: 15px;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 14px;
        padding: 5px 12px;
      }
    }
  }
  & .add-playlist {
    margin-top: 3px;
  }
  & .heart-wrap {
    margin-left: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    & span {
      font-size: 16px;
      color: ${COLOR.green_main};
    }
  }
`;
