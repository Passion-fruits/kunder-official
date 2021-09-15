import styled from "@emotion/styled";
import { IMG_SIZE, WRAPPER } from "../../styles/index";

export const Wrapper = styled(WRAPPER)`
  display: grid;
  grid-template-columns: ${`repeat(5,${IMG_SIZE}px)`};
  justify-content: space-between;
  grid-row-gap: 30px;
`;
