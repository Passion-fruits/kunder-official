import styled from "@emotion/styled";
import { BASE_WRAPPER, BASE_CONTAINER, COLOR } from "./../../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)`
  width: 630px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  & .my-wallet {
    font-size: 20px;
    font-weight: bold;
    color: ${COLOR.gray_subText};
    margin-top: 30px;
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
    color: ${COLOR.gray_subText};
    font-size: 17px;
    font-weight: bold;
    padding: 15px 0;
    border: 1px solid ${COLOR.gray_borderColor};
    border-width: 0px 0px 1px 0px;
    border-radius: 5px;
  }
`;

export const KdtChart = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  & div {
    width: 50%;
    height: 7px;
    background: ${COLOR.blue_background};
    &:nth-of-type(2) {
      background-color: ${COLOR.green_background};
    }
  }
`;

export const ChartInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  gap: 20px;
  & div {
    display: flex;
    align-items: center;
    position: relative;
    &::before {
      content: "";
      width: 6px;
      height: 6px;
      background-color: ${COLOR.blue_background};
      position: absolute;
    }
    &:nth-of-type(2) {
      &::before {
        background-color: ${COLOR.green_background};
      }
    }
    & span {
      color: ${COLOR.gray_text};
      font-size: 17px;
      margin-left: 20px;
    }
    & .kdt-percent {
      position: absolute;
      right: 0;
      color: ${COLOR.gray_subText};
      font-size: 15px;
      font-weight: 500;
    }
  }
`;

export const UseKdtChart = styled.div`
  width: 100%;
  height: 90px;
  border-radius: 5px;
  background: #1a1a1a;
  margin-top: 40px;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    & h1 {
      color: ${COLOR.gray_text};
      font-size: 20px;
    }
    & span {
      color: ${COLOR.gray_subText};
      font-size: 17px;
    }
  }
`;

export const ControlBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  & button {
    width: 100%;
    height: 48px;
    border-radius: 3px;
    font-size: 20px;
    font-weight: bold;
    color: ${COLOR.gray_text};
    background: ${COLOR.blue_background};
    &:nth-of-type(2) {
      color: ${COLOR.blue_background};
      border: 1px solid ${COLOR.blue_background};
      background: none;
    }
  }
`;

export const TransactionCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 17px;
  position: relative;
  border-radius: 5px;
  &:nth-of-type(2n + 1) {
    background-color: ${COLOR.black_subBackground};
  }
  & h1 {
    font-size: 17px;
    font-weight: 500;
    color: ${COLOR.gray_subText};
    & b {
      color: ${COLOR.gray_text};
      font-weight: bold;
    }
  }
  & .flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  & .kdt {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    color: ${COLOR.blue_text};
  }
  & .date {
    color: ${COLOR.gray_subText};
    font-size: 17px;
  }
`;
