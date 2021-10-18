import styled from "@emotion/styled";
import { BASE_WRAPPER, BASE_CONTAINER, COLOR } from "../../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)`
  display: flex;
  flex-direction: column;
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  &:first-of-type {
    margin-top: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  color: ${COLOR.gray_text};
`;

export const SubTitle = styled.h3`
  font-size: 17px;
  color: ${COLOR.gray_subText};
  margin-top: 10px;
  margin-bottom: 20px;
`;
