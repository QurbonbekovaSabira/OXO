import { useQuery } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

export const useGetUserProduct = (userId) => {
  return useQuery({
    queryKey: ["get-user-data", userId],
    queryFn: () =>
      requst.get("/all", {
        params: { _page: 1, _limit: 6, userId_like: userId },
      }),
  });
};
