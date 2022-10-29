import axios from "axios";

export const callKakaoApi = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_REST_API_KEY}`,
  },
  timeout: 20000,
});
