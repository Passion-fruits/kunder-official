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
  .none {
    width: 90%;
    height: 90%;
    position: absolute;
    background-color: ${COLOR.black_background};
    z-index: 3;
    border: 1px solid ${COLOR.gray_borderColor};
  }
  & .none {
    background-color: ${COLOR.gray_subText};
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
