import RecommendGenre from "./contents/recommendGenre";
import RecommendMusic from "./contents/recommendMusic";
import * as S from "./styles";

export default function MainTopContainer() {
  return (
    <S.MainTopWrapper>
      <h3 className="kunder-naming-intro">KOREAN UNDERGROUND MUSIC, KUNDER</h3>
      <h5 className="sub-intro">한국 언더그라운드 음악 플랫폼, 쿤더</h5>
      <S.ContentsFlexWrap>
        <RecommendMusic />
        <div className="column-wrap">
          <RecommendGenre
            backgroundColor="#01E388"
            title="힙합 음악"
            genre="힙합"
            subTitle="오늘을 힙하게"
            height="150px"
            imgUrl="/hiphop-intro.png"
            imgSize="130px"
          />
          <RecommendGenre
            backgroundColor="#FF3939"
            title="레게 음악"
            genre="레게"
            subTitle="소울 충만한 느낌"
            height="190px"
            imgUrl="/reggae-intro.png"
            imgSize="150px"
          />
        </div>
        <RecommendGenre
          backgroundColor="#0090FF"
          title="팝 음악"
          genre="팝"
          subTitle="팝과 함께 하루 즐기기"
          height="350px"
          imgUrl="/jazz-intro.png"
          imgSize="250px"
        />
      </S.ContentsFlexWrap>
    </S.MainTopWrapper>
  );
}
