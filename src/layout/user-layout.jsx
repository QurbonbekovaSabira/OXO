import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { loadState } from "../lib/storage";
export const UserLayout = () => {
  const { user } = useSelector((state) => state);
  if (!user.user.length) return <Navigate to="/" replace />;
  return (
    <div>
      <Outlet />
    </div>
  );
};
