import styled from "@emotion/styled";
import { BASE_WRAPPER, BASE_CONTAINER, COLOR, SIZE } from "../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)`
  position: fixed;
  z-index: 5;
  border-bottom: 1px solid #1a1a1a;
  background: ${COLOR.black_background};
  box-shadow: 0px 3px 10px rgb(0, 0, 0, 0.3);
  padding: 0;
  padding-left: ${SIZE.sidebar_padding + "px"};
  padding-right: ${SIZE.right_padding + "px"};
`;

export const Container = styled(BASE_CONTAINER)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  height: ${`${SIZE.header_height}px`};
  width: 100%;
`;

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & .web-logo {
    text-transform: uppercase;
    color: ${COLOR.green_main};
    font-size: 30px;
    font-family: "Agency FB";
    cursor: pointer;
    /* 추후 변경 해야함 font family 안먹음 */
  }
  & .menu {
    text-transform: capitalize;
    font-size: 17px;
    font-weight: 600;
    color: ${COLOR.gray_text};
    cursor: pointer;
    padding: 10px 10px;
    border-radius: 7px;
    transition: 0.5s;
    &:hover {
      background-color: ${COLOR.black_subBackground};
    }
  }
  & .btn-container {
    display: flex;
    align-items: center;
    gap: 20px;
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
    width: 40px;
    height: 40px;
    border-radius: 80%;
    border: 1px solid ${COLOR.gray_borderColor};
    cursor: pointer;
  }
`;

interface searchBarProps {
  isFocusing: boolean;
}

export const SearchMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & svg {
    cursor: pointer;
  }
`;

export const SearchBarWrap = styled.div<searchBarProps>`
  position: relative;
  width: ${(res) => (res.isFocusing ? `300px` : `0px`)};
  transition: 0.5s;
  & input {
    width: 100%;
    height: 35px;
    background-color: ${COLOR.black_subBackground};
    border-radius: 5px;
    transition: 0.5s;
    color: ${COLOR.gray_subText};
    font-size: 15px;
    padding: 0px;
    &:focus {
      color: ${COLOR.gray_text};
      padding: 10px;
    }
    &::placeholder {
      color: ${COLOR.gray_subText};
    }
  }
  & .recommend {
    width: 100%;
    background-color: ${COLOR.black_subBackground};
    position: absolute;
    margin-top: 1px;
    & .result {
      display: ${(res) => (res.isFocusing ? "flex" : "none")};
      align-items: center;
      width: 100%;
      padding: 10px 10px;
      font-size: 15px;
      color: ${COLOR.gray_text};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      border-left: 2px solid ${COLOR.black_subBackground};
      &:hover {
        border-left: 2px solid ${COLOR.blue_text};
      }
      & b {
        color: ${COLOR.blue_text};
        font-weight: 500;
      }
      & .kind {
        color: #777777;
        margin-left: 10px;
        font-size: 13px;
      }
    }
  }
`;
