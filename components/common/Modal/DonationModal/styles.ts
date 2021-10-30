import styled from "@emotion/styled";
import { COLOR } from "./../../../../styles/index";

export const Wrapepr = styled.div`
  padding: 30px;
  background-color: ${COLOR.black_subBackground};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 450px;
  & .title {
    font-size: 20px;
    font-weight: bold;
    color: ${COLOR.gray_text};
  }
  & .description {
    font-size: 17px;
    color: ${COLOR.gray_subText};
    margin-top: 15px;
  }
  & .line {
    width: 100%;
    height: 1px;
    margin: 20px 0;
    background-color: rgb(70, 70, 70);
  }
  & .kdt-cnt {
    font-size: 18px;
    font-weight: 500;
    color: ${COLOR.gray_text};
  }
  & input[type="number"] {
    width: 100%;
    height: 55px;
    color: ${COLOR.blue_text};
    font-size: 17px;
    font-weight: bold;
    padding: 20px;
    background-color: ${COLOR.black_background};
    border-radius: 5px;
    margin-top: 20px;
  }
  & textarea {
    padding: 20px;
    height: 135px;
    width: 100%;
    border-radius: 5px;
    background-color: ${COLOR.black_background};
    margin-top: 10px;
    color: ${COLOR.gray_text};
    font-size: 17px;
    border: none;
    &::placeholder {
      color: ${COLOR.gray_subText};
    }
  }
  & .submit-btn {
    width: 100%;
    height: 50px;
    color: ${COLOR.gray_text};
    font-size: 18px;
    font-weight: bold;
    background-color: ${COLOR.blue_background};
    border-radius: 5px;
    margin-top: 20px;
  }
`;
