import styled from "@emotion/styled";
import { COLOR, SIZE, SQUARE } from "../../../../styles/index";

export const ResponsiveWrap = styled(SQUARE)``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & .cover-image-wrap {
    position: absolute;
    width: 95%;
    height: 95%;
    border: 1px solid ${COLOR.gray_borderColor};
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
    }
    & .none-img {
      width: 100%;
      height: 100%;
      background: linear-gradient(134.42deg, #f96678 7.99%, #5f9c77 92.85%);
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
    font-size: 19px;
    font-weight: 600;
    margin-top: 8px;
    transition: 0.5s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
    &:hover {
      opacity: 0.7;
    }
  }
  & .musician-name {
    color: ${COLOR.gray_subText};
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
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

export const IconWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  & div {
    font-size: 12px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    padding: 3px 5px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 10px;
    }
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
  & .add-playlist {
    margin-top: 3px;
    position: absolute;
    right: 0;
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
