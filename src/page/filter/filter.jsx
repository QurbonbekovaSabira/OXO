import React from "react";
import { useParams } from "react-router-dom";
export const Filter = () => {
  const { name } = useParams();
  console.log(name);
  return <div>Filter</div>;
};
