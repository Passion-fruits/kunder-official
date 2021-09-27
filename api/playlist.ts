import request from "./axios";
import { ACCESS_TOKEN, USER_ID } from "./../lib/export/localstorage";

export default {
  getUserPlaylist() {
    return request({
      method: "get",
      url: `/playlist/profile/${localStorage.getItem(USER_ID)}`,
    });
  },
};
