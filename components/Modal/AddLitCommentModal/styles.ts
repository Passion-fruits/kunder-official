import styled from "@emotion/styled";
import { COLOR } from "./../../../styles/index";

export const Wrapper = styled.div`
  width: 500px;
  height: 600px;
  position: relative;
  background-color: ${COLOR.black_subBackground};
  border-radius: 10px;
  & .title {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${COLOR.gray_borderColor};
    color: ${COLOR.gray_text};
    font-size: 20px;
    font-weight: bold;
    padding: 0 20px;
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
  & input {
    width: 420px;
    height: 50px;
    border: 1px solid ${COLOR.gray_borderColor};
    background: #212121;
    border-radius: 3px;
    font-size: 16px;
    color: ${COLOR.gray_text};
    padding: 20px 15px;
    transition: 0.3s;
    ::placeholder {
      color: ${COLOR.gray_subText};
    }
    &:focus {
      border: 1px solid ${COLOR.blue_text};
    }
  }
`;

export const CommentArea = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: calc(100% - 130px);
  overflow-y: scroll;
  & .none {
    color: ${COLOR.blue_text};
    font-size: 17px;
    margin-top: 30px;
    width: 100%;
    text-align: center;
    line-height: 25px;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${COLOR.green_main};
  }
`;

export const CommentWrap = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  & img {
    width: 50px;
    height: 50px;
    border-radius: 80%;
    border: 1px solid ${COLOR.gray_borderColor};
    cursor: pointer;
  }
  & .infor-container {
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    & .writer-date {
      display: flex;
      gap: 7px;
      & h3 {
        font-size: 16px;
        font-weight: 500;
        color: ${COLOR.gray_text};
      }
      & span {
        font-size: 16px;
        color: ${COLOR.gray_subText};
      }
    }
    & .contents {
      margin-top: 10px;
      color: ${COLOR.gray_text};
      font-size: 17px;
    }
  }
`;
