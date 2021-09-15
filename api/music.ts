import request from "./axios";
import { ACCESS_TOKEN } from "./../lib/export/localstorage";

export default {
  getStreaming({ genre, page, sort, size }) {
    return request({
      url: `/song/stream?genre=${genre}&page=${page}&sort=${sort}&size=${size}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  getMusicDetail(id) {
    return request({
      url: `/song/${id}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  getMusicComment(id) {
    return request({
      url: `/comment/${id}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  sendComment(id, content) {
    return request({
      url: `/comment`,
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        song_id: parseInt(id),
        content: content,
      },
    });
  },
  uploadMusic(obj) {
    const fd = new FormData();
    fd.append("song", obj.musicSrc);
    fd.append("song", obj.imgSrc);
    fd.append("title", obj.title);
    fd.append("description", obj.description);
    fd.append("genre", obj.genre);
    fd.append("mood", obj.mood);
    fd.append("duration", obj.duration);
    return request({
      url: `/song`,
      method: "post",
      headers: {
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: fd,
    });
  },
  checkIsLike(id) {
    return request({
      url: `/like?song_id=${id}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  pushLike(id) {
    return request({
      url: `/like/${id}`,
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  deleteLike(id) {
    return request({
      url: `/like/${id}`,
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
};
