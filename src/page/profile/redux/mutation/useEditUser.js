import { useMutation } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

export const useEditUser = (id) => {
  return useMutation({
    mutationKey: "useCreateUser",
    mutationFn: (data) =>
      requst.put(`/users/${id}`, data).then((res) => res.data),
  });
};
