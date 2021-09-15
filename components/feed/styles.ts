import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "../../styles/index";

export const Wrapper = styled(WRAPPER)``;

export const Contaienr = styled(CONTAINER)`
  padding-top: 20px;
`;

export const IntroContaienr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  & h1 {
    font-size: 23px;
  }
  & h3 {
    font-size: 17px;
    font-weight: 500;
    color: ${COLOR.text};
  }
`;
