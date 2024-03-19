import React from "react";
import clsx from "clsx";
export const Button = ({
  children,
  type,
  variant,
  className,
  onClick,
  beforIcon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "flex items-center justify-center gap-[10px] ",
        {
          "rounded-lg border-none bg-primary  px-[40px] py-[15px] text-xl font-bold  text-white":
            variant === "primary",
        },
        {
          "rounded border border-black px-5 py-1 text-base font-medium text-black":
            variant == "secondary",
        },
        className,
      )}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
};
