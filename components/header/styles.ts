import styled from "@emotion/styled";
import {
  BASE_WRAPPER,
  BASE_CONTAINER,
  COLOR,
  SIZE,
} from "./../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)`
  position: fixed;
`;

export const Container = styled(BASE_CONTAINER)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  height: ${`${SIZE.header_height}px`};
  background-color: ${COLOR.black_background};
`;

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & .web-logo {
    text-transform: uppercase;
    color: ${COLOR.green_main};
    font-size: 33px;
    font-family: "Agency FB";
    cursor: pointer;
    /* 추후 변경 해야함 font family 안먹음 */
  }
  & span {
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
      color: ${COLOR.red_text};
    }
  }
  & .login-btn {
    padding: 10px 17px;
    background-color: ${COLOR.black_subBackground};
    color: ${COLOR.gray_text};
    font-size: 16px;
    border-radius: 5px;
    transition: 0.5s;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
  & svg {
    cursor: pointer;
    margin-right: 20px;
  }
`;
