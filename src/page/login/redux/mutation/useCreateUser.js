import { useMutation } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

export const useCreateUser = () => {
  return useMutation({
    mutationKey: ["useCreateUser"],
    mutationFn: (data) =>
      requst.post("/register", data).then((res) => res.data),
  });
};
