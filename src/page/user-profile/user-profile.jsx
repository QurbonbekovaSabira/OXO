import React from "react";
import { useGetCategory } from "../../redux/service/useGetCategory";
import { CategoryCard } from "../../components/category-card";
export const UserProfile = () => {
  const { data } = useGetCategory();
  console.log(data);
  return (
    <section className="pb-14 pt-8">
      <div className="container">
        <h2 className="mb-6 text-2xl font-bold text-black-out">
          Kategoriyalar
        </h2>
        <div className="flex flex-wrap items-center gap-8">
          {data?.map((item) => (
            <CategoryCard
              key={item.id}
              product={item}
              to={`/user/${item.dataKey}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
