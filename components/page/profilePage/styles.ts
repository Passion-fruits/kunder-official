import styled from "@emotion/styled";
import {
  BASE_WRAPPER,
  BASE_CONTAINER,
  COLOR,
  SIZE,
} from "../../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)``;

export const ProfileInfoWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 250px auto;
  margin-bottom: 40px;
  @media screen and (max-width: ${SIZE.medium_width}) {
    grid-template-columns: 200px auto;
  }
  & .cover-img {
    width: 250px;
    height: 250px;
    border-radius: 80%;
    border: 1px solid ${COLOR.gray_borderColor};
    @media screen and (max-width: ${SIZE.medium_width}) {
      width: 200px;
      height: 200px;
    }
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  & .line {
    width: 70px;
    height: 3px;
    background: ${COLOR.green_main};
  }
  & .musician {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    margin-top: 13px;
    & h1 {
      font-size: 2.3vw;
      color: white;
    }
    & span {
      color: ${COLOR.green_subMain};
      font-size: 17px;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
  & .description {
    color: #d4d4d4;
    font-size: 17px;
    margin-top: 30px;
    line-height: 23px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
      margin-top: 20px;
    }
  }
  & .followCntContainer {
    margin-top: 30px;
    display: flex;
    gap: 13px;
    position: absolute;
    right: 0;
    top: 0;
    & div {
      background: ${COLOR.black_subBackground};
      border: 10px;
      border-radius: 10px;
      height: 76px;
      padding: 0 17px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      @media screen and (max-width: ${SIZE.medium_width}) {
        height: 65px;
      }
      & h3 {
        font-size: 23px;
        color: white;
        @media screen and (max-width: ${SIZE.medium_width}) {
          font-size: 18px;
        }
      }
      & span {
        color: ${COLOR.gray_subText};
        font-size: 15px;
        @media screen and (max-width: ${SIZE.medium_width}) {
          font-size: 13px;
        }
      }
    }
  }
  & .snsContainer {
    display: flex;
    gap: 10px;
    margin-top: 30px;
    & button {
      height: 45px;
      background: ${COLOR.black_subBackground};
      border-radius: 3px;
      padding: 0 17px;
      font-size: 17px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 13px;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 15px;
        height: 40px;
        padding: 0 13px;
      }
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  & button {
    padding: 0px 15px;
    height: 40px;
    background: none;
    border-radius: 3px;
    border: 1px solid white;
    color: white;
    font-size: 15px;
    &:nth-of-type(2) {
      color: ${COLOR.green_main};
      border: 1px solid ${COLOR.green_main};
      margin-left: 10px;
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  & .detail-contents {
    margin-left: 30px;
    display: flex;
    align-items: center;
    gap: 13px;
    & .content {
      color: ${COLOR.gray_subText};
      font-size: 17px;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 15px;
      }
      & b {
        color: white;
      }
    }
    & .circle {
      width: 5px;
      height: 5px;
      border-radius: 80%;
      background: ${COLOR.gray_subText};
    }
  }
`;

export const UserInforWrap = styled.div`
  width: 100%;
  margin-top: 60px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 50px;
  border-bottom: 1px solid ${COLOR.gray_borderColor};
`;

interface InforMenuProps {
  isCheck: boolean;
}

export const InforMenu = styled.span<InforMenuProps>`
  font-size: 18px;
  font-weight: bold;
  color: ${(res) => (res.isCheck ? COLOR.green_subMain : "#fff")};
  padding-bottom: 13px;
  border-bottom: ${(res) =>
    `3px solid ${res.isCheck ? COLOR.green_subMain : "transparent"}`};
  cursor: pointer;
  @media screen and (max-width: ${SIZE.medium_width}) {
    font-size: 15px;
  }
`;
