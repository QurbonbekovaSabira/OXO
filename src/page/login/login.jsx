import React from "react";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationLogin } from "../../lib/validationLogin";
import Cookies from "js-cookie";
import { Button } from "../../components/button";
import { useDispatch } from "react-redux";
import { add } from "../../redux/reducer/user-reducer";
import { useCreateUser } from "./redux/mutation/useCreateUser";
import { client } from "../../config/query-client";
import { EyesIcon } from "../../assets/icon/eyes-icon";
import { EyesFullIcon } from "../../assets/icon/eyes-full-icon";
import { useNavigate } from "react-router-dom";
import { useGetUser } from "./redux/query/useGetUser";
export const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState(false);
  const [confirmP, setConfirmP] = React.useState(false);
  const dispatch = useDispatch();
  const { mutate } = useCreateUser();
  const { mutate: logMutate } = useGetUser();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationLogin),
  });
  const [login, setLogin] = React.useState(false);
  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        client.invalidateQueries(["user"]);
        Cookies.set("user", res.accessToken);
        dispatch(add({ ...res.user }));
        reset();
        navigate("/");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  const logInSubmit = (data) => {
    logMutate(data, {
      onSuccess: (res) => {
        client.invalidateQueries(["user"]);
        Cookies.set("user", res.accessToken);
        dispatch(add({ ...res.user }));
        reset();
        navigate("/");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  return (
    <div className="bg-[url(./assets/img/login-bg.png)] bg-left-bottom bg-no-repeat pb-[90px] pt-[64px]">
      <div className="container mx-auto  w-full max-w-[410px] rounded-[4px] p-[32px] shadow-sm shadow-[#000000a1]">
        <div className="mb-[36px] grid grid-cols-2 ">
          <button
            onClick={() => setLogin(false)}
            className={`text-dark-void rounded border-b-[4px] pb-2 text-base font-semibold ${!login ? "border-primary" : "border-jupiter"}`}
          >
            Kirish
          </button>
          <button
            onClick={() => setLogin(true)}
            className={`text-dark-void flex flex-col gap-2 rounded border-b-[4px] text-base font-semibold ${login ? "border-primary" : "border-jupiter"}`}
          >
            Ro’yxatdan o’tish
          </button>
        </div>
        {!login && (
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col gap-[16px]"
          >
            <Input
              className="mb-4 w-full"
              error={errors.email}
              label={"email"}
              id={"78"}
              type="text"
              {...register("email")}
            />
            <Input
              className="w-full"
              error={errors.password}
              label={"password"}
              id={"30"}
              type={!state ? "Password" : "text"}
              {...register("password")}
              icon={EyesIcon}
              icon2={EyesFullIcon}
              setState={setState}
              state={state}
            />
            <Input
              className="w-full"
              error={errors.confirmPassword}
              label={"Confirm password"}
              id={"34"}
              type={!confirmP ? "password" : "text"}
              {...register("confirmPassword")}
              icon={EyesIcon}
              icon2={EyesFullIcon}
              setState={setConfirmP}
              state={confirmP}
            />
            <div>
              <Button variant={"primary"} type="submit" className="w-full">
                Kirish
              </Button>
            </div>
          </form>
        )}
        {login && (
          <form
            onSubmit={handleSubmit(logInSubmit)}
            className="flex flex-col gap-[16px]"
          >
            <Input
              className="mb-4 w-full"
              error={errors.email}
              label={"email"}
              id={"78"}
              type="text"
              {...register("email")}
            />
            <Input
              className="w-full"
              error={errors.password}
              label={"password"}
              id={"30"}
              type={!state ? "Password" : "text"}
              {...register("password")}
              icon={EyesIcon}
              icon2={EyesFullIcon}
              setState={setState}
              state={state}
            />
            <Input
              className="w-full"
              error={errors.confirmPassword}
              label={"Confirm password"}
              id={"34"}
              type={!confirmP ? "password" : "text"}
              {...register("confirmPassword")}
              icon={EyesIcon}
              icon2={EyesFullIcon}
              setState={setConfirmP}
              state={confirmP}
            />
            <div>
              <Button variant={"primary"} type="submit" className="w-full">
                Kirish
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
