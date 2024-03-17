import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllUserDatas } from "./service/query/useGetAllUserDatas";
import { ProductCard } from "../../components/product-card";
export const SortPage = () => {
  const { id } = useParams();
  const { data } = useGetAllUserDatas(id);
  return (
    <section className="py-12">
      <div className="container flex items-center gap-5">
        {data?.data?.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
