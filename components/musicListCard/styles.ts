import styled from "@emotion/styled";
import { COLOR } from "../../styles";

export const LIST_HEIGHT = "75px";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  box-sizing: content-box;
  height: ${LIST_HEIGHT};
  display: flex;
  position: relative;
  border-bottom: 1px solid #ececec;
  .list-contents {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const MusicInformatino = styled.div`
  width: 550px;
  .index-number {
    width: 30px;
    font-size: 15px;
    color: ${COLOR.text};
  }
  .play-button {
    width: 40px;
    height: 40px;
    border-radius: 80%;
    border: 2px solid #dbdbdb;
    margin-left: 20px;
    & svg {
      margin-left: 4px;
      margin-top: 2px;
    }
  }
  .cover-img {
    width: 75px;
    height: 75px;
    border: 1px solid rgb(240, 240, 240);
    margin-left: 40px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      opacity: 0.8;
    }
  }
  .music-title-writter {
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    gap: 2px;
    & h3 {
      color: ${COLOR.black};
      font-size: 20px;
      cursor: pointer;
      transition: 0.5s;
      &:hover {
        opacity: 0.7;
      }
    }
    & h5 {
      font-size: 16px;
      font-weight: 500;
      color: ${COLOR.text};
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const MusicGenreMood = styled.div`
  gap: 13px;
  & div {
    border: 1px solid ${COLOR.text};
    border-radius: 24px;
    font-size: 16px;
    padding: 8px 14px;
    color: ${COLOR.text};
  }
`;

export const HeartCotainer = styled.div`
  position: absolute;
  height: ${LIST_HEIGHT};
  display: flex;
  align-items: center;
  gap: 7px;
  right: 0;
  color: ${COLOR.main};
  font-size: 16px;
`;
