import styled from "@emotion/styled";
import { BASE_CONTAINER, BASE_WRAPPER } from "../../../styles";
import { COLOR } from "./../../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)`
  display: flex;
  flex-direction: column;
  & .title {
    color: ${COLOR.gray_text};
    font-size: 23px;
  }
  & .description {
    color: ${COLOR.gray_subText};
    font-size: 17px;
    margin-top: 15px;
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
  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid ${COLOR.gray_borderColor};
  }
  & div {
    display: flex;
    flex-direction: column;
    position: relative;
    & .who {
      color: ${COLOR.blue_text};
      font-size: 18px;
      margin-top: 10px;
    }
    & .ment {
      color: ${COLOR.gray_text};
      font-size: 17px;
      font-weight: bold;
      margin-top: 22px;
      line-height: 28px;
    }
    & .state {
      font-size: 20px;
      width: 100%;
      text-align: right;
      margin-top: 20px;
      color: ${COLOR.green_main};
      font-weight: 800;
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
  }
  & button {
    width: 100%;
    height: 50px;
    color: ${COLOR.blue_text};
    border: 1px solid ${COLOR.blue_text};
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
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
  }
  & h1 {
    font-size: 18px;
    color: ${COLOR.gray_text};
    text-decoration: underline;
  }
  & p {
    font-size: 17px;
    color: ${COLOR.blue_text};
  }
`;
