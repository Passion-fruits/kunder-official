import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "../../styles/index";

export const Wrapper = styled(WRAPPER)`
  padding-top: 80px;
  & h1 {
    color: ${COLOR.black};
    font-size: 30px;
    font-family: "Agency FB";
    font-weight: bold;
  }
`;

export const Container = styled(CONTAINER)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & div {
    cursor: pointer;
    border: 1px solid ${COLOR.black};
    width: 340px;
    height: 50px;
    font-size: 18px;
    color: ${COLOR.black};
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
      margin-right: 10px;
    }
    &:first-of-type {
      margin-top: 30px;
      color: ${COLOR.black};
    }
    &:last-of-type {
      color: white;
      background-color: ${COLOR.black};
      margin-top: 10px;
      margin-bottom: 40px;
      color: white;
    }
  }
  & span {
    cursor: pointer;
    color: ${COLOR.text};
  }
  & p {
    color: ${COLOR.text};
    font-size: 16px;
    margin-top: 13px;
    &:last-of-type {
      margin-top: 60px;
      text-align: center;
      line-height: 20px;
    }
  }
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  & p {
    margin: 0;
    margin-top: 20px;
    color: ${COLOR.text};
    font-size: 16px;
  }
  & input[type="text"],
  button {
    width: 100%;
    height: 50px;
    border: 1px solid ${COLOR.black};
  }
  & input {
    color: ${COLOR.black};
    font-size: 16px;
    padding: 0 20px;
    margin-top: 30px;
    &::placeholder {
      color: ${COLOR.text};
    }
  }
  & button {
    background-color: ${COLOR.black};
    color: white;
    font-weight:bold;
    font-size:18px;
    margin-top:35px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 35px;
  & div {
    & label {
      margin-left: 5px;
      cursor: pointer;
    }
    & input[type="checkbox"] {
      cursor: pointer;
    }
  }
`;
