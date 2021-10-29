import styled from "@emotion/styled";
import { COLOR } from "../../../../styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLOR.black_subBackground};
  width: 400px;
  border-radius: 10px;
  padding: 30px 25px;
  margin-bottom: 100px;
  & .title {
    color: ${COLOR.gray_text};
    font-size: 20px;
  }
  & .description {
    color: ${COLOR.gray_subText};
    font-size: 17px;
    margin-top: 5px;
  }
  & input[type="number"] {
    width: 100%;
    height: 50px;
    font-size: 18px;
    color: ${COLOR.blue_text};
    background: ${COLOR.black_background};
    padding: 0 15px;
    border-radius: 5px;
    margin-top: 20px;
  }
  & button {
    width: 100%;
    height: 40px;
    background: ${COLOR.blue_background};
    color: ${COLOR.gray_text};
    font-size: 18px;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 20px;
  }
  & .total-price {
    font-size: 18px;
    font-weight: 500;
    margin-top: 20px;
    color: ${COLOR.gray_subText};
    & b {
      color: ${COLOR.gray_text};
    }
  }
`;
