import React, { useRef, useState, useEffect } from "react";
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
  CircleEllipsis,
  Feather
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import "../../public/navBar.css";
import NavLabel from "../components/labels/NavLabel";
import ProfileCont from "../components/contentPost/postMiniComponents/ProfileCont"
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
  // { label: "Verified Args", icon: CheckCircle2 },
  // { label: "Profile", icon: User },
  // { label: "More", icon: CircleEllipsis }
];

function NavBar() {
  let [activeIndex, setActiveIndex] = useState(null);

  let [rootWidth, setRootWidth] = useState(() => window.innerWidth)
  let [fontLabelDisplay, setFontLabelDisplay] = useState(rootWidth < 1300 ? true : false)

  useEffect(() => {
    function handleResize() {
      setRootWidth(window.innerWidth)
      if (window.innerWidth < 1300) {
        setFontLabelDisplay(true)
      }
      if (window.innerWidth > 1300) {
        setFontLabelDisplay(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [rootWidth]);
  
  return (
    <div className="w-full px-1 py-2 flex flex-col justify-between h-full navBar">

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
                <NavLabel
                  className={`
                  ${isActive ? "font-bold text-black" : "text-zinc-700"}
                  ${fontLabelDisplay ? "hidden" : "block"}
                `}
                >
                  {item.label}
                </NavLabel>
              </div>
            );
          })}
          <span>
            <Postbtn className={`rounded-full my-4 bg-black ${fontLabelDisplay?"w-fit p-4":"w-[90%] py-3.5"}`} trimIcon={fontLabelDisplay}>{fontLabelDisplay? <Feather/>:"Post"}</Postbtn>
          </span>
        </div>
      </div>
      {/* Profile Section */}
      <div className="profileCont w-[100%]">
        <ProfileCont className="w-[100%]" iconDisplay = {fontLabelDisplay}></ProfileCont>
      </div>
    </div>
  );
}

export default NavBar;