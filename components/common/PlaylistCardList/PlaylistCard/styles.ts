import styled from "@emotion/styled";
import { COLOR, SIZE, SQUARE } from "../../../../styles";

export const ResponsiveWrap = styled(SQUARE)``;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  & .cover-img {
    width: 90%;
    height: 90%;
    position: absolute;
    background-color: ${COLOR.black_background};
    z-index: 3;
    border: 1px solid ${COLOR.gray_borderColor};
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
    margin-top: 15px;
  }
`;
