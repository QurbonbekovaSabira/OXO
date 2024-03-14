import React from "react";
import clsx from "clsx";
export const Button = ({ children, type, variant, classname }) => {
  return (
    <button
      type={type}
      className={clsx(
        "flex items-center gap-[10px] rounded-lg border-none px-[50px] py-[15px] text-xl font-bold",
        {
          "bg-primary  text-white": variant === "primary",
        },
        classname,
      )}
    >
      {children}
    </button>
  );
};
