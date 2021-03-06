import styled from "@emotion/styled";
import { SIZE } from "../../../styles";
import { COLOR } from "../../../styles/index";

export const Wrapper = styled.div`
  width: ${SIZE.sidebar_size + "px"};
  height: 100%;
  padding: 15px ${SIZE.sidebar_padding + "px"};
  padding-bottom: ${SIZE.playbar_height + 30 + "px"};
  position: fixed;
  background-color: ${COLOR.black_background};
  border-right: 1px solid ${COLOR.gray_borderColor};
  z-index: 10;
  overflow-y: scroll;
  @media screen and (max-width: ${SIZE.medium_width}) {
    width: ${SIZE.mac_sidebar_size + "px"};
    padding: 10px ${SIZE.mac_sidebar_padding + "px"};
    padding-bottom: ${SIZE.playbar_height + 30 + "px"};
  }
  &:hover::-webkit-scrollbar {
    display: block;
  }
  &::-webkit-scrollbar {
    width: 1px;
    background-color: ${COLOR.gray_borderColor};
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${COLOR.green_subMain};
    border-radius: 24px;
  }
  & .title {
    color: ${COLOR.gray_text};
    font-size: 18px;
    font-weight: 500;
    margin-top: 30px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
    & b {
      font-weight: 800;
    }
  }
  & .description {
    color: ${COLOR.gray_subText};
    font-size: 15px;
    margin-top: 7px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 12px;
    }
  }
  & .login-btn {
    width: 100%;
    padding: 12px 0;
    border: 1px solid ${COLOR.green_main};
    color: ${COLOR.green_main};
    font-size: 16px;
    margin-top: 25px;
    margin-bottom: 40px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 14px;
      padding: 8px 0;
    }
  }
  & .line-title {
    font-size: 17px;
    padding-top: 10px;
    color: ${COLOR.gray_text};
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
    &::before {
      content: "";
      width: 50px;
      height: 2px;
      background: ${COLOR.green_main};
      position: absolute;
      transform: translateY(-13px);
    }
  }
  & .line {
    width: 100%;
    height: 1px;
    background-color: ${COLOR.gray_borderColor};
    margin: 30px 0;
  }
`;

export const AddFuncMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  & .circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #414141;
  }
  & span {
    color: ${COLOR.gray_subText};
    font-size: 16px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 14px;
    }
  }
`;

export const RouteMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 30px;
  @media screen and (max-width: ${SIZE.medium_width}) {
    gap: 30px;
    margin-top: 20px;
  }
`;

export const RouteMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-items: center;
  gap: 15px;
  opacity: 0.8;
  cursor: pointer;
  @media screen and (max-width: ${SIZE.medium_width}) {
    & svg {
      width: 15px;
    }
  }
  &:hover {
    opacity: 1;
  }
  &:first-of-type {
    margin-top: 0px;
  }
  & span {
    font-size: 17px;
    color: ${COLOR.gray_text};
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 14px;
    }
  }
`;

export const HistoryMusicList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  gap: 20px;
  & .music-card-wrap {
    display: grid;
    grid-template-columns: 45px calc(100% - 45px);
  }
  & .cover-img-wrap {
    width: 45px;
    height: 45px;
    border: 1px solid ${COLOR.gray_borderColor};
    position: relative;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    @media screen and (max-width: ${SIZE.medium_width}) {
      width: 40px;
      height: 40px;
    }
    & img {
      width: 100%;
      height: 100%;
    }
    & .cover {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgb(0, 0, 0, 0.5);
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      &:hover {
        opacity: 1;
      }
    }
  }
  & .info-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
    & h1 {
      width: 100%;
      font-size: 16px;
      font-weight: 500;
      color: ${COLOR.gray_text};
      margin-bottom: 5px;
      cursor: pointer;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 14px;
      }
      &:hover {
        opacity: 0.8;
      }
    }
    & span {
      font-size: 15px;
      color: ${COLOR.gray_subText};
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 12px;
      }
    }
  }
`;

export const PlaylistWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  gap: 25px;
  & div {
    display: flex;
    align-items: center;
    gap: 7px;
    opacity: 0.7;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
    & span {
      color: ${COLOR.gray_text};
      font-size: 17px;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 15px;
      }
    }
  }
`;

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 13px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${COLOR.gray_borderColor};
`;

export const Menu = styled.button`
  width: 100%;
  font-size: 17px;
  font-weight: 500;
  color: ${COLOR.gray_text};
  display: flex;
  justify-content: flex-start;
  margin-top: 7px;
  gap: 15px;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  box-sizing: content-box;
  background: ${COLOR.black_background};
  & svg {
    transform: translateY(-1px);
  }
  @media screen and (max-width: ${SIZE.medium_width}) {
    font-size: 14px;
    margin-top: 3px;
    padding: 7px 8px;
    & svg {
      width: 15px;
    }
  }
`;
