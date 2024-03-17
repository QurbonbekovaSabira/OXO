import { useQuery } from "@tanstack/react-query";
import { requst } from "../../../../config/request";

export const useGetFilterBrand = (brandName, brandKey, statusKey) => {
  return useQuery({
    queryKey: ["get-filter-brand", brandName, brandKey, statusKey],
    queryFn: () =>
      requst.get(`/${brandName}`, {
        params: { brand_like: brandKey, status_like: statusKey },
      }),
  });
};
