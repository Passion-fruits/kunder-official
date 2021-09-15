import styled from "@emotion/styled";
import {
  COLOR,
  FIXED_CONTAINER,
  HEADER_HEIGHT,
  MAIN_WIDTH,
  TABLET_WIDTH,
  WRAPPER,
} from "./../../styles/index";

export const Wrapper = styled(WRAPPER)`
  height: ${`${HEADER_HEIGHT}px`};
  position: fixed;
  z-index: 10;
  min-width:${TABLET_WIDTH};
  @media screen and (max-width: ${MAIN_WIDTH}) {
    width: 100%;
  }
`;

export const Cotainer = styled(FIXED_CONTAINER)`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width:none;
`;

export const LEFT_SIDE = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  @media screen and (max-width: ${MAIN_WIDTH}) {
    gap: 20px;
  }
  & img {
    height: 25px;
    cursor: pointer;
    @media screen and (max-width: ${MAIN_WIDTH}) {
      height: 20px;
    }
  }
  & span {
    color: ${COLOR.black};
    font-size: 18px;
    cursor: pointer;
    &:last-of-type {
      color: ${COLOR.red};
    }
    @media screen and (max-width: ${MAIN_WIDTH}) {
      font-size: 16px;
    }
  }
`;

export const RIGHT_SIDE = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  & div,
  button {
    background-color: ${COLOR.background};
    border-radius: 3px;
  }
  & div {
    width: 300px;
    padding: 13px 20px;
    display: flex;
    align-items: center;
    @media screen and (max-width: ${MAIN_WIDTH}) {
      width: 250px;
      padding: 10px 12px;
    }
  }
  & input {
    color: ${COLOR.black};
    font-size: 16px;
    margin-left: 16px;
    background: none;
    &::placeholder {
      color: ${COLOR.text};
    }
    @media screen and (max-width: ${MAIN_WIDTH}) {
      font-size: 14px;
    }
  }
  & button {
    font-size: 16px;
    padding: 8px 15px;
    color: ${COLOR.text};
    &:first-of-type {
      margin-left: 10px;
    }
    @media screen and (max-width: ${MAIN_WIDTH}) {
      font-size: 14px;
      padding: 6px 12px;
    }
  }
`;
