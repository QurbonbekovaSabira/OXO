import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  return (
    <>
      <div className="flex h-screen flex-col justify-between">
        <header className="z-50 mb-[90px] ">
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
