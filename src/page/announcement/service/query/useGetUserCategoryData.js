import { useQuery } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

import React from "react";

export const useGetUserCategoryData = (name, id) => {
  return useQuery({
    queryKey: ["get-user-category-date"],
    queryFn: () => {
      return requst
        .get(`/${name}`, { params: { userId_like: id } })
        .then((res) => res.data);
    },
  });
};
