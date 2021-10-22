import { HeartIcon, PlaylistIcon, HistoryIcon } from "../../../assets";
import RouteMenu from "./RouteMenu";
import UploadIcon from "../../../assets/upload";
import HistoryMusic from "./HistoryMusic";
import MyPlaylist from "./MyPlaylist";

export default function LoginScreen() {
  return (
    <>
      <RouteMenu
        icon={<HistoryIcon size={23} />}
        content="기록"
        route="like_music"
      />
      <RouteMenu
        icon={<HeartIcon size={20} callback={() => {}} color="#fff" />}
        content="좋아요 표시한 음악"
        route="like_music"
      />
      <RouteMenu
        icon={<PlaylistIcon size={14} />}
        content="관심 플레이리스트"
        route="like_music"
      />
      <RouteMenu
        icon={<UploadIcon size={20} />}
        content="음악 업로드"
        route="upload"
      />
      <HistoryMusic />
      <MyPlaylist />
    </>
  );
}
