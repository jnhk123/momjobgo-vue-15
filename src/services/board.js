import { callApi } from "@/plugins/axios";

export const getBoards = () => {
  return callApi({
    url: "/api/board",
    method: "GET",
  });
};
