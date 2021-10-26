import styled from "@emotion/styled";
import { COLOR, SIZE, SQUARE } from "../../../../styles/index";

export const ResponsiveWrap = styled(SQUARE)``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  & .cover-image-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid ${COLOR.gray_borderColor};
    background-color: ${COLOR.gray_subText};
    overflow: hidden;
    @media screen and (max-width: ${SIZE.medium_width}) {
      width: 98%;
      height: 98%;
    }
    & img {
      width: 100%;
      height: 100%;
    }
    & .cover {
      width: 100%;
      height: 100%;
      z-index: 2;
      position: absolute;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
      background-color: rgb(0, 0, 0, 0);
      transition: 0.3s;
      &:hover {
        background-color: rgb(0, 0, 0, 0.3);
      }
    }
  }
  & .music-title {
    color: ${COLOR.gray_text};
    font-size: 17px;
    font-weight: 600;
    margin-top: 18px;
    transition: 0.5s;
    cursor: pointer;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 14px;
      margin-top: 10px;
    }
    &:hover {
      opacity: 0.7;
    }
  }
  & .musician-name {
    color: ${COLOR.gray_subText};
    font-size: 15px;
    font-weight: 500;
    margin-top: 5px;
    transition: 0.5s;
    cursor: pointer;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 12px;
      margin-top: 5px;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const PlayBtn = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 80%;
  border: 2px solid white;
  background-color: rgb(0, 0, 0, 0.3);
  & svg {
    margin-left: 5px;
  }
  &:hover {
    width: 65px;
    height: 65px;
  }
  @media screen and (max-width: ${SIZE.medium_width}) {
    width: 45px;
    height: 45px;
    &:hover {
      width: 50px;
      height: 50px;
    }
    & svg {
      width: 13px;
    }
  }
`;
