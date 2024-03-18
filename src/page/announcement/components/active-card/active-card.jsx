import React from "react";
import { MessageIcon } from "../../../../assets/icon/message-icon";
import { PhoneIcon } from "../../../../assets/icon/phone-icon";
import { LikeIcon } from "../../../../assets/icon/like-icon";
import { ActiveEyesIcon } from "../../../../assets/icon/active-eyes-icon";
import { Button } from "../../../../components/button";
export const ActiveCard = (product) => {
  return (
    <div className="flex items-center gap-7 rounded-lg bg-white p-5">
      <div className="h-[160px] w-full max-w-[185px]">
        <img
          className="h-[100%] w-full rounded-lg object-cover"
          src={product.img}
          alt=""
        />
      </div>
      <div className="w-full">
        <p className="mb-9 text-base font-medium text-black">{product.title}</p>
        <p className="mb-5 text-lg font-bold text-red">{product.price} UYE</p>
        <div className="flex items-center justify-between gap-[30px]">
          <div className="flex items-center gap-10">
            <p className="flex items-center gap-2 text-lg font-medium text-black">
              <MessageIcon />0
            </p>
            <p className="flex items-center gap-2 text-lg font-medium text-black">
              <ActiveEyesIcon />0
            </p>
            <p className="flex items-center gap-2 text-lg font-medium text-black">
              <PhoneIcon />0
            </p>
            <p className="flex items-center gap-2 text-lg font-medium text-black">
              <LikeIcon />0
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button className={"px-7 py-3"} variant={"primary"}>
              Reklama
            </Button>
            <Button className="px-4 py-3" variant={"secondary"}>
              Ko’tarish 1 200 uzs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
