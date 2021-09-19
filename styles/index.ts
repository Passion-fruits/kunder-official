import styled from "@emotion/styled";

export const COLOR = {
  black_background: "#101111",
  black_subBackground: "#242424",
  black_text: "#FFF",
  gray_text: "#EEF6FF",
  gray_subText: "#999999",
  green_main: "#00FF33",
  red_text: "#FF6464",
};

const pageSize = 1350;

const cardIndex = 6;

export const SIZE = {
  header_height: 70,
  page_size: pageSize,
  playbar_height: 110,
  card_size: pageSize / cardIndex - 13,
  card_indexing: cardIndex,
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
