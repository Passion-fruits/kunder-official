import styled from "@emotion/styled";

export const COLOR = {
  black_background: "#000000",
  black_subBackground: "#141414",
  black_text: "#FFF",
  gray_text: "#F8F8F8",
  gray_subText: "#999999",
  gray_borderColor: "rgb(50,50,50)",
  green_main: "#00FF33",
  red_text: "#FF6464",
};

const pageSize = 1300;

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
