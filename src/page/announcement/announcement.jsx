import React from "react";
import { useParams } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { useSelector } from "react-redux";
import { ActiveCard } from "./components/active-card/active-card";
import { useGetUserCategoryData } from "./service/query/useGetUserCategoryData";
import { Button } from "../../components/button";
import { InfoIcon } from "../../assets/icon/info-icon";
import { VerifiedIcon } from "../../assets/icon/verified-icon";
import { FacebookIcon } from "../../assets/icon/facebook-icon";
import { YouTubeIcon } from "../../assets/icon/you-tube-icon";
import { TikTokIcon } from "../../assets/icon/tik-tok-icon";
import { TelegramIcon } from "../../assets/icon/telegram-icon";
import { Instagram } from "../../assets/icon/instagram";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ArrowBottom } from "../../assets/img/arrow-bottom";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationPassword } from "../../lib/validationPassword";
import { Input } from "../../components/input";
import { EyesFullIcon } from "../../assets/icon/eyes-full-icon";
import { EyesIcon } from "../../assets/icon/eyes-icon";
import { usePutProfile } from "../edit-user-profile/service/mutation/usePutProfile";
import { useDispatch } from "react-redux";
import { add } from "../../redux/reducer/user-reducer";
import { client } from "../../config/query-client";
import { ToastContainer, toast } from "react-toastify";
const people = [
  { id: 1, name: "Aktiv suhbatlar", unavailable: false },
  { id: 2, name: "Yuborilgan", unavailable: false },
  { id: 3, name: "Arxivlangan", unavailable: false },
];

