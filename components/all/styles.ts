import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "../../styles/index";

export const Wrapper = styled(WRAPPER)``;

export const Container = styled(CONTAINER)`
  & label {
    cursor: pointer;
  }
  & input[type="radio"] {
    display: none;
  }
`;

export const GerneList = styled.div`
  width: 100%;
  display: flex;
  gap: 38px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  & label {
    padding-bottom: 7px;
  }
`;

export const SortList = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
  font-size: 17px;
  color: ${COLOR.text};
  margin-bottom: 40px;
`;

export const PageBarWrap = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

export const PageSmallWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:30px;
  & svg {
    cursor: pointer;
  }
  #pageIndex {
    color: ${COLOR.black};
    font-size: 16px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const pageBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:15px;
`;
