import React from "react";
import { Link } from "react-router-dom";
export const CategoryCard = ({ product, to }) => {
  return (
    <Link to={to}>
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <img src={product?.img} alt="" />
        </div>
        <p className="text-sm font-normal text-dark-void">{product?.name}</p>
      </div>
    </Link>
  );
};
