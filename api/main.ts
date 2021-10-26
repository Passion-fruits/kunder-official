import request from "./axios";

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
};
