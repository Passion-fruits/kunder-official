import { ACCESS_TOKEN } from "../lib/export/localstorage";
import request from "./axios";

export default {
  getFeedList({ page, size }) {
    return request({
      method: "get",
      url: `/follow/song?page=${page}&size=${size}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
};
