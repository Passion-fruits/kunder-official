import styled from "@emotion/styled";

export const COLOR = {
  black_background: "#000000",
  black_subBackground: "#1A1A1A",
  black_text: "#FFF",
  gray_text: "#F8F8F8",
  gray_subText: "#A8A8A8",
  gray_borderColor: "rgb(50,50,50)",
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
  playbar_height: 100,
  sidebar_size: 300,
  sidebar_padding: 30,
  right_padding: 100,
  card_size: pageSize / cardIndex - 13,
  card_indexing: cardIndex,
  mac_width: "1450px",
};

export const BASE_WRAPPER = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: ${SIZE.sidebar_size + "px"};
  padding-right: ${SIZE.right_padding + "px"};
`;

export const BASE_CONTAINER = styled.div`
  width: 100%;
  padding-top: ${`${SIZE.header_height}px`};
  padding-bottom: ${`${SIZE.playbar_height + 50}px`};
  padding-left: ${SIZE.sidebar_padding + "px"};
`;

export const LIST_WRAPPER = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${`repeat(${SIZE.card_indexing},${
    100 / SIZE.card_indexing - 1
  }%)`};
  justify-content: space-between;
  grid-row-gap: 30px;
  @media screen and (max-width: 1300px) {
    /*     grid-template-columns: ${`repeat(${SIZE.card_indexing - 1},${
      100 / (SIZE.card_indexing - 1) - 1
    }%)`}; */
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
