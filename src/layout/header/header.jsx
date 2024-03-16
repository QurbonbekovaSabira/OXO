import logo from "../../assets/img/logo.svg";
import { MessageIcon } from "../../assets/icon/message-icon";
import { LikeIcon } from "../../assets/icon/like-icon";
import { ProfileIcon } from "../../assets/icon/profile-icon";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchInput } from "./components/search-input/search-input";
import { useLocation } from "react-router-dom";
export const Header = () => {
  const { user } = useSelector((state) => state);
  const like = useSelector((state) => state.like);
  const location = useLocation();
  console.log(location.pathname);
  //
  return (
    <>
      <div className=" mb-[90px] ">
        <div className="fixed left-0 right-0 top-0 z-50 bg-white  shadow-sm shadow-[#00000073]">
          <div className="container  flex items-center justify-between  py-[26px] ">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MessageIcon />
                <p>Xabarlar</p>
              </div>

              {like.length > 0 ? (
                <Link to={"/likes"}>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <LikeIcon />
                      <span className="absolute right-[-5px] top-[-5px] rounded-full bg-red px-[4px] text-xs font-medium text-white">
                        {like.length}
                      </span>
                    </div>
                    <p>Yoqtirganlar</p>
                  </div>
                </Link>
              ) : (
                <Link to={"/likes"}>
                  <div className="flex cursor-pointer items-center gap-2">
                    <div className="relative">
                      <LikeIcon />
                    </div>
                    <p>Yoqtirganlar</p>
                  </div>
                </Link>
              )}

              {!user.user.length > 0 ? (
                <Link to={"/login"}>
                  <div className="flex items-center gap-2">
                    <ProfileIcon />
                    <p>Akkaunt</p>
                  </div>
                </Link>
              ) : (
                <Link to={"/user"}>
                  <div className="flex items-center gap-2">
                    <ProfileIcon />
                    <p>Profile</p>
                  </div>
                </Link>
              )}

              <select className="text-base font-semibold" name="lang" id="lang">
                <option value="uz">Uz</option>
                <option value="eng">Eng</option>
              </select>
              <Link
                to={"/user/create"}
                className={`rounded-lg  px-4 py-2 text-base font-medium text-white ${user.user[0] ? "bg-primary" : "disabled:bg-[#0000009b]"}`}
              >
                E'lonlarni joylashtirish
              </Link>
            </div>
          </div>
        </div>
      </div>
      {location.pathname !== "/user/create" ||
        (location.pathname !== "/user/create" && (
          <div className="bg-cascading-white pb-10 pt-8">
            <div className="container">
              <SearchInput />
            </div>
          </div>
        ))}
    </>
  );
};
