import request from "./axios";
import { ACCESS_TOKEN, USER_ID } from "./../lib/export/localstorage";

export default {
  getUserPlaylist(user_id) {
    return request({
      method: "get",
      url: `/playlist/profile/${user_id}`,
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
  getPlaylistDetail(playlist_id) {
    return request({
      method: "get",
      url: `/playlist/${playlist_id}`,
    });
  },
  updatePlaylistCover({ playlist_id, cover_url }) {
    const fd = new FormData();
    fd.append("image", cover_url);
    return request({
      method: "patch",
      url: `/playlist/${playlist_id}`,
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: fd,
    });
  },
};
