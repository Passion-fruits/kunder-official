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
  @media screen and (max-width: ${SIZE.medium_width}) {
    width: 1000px;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 360px;
  @media screen and (max-width: ${SIZE.medium_width}) {
    height: 300px;
  }
`;

export const BaseWrapper = styled.div`
  border-radius: 10px;
  background-color: ${COLOR.black_subBackground};
  padding: 30px;
  @media screen and (max-width: ${SIZE.medium_width}) {
    padding: 20px;
  }
`;

export const MyKdtWrap = styled(BaseWrapper)`
  width: 720px;
  height: 100%;
  position: relative;
  padding: 30px 0;
  @media screen and (max-width: ${SIZE.medium_width}) {
    width: 600px;
    padding: 20px 0;
  }
  & .padding-wrap {
    width: 100%;
    padding: 0 30px;
  }
  & .title {
    color: ${COLOR.green_main};
    font-size: 18px;
    font-weight: 500;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
  }
  & .kdt-amount {
    color: ${COLOR.gray_text};
    font-size: 40px;
    font-weight: bold;
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 35px;
    }
    & span {
      font-size: 25px;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 22px;
      }
    }
  }
  & .description {
    font-size: 17px;
    color: ${COLOR.gray_subText};
    margin-top: 25px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
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
      color: ${COLOR.gray_text};
      font-size: 17px;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 15px;
      }
    }
    & .content {
      color: ${COLOR.green_main};
      font-size: 17px;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 15px;
      }
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
  @media screen and (max-width: ${SIZE.medium_width}) {
    height: 60px;
  }
  & button {
    width: 50%;
    height: 100%;
    border-right: 1px solid #474747;
    font-size: 20px;
    font-weight: bold;
    color: ${COLOR.gray_text};
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 17px;
    }
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: ${SIZE.medium_width}) {
    width: 350px;
  }
  & h1 {
    color: ${COLOR.gray_subText};
    font-size: 20px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 17px;
    }
  }
  & p {
    font-size: 17px;
    color: ${COLOR.gray_text};
    line-height: 23px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 14px;
      line-height: 20px;
    }
    & strong {
      color: ${COLOR.green_main};
    }
  }
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
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
  }
`;

export const SpinerWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  background: ${COLOR.black_subBackground};
  border-radius: 5px;
  margin-top: 20px;
`;

export const HistoryWrapper = styled.table`
  width: 100%;
  padding: 30px;
  border-radius: 10px;
  margin-top: 20px;
  color: ${COLOR.gray_text};
  background-color: ${COLOR.black_subBackground};
  & th {
    color: ${COLOR.gray_subText};
    font-size: 17px;
    text-align: left;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 14px;
    }
  }
  & td {
    padding-top: 30px;
  }
  & tr {
    td {
      &:nth-of-type(1) {
        color: ${COLOR.gray_subText};
        font-size: 17px;
        @media screen and (max-width: ${SIZE.medium_width}) {
          font-size: 14px;
        }
        & b {
          color: ${COLOR.gray_text};
        }
      }
      &:nth-of-type(2) {
        color: ${COLOR.gray_subText};
        font-size: 17px;
        @media screen and (max-width: ${SIZE.medium_width}) {
          font-size: 14px;
        }
      }
      &:nth-of-type(3) {
        & div {
          color: ${COLOR.blue_text};
          font-size: 14px;
          width: 170px;
          border-radius: 5px;
          background-color: #002350;
          padding: 4px 5px;
          cursor: pointer;
          @media screen and (max-width: ${SIZE.medium_width}) {
            font-size: 12px;
          }
        }
      }
      &:nth-of-type(4) {
        font-size: 17px;
        font-weight: bold;
        @media screen and (max-width: ${SIZE.medium_width}) {
          font-size: 14px;
        }
        & .plus {
          color: ${COLOR.green_subMain};
        }
        & .minus {
          color: ${COLOR.blue_text};
        }
      }
    }
  }
`;
