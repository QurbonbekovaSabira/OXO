import React from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useGetBrand } from "../../redux/service/useGetBrand";
import { useGetCategory } from "../../redux/service/useGetCategory";
import { ArrowBottom } from "../../assets/img/arrow-bottom";
import { useGetFilterBrand } from "./redux/query/useGetFilterBrand";
import notFound from "../../assets/img/not-found.jpg";
import { ProductCard } from "../../components/product-card";
export const Filter = () => {
  const { name } = useParams();
  const { data } = useGetCategory(name);
  const { data: brandData } = useGetBrand(name);
  const [selected, setSelected] = React.useState();
  const [selectStatus, setSelectStatus] = React.useState();
  const { data: filterData } = useGetFilterBrand(
    brandData?.data[0]?.dataKey,
    selected,
    selectStatus,
  );
  return (
    <>
      <section className="bg-cascading-white pt-12">
        <div className="container">
          <h2 className="mb-4 text-2xl font-semibold">Filtrlar</h2>
          <div className="flex items-center gap-4">
            <div>
              <p className="font-sm mb-2 font-normal">Turi</p>
              <div>
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative  cursor-default rounded-lg border border-placebo bg-white px-4 py-3  text-left  sm:text-sm">
                      <div className="flex w-full items-center gap-[72px]">
                        <span className="block truncate">
                          {selected === undefined ? "Hammasi" : selected}
                        </span>
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
                          {brandData?.data[0]?.brands?.map(
                            (person, personIdx) => (
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
                            ),
                          )}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </div>
                </Listbox>
              </div>
            </div>
            <div>
              <p className="font-sm mb-2 font-normal">Turi</p>
              <div>
                <Listbox value={selectStatus} onChange={setSelectStatus}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative  cursor-default rounded-lg border border-placebo bg-white px-4 py-3  text-left  sm:text-sm">
                      <div className="flex w-full items-center gap-[72px]">
                        <span className="block truncate">
                          {selectStatus === undefined
                            ? "Hammasi"
                            : selectStatus}
                        </span>
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
                          {brandData?.data[0]?.attribut[0]?.values?.map(
                            (person, personIdx) => (
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
                                {({ selectStatus }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selectStatus
                                          ? "font-medium"
                                          : "font-normal"
                                      }`}
                                    >
                                      {person}
                                    </span>
                                    {selectStatus ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ),
                          )}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pb-8 pt-6">
        <div className="container">
          <div className="mb-10 flex">
            <p className="w-full max-w-[20%] border-b-[2px] border-red pb-4 text-center text-sm font-medium">
              Hammasi
            </p>
            <p className="w-full max-w-[20%] border-b-[2px] border-placebo pb-4 text-center text-sm font-medium text-harrison-grey">
              Jismoniy shaxs
            </p>
            <p className="w-full border-b-[2px] border-placebo pb-4 text-left text-sm font-medium text-harrison-grey">
              Biznes
            </p>
          </div>
          <p className="mb-12 flex items-center gap-2 text-sm font-normal text-harrison-grey">
            Barcha e’lonlar
            <span className="block h-[3px] w-[3px] rounded-full bg-harrison-grey"></span>
          </p>
          <div className="flex items-center gap-12">
            {brandData?.data[0]?.brands?.map((item, i) => (
              <p className="text-sm font-normal" key={i}>
                {item?.brand}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cascading-white pb-16 pt-8">
        <div className="container">
          <h2 className="mb-6 text-2xl font-bold text-black-out">
            Top e’lonlar
          </h2>

          {filterData?.data && (
            <div className="flex flex-wrap items-center gap-5">
              {filterData?.data?.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          )}
          {filterData?.data.length < 1 && (
            <div className="mx-auto max-w-[450px]">
              <img src={notFound} alt="" />
            </div>
          )}
        </div>
      </section>
    </>
  );
};
