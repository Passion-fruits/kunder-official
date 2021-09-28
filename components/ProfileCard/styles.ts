import styled from "@emotion/styled";
import { COLOR, SIZE } from "../../styles";

export const Wrapper = styled.div`
  width: ${`${SIZE.card_size}px`};
  display: flex;
  flex-direction: column;
  & .profile-image {
    width: ${`${SIZE.card_size}px`};
    height: ${`${SIZE.card_size}px`};
    border-radius: 80%;
    border: 1px solid ${COLOR.gray_borderColor};
  }
  & .infor-wrap {
    width: 100%;
    padding-left: 10px;
  }
  & .line {
    width: 40px;
    height: 2px;
    background: ${COLOR.green_main};
    margin-top: 10px;
  }
  & .name {
    font-size: 20px;
    color: ${COLOR.gray_text};
    margin-top: 8px;
  }
  & .music-follow-cnt {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    & div {
      display: flex;
      align-items: center;
      gap: 3px;
      color: ${COLOR.gray_subText};
      font-size: 13px;
    }
  }
`;
