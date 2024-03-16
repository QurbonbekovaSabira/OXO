import React from "react";
import { useSelector } from "react-redux";
import notData from "../../assets/img/not-data.jpg";
import { ProductCard } from "../../components/product-card/product-card";
export const LikesPage = () => {
  const likeData = useSelector((state) => state.like);
  return (
    <section className="py-5">
      <div className="container">
        {!likeData.length > 0 && (
          <div className="mx-auto w-full max-w-[400px]">
            <img className="w-full" src={notData} alt="" />
          </div>
        )}
        {likeData.length > 0 && (
          <div className="flex flex-wrap items-center gap-5">
            {likeData?.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
