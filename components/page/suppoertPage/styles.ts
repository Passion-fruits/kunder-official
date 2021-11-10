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
  width: 850px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${SIZE.medium_width}) {
    width: 700px;
  }
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
  @media screen and (max-width: ${SIZE.medium_width}) {
    font-size: 16px;
  }
  & .line {
    content: "";
    width: 70px;
    height: 2px;
    background-color: ${COLOR.green_main};
    margin-top: 15px;
    @media screen and (max-width: ${SIZE.medium_width}) {
      width: 50px;
      margin-top: 10px;
    }
  }
`;

export const SupportCardWrap = styled.div`
  width: 100%;
  padding: 20px 30px;
  border-radius: 5px;
  background-color: ${COLOR.black_subBackground};
  @media screen and (max-width: ${SIZE.medium_width}) {
    padding: 15px 20px;
  }
  & img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid ${COLOR.gray_borderColor};
    margin-right: 23px;
    cursor: pointer;
    transition: 0.3s;
    @media screen and (max-width: ${SIZE.medium_width}) {
      width: 50px;
      height: 50px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const UserProfileWrap = styled.div`
  display: flex;
`;

export const ContentsWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  @media screen and (max-width: ${SIZE.medium_width}) {
    gap: 8px;
  }
  & h3 {
    color: ${COLOR.green_subMain};
    font-size: 18px;
    font-weight: 500;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
    & b {
      font-weight: bold;
    }
  }
  & span {
    color: ${COLOR.gray_text};
    font-size: 18px;
    font-weight: bold;
    @media screen and (max-width: ${SIZE.medium_width}) {
      font-size: 15px;
    }
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
  @media screen and (max-width: ${SIZE.medium_width}) {
    padding: 0 15px;
    height: 50px;
    font-size: 14px;
    margin-top: 10px;
  }
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
  @media screen and (max-width: ${SIZE.medium_width}) {
    padding: 8px 12px;
  }
`;

export const ListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 20px;
`;

export const LoadingWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const SmallLoadingWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
