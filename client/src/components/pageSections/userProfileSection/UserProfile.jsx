import "./userProfile.css";
import { EditProfile } from "../../buttons/EditProfile";
import { ArrowLeft } from "lucide-react";
import { Search } from "lucide-react";

export default function UserProfile({ className }) {
  return (
    <div className={className}>
      <div className="flex flex-row justify-between px-3 py-1 items-center">
        <div className="w-[6%]">
          <span className="w-fit flex items-center cursor-pointer py-1.5 px-2 rounded-full hover:bg-gray-200">
            <ArrowLeft className="w-5"></ArrowLeft>
          </span>
        </div>
        <div className="flex flex-col text-left px-2 w-[80%]">
          <span className="text-xl font-bold">Mahatma Gandhi</span>
          <span className="text-[13px] text-gray-500 font-medium">
            70 posts
          </span>
        </div>
        <div>
          <span className="w-fit flex items-center cursor-pointer py-1.5 px-2 font-semibold rounded-full hover:bg-gray-200">
            <Search className="w-5"></Search>
          </span>
        </div>
      </div>
      <div className="cover_pic_parent_cont relative">
        <div className="bg-gray-400 cover_pic_cont">
          <img
            className="w-full h-full"
            src="https://images.mid-day.com/images/images/2014/dec/02mahatma-gandhi-l.jpg"
            alt=""
          />
        </div>
        <div className="profile_img relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://i.pinimg.com/736x/76/5b/bc/765bbc893a035f5517d151a411f5df72.jpg"
            alt=""
          />
        </div>
        <div className="w-full flex flex-row justify-end my-3">
          <EditProfile></EditProfile>
        </div>
        <div className="pt-5 flex flex-col items-start mx-4">
          <div>
            <span className="text-xl font-extrabold">Mahatma Gandhi</span>
            <span></span>
          </div>
          <div className="font-medium text-gray-500">@mahatmagandhi</div>
          <div className="text-lg mt-3">comments</div>
        </div>
      </div>
    </div>
  );
}
