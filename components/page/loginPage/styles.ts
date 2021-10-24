import styled from "@emotion/styled";
import {
  BASE_WRAPPER,
  BASE_CONTAINER,
  COLOR,
  SIZE,
} from "../../../styles/index";
import { keyframes } from "@emotion/react";

export const Wrapper = styled(BASE_CONTAINER)`
  width: 100%;
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UpperAnime = keyframes`
0%{
  opacity:0;
  margin-top:50px;
}
100%{
  opacity:1;
  margin-top:0px;
}
`;

export const Container = styled.div`
  width: 380px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${UpperAnime} 0.5s;
  & .title {
    font-size: 30px;
    font-weight: 800;
    color: ${COLOR.gray_text};
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 23px;
    }
  }
  & .description {
    margin-top: 10px;
    font-size: 17px;
    color: ${COLOR.gray_subText};
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 14px;
    }
  }
  & .login-button {
    width: 320px;
    height: 50px;
    border-radius: 3px;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
      width: 270px;
      height: 50px;
    }
    &:first-of-type {
      color: white;
      background: #343434;
      margin-top: 35px;
    }
    &:last-of-type {
      color: black;
      background: white;
      margin-top: 10px;
      font-weight: bold;
    }
  }
  & .line {
    background-color: #707070;
    margin-top: 22px;
    width: 180px;
    height: 1px;
  }
  & .privacy-terms {
    color: ${COLOR.gray_subText};
    text-decoration: underline;
    font-size: 14px;
    margin-top: 50px;
    cursor: pointer;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 12px;
    }
  }
`;

export const InputWrap = styled.div`
  width: 450px;
  margin-top: 30px;
  & .input-title {
    color: ${COLOR.gray_text};
    font-size: 17px;
    font-weight: 600;
    display: flex;
    margin-bottom: 17px;
    &::before {
      content: "*";
      font-size: 17px;
      color: ${COLOR.red_text};
      margin-right: 5px;
    }
  }
  & input {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background: #1a1a1a;
    padding: 0 22px;
    color: ${COLOR.gray_subText};
    font-size: 17px;
  }
  & .loading-button {
    background: #7499ff;
  }
  & button {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background: #4677ff;
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-top: 30px;
    transition: 0.5s;
    border: 2px solid transparent;
    :focus {
      border: 2px solid skyblue;
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 10px;
  & div {
    display: flex;
    align-items: center;
    margin-top: 15px;
    & label {
      margin-left: 5px;
      font-size: 17px;
      color: ${COLOR.gray_subText};
      cursor: pointer;
    }
    & input[type="checkbox"] {
      cursor: pointer;
      width: 15px;
      height: 15px;
    }
  }
`;
