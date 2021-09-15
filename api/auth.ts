import request from "./axios";

export default {
  googleLogin(token) {
    return request({
      url: `/oauth2/code/google`,
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      data: {
        id_token: token,
      },
    });
  },
  signUp({ name, email, genreArr, img }) {
    return request({
      url: "/auth",
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      data: {
        name: name,
        email: email,
        user_genre: genreArr,
        image_path: img,
      },
    });
  },
};
