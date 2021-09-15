import styled from "@emotion/styled";
import { IMG_SIZE } from "../../styles";
import { COLOR } from "./../../styles/index";

export const Wrapper = styled.div`
  width: ${`${IMG_SIZE}px`};
  cursor: pointer;
  & img {
    width: ${`${IMG_SIZE}px`};
    height: ${`${IMG_SIZE}px`};
    border: 1px solid rgb(240, 240, 240);
  }
  & h3 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 14px;
    color: ${COLOR.black};
    margin-bottom: 5px;
    transition:0.5s;
    &:hover{
      opacity:0.6;
    }
  }
  .artist-name {
    font-size: 14px;
    color: ${COLOR.text};
  }
  & h5 {
    font-size: 15px;
    color: ${COLOR.main};
    margin-top: 10px;
    font-weight: 500;
  }
  &:hover div {
    display: flex;
  }
`;

export const Cover = styled.div`
  width: ${`${IMG_SIZE}px`};
  height: ${`${IMG_SIZE}px`};
  position: absolute;
  background: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.5));
  display: none;
  justify-content: center;
  align-items: center;
  & button {
    background-color: rgb(0, 0, 0, 0.3);
    width: 50px;
    height: 50px;
    border-radius: 80%;
    border: 2px solid white;
    &:hover {
      width: 55px;
      height: 55px;
    }
    & svg {
      margin-left: 5px;
    }
  }
`;

export const HeartWrap = styled.div`
  margin-top: 6px;
  gap: 7px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & span {
    font-size: 13px;
    color: ${COLOR.main};
  }
`;
