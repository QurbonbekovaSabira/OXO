import { useQuery } from "@tanstack/react-query";
import { requst } from "../../../../config/request";
import React from "react";

export const useGetBrand = (brandName) => {
  return useQuery({
    queryKey: ["get-brands", brandName],
    queryFn: () => {
      return requst.get("/brand", { params: { name_like: brandName } });
    },
  });
};
