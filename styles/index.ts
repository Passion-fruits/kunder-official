import styled from "@emotion/styled";

export const COLOR = {
  black_background: "#1A1A1A",
  black_subBackground: "#2A2B2E",
  gray_text: "#D9EDFF",
  gray_subText: "#848484",
  green_main: "#70FC35",
  red_text: "#FF6464",
};

export const SIZE = {
  header_height: 80,
  page_size: 1200,
  playbar_height: 110,
  card_size: 210,
};

export const BASE_WRAPPER = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BASE_CONTAINER = styled.div`
  width: ${`${SIZE.page_size}px`};
  padding-top: ${`${SIZE.header_height}px`};
  padding-bottom: ${`${SIZE.playbar_height}px`};
`;
