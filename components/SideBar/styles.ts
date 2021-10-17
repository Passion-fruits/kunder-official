import styled from "@emotion/styled";
import { SIZE } from "../../styles";
import { COLOR } from "./../../styles/index";

export const Wrapper = styled.div`
  width: ${SIZE.sidebar_size - 20 + "px"};
  height: 100%;
  padding: ${SIZE.header_height + "px"} 15px;
  position: fixed;
  background-color: ${COLOR.black_background};
  z-index: 2;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 1px;
    background-color: ${COLOR.gray_borderColor};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${COLOR.blue_text};
  }
`;

export const NotLoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  & .title {
    color: ${COLOR.gray_text};
    font-size: 18px;
    font-weight: 500;
    & b {
      font-weight: 800;
    }
  }
  & .description {
    color: ${COLOR.gray_subText};
    font-size: 15px;
    margin-top: 7px;
  }
  & .login-btn {
    width: 100%;
    padding: 12px 0;
    border: 1px solid ${COLOR.green_main};
    color: ${COLOR.green_main};
    font-size: 16px;
    margin-top: 25px;
  }
  & .add-func {
    font-size: 17px;
    margin-top: 40px;
    color: ${COLOR.gray_text};
    ::before {
      content: "";
      width: 50px;
      height: 2px;
      background: ${COLOR.green_main};
      position: absolute;
      transform: translateY(-10px);
    }
  }
`;

export const AddFuncMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  &:first-of-type {
    margin-top: 25px;
  }
  & .circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #414141;
  }
  & span {
    color: ${COLOR.gray_subText};
    font-size: 16px;
  }
`;
