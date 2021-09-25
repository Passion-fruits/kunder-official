import styled from "@emotion/styled";
import {
  BASE_WRAPPER,
  BASE_CONTAINER,
  COLOR,
  SIZE,
} from "./../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)`
  position: fixed;
  z-index: 5;
  border-bottom: 1px solid #1a1a1a;
  background: ${COLOR.black_background};
  box-shadow: 0px 3px 10px rgb(0, 0, 0, 0.3);
`;

export const Container = styled(BASE_CONTAINER)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  height: ${`${SIZE.header_height}px`};
`;

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  & .web-logo {
    text-transform: uppercase;
    color: ${COLOR.green_main};
    font-size: 30px;
    font-family: "Agency FB";
    cursor: pointer;
    /* 추후 변경 해야함 font family 안먹음 */
  }
  & span {
    text-transform: capitalize;
    font-size: 17px;
    font-weight: 600;
    color: ${COLOR.gray_text};
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 7px;
    transition: 0.5s;
    &:hover {
      background-color: ${COLOR.black_subBackground};
    }
    &:last-of-type {
      color: ${COLOR.green_subMain};
    }
  }
  & .btn-container {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  & .login-btn {
    padding: 10px 17px;
    background-color: ${COLOR.black_subBackground};
    color: ${COLOR.gray_text};
    font-size: 15px;
    border-radius: 5px;
    transition: 0.5s;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
  & .mypage-btn {
    padding: 10px 12px;
    background-color: #6900ff;
    color: ${COLOR.gray_text};
    font-size: 15px;
    border-radius: 3px;
  }
  & svg {
    cursor: pointer;
    margin-right: 20px;
  }
`;
