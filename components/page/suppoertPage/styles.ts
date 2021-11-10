import styled from "@emotion/styled";
import { BASE_CONTAINER, BASE_WRAPPER, SIZE } from "../../../styles";
import { COLOR } from "./../../../styles/index";

export const Wrapper = styled(BASE_WRAPPER)``;

export const Container = styled(BASE_CONTAINER)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuWrap = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
`;

interface MenuProps {
  active: boolean;
}

export const Menu = styled.button<MenuProps>`
  color: ${({ active }) => (active ? COLOR.gray_text : COLOR.gray_subText)};
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .line {
    content: "";
    width: 70px;
    height: 2px;
    background-color: ${COLOR.green_main};
    margin-top: 15px;
  }
`;

export const SupportCardWrap = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: ${COLOR.black_subBackground};
`;

export const UserProfileWrap = styled.div`
  display: flex;
  gap: 23px;
  & img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid ${COLOR.gray_borderColor};
  }
`;

export const ContentsWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  & h3 {
    color: ${COLOR.green_subMain};
    font-size: 18px;
    font-weight: 500;
    & b {
      font-weight: bold;
    }
  }
  & span {
    color: ${COLOR.gray_text};
    font-size: 18px;
    font-weight: bold;
  }
`;

export const InputToAnswer = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 5px;
  background-color: #101010;
  margin-top: 15px;
  font-size: 18px;
  color: ${COLOR.gray_text};
  padding: 0 20px;
  &::placeholder {
    color: ${COLOR.gray_subText};
  }
`;

export const AnswerContainer = styled.div`
  width: 100%;
  padding: 18px;
  border-radius: 5px;
  background-color: #101010;
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

export const ListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 20px;
`;
