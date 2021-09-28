import styled from "@emotion/styled";
import { COLOR } from "../../styles";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  & .scroll-container {
    ::-webkit-scrollbar {
      width: 5px;
      background: ${COLOR.gray_borderColor};
    }
    ::-webkit-scrollbar-thumb {
      background: ${COLOR.green_main};
      border-radius: 24px;
    }
  }
`;
