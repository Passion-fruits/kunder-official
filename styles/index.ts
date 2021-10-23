import styled from "@emotion/styled";

export const COLOR = {
  black_background: "#000000",
  black_subBackground: "#1A1A1A",
  black_text: "#FFF",
  gray_text: "#F8F8F8",
  gray_subText: "#A8A8A8",
  gray_borderColor: "rgb(30,30,30)",
  green_main: "#1CE1BF",
  green_subMain: "#74E5BB",
  red_text: "#FF6464",
  blue_text: "#94C2FF",
};

const pageSize = 1350;

const cardIndex = 6;

export const SIZE = {
  header_height: 60,
  page_size: pageSize,
  playbar_height: 90,
  sidebar_size: 260,
  sidebar_padding: 25,
  right_padding: 50,
  card_size: pageSize / cardIndex - 13,
  card_indexing: cardIndex,
  medium_width: "1700px",
  mac_width: "1400px",
  mac_sidebar_size: 230,
};

export const BASE_WRAPPER = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: ${SIZE.sidebar_size + "px"};
  padding-right: ${SIZE.right_padding + "px"};
  @media screen and (max-width: ${SIZE.mac_width}) {
    padding-left: ${SIZE.mac_sidebar_size + "px"};
  }
`;

export const BASE_CONTAINER = styled.div`
  width: 100%;
  padding-top: ${`${SIZE.header_height + 30}px`};
  padding-bottom: ${`${SIZE.playbar_height + 50}px`};
  padding-left: ${SIZE.sidebar_padding + 50 + "px"};
  @media screen and (max-width: ${SIZE.mac_width}) {
    padding-left: ${SIZE.sidebar_padding + 30 + "px"};
  }
`;

export const LIST_WRAPPER = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${`repeat(${SIZE.card_indexing},${
    100 / SIZE.card_indexing - 1.3
  }%)`};
  justify-content: space-between;
  grid-row-gap: 30px;
  @media screen and (max-width: ${SIZE.medium_width}) {
    grid-template-columns: ${`repeat(${SIZE.card_indexing - 1},${
      100 / (SIZE.card_indexing - 1) - 1.3
    }%)`};
  }
  @media screen and (max-width: 1300px) {
    grid-template-columns: ${`repeat(${SIZE.card_indexing - 2},${
      100 / (SIZE.card_indexing - 2) - 1.3
    }%)`};
  }
`;

export const SQUARE = styled.div`
  width: 100%;
  position: relative;
  ::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;
