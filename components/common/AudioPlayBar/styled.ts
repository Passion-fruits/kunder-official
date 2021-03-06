import styled from "@emotion/styled";
import { COLOR, BASE_CONTAINER, BASE_WRAPPER, SIZE } from "../../../styles";

export const Wrapper = styled(BASE_WRAPPER)`
  position: fixed;
  bottom: 0;
  z-index: 10;
  padding: 0;
  @media screen and (max-width: ${SIZE.medium_width}) {
    padding: 0;
  }
`;

export const Container = styled(BASE_CONTAINER)`
  width: 100%;
  height: ${`${SIZE.playbar_height}px`};
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLOR.black_background};
  @media screen and (max-width: ${SIZE.medium_width}) {
    padding: 0;
    height: ${`${SIZE.playbar_height - 10}px`};
  }
`;

export const Info = styled.div`
  padding-left: ${SIZE.sidebar_padding + "px"};
  display: flex;
  align-items: center;
  gap: 17px;
  z-index: 2;
  @media screen and (max-width: ${SIZE.medium_width}) {
    padding-left: ${SIZE.mac_sidebar_padding + "px"};
  }
  & .cover-image {
    width: 50px;
    height: 50px;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.4s;
    @media screen and (max-width: ${SIZE.medium_width}) {
      width: 45px;
      height: 45px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
  & .none-img {
    width: 50px;
    height: 50px;
    border-radius: 3px;
    background: linear-gradient(pink, skyblue);
    @media screen and (max-width: ${SIZE.medium_width}) {
      width: 45px;
      height: 45px;
    }
  }
  & div {
    display: flex;
    flex-direction: column;
    & .music-title {
      color: ${COLOR.gray_text};
      font-size: 17px;
      font-weight: 500;
      cursor: pointer;
      transition: 0.4s;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 14px;
      }
      &:hover {
        opacity: 0.8;
      }
    }
    & .musician-name {
      color: ${COLOR.gray_subText};
      font-size: 14px;
      margin-top: 5px;
      @media screen and (max-width: ${SIZE.medium_width}) {
        font-size: 12px;
      }
    }
  }
`;

export const Control = styled.div`
  padding-right: ${SIZE.right_padding + "px"};
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  z-index: 3;
  & svg {
    cursor: pointer;
  }
  @media screen and (max-width: ${SIZE.medium_width}) {
    & svg {
      width: 18px;
    }
  }
`;

interface rangeProps {
  progress: number;
}

export const VolumeControlWrap = styled.div<rangeProps>`
  width: 100px;
  height: 2px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 24px;
  background: ${({ progress }) =>
    `linear-gradient(to right, ${COLOR.blue_text} 0%, ${COLOR.blue_text}
    ${progress}%, #3A3A3A ${progress}%, #3A3A3A 100%)`};
  &:hover {
    height: 5px;
  }
  & input[type="range"] {
    position: absolute;
    width: 100%;
    height: 5px;
    cursor: pointer;
    opacity: 0;
  }
`;

export const Center = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CenterControl = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  & svg {
    cursor: pointer;
  }
  @media screen and (max-width: ${SIZE.medium_width}) {
    & svg {
      width: 10px;
      &:nth-of-type(2) {
        width: 13px;
      }
    }
  }
`;

export const RangeInput = styled.input<rangeProps>`
  z-index: 10;
  width: 100%;
  height: 2px;
  cursor: pointer;
  position: absolute;
  top: 0;
  -webkit-appearance: none;
  background: ${(e) =>
    `linear-gradient(to right, white 0%, white
    ${e.progress}%, #3A3A3A ${e.progress}%, #3A3A3A 100%)`};
  transition: 0.3s;
  &:hover {
    background: ${(e) =>
      `linear-gradient(to right, ${COLOR.green_main} 0%, ${COLOR.green_main} 
    ${e.progress}%, #3A3A3A ${e.progress}%, #3A3A3A 100%)`};
    ::-webkit-slider-thumb {
      opacity: 1;
    }
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: white;
    opacity: 0;
    transition: 0.3s;
    @media screen and (max-width: ${SIZE.medium_width}) {
      width: 13px;
      height: 13px;
    }
  }
`;
