import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.devcury.kr",
});

export const callApi = (config) => {
  const token = "???";
  const baseHeaders = {};
  const headers = token
    ? { ...baseHeaders, Authorization: `Bearer ${token}` }
    : { ...baseHeaders };

  return instance({
    headers: headers,
    ...config,
  });
};
