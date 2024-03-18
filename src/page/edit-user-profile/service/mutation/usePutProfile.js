import { useMutation } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

export const usePutProfile = (id) => {
  return useMutation({
    mutationKey: ["edit-user-profile"],
    mutationFn: (data) => {
      return requst.put(`/users/${id}`, data).then((res) => res.data);
    },
  });
};
