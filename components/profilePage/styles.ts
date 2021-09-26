import styled from "@emotion/styled";
import { BASE_WRAPPER, BASE_CONTAINER, COLOR } from "./../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)``;

export const ProfileInfoWrap = styled.div`
  width: 100%;
  padding-top: 30px;
  display: grid;
  grid-template-columns: 250px auto;
  & .cover-img {
    width: 250px;
    height: 250px;
    border-radius: 80%;
    border: 1px solid ${COLOR.gray_borderColor};
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  padding-top: 30px;
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
      font-size: 45px;
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
      & h3 {
        font-size: 23px;
        color: white;
      }
      & span {
        color: ${COLOR.gray_subText};
        font-size: 15px;
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
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-top: 30px;
  & button {
    padding: 10px 15px;
    background: none;
    border-radius: 3px;
    border: 1px solid white;
    color: white;
    font-size: 15px;
  }
  & .detail-contents {
    display: flex;
    align-items: center;
    gap: 13px;
    & .content {
      color: ${COLOR.gray_subText};
      font-size: 17px;
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
