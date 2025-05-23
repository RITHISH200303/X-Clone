import React, { useState } from "react";
import {
  Home,
  Mail,
  Search,
  Bell,
  Bookmark,
  Briefcase,
  Users,
  CheckCircle2,
  Zap,
  User,
  CircleEllipsis
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import "../../public/navBar.css";
import NavLabel from "../components/labels/NavLabel";
import ProfileCont from "../components/simpleContainers/ProfileCont"
import Postbtn from "./buttons/Postbtn";
const logoData = [
  { label: "Home", icon: Home },
  { label: "Explore", icon: Search },
  { label: "Notification", icon: Bell },
  { label: "Messages", icon: Mail },
  { label: "Bookmarks", icon: Bookmark },
  { label: "Jobs", icon: Briefcase },
  { label: "Communities", icon: Users },
  { label: "Premium", icon: Zap },
  { label: "Verified Args", icon: CheckCircle2 },
  { label: "Profile", icon: User },
  { label: "More", icon: CircleEllipsis }
];

function NavBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-60 px-1 py-2 flex flex-col justify-between h-full navBar">

      <div className="w-full flex flex-col">
        <div className="logoCont text-left m-1 w-fit">
        <FontAwesomeIcon icon={faXTwitter} size="2xl" className="flex items-center cursor-pointer p-3 rounded-full hover:bg-gray-200 " />
        </div>

        <div className="optionsCont flex flex-col">
          {logoData.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`w-fit flex items-center cursor-pointer m-1 p-3 rounded-full hover:bg-gray-200 text-xl`}
                onClick={() => setActiveIndex(index)}
              >
                <Icon className={`w-6 h-6 mr-2 ${isActive ? "stroke-[2.5] text-black" : "stroke-[1.5] text-zinc-700"}`} />
                <NavLabel className={`${isActive ? "font-bold text-black":"text-zinc-700"}`}>{item.label}</NavLabel>
              </div>
            );
          })}
          <span>
            <Postbtn className="w-11/12  py-3.5 px-16 rounded-full my-4">Post</Postbtn>
          </span>
        </div>
      </div>
      {/* Profile Section */}
      <div className="profileCont">
        <ProfileCont></ProfileCont>
      </div>
    </div>
  );
}

export default NavBar;
