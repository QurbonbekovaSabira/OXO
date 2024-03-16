import { useMutation } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

import React from "react";

export const usePutProduct = (name) => {
  return useMutation({
    mutationKey: ["put-product", name],
    mutationFn: (data) => {
      return requst.put(`/${name}`, data).then((res) => res.data);
    },
  });
};
