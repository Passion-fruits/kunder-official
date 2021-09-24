import styled from "@emotion/styled";
import { BASE_WRAPPER, BASE_CONTAINER, COLOR } from "./../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)`
  position: relative;
  & .color-cover {
    width: 100%;
    height: 500px;
    background: linear-gradient(#093d48, rgb(0, 0, 0, 0));
    opacity: 1;
    position: absolute;
    z-index: 0;
  }
`;

export const Container = styled(BASE_CONTAINER)`
  z-index: 2;
`;

export const InforWrap = styled.div`
  margin-top: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: 205px auto;
  & .cover-image {
    width: 200px;
    height: 200px;
    border: 1px solid ${COLOR.gray_borderColor};
    border-radius: 5px;
  }
  & .infor-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 35px;
    padding-top: 10px;
  }
  & .title-wrap {
    display: flex;
    align-items: center;
    gap: 15px;
    & button {
      width: 40px;
      height: 40px;
      border-radius: 80%;
      border: 2px solid white;
      & svg {
        margin-left: 4px;
      }
    }
    & h1 {
      font-size: 30px;
      font-weight: bold;
      color: white;
    }
  }
  & .musician {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
    & span {
      color: ${COLOR.gray_subText};
      font-size: 15px;
      font-weight: bold;
    }
    & h5 {
      color: #00ebbb;
      font-size: 17px;
      font-weight: 500;
    }
  }
  & .sub-info {
    margin-top: 13px;
    display: flex;
    gap: 12px;
    & div {
      display: flex;
      align-items: center;
      gap: 5px;
      & span {
        color: #b5b5b5;
        font-size: 15px;
      }
    }
  }
  & .tag-wrap {
    display: flex;
    margin-top: 20px;
    gap: 10px;
    & div {
      border: 1px solid ${COLOR.gray_borderColor};
      border-radius: 24px;
      padding: 10px 20px;
      color: #a8a8a8;
      font-size: 15px;
    }
  }
  & .description {
    width: 100%;
    margin-top: 30px;
    font-size: 16px;
    color: ${COLOR.gray_subText};
    line-height: 23px;
  }
`;

export const ControlMusicContainer = styled.div`
  width: 100%;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  & .btn-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #575454;
      color: ${COLOR.gray_text};
      font-size: 16px;
      padding: 8px 15px;
      border-radius: 5px;
      & svg {
        margin-right: 5px;
      }
    }
  }
  & input {
    width: 100%;
    padding: 0px 20px;
    height: 60px;
    font-size: 16px;
    color: ${COLOR.gray_subText};
    border: 1px solid ${COLOR.gray_borderColor};
    border-radius: 5px;
    background: ${COLOR.black_subBackground};
    transition: 0.3s;
    &:focus {
      color: ${COLOR.gray_text};
      border: 1px solid #5d75d6;
    }
    &::placeholder {
      color: #9d9d9d;
    }
  }
`;

export const SimilarMusicWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  & h1 {
    color: #bfbfbf;
    font-size: 20px;
    font-weight: 500;
  }
  & .line {
    width: 120px;
    height: 1px;
    background: #bfbfbf;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const CommentWrap = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .none-comment {
    margin-top: 30px;
    color: ${COLOR.blue_text};
    font-size: 16px;
  }
`;
