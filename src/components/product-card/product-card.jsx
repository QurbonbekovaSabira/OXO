import React from "react";
import { LikeIcon } from "../../assets/icon/like-icon";
import { useDispatch } from "react-redux";
import { add, deleteData } from "../../redux/reducer/like-reducer";
import { useSelector } from "react-redux";
import { LikeRedIcon } from "../../assets/icon/like-red-icon";
export const ProductCard = (product) => {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.like);
  const [likeData, setLikeData] = React.useState(false);
  React.useEffect(() => {
    setLikeData(likes.some((item) => item.id === product.id));
  }, [likes]);
  const submit = () => {
    dispatch(add(product));
    setLikeData(true);
  };
  const removeLike = () => {
    dispatch(deleteData(product));
    setLikeData(false);
  };
  return (
    <div className="border-placebo w-full max-w-[168px] rounded border px-1 py-[2px]">
      <div className="mb-4">
        <img src={product?.img} alt={product.title} />
      </div>
      <div>
        <p className="mb-3 text-sm font-normal text-dark-void">
          {product.title}
        </p>
        <p className="mb-2 text-xl font-semibold text-red">
          {product?.price} UYE
        </p>
        <p className="text-sm font-normal text-gray">{product?.location}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm font-normal text-gray">Bugun 12:27</p>
          {!likeData ? (
            <button className="text-gray" onClick={submit}>
              <LikeIcon />
            </button>
          ) : (
            <button onClick={removeLike}>
              <LikeRedIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
