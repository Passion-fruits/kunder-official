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
  getKdtHistory() {
    return request({
      url: `/kdt/history`,
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
};
