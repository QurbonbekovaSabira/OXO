import { useQuery } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

export const useGetAllUserDatas = (id) => {
  return useQuery({
    queryKey: ["get-user-data", id],
    queryFn: () => {
      return requst
        .get("/all", {
          params: { userId_like: id },
        })
        .then((res) => res.data);
    },
  });
};