export const Announcement = () => {
  const { name } = useParams();
  const data = useSelector((state) => state.user.user[0]);
  const { data: userData } = useGetUserCategoryData(name, data.id);
  const [enabled, setEnabled] = React.useState(false);
  const [selectedPerson, setSelectedPerson] = React.useState(people[0]);
  const [open, setOpen] = React.useState(false);
  const { mutate } = usePutProfile(data?.id);
  const notify = () => toast("Parol muvaffaqiyatli o'zgardi!");
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationPassword),
  });
  const dispatch = useDispatch();
  const submit = (newPassword) => {
    const newData = {
      id: data?.id,
      email: data?.email,
      firstName: data?.firstName,
      lastName: data?.lastName,
      ticketLink: data?.ticketLink,
      password: newPassword?.password,
      confirmPassword: newPassword?.confirmPassword,
    };
    mutate(newData, {
      onSuccess: (res) => {
        console.log(res);
        notify();
        client.invalidateQueries(["user"]);
        dispatch(add({ ...res }));
        reset();

        setOpen(false);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  return (
    <div className="">
      <Tab.Group>
        <Tab.List>
          <div className="container flex items-center gap-[184px] bg-white py-8">
            <Tab>
              <p>E’lonlar</p>
            </Tab>
            <Tab>
              <p>Xabarlar</p>
            </Tab>
            <Tab>
              <p>Sozlanmalar</p>
            </Tab>
          </div>
        </Tab.List>
        <div className="bg-cascading-white">
          <div className="w-ful mx-auto max-w-[65%]">
            <Tab.Panels>
              <Tab.Panel>
                <div className="bg-white pb-8">
                  <div className="container pt-12">
                    <div className="mb-6 flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-black-out">
                        Sizning e’lonlaringiz
                      </h2>
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col gap-2">
                          <p className="text-sm font-normal text-coarse-wool">
                            Sizning hisobingiz: 0 so’m
                          </p>
                          <p className="text-right text-sm font-normal text-coarse-wool">
                            Mavjud bonuslar: 0 so’m
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div>
                            <InfoIcon />
                          </div>
                          <Button
                            className={"px-6 py-[14px] "}
                            variant={"secondary"}
                          >
                            Hamyonni to’ldirish
                          </Button>
                          <Button
                            className={"px-6 py-[14px] text-base font-normal"}
                            variant={"primary"}
                          >
                            Paket sotib olish
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-cascading-white p-4">
                      <p className="text-sm font-normal text-gray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Feugiat proin amet at congue.t amet, consectetur
                        adipiscing elit. Feugiat proin amet at congue. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Feugiat proin amet at congue.t amet, consectetur
                        adipiscing elit. Feugiat proin amet at congue.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container py-8">
                  <div className="mb-7  grid w-full max-w-[70%] grid-cols-5">
                    <p className="border-b-[2px]  border-red pb-2 text-center text-sm font-normal text-coarse-wool">
                      Faol
                    </p>
                    <p className="border-b-[2px] border-placebo pb-2 text-center text-sm font-normal text-harrison-grey">
                      Kutayotgan
                    </p>
                    <p className="border-b-[2px] border-placebo pb-2 text-center text-sm font-normal text-harrison-grey">
                      To’lanmagan
                    </p>
                    <p className="border-b-[2px] border-placebo pb-2 text-center text-sm font-normal text-harrison-grey">
                      Nofaol
                    </p>
                    <p className="border-b-[2px] border-placebo pb-2 text-sm font-normal text-harrison-grey">
                      Rad etilgan
                    </p>
                  </div>

                  <p className="mb-10 text-sm font-normal text-primary">
                    Jami e’lonlar : {userData?.data?.length}
                  </p>
                  <div className="flex flex-col gap-5 ">
                    {userData?.map((item) => (
                      <ActiveCard key={item.id} {...item} />
                    ))}
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <section>
                  <div className=" bg-[url('./assets/img/userBg.png')] bg-cover bg-no-repeat py-[110px]"></div>
                  <div className="container relative bg-white pb-[0px]">
                    <div className=" absolute top-[-50%] translate-y-[-50%]">
                      <div className=" flex grow translate-y-[-50]  items-center gap-8">
                        <div className="w-[170px]  rounded-full border-[8px] border-white">
                          <img
                            className="h-[160px] w-full max-w-[160px] rounded-full object-cover"
                            src={data?.ticketLink}
                            alt=""
                          />
                        </div>
                        <div>
                          <div className="mb-8 flex items-center gap-2">
                            <h2 className="text-2xl font-bold text-white">
                              {data?.firstName}
                            </h2>
                            <VerifiedIcon />
                          </div>
                          <div className="flex items-center gap-6">
                            <a href="#">
                              <FacebookIcon />
                            </a>
                            <a href="#">
                              <YouTubeIcon />
                            </a>
                            <a href="#">
                              <TikTokIcon />
                            </a>
                            <a href="#">
                              <TelegramIcon />
                            </a>
                            <a href="#">
                              <Instagram />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white pt-32">
                    <div className="container">
                      <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-black-out">
                          Sizning e’lonlaringiz
                        </h2>
                        <div className="flex items-center gap-4">
                          <div className="flex flex-col gap-2">
                            <p className="text-sm font-normal text-coarse-wool">
                              Sizning hisobingiz: 0 so’m
                            </p>
                            <p className="text-right text-sm font-normal text-coarse-wool">
                              Mavjud bonuslar: 0 so’m
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div>
                              <InfoIcon />
                            </div>
                            <Button
                              className={"px-6 py-[14px] "}
                              variant={"secondary"}
                            >
                              Hamyonni to’ldirish
                            </Button>
                            <Button
                              className={"px-6 py-[14px] text-base font-normal"}
                              variant={"primary"}
                            >
                              Paket sotib olish
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-cascading-white">
                      <div className="container py-8">
                        <div className="mb-7  grid w-full max-w-[70%] grid-cols-5">
                          <p className="border-b-[2px]  border-red pb-2 text-center text-sm font-normal text-coarse-wool">
                            Aktiv suhbatlar
                          </p>
                          <p className="border-b-[2px] border-placebo pb-2 text-center text-sm font-normal text-harrison-grey">
                            Yuborilgan
                          </p>
                          <p className="border-b-[2px] border-placebo pb-2 text-center text-sm font-normal text-harrison-grey">
                            Arxivlangan
                          </p>
                        </div>
                        <div className="bg-[url(./assets/img/not-sms.svg)] bg-center bg-no-repeat">
                          <p className="mb-4 text-xs font-normal text-gray">
                            Suhbatlarni filtrlash
                          </p>
                          <Listbox
                            value={selectedPerson}
                            onChange={setSelectedPerson}
                          >
                            <div className="">
                              <Listbox.Button className="relative cursor-default rounded-lg border border-gray bg-white py-4 pl-4 pr-10 text-left text-sm">
                                <span className="block truncate text-sm font-normal text-primary">
                                  {selectedPerson?.name}
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                  <ArrowBottom />
                                </span>
                              </Listbox.Button>
                              <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                  {people.map((person, personIdx) => (
                                    <Listbox.Option
                                      key={personIdx}
                                      className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                          active
                                            ? "bg-amber-100 text-amber-900"
                                            : "text-gray-900"
                                        }`
                                      }
                                      value={person}
                                    >
                                      {({ selected }) => (
                                        <>
                                          <span
                                            className={`block truncate ${
                                              selected
                                                ? "font-medium"
                                                : "font-normal"
                                            }`}
                                          >
                                            {person.name}
                                          </span>
                                          {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </Listbox>
                          <div className="pt-[180px] text-center">
                            <p className="pt-3 text-base font-bold">
                              Hali hech qanday xabar yo'q
                            </p>
                            <p className="text-sm font-normal">
                              Barcha yuborilgan va qabul qilingan xabarlar shu
                              yerda saqlanadi.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </Tab.Panel>
              <Tab.Panel>
                <div className="bg-cascading-white pb-16 pt-8">
                  <div className="container">
                    <div className="mb-4 flex items-center justify-between rounded bg-white px-6 py-[18px]">
                      <p className="text-base font-normal text-primary">
                        Tungi rejim
                      </p>
                      <div className="">
                        <Switch
                          checked={enabled}
                          onChange={setEnabled}
                          className={`${enabled ? "bg-placebo" : "bg-white-edgar"}
          relative inline-flex h-[20px] w-[45px] shrink-0 cursor-pointer items-center   rounded-full  border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                        >
                          <span
                            aria-hidden="true"
                            className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg shadow-[#0000007f] ring-0 transition duration-200 ease-in-out`}
                          />
                        </Switch>
                      </div>
                    </div>
                    <Link to={"/user/profile/edit"}>
                      <>
                        <div className="mb-4 flex items-center justify-between rounded bg-white px-6 py-[18px]">
                          <p className="text-base font-normal text-primary">
                            Profilni tahrirlash
                          </p>
                          <div>
                            <ArrowBottom />
                          </div>
                        </div>
                      </>
                    </Link>

                    <div className="mb-4 rounded bg-white px-6 py-[18px]">
                      <div
                        onClick={() => setOpen(true)}
                        className=" flex items-center justify-between"
                      >
                        <p className="text-base font-normal text-primary">
                          Parolni o’zgartirish
                        </p>
                        <div>
                          <ArrowBottom />
                        </div>
                      </div>
                      {open && (
                        <div className="mt-4 border-t border-gray">
                          <form
                            onSubmit={handleSubmit(submit)}
                            className="flex flex-col gap-6 pt-5"
                          >
                            <div className="relative">
                              <Input
                                label="Amaldagi parolingiz"
                                type="password"
                                {...register("oldPassword")}
                                error={errors.oldPassword}
                              />
                              <div className="absolute right-[20px] top-[45%] translate-y-[50%]">
                                <EyesIcon />
                              </div>
                            </div>
                            <div className="relative">
                              <Input
                                label="Yangi parol"
                                type="password"
                                {...register("password")}
                                error={errors.password}
                              />
                              <div className="absolute right-[20px] top-[45%] translate-y-[50%]">
                                <EyesIcon />
                              </div>
                            </div>
                            <div className="relative">
                              <Input
                                label="Yangi parolni takrorlash"
                                type="password"
                                {...register("confirmPassword")}
                                error={errors.confirmPassword}
                              />
                              <div className="absolute right-[20px] top-[45%] translate-y-[50%]">
                                <EyesIcon />
                              </div>
                            </div>
                            <div className="mb-10 mt-6 w-full max-w-[80%]">
                              <p className="text-sm font-normal text-gray">
                                Parol minimum 6 belgidan tashkil topishi kerak.
                                Parol ishonchli bo’lishi uchun katta, kichik
                                harflar, raqamlar va maxsus belgilardan iborat
                                bo’lishi kerak
                              </p>
                            </div>
                            <div className="flex justify-end">
                              <Button
                                type={"submit"}
                                variant={"primary"}
                                className={"w-full max-w-[250px]"}
                              >
                                Saqlash
                              </Button>
                              <ToastContainer />
                            </div>
                          </form>
                        </div>
                      )}
                    </div>
                    <div className="mb-4 flex items-center justify-between rounded bg-white px-6 py-[18px]">
                      <p className="text-base font-normal text-primary">
                        Interfeys ranglarini o’zgartirish
                      </p>
                      <div>
                        <ArrowBottom />
                      </div>
                    </div>
                    <div className="mb-4 flex items-center justify-between rounded bg-white px-6 py-[18px]">
                      <p className="text-base font-normal text-primary">
                        Profilni tasdiqlash
                      </p>
                      <div>
                        <ArrowBottom />
                      </div>
                    </div>
                    <div className="mb-4 flex items-center justify-between rounded bg-white px-6 py-[18px]">
                      <p className="text-base font-normal text-primary">
                        Ijtimoiy tarmoqlar
                      </p>
                      <div>
                        <ArrowBottom />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
};
