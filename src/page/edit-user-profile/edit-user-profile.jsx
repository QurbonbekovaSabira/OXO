import React from "react";
import { ArrowLeftIcon } from "../../assets/icon/arrow-left-icon";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { validationProfile } from "../../lib/validationProfile";
import { useSelector } from "react-redux";
import { usePutProfile } from "./service/mutation/usePutProfile";
import { client } from "../../config/query-client";
import { useDispatch } from "react-redux";
import { add } from "../../redux/reducer/user-reducer";
import { useNavigate } from "react-router-dom";
export const EditUserProfile = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationProfile),
  });
  const navigate = useNavigate();
  let user = useSelector((state) => state?.user?.user);
  const { mutate } = usePutProfile(user[0].id);
  const submit = (data) => {
    const newData = {
      id: user[0]?.id,
      lastName: user[0]?.lastName,
      password: user[0]?.confirmPassword,
      confirmPassword: user[0]?.confirmPassword,
      ticketLink: data?.ticketLink,
      firstName: data?.firstName,
      location: data?.location,
      email: data?.email,
    };
    mutate(newData, {
      onSuccess: (res) => {
        console.log(res?.user);
        client.invalidateQueries(["user"]);
        dispatch(add({ ...res.user }));
        reset();
        navigate("user/:name");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  return (
    <section className="bg-cascading-white py-10">
      <div className="container mx-auto max-w-[750px]">
        <Link to={"/user"}>
          <div className="mb-[32px] flex items-center gap-8">
            <ArrowLeftIcon />
            <h2 className="text-lg font-medium text-primary">
              Profilni tahrirlash
            </h2>
          </div>
        </Link>
        <div className="w-full rounded bg-white px-10 py-8">
          <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6">
            <Input
              {...register("ticketLink")}
              label={"Surat yuklash"}
              type="text"
              error={errors.ticketLink}
            />
            <Input
              defaultValue={user[0]?.firstName}
              {...register("firstName")}
              label={"Ismingiz"}
              type="text"
              error={errors.firstName}
            />
            <Input
              error={errors.location}
              type="text"
              label="Joylashuv"
              {...register("location")}
            />
            <Input
              defaultValue={user[0]?.email}
              type="text"
              label="Email"
              {...register("email")}
              error={errors.email}
            />
            <div className="flex w-full  justify-end">
              <Button
                className={"w-[250px] py-[19px]"}
                variant={"primary"}
                type={"submit"}
              >
                Saqlash
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
