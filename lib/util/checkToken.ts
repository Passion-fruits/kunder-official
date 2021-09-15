import { REFRESH_TOKEN, USER_ID } from "../export/localstorage";
import { ACCESS_TOKEN } from "./../export/localstorage";

export const CheckToken = () => {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  if (refreshToken) {
    localStorage.setItem(ACCESS_TOKEN, refreshToken);
    localStorage.setItem(REFRESH_TOKEN, "");
    return true;
  } else {
    localStorage.setItem(ACCESS_TOKEN, "");
    localStorage.setItem(REFRESH_TOKEN, "");
    localStorage.setItem(USER_ID, "");
    return false;
  }
};
