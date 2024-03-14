import React from "react";
import app from "../../assets/img/appStore.png";
import play from "../../assets/img/playStore.png";
import logo from "../../assets/img/light.svg";
export const Footer = () => {
  return (
    <div className="bg-primary py-[35px]">
      <div className="container mb-[24px] flex justify-between border-b border-white">
        <div>
          <img src={logo} alt="logo OXO" />
        </div>
        <div className=" flex flex-col gap-2">
          <a href="#" className="text-sm font-medium text-white">
            Mobil ilovalar
          </a>
          <a href="#" className="text-sm font-medium text-white">
            Yordam
          </a>
          <a href="#" className="text-sm font-medium text-white">
            Pullik xizmatlar
          </a>
          <a href="#" className="text-sm font-medium text-white">
            OXO da biznes
          </a>
          <a href="#" className="text-sm font-medium text-white">
            Saytda reklama
          </a>
          <a href="#" className="text-sm font-medium text-white">
            Foydalanish shartlari
          </a>
          <a href="#" className="text-sm font-medium text-white">
            Maxfiylik siyosati
          </a>
          <a href="#" className="text-sm font-medium text-white">
            Foydalanish shartlari
          </a>
        </div>
        <div className=" flex flex-col gap-2">
          <a href="#" className="text-sm font-medium text-white">
            Qanday qilib sotish va sotib olish kerak?
          </a>
          <a href="#" className="text-sm font-medium text-white">
            Xavfsizlik qoidalari
          </a>
          <a href="#" className="text-sm font-medium text-white">
            Sayt xaritasi
          </a>
          <a href="#" className="text-sm font-medium text-white">
            Mintaqalar xaritasi
          </a>
          <a href="#" className="text-sm font-medium text-white">
            OXO da karyera
          </a>
          <a href="#" className="text-sm font-medium text-white">
            Qayta aloqa
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#">
            <img src={app} alt="" />
          </a>
          <a href="#">
            <img src={play} alt="" />
          </a>
        </div>
      </div>
      <div className="pt-8 text-center">
        <p className="text-sm font-normal text-white ">
          © 2022 Barcha huquqlar himoyalangan.Ushbu sayt cookie-fayllardan
          foydalanadi. Brauzeringizda cookie sozlamalarini o'zgartirishingiz
          mumkin.
        </p>
      </div>
    </div>
  );
};
