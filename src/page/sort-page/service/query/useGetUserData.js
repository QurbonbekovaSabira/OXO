import { useQuery } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

export const useGetUserData = (id) => {
  return useQuery({
    queryKey: ["admin-data", id],
    queryFn: () => {
      return requst.get(`/users/${id}`).then((res) => res.data);
    },
  });
};
