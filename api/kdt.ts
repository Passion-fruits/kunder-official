import request from "./axios";
import { ACCESS_TOKEN } from "./../lib/export/localstorage";

export default {
  requestPayment({ paymentKey, orderId, amount }) {
    return request({
      url: `/kdt`,
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        payment_key: paymentKey,
        order_id: orderId,
        amount: parseInt(amount),
      },
    });
  },
  getKdtHistory({ page, size }) {
    return request({
      url: `/kdt/history/charge?size=${size}&page=${page}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  setKdtWallet(wallet) {
    return request({
      url: `/profile/wallet`,
      method: "patch",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        wallet: wallet,
      },
    });
  },
  donateToUser({ user_id, amount, question }) {
    return request({
      url: `/kdt/donate`,
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        artist_id: parseInt(user_id),
        amount: parseInt(amount),
        question: question,
      },
    });
  },
  getMyKdt() {
    return request({
      url: "/kdt",
      method: "get",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  getDonateForArtistHistory({ done, size, page }) {
    return request({
      url: `/kdt/history/donate?done=${done}&size=${size}&page=${page}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  getDonateForMeHistory({ done, size, page }) {
    return request({
      url: `/kdt/history/answer?done=${done}&size=${size}&page=${page}`,
      method: "get",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
  writeAnswer({ message_id, user_id, answer }) {
    return request({
      url: `/kdt/answer`,
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      data: {
        message_id: message_id,
        donate_user_id: user_id,
        answer: answer,
      },
    });
  },
};
