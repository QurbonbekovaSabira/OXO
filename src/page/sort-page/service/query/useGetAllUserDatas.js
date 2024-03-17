import { useQuery } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

export const useGetAllUserDatas = (id) => {
  return useQuery({
    queryKey: ["get-user-data", id],
    queryFn: () =>
      requst.get("/all", {
        params: { userId_like: id },
      }),
  });
};
