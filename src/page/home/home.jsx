import React from "react";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "../../lib/validationSchema";
export const Home = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div className="container mb-3">
      <form onSubmit={handleSubmit(submit)}>
        <Input
          error={errors.firstName}
          placeholder={"user name"}
          label={"user"}
          id="3"
          type={"text"}
          {...register("firstName")}
        />
        <Input
          error={errors.lastName}
          placeholder={"last name"}
          label={"last name"}
          id="5"
          type={"text"}
          {...register("lastName")}
        />
        <Input
          error={errors.email}
          placeholder={"email"}
          label={"email"}
          id="8"
          type={"text"}
          {...register("email")}
        />
        <Input
          error={errors.ticketLink}
          placeholder={"img link"}
          label={"img link"}
          id="10"
          type={"text"}
          {...register("ticketLink")}
        />
        <Input
          error={errors.password}
          label={"password"}
          id="33"
          type={"password"}
          {...register("password")}
        />
        <Input
          error={errors.confirmPassword}
          label={"confirmPassword"}
          id="35"
          type={"password"}
          {...register("confirmPassword")}
        />
        <div>
          <button
            type="submit"
            className="mt-4 border border-l-pink-500 p-2 text-base"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};
