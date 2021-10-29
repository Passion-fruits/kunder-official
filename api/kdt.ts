import request from "./axios";
import { ACCESS_TOKEN } from "./../lib/export/localstorage";

export default {
  requestPayment({ paymentKey, orderId, amount }) {
    return request({
      url: `/kdt?paymentKey=${paymentKey}&orderId=${orderId}&amount=${amount}`,
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  },
};
