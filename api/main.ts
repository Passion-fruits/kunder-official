import request from "./axios";
import { ACCESS_TOKEN } from "./../lib/export/localstorage";

export default {
  getRecentMusic({ page, size }) {
    return request({
      method: "get",
      url: `/song/recent?page=${page}&size=${size}`,
    });
  },
  getRandomPlaylist({ page, size }) {
    return request({
      method: "get",
      url: `/playlist/random?page=${page}&size=${size}`,
    });
  },
  getPopularMusic({ page, size }) {
    return request({
      method: "get",
      url: `/song/popular?page=${page}&size=${size}`,
    });
  },
  getRecommendPlaylist(size) {
    return request({
      method: "get",
      url: `/recommend/main?size=${size}`,
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
};
