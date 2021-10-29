import styled from "@emotion/styled";
import {
  BASE_WRAPPER,
  BASE_CONTAINER,
  COLOR,
  SIZE,
} from "./../../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)`
  width: 700px;
  display: flex;
  flex-direction: column;
  /*   align-items: center; */
  margin-top: 50px;
  margin-right: 200px;
  @media screen and (max-width: ${SIZE.medium_width}) {
    width: 550px;
  }
  & .my-wallet {
    font-size: 20px;
    font-weight: bold;
    color: ${COLOR.gray_subText};
    margin-top: 30px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 16px;
    }
  }
  & .kdt-cnt {
    font-size: 60px;
    font-weight: bold;
    color: ${COLOR.gray_text};
    margin-top: 10px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 45px;
    }
  }
  & .description {
    font-size: 17px;
    color: ${COLOR.gray_subText};
    margin-top: 10px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
  }
`;

export const MenuWrap = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${COLOR.gray_borderColor};
  & button {
    width: 50%;
    color: ${COLOR.gray_subText};
    font-size: 17px;
    font-weight: bold;
    padding: 15px 0;
    border-radius: 5px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
      padding: 10px 0;
    }
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
    @media screen and (max-width: ${SIZE.medium_width}) {
      height: 3px;
    }
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
  @media screen and (max-width: ${SIZE.medium_width}) {
    gap: 15px;
  }
  & div {
    display: flex;
    align-items: center;
    gap: 20px;
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
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 15px;
      }
    }
    & .kdt-percent {
      color: ${COLOR.gray_subText};
      font-size: 15px;
      font-weight: 500;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 13px;
      }
    }
  }
`;

export const ControlBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  width: 100%;
  @media screen and (max-width: ${SIZE.medium_width}) {
    margin-top: 30px;
  }
  & button {
    width: 100%;
    height: 48px;
    border-radius: 3px;
    font-size: 20px;
    font-weight: bold;
    color: ${COLOR.gray_text};
    background: ${COLOR.blue_background};
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 17px;
      height: 40px;
    }
    &:nth-of-type(2) {
      color: ${COLOR.blue_text};
      border: 1px solid ${COLOR.blue_text};
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
  border-bottom: 1px solid ${COLOR.gray_borderColor};
  width: 100%;
  & h1 {
    font-size: 17px;
    font-weight: 500;
    color: ${COLOR.gray_subText};
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
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
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 17px;
    }
  }
  & .date {
    color: ${COLOR.gray_subText};
    font-size: 17px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 14px;
    }
  }
`;

export const CheckPaymentWrap = styled(BASE_WRAPPER)`
  /*   padding: 0;
  width: 100%; */
  padding-right: 200px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h1 {
    color: ${COLOR.blue_text};
    font-size: 18px;
    margin-top: 20px;
  }
`;
