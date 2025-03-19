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

import "../../public/navBar.css";
import BlackBtn from "./buttons/BlackBtn";
import NavLabel from "../components/labels/NavLabel";

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
  {label:"More",icon:CircleEllipsis}
];

function NavBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-60 px-1 flex flex-col justify-between h-full navBar">


      <div className="w-full flex flex-col">
        <div className="logoCont text-left">A</div>

        <div className="optionsCont flex flex-col">
          {logoData.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`flex items-center cursor-pointer m-1 px-2 py-2 rounded-full hover:bg-gray-200 "}`}
                onClick={() => setActiveIndex(index)}
              >
                <Icon className={`w-6 h-6 mr-2 ${isActive ? "stroke-[2.5] text-black" : "stroke-[1.5] text-zinc-700"}`} />
                <NavLabel>{item.label}</NavLabel>
              </div>
            );
          })}
          <span>
            <BlackBtn>Post</BlackBtn>
          </span>
        </div>
      </div>
      {/* Profile Section */}
      <div className="profileCont">q</div>
    </div>
  );
}

export default NavBar;
