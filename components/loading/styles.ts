import styled from "@emotion/styled";
import { COLOR } from "./../../styles/index";
import { keyframes } from "@emotion/react";

export const Wrapper = styled.div`
  position: absolute;
  z-index: 4;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const circleAnime = keyframes`
0%{
    width:100%;
    height:100%;
}
100%{
    width:250%;
    height:250%;
    opacity:0;
}
`;

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${COLOR.main};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  .active {
    animation: ${circleAnime} 1s infinite;
  }
`;

export const BorderCircle = styled.div`
  position: absolute;
  border: 1px solid ${COLOR.main};
  animation: ${circleAnime} 0.5s infinite;
  width: 100%;
  height: 100%;
  border-radius: 80%;
`;
