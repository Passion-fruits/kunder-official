import styled from "@emotion/styled";
import { BASE_WRAPPER, BASE_CONTAINER, COLOR } from "./../../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)`
  width: 630px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  & .my-wallet {
    font-size: 20px;
    font-weight: bold;
    color: ${COLOR.gray_subText};
    margin-top: 50px;
  }
  & .kdt-cnt {
    font-size: 60px;
    font-weight: bold;
    color: ${COLOR.gray_text};
    margin-top: 10px;
  }
  & .description {
    font-size: 17px;
    color: ${COLOR.gray_subText};
    margin-top: 10px;
  }
`;

export const MenuWrap = styled.div`
  width: 100%;
  display: flex;
  & button {
    width: 50%;
    border-radius: 5px;
    color: ${COLOR.gray_subText};
    font-size: 17px;
    font-weight: bold;
    padding: 15px 0;
    &:first-of-type {
      color: ${COLOR.blue_text};
      background: ${COLOR.black_subBackground};
    }
  }
`;
