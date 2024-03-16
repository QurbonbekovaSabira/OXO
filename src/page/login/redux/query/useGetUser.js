import { useMutation } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

export const useGetUser = () => {
  return useMutation({
    mutationKey: "useCreateUser",
    mutationFn: (data) => requst.post(`/login`, data).then((res) => res.data),
  });
};
