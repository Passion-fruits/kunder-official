import styled from "@emotion/styled";
import {
  BASE_WRAPPER,
  BASE_CONTAINER,
  COLOR,
} from "./../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)`
  display: flex;
  flex-direction: column;
`;

export const ThemaCardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  position: relative;
  & .title {
    color: ${COLOR.gray_text};
    font-size: 22px;
    font-weight: 800;
  }
  & .description {
    color: ${COLOR.gray_subText};
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 20px;
  }
  & .more-button {
    position: absolute;
    right: 0;
    top: 15px;
    opacity: 0.7;
    transition: 0.3s;
    &:hover {
      opacity: 1;
    }
  }
  :first-of-type {
    margin-top: 0px;
  }
`;

export const GenreListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

interface genreCardProps {
  img: string;
}

export const GenreCard = styled.div<genreCardProps>`
  width: 24%;
  height: 130px;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(res) => `url(${res.img})`};
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(rgb(0, 0, 0, 0.3), rgb(0, 0, 0, 1));
    z-index: 1;
  }
  & h1 {
    color: white;
    font-size: 18px;
    padding: 20px;
    bottom: 0;
    position: absolute;
    z-index: 2;
  }
`;
