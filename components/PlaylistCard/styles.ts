import styled from "@emotion/styled";
import { COLOR, SIZE } from "../../styles";

export const Wrapper = styled.div`
  width: ${`${SIZE.card_size}px`};
  display: flex;
  flex-direction: column;
  & .cover-image-wrap {
    width: ${`${SIZE.card_size}px`};
    height: ${`${SIZE.card_size}px`};
    border: 1px solid ${COLOR.gray_borderColor};
    position: relative;
    cursor: pointer;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      transition: 0.3s;
    }
    &:hover img {
      transform: scale(1.1);
    }
    & .bottom-wrap {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(0, 0, 0, 0.7);
      position: absolute;
      bottom: 0;
    }
  }
  & .title {
    color: ${COLOR.gray_text};
    font-size: 17px;
    font-weight: bold;
    margin-top: 15px;
  }
  & .user-name {
    color: ${COLOR.gray_subText};
    font-size: 15px;
    font-weight: 500;
    margin-top: 5px;
    & span {
      color: #6e6e6e;
    }
  }
`;
