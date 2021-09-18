import styled from "@emotion/styled";
import { BASE_WRAPPER, BASE_CONTAINER, COLOR } from "./../../styles/index";

export const Wrapper = styled(BASE_CONTAINER)`
  width: 100%;
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: ${COLOR.black_subBackground};
  width: 380px;
  box-sizing: content-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  & .login {
    font-size: 28px;
    font-weight: 800;
    color: white;
  }
  & .description {
    margin-top: 10px;
    font-size: 15px;
    color: ${COLOR.gray_subText};
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
    :first-of-type {
      color: white;
      background: #343434;
      margin-top: 35px;
    }
    :last-of-type {
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
  }
`;
