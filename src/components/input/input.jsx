import React from "react";
import clsx from "clsx";

export const Input = React.forwardRef(
  (
    {
      label,
      id,
      error,
      className,
      type,
      onChange,
      name,
      variant,
      icon: Icon1,
      icon2: Icon2,
      setState,
      state,
      defaultValue,
    },
    ref,
  ) => {
    return (
      <div>
        {label && (
          <label
            className={`mb-4  block  text-sm font-normal  ${error ? "text-glowing-brake-disc" : "text-gray"}`}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            defaultValue={defaultValue}
            ref={ref}
            className={clsx(
              `text-black-out w-full rounded-md ${error ? "border-glowing-brake-disc" : "border-primary "} border p-4 text-sm font-normal outline-none`,
              {
                "border-none": variant == "secondary",
              },
              className,
            )}
            id={id}
            type={type}
            name={name}
            onChange={onChange}
          />
          {Icon1 && !state && (
            <button
              onClick={() => setState(true)}
              className="absolute right-[15px] top-[50%] block  translate-y-[-50%] bg-transparent text-center"
            >
              <Icon1 />
            </button>
          )}
          {Icon2 && state && (
            <button
              onClick={() => setState(false)}
              className="absolute right-[15px] top-[50%] block translate-x-[-50%] translate-y-[-50%] bg-transparent text-center"
            >
              <Icon2 />
            </button>
          )}
        </div>
      </div>
    );
  },
);
