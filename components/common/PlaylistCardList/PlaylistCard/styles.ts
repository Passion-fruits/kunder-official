import styled from "@emotion/styled";
import { COLOR, SIZE, SQUARE } from "../../../../styles";

export const ResponsiveWrap = styled(SQUARE)``;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${COLOR.black_subBackground};
  border: 1px solid ${COLOR.black_subBackground};
  padding: 12px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
  & .cover-image-wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 3px;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      transition: 0.3s;
    }
    & .bottom-wrap {
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(0, 0, 0, 0.5);
      width: 100%;
      padding: 12px 0;
    }
  }
  & .title {
    color: ${COLOR.gray_text};
    font-size: 17px;
    font-weight: bold;
    margin-top: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
  }
  & .user-name {
    color: ${COLOR.gray_subText};
    font-size: 14px;
    font-weight: 500;
    margin-top: 6px;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 12px;
    }
    & span {
      color: #6e6e6e;
    }
  }
`;
