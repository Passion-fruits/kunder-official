import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "../../styles/index";

export const Wrapper = styled(WRAPPER)``;

export const Container = styled(CONTAINER)`
  padding-top: 25px;
  padding-bottom:50px;
`;

export const MusicInformationWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  gap: 30px;
`;

export const CoverImgWrap = styled.div`
  width: 270px;
  height: 270px;
  position: relative;
  & img {
    width: 100%;
    height: 100%;
    border: 1px solid rgb(240, 240, 240);
  }
  & button {
    box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.1);
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 20px;
    width: 44px;
    height: 44px;
    background-color: ${COLOR.main};
    border-radius: 80%;
    & svg {
      margin-left: 5px;
    }
  }
`;

export const MusicInformationTextCotainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: calc(100% - 300px);
  & time {
    color: ${COLOR.text};
    font-size: 16px;
  }
  & span {
    padding: 6px 10px;
    color: white;
    background-color: ${COLOR.black};
  }
  .artist-name {
    cursor: pointer;
    margin-top: 22px;
    transition: 0.5s;
    &:hover {
      opacity: 0.9;
    }
  }
  .music-title {
    margin-top: 15px;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
  }
  #waveform {
    position: absolute;
    bottom: 0;
    width: 100%;
    pointer-events: none;
  }
`;

export const CommentFormInput = styled.input`
  width: 100%;
  padding: 22px;
  background-color: #f3f3f3;
  font-size: 16px;
  color: ${COLOR.black};
  border-radius: 5px;
  margin-top: 20px;
  &::placeholder {
    color: ${COLOR.text};
  }
`;

export const CommentContainer = styled.section`
  width: 100%;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  gap: 40px;
  & article {
    width: 100%;
    display: flex;
    gap: 30px;
    & img {
      width: 60px;
      height: 60px;
      border-radius: 80%;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  .comment-wrapper {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    & p {
      font-size: 16px;
      color: ${COLOR.black};
      margin-top: 10px;
    }
  }
  .comment-info {
    display: flex;
    align-items: center;
    font-size: 17px;
    color: ${COLOR.black};
    & span {
      font-size: 14px;
      font-weight: 500;
      margin-left: 8px;
      color: ${COLOR.text};
    }
  }
`;

export const MusicIconContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GenreWrap = styled.div`
  display: flex;
  gap: 10px;
  & button {
    border: 1px solid ${COLOR.main};
    border-radius: 24px;
    padding: 9px 22px;
    color: ${COLOR.main};
    font-size: 16px;
  }
`;

export const MusicLikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & span {
    color: ${COLOR.main};
    font-size: 16px;
  }
  & svg {
    cursor: pointer;
  }
`;

export const MusicDescription = styled.textarea`
  border: none;
  background: none;
  font-size: 16px;
  width: 100%;
  color: ${COLOR.text};
  margin-top: 20px;
`;
