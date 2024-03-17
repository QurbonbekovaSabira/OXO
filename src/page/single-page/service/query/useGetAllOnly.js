import { useQuery } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

import React from "react";

export const useGetAllOnly = (id) => {
  return useQuery({
    queryKey: ["get-only-product", id],
    queryFn: () => requst.get(`/all/${id}`).then((res) => res.data),
  });
};
