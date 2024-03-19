import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllUserDatas } from "./service/query/useGetAllUserDatas";
import { ProductCard } from "../../components/product-card";
import verified from "../../assets/img/verified.png";
import { useGetUserData } from "./service/query/useGetUserData";
import { TelegramIcon } from "../../assets/icon/telegram-icon";
import { FacebookIcon } from "../../assets/icon/facebook-icon";
import { Pinterest } from "../../assets/icon/pinterest";
import { Dribble } from "../../assets/icon/dribble";
import { Button } from "../../components/button";
import { LikeCoralRedIcon } from "../../assets/icon/like-coral-red-icon";
export const SortPage = () => {
  const { id } = useParams();
  const { data } = useGetAllUserDatas(id);
  const { data: userData } = useGetUserData(id);

  return (
    <section className="bg-cascading-white py-12">
      <div className="container">
        <div className="mb-9 flex items-center justify-between rounded-lg bg-white p-6">
          <div>
            <div className=" mb-5 flex items-center gap-6">
              <div>
                <img
                  className="h-[80px] w-[80px] rounded-full"
                  src={userData?.ticketLink}
                  alt=""
                />
              </div>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold text-dark-void">
                  {userData?.firstName}
                </p>
                <img src={verified} alt="" />
              </div>
            </div>
            <div className="flex items-center gap-7">
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <Pinterest />
              </a>
              <a href="#">
                <Dribble />
              </a>
              <a href="#">
                <TelegramIcon />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              type={"button"}
              variant={"primary"}
              className={"px-6 text-base font-medium"}
            >
              Fikr bildirish
            </Button>
            <Button
              type={"button"}
              variant={"secondary"}
              beforIcon={LikeCoralRedIcon}
              className={"border-coral-red px-[51px] py-[14px]"}
            >
              Obuna bo’lish
            </Button>
          </div>
        </div>
        <p className="mb-6 text-2xl font-bold text-black-out">
          {data.length} ta e’lon topildi
        </p>
        <div className=" flex items-center gap-5">
          {data?.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
