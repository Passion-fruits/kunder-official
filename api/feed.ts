import request from "./axios";

export default {
  getFeedList(genre,page,sort) {
    return request({
      method: "get",
      url: `/song/feed?genre=${genre}&page=${page}&sort=${sort}`,
    });
  },
};
