import styled from "@emotion/styled";
import { COLOR, SIZE } from "../../styles/index";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${`${SIZE.card_size}px`};
  & .cover-image-wrap {
    width: ${`${SIZE.card_size}px`};
    height: ${`${SIZE.card_size}px`};
    border-radius: 6px;
    border: 1px solid ${COLOR.gray_borderColor};
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
    font-size: 16px;
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
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  & div {
    font-size: 12px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 3px 5px;
  }
  & .like {
    color: ${COLOR.green_main};
    gap: 3px;
    background: #092115;
  }
  & .genre {
    color: #60b3ff;
    background: #130c2d;
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
