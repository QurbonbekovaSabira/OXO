import React, { useState } from "react";
import { ArrowLeftIcon } from "../../assets/icon/arrow-left-icon";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { validationProfile } from "../../lib/validationProfile";
import { useSelector } from "react-redux";
export const EditUserProfile = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationProfile),
  });
  const submit = (data) => {
    console.log(data);
  };
  let user = useSelector((state) => state?.user?.user);
  console.log(user[0]);
  return (
    <section className="bg-cascading-white">
      <div className="container mx-auto max-w-[750px]">
        <Link to={"/user/:name"}>
          <div className="mb-[32px] flex items-center gap-8">
            <ArrowLeftIcon />
            <h2 className="text-lg font-medium text-primary">
              Profilni tahrirlash
            </h2>
          </div>
        </Link>
        <div className="w-full rounded bg-white px-10 py-8">
          <form onSubmit={handleSubmit(submit)}>
            <Input
              {...register("ticketLink")}
              label={"Surat yuklash"}
              type="text"
            />
            <Input
              defaultValue={user[0].firstName}
              {...register("firstName")}
              label={"Ismingiz"}
              type="text"
            />
            <input type="text" />
          </form>
        </div>
      </div>
    </section>
  );
};
