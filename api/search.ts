import request from "./axios";
import { ACCESS_TOKEN } from "./../lib/export/localstorage";

export default {
  getAutoSearchResult(query) {
    return request({
      method: "get",
      url: `/search/auto?q=${encodeURI(query)}&size=2`,
    });
  },
};
