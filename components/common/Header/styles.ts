import styled from "@emotion/styled";
import {
  BASE_WRAPPER,
  BASE_CONTAINER,
  COLOR,
  SIZE,
} from "../../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)`
  z-index: 5;
  padding: 0;
  padding-right: ${SIZE.right_padding + "px"};
  padding-left: ${SIZE.sidebar_padding + "px"};
  background-color: rgb(0, 0, 0, 0.9);
  position: fixed;
`;

export const Container = styled(BASE_CONTAINER)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px;
  height: ${`${SIZE.header_height}px`};
  width: 100%;
`;

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: ${SIZE.medium_width}) {
    & svg {
      width: 18px;
    }
  }
  @media screen and (max-width: ${SIZE.medium_width}) {
    gap: 15px;
  }
  & .web-logo {
    text-transform: uppercase;
    color: ${COLOR.green_main};
    font-size: 30px;
    font-family: "Agency FB";
    cursor: pointer;
    /* 추후 변경 해야함 font family 안먹음 */
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 25px;
    }
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
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
    &:hover {
      background-color: ${COLOR.black_subBackground};
    }
  }
  & .login-btn {
    padding: 10px 17px;
    background-color: ${COLOR.black_subBackground};
    color: ${COLOR.gray_text};
    font-size: 15px;
    border-radius: 5px;
    transition: 0.5s;
    opacity: 0.7;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 14px;
      padding: 8px 12px;
    }
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
    @media screen and (max-width: ${SIZE.medium_width}) {
      width: 35px;
      height: 35px;
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;

export const ProfileMenu = styled.div`
  position: absolute;
  background: ${COLOR.black_subBackground};
  border-radius: 10px;
  margin-top: 50px;
  width: 150px;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.3);
  overflow: hidden;
  @media screen and (max-width: ${SIZE.medium_width}) {
    width: 120px;
  }
  & button {
    width: 100%;
    padding: 12px 0;
    color: ${COLOR.gray_text};
    background-color: ${COLOR.black_subBackground};
    font-size: 17px;
    font-weight: bold;
    border-bottom: 1px solid #606060;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 14px;
      padding: 8px 0;
    }
    &:hover {
      background-color: #2b2b2b;
    }
    &:last-of-type {
      border: none;
      color: ${COLOR.red_text};
    }
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
