import styled from "@emotion/styled";
import { COLOR, BASE_CONTAINER, BASE_WRAPPER, SIZE } from "./../../styles";

export const Wrapper = styled(BASE_WRAPPER)`
  position: fixed;
  bottom: 0;
  z-index: 10;
`;

export const Container = styled(BASE_CONTAINER)`
  height: ${`${SIZE.playbar_height}px`};
  padding: 0 25px;
  border-radius: 10px 10px 0 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0e0e0f;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  z-index: 2;
  & .cover-image {
    width: 70px;
    height: 70px;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      opacity: 0.8;
    }
  }
  & .none-img {
    width: 70px;
    height: 70px;
    background-color: gray;
  }
  & div {
    display: flex;
    flex-direction: column;
    & .music-title {
      color: white;
      font-size: 17px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.4s;
      &:hover {
        opacity: 0.8;
      }
    }
    & .musician-name {
      color: ${COLOR.gray_text};
      font-size: 15px;
      margin-top: 5px;
    }
  }
`;

export const Control = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  z-index: 3;
  & svg {
    cursor: pointer;
  }
`;

interface rangeProps {
  progress: number;
}

export const VolumeControlWrap = styled.div<rangeProps>`
  width: 100px;
  height: 3px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 24px;
  background: ${({ progress }) =>
    `linear-gradient(to right, #0079D5 0%, #0079D5
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
  margin-top: 10px;
`;

export const CenterControl = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  & svg {
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const RangeContainer = styled.div<rangeProps>`
  margin-top: 25px;
  -webkit-appearance: none;
  width: 400px;
  height: 6px;
  position: relative;
  display: flex;
  align-items: center;
  background: ${(e) =>
    `linear-gradient(to right, ${COLOR.green_main} 0%, ${COLOR.green_main} 
    ${e.progress}%, #3A3A3A ${e.progress}%, #3A3A3A 100%)`};
  cursor: pointer;
  transition: background 450ms ease-in;
  border-radius: 24px;
  overflow: hidden;
  border: none;
  &:hover {
    height: 9px;
  }
  & input[type="range"] {
    cursor: pointer;
    width: 100%;
    opacity: 0;
  }
`;
