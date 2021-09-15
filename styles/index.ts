import styled from "@emotion/styled";

export const IMG_SIZE = 210;

export const HEADER_HEIGHT = 80;

export const TABLET_WIDTH = "768px";

export const MAIN_WIDTH = "1150PX";

export const WRAPPER = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-width: ${MAIN_WIDTH};
`;

export const CONTAINER = styled.div`
  width: ${MAIN_WIDTH};
  min-width: ${MAIN_WIDTH};
`;

export const FIXED_CONTAINER = styled.div`
  width: ${MAIN_WIDTH};
  @media screen and (max-width: ${MAIN_WIDTH}) {
    width: 100%;
  }
`;

export const COLOR = {
  black: "#343434",
  main: "#00d541",
  text: "#848484",
  red: "#ff2d2d",
  background: "#F3F3F3",
  iconNone: "#CFCFCF",
};
