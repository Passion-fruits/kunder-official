import styled from "@emotion/styled";
import {
  BASE_WRAPPER,
  BASE_CONTAINER,
  COLOR,
  SIZE,
} from "../../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)`
  display: flex;
  flex-direction: column;
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  &:first-of-type {
    margin-top: 0px;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  color: ${COLOR.gray_text};
  @media screen and (max-width: ${SIZE.medium_width}) {
    font-size: 20px;
  }
`;

export const MusicTitle = styled(Title)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const SubTitle = styled.h3`
  font-size: 17px;
  color: ${COLOR.gray_subText};
  margin-top: 10px;
  margin-bottom: 30px;
  @media screen and (max-width: ${SIZE.medium_width}) {
    font-size: 15px;
  }
`;

interface ListProps {
  index: number;
}

export const List = styled.div<ListProps>`
  display: grid;
  grid-template-columns: ${(res) =>
    `repeat(${res.index}, ${100 / res.index - 1.2}%)`};
  justify-content: space-between;
`;
