import styled from "@emotion/styled";
import {
  BASE_WRAPPER,
  BASE_CONTAINER,
  COLOR,
  SIZE,
} from "./../../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)`
  width: 1250px;
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 360px;
`;

export const BaseWrapper = styled.div`
  border-radius: 10px;
  background-color: ${COLOR.black_subBackground};
  padding: 30px;
`;

export const MyKdtWrap = styled(BaseWrapper)`
  width: 720px;
  height: 100%;
  position: relative;
  padding: 30px 0;
  & .padding-wrap {
    width: 100%;
    padding: 0 30px;
  }
  & .title {
    color: ${COLOR.green_main};
    font-size: 18px;
    font-weight: 500;
  }
  & .kdt-amount {
    color: ${COLOR.gray_text};
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    & span {
      font-size: 25px;
    }
  }
  & .description {
    font-size: 17px;
    color: ${COLOR.gray_subText};
    margin-top: 25px;
  }
`;

export const KdtHistoryInfor = styled.div`
  width: 100%;
  display: flex;
  margin-top: 45px;
  & div {
    width: 33%;
    display: flex;
    justify-content: space-evenly;
    font-weight: bold;
    border-left: 1px solid ${COLOR.gray_subText};
    & .title {
      color: ${COLOR.gray_subText};
      font-size: 17px;
    }
    & .content {
      color: ${COLOR.gray_text};
      font-size: 17px;
    }
  }
`;

export const KdtControlBtnWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  height: 70px;
  border-top: 1px solid #474747;
  & button {
    width: 50%;
    height: 100%;
    border-right: 1px solid #474747;
    font-size: 20px;
    font-weight: bold;
    color: ${COLOR.gray_text};
    &:last-of-type {
      border: none;
    }
    &:hover {
      background-color: ${COLOR.gray_borderColor};
    }
  }
`;

export const KdtDescriptionWrap = styled(BaseWrapper)`
  width: 480px;
  height: 100%;
`;

export const CheckPaymentWrap = styled(BASE_WRAPPER)`
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
