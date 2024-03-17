import React from "react";
import { useGetCategory } from "../../redux/service/useGetCategory";
import { validationProductData } from "../../lib/validationProductData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { usePutProduct } from "./service/mutation/usePutProduct";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ArrowBottom } from "../../assets/img/arrow-bottom";
import { useGetBrand } from "../../redux/service/useGetBrand";
export const CreateProduct = () => {
  const [selected, setSelected] = React.useState("Bo’limni tanlang");
  const { mutate } = usePutProduct(selected);
  const { data } = useGetCategory();
  const [brandName, setBrandName] = React.useState("Brend nomi");
  const { data: brandData } = useGetBrand(selected);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationProductData),
  });
  const [text, setText] = React.useState(0);
  const submit = (data) => {
    console.log(data);
  };
  return (
    <section className="bg-cascading-white py-12">
      <div className="container">
        <h2 className="mb-6 text-2xl font-bold text-black-out">E’lon berish</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-6 rounded-lg bg-white p-8">
            <p className="mb-7 text-xl font-medium">
              Bizga e’loningiz haqida gapirib bering
            </p>
            <Input
              id="title"
              type="text"
              {...register("title")}
              error={errors.title}
              placeholder="Masalan iphone 13 Pro Max"
              label="Sarlavha kiriting"
              className="mb-6"
            />
            <div className=" mb-6">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full  cursor-default rounded-sm border border-placebo bg-cascading-white py-2 pl-3 pr-10 text-left  sm:text-sm">
                    <div className="flex w-full items-center justify-between">
                      <span className="block truncate">{selected}</span>
                      <ArrowBottom />
                    </div>
                  </Listbox.Button>
                  <div className="z-50">
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {data?.map((person, personIdx) => (
                          <Listbox.Option
                            key={personIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-amber-100 text-amber-900"
                                  : "text-gray-900"
                              }`
                            }
                            value={person.name}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
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
                </div>
              </Listbox>
            </div>
            <div className="mb-6">
              <Listbox value={selected} onChange={setBrandName}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full  cursor-default rounded-sm border border-placebo bg-cascading-white py-2 pl-3 pr-10 text-left  sm:text-sm">
                    <div className="flex w-full items-center justify-between">
                      <span className="block truncate">{brandName}</span>
                      <ArrowBottom />
                    </div>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {brandData?.data[0]?.brands?.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-amber-100 text-amber-900"
                                : "text-gray-900"
                            }`
                          }
                          value={person.brand}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person.brand}
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
            </div>
          </div>
          <div className="mb-6 rounded-lg bg-white p-8">
            <p className="mb-7 text-xl font-medium">
              Bizga e’loningiz haqida gapirib bering
            </p>
            <Input
              error={errors.img}
              type={"text"}
              id={"img"}
              label={
                "Birinchi surat e’loningiz asosiy rasmi bo’ladi. Suratlar tartibini ularning ustiga bosib va olib o’tish bilan o’zgartirishingiz mumkin."
              }
              {...register("img")}
            />
          </div>
          <div className="mb-6 rounded-lg bg-white p-8">
            <label>
              <p className="mb-2 text-sm font-normal">Tavsif</p>
              <textarea
                onChange={(e) => setText(e.target.value.length)}
                error={errors.desc}
                name="desc"
                className={`h-[253px] w-full resize-none rounded border border-placebo p-8 outline-none `}
                aria-label="E’lon haqida batafsil"
              />
            </label>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-base font-normal text-dugong">
                Yana kamida 80 ta belgi yozing
              </p>
              <p className="text-base font-normal text-dugong">{text}/9000</p>
            </div>
          </div>
          <div className="mb-6 rounded-lg bg-white p-8">
            <p className="mb-7 text-xl font-medium">
              Siz bilan bog’lanish uchun
            </p>
            <Input
              id="location"
              label={"Joylashuv"}
              error={errors.location}
              {...register("location")}
            />
            <Input
              id="clientName"
              label={"Ism"}
              error={errors.clientName}
              {...register("clientName")}
            />
            <Input
              id="email"
              label={"Email-manzil"}
              error={errors.email}
              {...register("email")}
            />
            <Input
              id="phoneNumber"
              label={"phone"}
              error={errors.phone}
              {...register("phone")}
            />
          </div>
          <div className="flex justify-end">
            <Button
              type={"submit"}
              variant="primary"
              className={"w-[20%] py-[19px]"}
            >
              E’lon joylash
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
