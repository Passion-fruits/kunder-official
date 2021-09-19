import styled from "@emotion/styled";
import { COLOR, SIZE } from "../../styles/index";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${`${SIZE.card_size}px`};
  & .cover-image-wrap {
    width: ${`${SIZE.card_size}px`};
    height: ${`${SIZE.card_size}px`};
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    & img {
      width: 100%;
      height: 100%;
    }
    .cover {
      width: 100%;
      height: 100%;
      background: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
      opacity: 0;
      z-index: 2;
      transition: 0.3s;
      position: absolute;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        opacity: 1;
      }
    }
  }
  & .music-title {
    width: 100%;
    color: ${COLOR.gray_text};
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    margin-top: 13px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  & .musician-name {
    color: ${COLOR.gray_subText};
    font-size: 13px;
    font-weight: 500;
    margin-top: 3px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  & .wrap {
    display: flex;
    align-items: center;
    gap: 5px;
    & span {
      font-size: 14px;
      color: ${COLOR.green_main};
    }
  }
`;

export const PlayBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 80%;
  border: 2px solid white;
  background-color: rgb(0, 0, 0, 0.3);
  & svg {
    margin-left: 5px;
  }
  &:hover {
    width: 55px;
    height: 55px;
  }
`;
