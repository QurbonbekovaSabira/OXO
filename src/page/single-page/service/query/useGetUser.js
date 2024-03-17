import { useQuery } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

export const useGetUser = (id) => {
  return useQuery({
    queryKey: ["user-data", id],
    queryFn: () => {
      return requst.get(`/users/${id}`).then((res) => res.data);
    },
  });
};
