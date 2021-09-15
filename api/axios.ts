import axios, { AxiosError } from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./../lib/export/localstorage";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN,
  timeout: 100000,
});
let isTokenRefreshing = false;
let refreshSubscribers = [];

const onTokenRefreshed = (accessToken) => {
  refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback) => {
  refreshSubscribers.push(callback);
};

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;
    // 만약 토큰 오류가 났으면
    if (status === 401) {
      // 만약 로컬스토리지에 리프레쉬 토큰이 박혀있으면
      if (!isTokenRefreshing && localStorage.getItem(REFRESH_TOKEN)) {
        // isTokenRefreshing이 false인 경우에만 token refresh 요청
        isTokenRefreshing = true;
        // 리프레쉬 받아와
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        // 리프레쉬로 토큰 재 요청 해
        axios({
          url: `${process.env.NEXT_PUBLIC_API_DOMAIN}refresh`,
          method: "get",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${refreshToken}`,
          },
        })
          .then((res) => {
            // 요청 잘 됬으면
            const data = res.data;
            const accessToken = data.access_token;
            // 새로운 토큰으로 엑세스토큰 갈아 끼워
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            isTokenRefreshing = false;
            axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
            // 401떳던 요청 다시 진행 시켜
            onTokenRefreshed(accessToken);
          })
          .catch(() => {
            // 만약 에러가 났어
            // 엑세스랑 리프레쉬 둘다 비워버려
            localStorage.setItem(ACCESS_TOKEN, "");
            localStorage.setItem(REFRESH_TOKEN, "");
            return Promise.reject(error);
          });
      } else {
        // 리프레쉬 토큰이 없어
        // 둘다 비워버려
        localStorage.setItem(ACCESS_TOKEN, "");
        localStorage.setItem(REFRESH_TOKEN, "");
        return Promise.reject(error);
      }
      // token이 재발급 되는 동안의 요청은 refreshSubscribers에 저장
      const retryOriginalRequest = new Promise((resolve) => {
        addRefreshSubscriber((accessToken) => {
          originalRequest.headers.Authorization = "Bearer " + accessToken;
          resolve(axios(originalRequest));
        });
      });
      return retryOriginalRequest;
    }
    return Promise.reject(error);
  }
);

export default instance;
