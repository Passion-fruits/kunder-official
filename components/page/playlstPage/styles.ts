import styled from "@emotion/styled";
import {
  BASE_WRAPPER,
  BASE_CONTAINER,
  COLOR,
  SIZE,
} from "../../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)``;

export const BASE_WRAP = styled.div`
  width: 100%;
  padding: 20px 30px;
  background: #161616;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const InforWrap = styled(BASE_WRAP)`
  display: grid;
  grid-template-columns: 250px auto;
  @media screen and (max-width: ${SIZE.medium_width}) {
    grid-template-columns: 200px auto;
  }
  & .cover-image {
    width: 250px;
    height: 250px;
    border: 1px solid ${COLOR.gray_borderColor};
    @media screen and (max-width: ${SIZE.medium_width}) {
      width: 200px;
      height: 200px;
    }
  }
  & .infor-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    position: relative;
  }
  & .playlist-intro {
    display: flex;
    gap: 15px;
    margin-top: 20px;
    & h5 {
      font-weight: 500;
      color: ${COLOR.gray_text};
      font-size: 17px;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 15px;
      }
    }
    & span {
      font-size: 17px;
      color: ${COLOR.gray_subText};
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 15px;
      }
      & b {
        font-weight: 500;
      }
    }
  }
  & .playlist-title {
    font-size: 60px;
    font-weight: 800;
    color: white;
    margin-top: 10px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 40px;
    }
  }
  & .playlist-sub-infor {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 25px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      margin-top: 20px;
    }
    & h3 {
      font-size: 18px;
      color: ${COLOR.gray_subText};
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 15px;
      }
      & b {
        color: ${COLOR.gray_text};
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  & .circle {
    width: 7px;
    height: 7px;
    border-radius: 80%;
    background: #535353;
  }
  & .control-wrap {
    display: flex;
    gap: 30px;
    align-items: center;
    position: absolute;
    bottom: 0;
    & .play-btn {
      width: 55px;
      height: 55px;
      border-radius: 80%;
      background: ${COLOR.green_main};
      @media screen and (max-width: ${SIZE.medium_width}) {
        width: 50px;
        height: 50px;
      }
      & svg {
        margin-left: 5px;
      }
    }
  }
  & .update-button {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const MusicListWrap = styled(BASE_WRAP)`
  padding: 5px 20px;
  & .none {
    width: 100%;
    text-align: center;
    color: ${COLOR.blue_text};
    font-size: 17px;
    padding: 30px 0;
  }
`;
