import styled from "@emotion/styled";

export const COLOR = {
  black_background: "#000000",
  black_subBackground: "#141414",
  black_text: "#FFF",
  gray_text: "#F8F8F8",
  gray_subText: "#A8A8A8",
  gray_borderColor: "rgb(50,50,50)",
  green_main: "#1CE1BF",
  green_subMain: "#74E5BB",
  red_text: "#FF6464",
  blue_text: "#94C2FF",
};

const pageSize = 1300;

const cardIndex = 6;

export const SIZE = {
  header_height: 60,
  page_size: pageSize,
  playbar_height: 100,
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
