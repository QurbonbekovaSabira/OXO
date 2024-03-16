import React from "react";
import clsx from "clsx";
export const Button = ({ children, type, variant, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "flex items-center justify-center gap-[10px] rounded-lg border-none px-[50px] py-[15px] text-xl font-bold",
        {
          "rounded-2xl bg-primary  text-white": variant === "primary",
        },
        className,
      )}
    >
      {children}
    </button>
  );
};
