import React from "react";
import { useGetCategory } from "../../redux/service/useGetCategory";
import { CategoryCard } from "./components/category-card/category-card";
import { useGetAllData } from "./service/query/useGetAllData";
import { ProductCard } from "../../components/product-card/product-card";
export const Home = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetCategory();
  const { data: allData } = useGetAllData(page);
  const pageSize = [...Array(allData?.pageSize)].fill(null);

  return (
    <>
      <section className="pb-[56px] pt-9">
        <div className="container mb-3">
          <h2 className="mb-6 text-2xl font-semibold text-black-out">
            Kategoriyalar
          </h2>
          <div className="flex flex-wrap items-center gap-9">
            {data?.map((item) => (
              <CategoryCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cascading-white pb-14 pt-8">
        <div className="container">
          <div className=" mb-10 flex flex-wrap items-center gap-5">
            {allData?.data.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-2">
            {pageSize?.map((item, i) => (
              <button
                onClick={() => setPage(i + 1)}
                key={i}
                className={`rounded-lg border border-primary px-[15px] py-[11px] text-lg text-primary ${page == i + 1 ? "font-semibold" : "font-light"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
