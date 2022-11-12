import axios from "axios";
import store from "@/store";

const instance = axios.create({
  baseURL: "https://api.devcury.kr",
});

export const callApi = (config) => {
  const token = store.getters["user/token"];
  const baseHeaders = {};
  const headers = token
    ? { ...baseHeaders, Authorization: `Bearer ${token}` }
    : { ...baseHeaders };

  return instance({
    headers: headers,
    ...config,
  });
};
