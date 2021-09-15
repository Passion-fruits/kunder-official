import styled from "@emotion/styled";
import { COLOR, CONTAINER, WRAPPER } from "../../styles/index";

export const Wrapper = styled(WRAPPER)``;

export const Container = styled(CONTAINER)`
  padding-top: 30px;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  gap: 38px;
  position: relative;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 80%;
    border:1px solid rgb(240,240,240);
  }
  & section {
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    & h1 {
      font-size: 28px;
      font-weight: bold;
      color: ${COLOR.black};
    }
    & span {
      color: ${COLOR.text};
      font-size: 17px;
      font-weight: 500;
      margin-top: 8px;
      margin-left: 2px;
    }
    & article {
      display: flex;
      gap: 22px;
      margin-top: 40px;
      align-items: center;
      & svg {
        cursor: pointer;
      }
    }
  }
  & button {
    background-color: #1E8FFF;
  }
`;

export const ProfileImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  button {
    z-index: 2;
    width: 50px;
    height: 50px;
    color: white;
    border-radius: 80%;
    position: absolute;
    font-size: 35px;
    right: 0;
    bottom: 0;
  }
`;

export const CallbackBtn = styled.button`
  padding: 7px 20px;
  font-size: 15px;
  color: white;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 3px;
`;

export const Menu = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-bottom: 30px;
`;

interface Selection {
  check: boolean;
}

export const Selection = styled.span<Selection>`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: ${(res) => (res.check ? COLOR.main : COLOR.text)};
  padding-bottom: 15px;
  border-bottom: 3px solid ${(res) => (res.check ? COLOR.main : "#fff")};
`;

export const UpdateContainer = styled.div`
  position: absolute;
  right: 0;
  display: grid;
  grid-template-columns: repeat(2, 230px);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding-top: 30px;
  & input,
  button {
    border-radius: 3px;
    font-size: 13px;
  }
  & input {
    width: 100%;
    height: 30px;
    padding: 0 10px;
    border: 1px solid ${COLOR.text};
    &::placeholder{
      color:${COLOR.text};
    }
  }
  & button {
    width: 100%;
    height: 25px;
    color: white;
  }
`;
