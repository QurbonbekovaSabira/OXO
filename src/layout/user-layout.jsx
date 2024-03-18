import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
export const UserLayout = () => {
  const token = Cookies.get("user");
  if (!token) return <Navigate to="/" replace />;
  return (
    <div>
      <Outlet />
    </div>
  );
};
