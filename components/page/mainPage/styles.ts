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
  margin-top: 80px;
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

export const SubTitle = styled.h3`
  font-size: 17px;
  color: ${COLOR.gray_subText};
  margin-top: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: ${SIZE.medium_width}) {
    font-size: 15px;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
