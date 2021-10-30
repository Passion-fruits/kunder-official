import styled from "@emotion/styled";
import { BASE_CONTAINER, BASE_WRAPPER, COLOR } from "../../../styles";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)`
  display: flex;
  flex-direction: column;
  & h1 {
    font-size: 25px;
    font-weight: bold;
    color: ${COLOR.gray_text};
    margin-bottom: 30px;
  }
`;
