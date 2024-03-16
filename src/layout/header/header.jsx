import logo from "../../assets/img/logo.svg";
import { MessageIcon } from "../../assets/icon/message-icon";
import { LikeIcon } from "../../assets/icon/like-icon";
import { ProfileIcon } from "../../assets/icon/profile-icon";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const { user } = useSelector((state) => state);
  console.log(user);
  return (
    <div className="fixed left-0 right-0 top-0 bg-white  shadow-sm shadow-black">
      <div className="container  flex items-center justify-between  py-[26px] ">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MessageIcon />
            <p>Xabarlar</p>
          </div>
          <div className="flex items-center gap-2">
            <LikeIcon />
            <p>Yoqtirganlar</p>
          </div>

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
          <a
            href="#"
            className="rounded-lg bg-primary px-4 py-2 text-base font-medium text-white"
          >
            E'lonlarni joylashtirish
          </a>
        </div>
      </div>
    </div>
  );
};
