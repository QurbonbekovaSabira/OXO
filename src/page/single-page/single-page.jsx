import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllOnly } from "./service/query/useGetAllOnly";
import { ArrowLeftIcon } from "../../assets/icon/arrow-left-icon";
import { Link } from "react-router-dom";
import { GeoIcon } from "../../assets/icon/geo-icon";
import { UserLocationIcon } from "../../assets/icon/user-location-icon";
import { useGetUser } from "./service/query/useGetUser";
import { LikeIcon } from "../../assets/icon/like-icon";
import { LikeRedIcon } from "../../assets/icon/like-red-icon";
import { useDispatch } from "react-redux";
import { add, deleteData } from "../../redux/reducer/like-reducer";
import { useSelector } from "react-redux";
import { EyesFullIcon } from "../../assets/icon/eyes-full-icon";
import { FlagIcon } from "../../assets/icon/flag-icon";
import { MessageIcon } from "../../assets/icon/message-icon";
import { Button } from "../../components/button/button";
import { ToastContainer, toast } from "react-toastify";
import addImg from "../../assets/img/add-img.png";
import { ProductCard } from "../../components/product-card";
import { useGetUserProduct } from "./service/query/useGetUserProduct";
export const SinglePage = () => {
  const { id } = useParams();
  const { data } = useGetAllOnly(id);
  const { data: userData } = useGetUser(data?.userId);
  const dispatch = useDispatch();
  const [like, setLike] = React.useState(false);
  const { data: userProduct } = useGetUserProduct(data?.userId);
  const likeData = useSelector((state) => state.like);
  React.useEffect(() => {
    setLike(likeData?.some((item) => item.id === id));
  }, [id]);
  const notify = () => toast("Xabar muvaffaqiyatli jo'natildi!");
  console.log(userProduct.data);
  const deleteLike = () => {
    dispatch(deleteData(data));
    setLike(false);
  };
  const addLike = () => {
    dispatch(add(data));
    setLike(true);
  };
  const [input, setInput] = React.useState("");
  return (
    <section className="bg-cascading-white pb-16">
      <div className="container">
        <div className="mb-8 flex items-center gap-5">
          <Link to={"/"}>
            <div className=" flex items-center gap-1">
              <ArrowLeftIcon />
              <h2 className="text-xl font-medium"> Orqaga</h2>
            </div>
          </Link>
          <p className=" flex items-center gap-2 text-base font-normal text-harrison-grey">
            Barcha e’lonlar
            <span className="block h-[3px] w-[3px] rounded-full bg-harrison-grey"></span>
          </p>
        </div>
        <div className="mb-10 flex gap-6">
          <div className="w-full max-w-[70%]">
            <div className="mb-6 w-full">
              <img className="w-full object-cover" src={data?.img} alt="" />
            </div>
            <div className="mb-[26px] rounded-lg bg-white px-8 py-6">
              <div className="mb-4 text-right">
                {like ? (
                  <button onClick={deleteLike}>
                    <LikeRedIcon />
                  </button>
                ) : (
                  <button onClick={addLike}>
                    <LikeIcon />
                  </button>
                )}
              </div>
              <p className="mb-4 text-2xl font-normal">{data?.title}</p>
              <p className="mb-4 text-2xl font-bold text-red">
                {data?.price} UYE
              </p>
              <p className="border-light-pensive mb-4 inline-block rounded border px-3 py-1 text-base font-normal">
                Holati: {data?.status}
              </p>
              <h3 className="mb-4 text-2xl font-medium">Tavsifi</h3>
              <p className="mb-[50px] px-1 text-sm font-normal text-dark-void">
                {data?.desc}
              </p>
              <span className="bg-wood-charcoal mb-5 block h-[1px]"></span>
              <div className="flex items-center justify-between">
                <p className="text-sm font-normal">ID: 41240834</p>
                <div className="flex items-center gap-2">
                  <EyesFullIcon />
                  <p className="text-sm font-normal">Ko‘rishlar: 137</p>
                </div>
                <div className="flex items-center gap-2">
                  <FlagIcon />
                  <p className="text-sm font-normal text-red">
                    Shikoyat qilish
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-[26px] rounded-lg bg-white px-8 py-6">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="h-[60px] w-[60px]">
                    <img
                      className="h-[100%] w-full rounded-full object-cover"
                      src={userData?.ticketLink}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="mb-[6px] text-base font-semibold">
                      {userData?.firstName} {userData?.lastName}
                    </p>
                    <p className="text-sm font-normal text-gray">Online</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-5">
                    <a
                      href={`mailto:${userData?.email}`}
                      className="flex items-center gap-2"
                    >
                      <div className="bg-ice flex items-center justify-center rounded-full p-1">
                        <MessageIcon />
                      </div>
                      <p>{userData?.email}</p>
                    </a>
                    <Link to={"/profile"}>
                      <Button variant="secondary">Ko'rsatish</Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="comment">
                  <textarea
                    onChange={(e) => setInput(e.target.value)}
                    className="bg-chefs-hat text-wood-charcoal h-[200px] w-full resize-none rounded-lg p-6 text-sm font-normal outline-none"
                    name="comment"
                    id="comment"
                    value={input}
                    placeholder={"Xabaringgizni yozing..."}
                    aria-label="Xabaringgizni yozing..."
                  ></textarea>
                </label>
                <div className="flex justify-end">
                  <Button
                    onClick={() => {
                      setInput(""), notify();
                    }}
                    variant="primary"
                    className="rounded px-7 py-1 text-sm font-normal"
                  >
                    Yuborish
                  </Button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[29%]">
            <div className="mb-4 w-full rounded-lg bg-white px-4 py-6">
              <h3 className="mb-7 text-xl font-medium">Foydalanuvchi</h3>
              <div className="flex gap-6">
                <div className="h-[60px] w-[60px]">
                  <img
                    className="h-[100%] w-full rounded-full object-cover"
                    src={userData?.ticketLink}
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="mb-[6px] text-base font-semibold">
                    {userData?.firstName} {userData?.lastName}
                  </p>
                  <p className="text-sm font-normal text-gray">Online</p>
                  <Link to={`/account/${userData?.id}`}>
                    <div className="flex items-center gap-[10px]">
                      <p>Barcha e’lonlar</p>
                      <div className="rotate-180">
                        <ArrowLeftIcon />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {userData?.location && (
              <>
                <div className="mb-4 w-full rounded-lg bg-white px-4 py-6">
                  <div className="mb-4 flex items-center gap-6">
                    <GeoIcon />
                    <p>{userData?.location}</p>
                  </div>
                  <div className="w-full max-w-[80%]">
                    <UserLocationIcon />
                  </div>
                </div>
              </>
            )}
            <img src={addImg} alt="" />
          </div>
        </div>
        <div className="">
          <div className="mb-6 flex items-center gap-8">
            <h2 className="text-2xl font-bold text-black-out">
              Muallifning boshqa e’lonlari
            </h2>
            <Link to={`/account/${userData?.id}`}>
              <p className="text-base font-normal	 text-black underline decoration-black decoration-solid">
                Hammasi
              </p>
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            {userProduct?.data?.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
