import styled from "@emotion/styled";
import { COLOR } from "../../styles";

export const Wrapper = styled.div`
  width: 400px;
  background: ${COLOR.black_subBackground};
  border-radius: 5px;
  & .title {
    font-size: 20px;
    font-weight: 500;
    color: white;
    padding: 20px;
    border-bottom: 1px solid ${COLOR.gray_borderColor};
  }
  & .add-btn {
    width: 100%;
    padding: 15px 20px;
    color: ${COLOR.gray_subText};
    font-size: 17px;
    transition: 0.3s;
    border-top: 1px solid ${COLOR.gray_borderColor};
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const PlayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
`;
