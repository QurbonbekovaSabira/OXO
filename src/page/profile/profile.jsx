import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { validationSchema } from "../../lib/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { EyesFullIcon } from "../../assets/icon/eyes-full-icon";
import { EyesIcon } from "../../assets/icon/eyes-icon";
import { useEditUser } from "./redux/mutation/useEditUser";
import { client } from "../../config/query-client";
import { useDispatch } from "react-redux";
import { add } from "../../redux/reducer/user-reducer";
import { WelcomeIcon } from "../../assets/icon/welcome-icon";
import { ArrowLeftIcon } from "../../assets/icon/arrow-left-icon";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Profile = () => {
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const [confirmP, setConfirmP] = React.useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validationSchema) });
  const { user } = useSelector((state) => state);
  const { mutate } = useEditUser(user.user[0].id);
  const [edit, setEdit] = React.useState(false);
  const [state, setState] = React.useState();
  const submit = (editData) => {
    const data = {
      id: user.user[0].id,
      email: user.user[0].email,
      ...editData,
    };
    mutate(data, {
      onSuccess: (res) => {
        client.invalidateQueries(["users"]);
        dispatch(add({ ...res }));
        reset();
        setEdit(true);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  const newPage = () => {
    navigete("/");
  };
  return (
    <section className="bg-cascading-white py-[25px]">
      <div className="container">
        {!edit && (
          <div className="mx-auto w-full max-w-[80%] bg-white p-8">
            <h2 className="mb-6 text-xl font-medium text-dark-void">
              Profil ma‘lumotlari
            </h2>
            <div>
              <form
                onSubmit={handleSubmit(submit)}
                className="flex flex-col gap-[16px]"
              >
                <Input
                  className="w-full"
                  error={errors.ticketLink}
                  id={"0"}
                  type={"text"}
                  label={"Surat yuklash"}
                  {...register("ticketLink")}
                />
                <Input
                  defaultValue={user.user[0]?.firstName}
                  className="w-full"
                  error={errors.firstName}
                  id={"0"}
                  type={"text"}
                  label={"Ismingiz"}
                  {...register("firstName")}
                />
                <Input
                  className="w-full"
                  error={errors.lastName}
                  id={"0"}
                  type={"text"}
                  defaultValue={user.user[0].lastName && user.user[0].lastName}
                  label={"Familyangiz"}
                  {...register("lastName")}
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
                <div className="flex justify-end">
                  <Button variant={"primary"} type="submit" className="w-[25%]">
                    Kirish
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
        {edit && (
          <div
            onClick={() => setEdit(false)}
            className="mx-auto w-full max-w-[407px] rounded-lg bg-white p-8 shadow-sm shadow-[#00000079]"
          >
            <button>
              <ArrowLeftIcon />
            </button>
            <div className="mb-12 flex items-center justify-center">
              <WelcomeIcon />
            </div>
            <p className="mb-[56px] text-center text-sm font-normal">
              Ma’lumotlaringiz muvaffaqiyatli qabul qilindi. Davom etish
              tugmasini bosing
            </p>
            <Button onClick={newPage} className={"w-full"} variant={"primary"}>
              Davom etish
            </Button>
          </div>
        )}

        {/* {edit && (
          <div className="mx-auto w-full max-w-[80%] rounded-lg bg-white p-8 shadow-sm shadow-[#00000079]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-dark-void  text-xl font-medium">
                Profil ma‘lumotlari
              </h2>
              <Button
                onClick={() => {
                  setEdit(false);
                }}
                className={"px-4 py-1 text-base font-normal"}
                variant="primary"
              >
                Edit
              </Button>
            </div>
            <div>
              <div className="h-[150px] w-full max-w-[150px] overflow-hidden rounded-full object-cover ">
                <img
                  className="h-[100%] w-full rounded-full object-cover"
                  src={user.user[0].ticketLink}
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">
                  {user.user[0].firstName}
                </h3>
                <p className="text-lg font-medium">{user.user[0].lastName}</p>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};
