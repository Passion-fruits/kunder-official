import styled from "@emotion/styled";
import { COLOR } from "./../../../styles/index";

export const MainTopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .kunder-naming-intro {
    font-size: 23px;
    font-weight:800;
    color: ${COLOR.black};
    letter-spacing:-1px;
  }
  .sub-intro {
    margin-top: 10px;
    font-size: 17px;
    font-weight: 500;
    color: ${COLOR.text};
  }
  .content-box {
    padding: 30px;
  }
`;

export const ContentsFlexWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  justify-content: space-between;
  .column-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const PlayBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 80%;
  background-color: ${COLOR.main};
  position: absolute;
  bottom: 0;
  z-index: 3;
  margin: 25px;
  & svg {
    margin-left: 5px;
  }
`;

export const RecommendMusicWrapper = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid rgb(240, 240, 240);
  position: relative;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
  }
  .img-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    color: white;
    background: linear-gradient(rgb(255, 255, 255, 0), rgb(0, 0, 0, 0.8));
    .cover-music-info {
      display: flex;
      flex-direction: column;
      .music-title {
        padding: 5px 16px;
        font-size: 20px;
        font-weight: 500;
        color: white;
        position: absolute;
        background-color: ${COLOR.black};
      }
      .artist-name {
        padding: 5px 15px;
        font-size: 16px;
        font-weight: 500;
        color: white;
        position: absolute;
        background-color: ${COLOR.black};
        margin-top: 40px;
      }
    }
  }
`;

interface genreWrapProps {
  backgroundColor: string;
  height: string;
  imgSize: string;
}

export const RecommendGenreWrapper = styled.div<genreWrapProps>`
  position: relative;
  width: 380px;
  height: ${(res) => res.height};
  background-color: ${(res) => res.backgroundColor};
  border-radius: 8px;
  color: white;
  cursor: pointer;
  & h1 {
    font-size: 18px;
  }
  & h3 {
    font-size: 15px;
    margin-top: 5px;
    font-weight: 500;
  }
  & img {
    height: ${(res) => res.imgSize};
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 3;
  }
`;
