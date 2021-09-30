import styled from "@emotion/styled";
import { BASE_WRAPPER, BASE_CONTAINER, COLOR } from "./../../styles/index";
import { keyframes } from "@emotion/react";

const gap = 30;
const wrap_width = 400;

export const Wrapper = styled(BASE_WRAPPER)`
  height: 100vh;
  overflow: hidden;
`;

export const Container = styled(BASE_CONTAINER)`
  height: 100%;
  position: relative;
  padding-left: ${`${wrap_width - gap}px`};
`;

interface wrapProps {
  indexNum: number;
}

export const LitCardWrap = styled.div<wrapProps>`
  height: 100%;
  display: flex;
  align-items: center;
  gap: ${`${gap}px`};
  transition: 0.5s;
  transform: ${(res) => `translateX(-${res.indexNum * (gap + wrap_width)}px)`};
`;

export const LitCard = styled.div`
  display: flex;

  & #now-index-wrap {
    width: 550px;
    opacity: 1;
  }

  & .music-info-wrap {
    width: ${`${wrap_width}px`};
    opacity: 0.6;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: 0.5s;
    & .square {
      width: 100%;
      position: relative;
      ::after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
    }

    & .cover-image-wrap {
      position: absolute;
      width: 100%;
      height: 100%;

      & .cover-img {
        width: 100%;
        height: 100%;
      }

      & .on-cover-info {
        width: 100%;
        height: 100%;
        position: absolute;
        padding: 20px;
        background: linear-gradient(
          180.19deg,
          rgba(0, 0, 0, 0) 50.67%,
          rgba(0, 0, 0, 0) 50.67%,
          #000000 99.84%
        );
      }
    }
  }

  & .title {
    font-size: 30px;
    font-weight: 800;
    color: ${COLOR.gray_text};
    margin-top: 20px;
  }

  & .description {
    width: 100%;
    font-size: 18px;
    color: ${COLOR.gray_subText};
    margin-top: 10px;
    line-height: 24px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 20px;
  right: 0;
  bottom: 0;
  padding: 30px;

  & .korean {
    font-size: 16px;
    gap: 7px;
  }

  & button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: ${COLOR.gray_text};
    font-size: 18px;
  }
`;

export const MusicSubInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 30px 20px;
  gap: 20px;

  & .profile-wrap {
    display: flex;
    align-items: center;
    gap: 13px;
    & img {
      width: 60px;
      height: 60px;
      border-radius: 80%;
      border: 1px solid ${COLOR.gray_borderColor};
    }
  }

  & .tag-wrap {
    display: flex;
    gap: 15px;
    & span {
      font-size: 16px;
      color: ${COLOR.gray_text};
      ::before {
        content: "#";
      }
    }
  }

  & button {
    width: 110px;
    padding: 10px 0;
    font-size: 16px;
    color: ${COLOR.green_subMain};
    border-radius: 24px;
    border: 2px solid ${COLOR.green_subMain};
  }
`;

const vibeAnime = keyframes`
0%{
  height:0px;
}
50%{
  height:30px;
}
100%{
  height:0px;
}
`;

export const VibeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

interface vibeBarProps {
  second: number;
}

export const VibeBar = styled.div<vibeBarProps>`
  width: 2px;
  background-color: ${COLOR.green_main};
  animation: ${vibeAnime} infinite linear;
  animation-duration: ${(res) => `${res.second}s`};
`;
