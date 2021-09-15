import styled from "@emotion/styled";
import { CONTAINER, WRAPPER, COLOR } from "./../../styles/index";

export const Wrapper = styled(WRAPPER)`
  box-sizing: content-box;
  padding: 80px 0;
  margin-top: 80px;
`;

export const Container = styled(CONTAINER)``;

export const MenuWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  & h3 {
    font-size: 25px;
    font-weight: 800;
    letter-spacing: -1px;
  }
  & div {
    font-size: 16px;
    color: ${COLOR.text};
  }
`;
