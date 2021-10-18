import styled from "@emotion/styled";
import { BASE_WRAPPER, BASE_CONTAINER, COLOR } from "../../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)`
  display: flex;
  flex-direction: column;
  & .title {
    font-size: 25px;
    font-weight: 800;
    color: ${COLOR.gray_text};
  }
  & .description {
    font-size: 18px;
    color: ${COLOR.gray_subText};
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;
