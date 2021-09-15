import styled from "@emotion/styled";
import { COLOR } from "./../../../styles/index";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  & h1 {
    font-size: 20px;
    color: ${COLOR.black};
  }
`;
