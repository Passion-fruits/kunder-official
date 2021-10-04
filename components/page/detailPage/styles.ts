import styled from "@emotion/styled";
import { BASE_WRAPPER, BASE_CONTAINER, COLOR } from "../../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)`
  position: relative;
`;

export const MusicColorCover = styled.div`
  width: 100%;
  height: 600px;
  background: linear-gradient(red, rgb(0, 0, 0, 0));
  opacity: 0.5;
  position: absolute;
  z-index: 0;
`;

export const ImageCover = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  filter: blur(10px);
  -webkit-filter: blur(5px);
  & .cover {
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.9);
  }
`;

export const Container = styled(BASE_CONTAINER)`
  z-index: 2;
`;

export const InforWrap = styled.div`
  margin-top: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: 250px auto;
  & .cover-image {
    width: 250px;
    height: 250px;
    border: 1px solid ${COLOR.gray_borderColor};
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
      width: 50px;
      height: 50px;
      border-radius: 80%;
      border: 2px solid white;
      & svg {
        margin-left: 6px;
      }
    }
    & h1 {
      font-size: 40px;
      font-weight: 800;
      color: white;
    }
  }
  & .musician {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 15px;
    & span {
      color: ${COLOR.gray_text};
      font-size: 17px;
      font-weight: bold;
    }
    & h5 {
      color: ${COLOR.green_main};
      font-size: 19px;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  & .sub-info {
    margin-top: 13px;
    display: flex;
    gap: 12px;
    & div {
      display: flex;
      align-items: center;
      gap: 8px;
      & span {
        color: ${COLOR.gray_subText};
        font-size: 17px;
      }
    }
  }
  & .tag-wrap {
    display: flex;
    margin-top: 20px;
    gap: 10px;
    & div {
      border: 2px solid ${COLOR.gray_subText};
      border-radius: 24px;
      padding: 10px 20px;
      color: ${COLOR.gray_text};
      font-size: 17px;
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
  margin-top: 10px;
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
  margin-top: 30px;
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
    margin-bottom: 30px;
  }
`;

export const CommentWrap = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  & .none-comment {
    margin-top: 30px;
    color: ${COLOR.blue_text};
    font-size: 16px;
  }
`;

export const CommentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60px auto;
  & .cover-image {
    width: 60px;
    height: 60px;
    border-radius: 80%;
    border: 1px solid ${COLOR.gray_borderColor};
    cursor: pointer;
  }
  & .comment-contents {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    & .writer-date {
      display: flex;
      align-items: center;
      gap: 10px;
      & h3 {
        color: ${COLOR.gray_subText};
        font-size: 15px;
      }
      & span {
        font-size: 14px;
        margin-top: 3px;
        color: ${COLOR.gray_subText};
      }
    }
    & .description {
      color: white;
      font-size: 16px;
      margin-top: 8px;
      line-height: 25px;
    }
  }
`;
