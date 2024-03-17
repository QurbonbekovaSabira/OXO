import { useQuery } from "@tanstack/react-query";
import { requst } from "../../config/request";
import React from "react";

export const useGetBrand = (name) => {
  return useQuery({
    queryKey: ["get-brands", name],
    queryFn: () => {
      return requst.get("/brand", { params: { dataKey_like: name } });
    },
  });
};
