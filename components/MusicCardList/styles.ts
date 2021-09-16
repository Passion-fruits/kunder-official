import styled from "@emotion/styled";
import { SIZE } from "./../../styles/index";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${`repeat(5,${SIZE.card_size}px)`};
  justify-content: space-between;
  grid-row-gap: 30px;
`;