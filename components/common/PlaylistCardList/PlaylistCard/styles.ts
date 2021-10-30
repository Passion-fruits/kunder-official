import styled from "@emotion/styled";
import { COLOR, SIZE, SQUARE } from "../../../../styles";

export const ResponsiveWrap = styled(SQUARE)``;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: translateY(-6px);
  }
  & .cover-img,
  .none,
  .recommend-playlist {
    width: 90%;
    height: 90%;
    position: absolute;
    z-index: 3;
    border: 1px solid ${COLOR.gray_borderColor};
  }
  & .recommend-playlist {
    & img {
      width: 100%;
      height: 100%;
    }
    & .cover {
      width: 100%;
      height: 100%;
      z-index: 3;
      position: absolute;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 20px;
      color: ${COLOR.gray_text};
      font-size: 17px;
      font-weight: bold;
      text-align: right;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 14px;
      }
    }
  }
  & .none {
    background-color: ${COLOR.black_subBackground};
  }
  & .sqaure {
    width: 90%;
    height: 90%;
    position: absolute;
    border: 1px solid #707070;
  }
  & .square1 {
    background: #3a3a3a;
    transform: translate(6px, 6px);
    z-index: 2;
  }
  & .square2 {
    background: #1d1d1d;
    transform: translate(12px, 12px);
    z-index: 1;
  }
  & .title {
    font-size: 18px;
    font-weight: bold;
    color: ${COLOR.gray_text};
    margin-top: 10px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
  }
  & .musician {
    font-size: 15px;
    font-weight: 500;
    color: ${COLOR.gray_subText};
    margin-top: 5px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 12px;
    }
  }
`;
