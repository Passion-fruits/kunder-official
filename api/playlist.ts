import request from "./axios";
import { ACCESS_TOKEN, USER_ID } from "./../lib/export/localstorage";

export default {
  getUserPlaylist() {
    return request({
      method: "get",
      url: `/playlist/profile/${localStorage.getItem(USER_ID)}`,
    });
  },
  createNewPlaylist(name) {
    return request({
      method: "post",
      url: `/playlist`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        name: name,
      },
    });
  },
  addMusicToPlaylist({ playlist_id, song_id }) {
    return request({
      method: "post",
      url: `/playlist/${playlist_id}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        song_id: song_id,
      },
    });
  },
};
