import axios from "axios";
import store from "@/store";

const instance = axios.create({
  baseURL: "https://api.devcury.kr",
});

export const callApi = async (config) => {
  try {
    const token = store.getters["user/token"];
    const baseHeaders = {};
    const headers = token
      ? { ...baseHeaders, Authorization: `Bearer ${token}` }
      : { ...baseHeaders };

    return await instance({
      headers: headers,
      ...config,
    });
  } catch (error) {
    if (
      error.response.status === 401 &&
      error.response.data.error === "Invalid token"
    ) {
      store.dispatch("user/initUser");
      alert("토큰이 만료되었습니다. 다시 로그인 해주세요.");
      return error.response;
    } else {
      if (error?.response?.data?.error) {
        alert(error?.response?.data?.error);
        return error.response;
      } else {
        throw new Error(error);
      }
    }
  }
};
