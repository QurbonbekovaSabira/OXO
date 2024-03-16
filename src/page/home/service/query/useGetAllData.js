import { useQuery } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

export const useGetAllData = (page = 1) => {
  return useQuery({
    queryKey: ["get-all-data", page],
    queryFn: () => {
      return requst
        .get("/all", { params: { _page: page, _limit: 6 } })
        .then((res) => {
          const totalCount = res?.headers?.get("X-Total-count");
          const pageSize = Math.ceil(Number(totalCount) / 6);
          return {
            data: res.data,
            pageSize,
          };
        });
    },
  });
};
