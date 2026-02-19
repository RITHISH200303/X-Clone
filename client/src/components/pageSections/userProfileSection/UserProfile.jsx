import "./userProfile.css";

export default function UserProfile({ className }) {
  return (
    <div className={className}>
      <div className="flex flex-row justify-between px-4 py-1 items-center">
        <span className="w-[8%]">--</span>
        <div className="w-[84%] flex flex-col text-left px-2">
          <span>Kumbi Kacheri</span>
          <span>70</span>
        </div>
        <span className="w-[8%]">--</span>
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
        <div className=""></div>
      </div>
    </div>
  );
}
