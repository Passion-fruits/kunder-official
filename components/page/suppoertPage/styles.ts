import styled from "@emotion/styled";
import { BASE_CONTAINER, BASE_WRAPPER, SIZE } from "../../../styles";
import { COLOR } from "./../../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)`
  display: flex;
  flex-direction: column;
  & .title {
    color: ${COLOR.gray_text};
    font-size: 23px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 20px;
    }
  }
  & .description {
    color: ${COLOR.gray_subText};
    font-size: 17px;
    margin-top: 15px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
  }
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 50px;
  grid-column-gap: 50px;
  margin-top: 30px;
`;

export const SupportCard = styled.div`
  width: 100%;
  background-color: ${COLOR.black_subBackground};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  @media screen and (max-width: ${SIZE.medium_width}) {
    padding: 20px;
  }
  & .line {
    margin: 20px 0;
    width: 100%;
    height: 1px;
    background-color: rgb(70, 70, 70);
  }
`;

export const SupportInfor = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  grid-column-gap: 15px;
  @media screen and (max-width: ${SIZE.medium_width}) {
    grid-template-columns: 40px auto;
  }
  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid ${COLOR.gray_borderColor};
    @media screen and (max-width: ${SIZE.medium_width}) {
      width: 40px;
      height: 40px;
    }
  }
  & div {
    display: flex;
    flex-direction: column;
    position: relative;
    & .who {
      color: ${COLOR.blue_text};
      font-size: 18px;
      margin-top: 10px;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 15px;
      }
    }
    & .ment {
      color: ${COLOR.gray_text};
      font-size: 17px;
      font-weight: bold;
      margin-top: 22px;
      line-height: 28px;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 14px;
        margin-top: 18px;
      }
    }
    & .state {
      font-size: 20px;
      width: 100%;
      text-align: right;
      margin-top: 20px;
      color: ${COLOR.green_main};
      font-weight: 800;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 17px;
        font-weight: 600;
        margin-top: 15px;
      }
    }
  }
`;

export const AnswerWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & textarea {
    width: 100%;
    height: 135px;
    background: #404040;
    border-radius: 5px;
    padding: 20px;
    color: ${COLOR.gray_text};
    font-size: 17px;
    &::placeholder {
      color: ${COLOR.gray_subText};
    }
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 14px;
      height: 110px;
      padding: 15px;
    }
  }
  & button {
    width: 100%;
    height: 50px;
    color: ${COLOR.blue_text};
    border: 1px solid ${COLOR.blue_text};
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
      height: 40px;
    }
  }
`;

export const NoneAnswerWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  & img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid ${COLOR.gray_borderColor};
    @media screen and (max-width: ${SIZE.medium_width}) {
      width: 55px;
      height: 55px;
    }
  }
  & h1 {
    font-size: 18px;
    color: ${COLOR.gray_text};
    text-decoration: underline;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
  }
  & p {
    font-size: 17px;
    color: ${COLOR.blue_text};
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 14px;
    }
  }
`;
