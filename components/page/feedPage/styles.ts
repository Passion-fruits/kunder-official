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
  & .title {
    font-size: 25px;
    font-weight: 800;
    color: ${COLOR.gray_text};
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 20px;
    }
  }
  & .description {
    font-size: 18px;
    color: ${COLOR.gray_subText};
    margin-top: 10px;
    margin-bottom: 30px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
  }
`;

export const LoadingWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
`;
