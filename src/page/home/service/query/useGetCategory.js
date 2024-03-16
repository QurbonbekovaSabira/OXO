import { useQuery } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["get-category"],
    queryFn: () => {
      return requst.get("/category").then((res) => res.data);
    },
  });
};
