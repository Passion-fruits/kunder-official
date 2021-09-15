import { useRouter } from "next/dist/client/router";
import { resizing } from "./../../lib/util/resizing";
import { toast } from "react-toastify";
import React from "react";
import * as S from "./styles";
import music from "../../api/music";
import CommentView from "./comment/comment";
import LoadingPage from "../../components/loading";
import MusicInformation from "./musicInformation";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [commentData, setCommentData] = React.useState<any[]>([]);
  const [userComment, setUserComment] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [profileData, setProfileData] = React.useState<any>({
    title: "",
    like: "",
    comment: "",
    user_id: "",
    genre: "",
    mood: "",
    artist: "",
    cover_url: "",
    created_at: "",
    description: "",
    song_url: "",
  });
  const {
    title,
    like,
    user_id,
    genre,
    mood,
    artist,
    cover_url,
    created_at,
    description,
    song_url,
  } = profileData;

  const handleWriteComment = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserComment(event.target.value);
    },
    []
  );

  const getCommentArray = React.useCallback(() => {
    if (id) {
      music
        .getMusicComment(id)
        .then((res) => {
          setCommentData(res.data);
        })
        .catch(() => {
          return;
        });
    }
  }, [id]);

  const sendComment = React.useCallback(
    (event) => {
      event.keyCode === 13 &&
        userComment &&
        music
          .sendComment(id, userComment)
          .then(() => {
            getCommentArray();
            setUserComment("");
            toast.success("댓글이 등록되었습니다");
          })
          .catch((err) => {
            if (err.response.status === 400) {
              toast.info("이미 댓글을 작성하셨습니다.");
              return;
            }
            if (err.response.status === 401) {
              toast.info("로그인 후 이용해주세요");
              return;
            }
            toast.error("에러가 발생하였습니다.");
          });
    },
    [userComment, id]
  );

  React.useEffect(() => {
    if (id) {
      music.getMusicDetail(id).then((res) => {
        setLoading(false);
        setProfileData(res.data);
      });
    }
  }, [router]);

  React.useEffect(() => {
    getCommentArray();
  }, [router]);

  React.useEffect(() => {
    profileData && resizing(user_id);
  }, [profileData]);

  return (
    <S.Wrapper>
      {loading && <LoadingPage />}
      {title && (
        <S.Container>
          <MusicInformation
            cover_url={cover_url}
            title={title}
            artist={artist}
            genre={genre}
            mood={mood}
            created_at={created_at}
            like={like}
            user_id={user_id}
            description={description}
            song_url={song_url}
          />
          <S.CommentFormInput
            onChange={handleWriteComment}
            onKeyDown={sendComment}
            value={userComment}
            placeholder="댓글을 입력하세요. (엔터를 누르면 등록됩니다.)"
          />
          <S.CommentContainer>
            {commentData.map((obj, index) => (
              <CommentView
                key={index}
                contents={obj.comment_content}
                date={obj.created_at}
                name={obj.name}
                user_id={obj.user_id}
                src={obj.profile}
              />
            ))}
          </S.CommentContainer>
        </S.Container>
      )}
    </S.Wrapper>
  );
}
