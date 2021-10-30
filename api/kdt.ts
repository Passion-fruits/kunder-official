import request from "./axios";
import { ACCESS_TOKEN } from "./../lib/export/localstorage";

export default {
  requestPayment({ paymentKey, orderId, amount, account }) {
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
        to_address: account,
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
};
