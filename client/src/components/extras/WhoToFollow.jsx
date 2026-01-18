import ProfileLogo from "../contentPost/postMiniComponents/ProfileLogo";
import FollowButton from "../buttons/FollowButton";
import ShowMore from "../buttons/ShowMore";

export default function WhoToFollow({ className }) {
  return (
    <div className={className}>
      <div className="flex flex-row justify-between px-5 py-3">
        <p className="font-extrabold text-xl">Who to follow</p>
      </div>
      <div className="flex flex-row px-5 justify-between hover:bg-gray-100 w-full px-5 py-3 cursor-pointer">
        <div className="flex flex-row">
          <ProfileLogo />
          <div className="flex flex-col text-sm mx-2 overflow-hidden">
            <span className="font-bold truncate">Zee Tamil News</span>
            <span className="truncate">@ZeeTamilNews</span>
          </div>
        </div>
        <div className="w-fit text-white text-sm font-bold">
          <FollowButton insideText={"Follow"} className="bg-black" />
        </div>
      </div>
      <div className="flex flex-row px-5 justify-between hover:bg-gray-100 w-full px-5 py-3 cursor-pointer">
        <div className="flex flex-row">
          <ProfileLogo />
          <div className="flex flex-col text-sm mx-2 overflow-hidden">
            <span className="font-bold truncate">Zee Tamil News</span>
            <span className="truncate">@ZeeTamilNews</span>
          </div>
        </div>
        <div className="w-fit text-white text-sm font-bold">
          <FollowButton insideText={"Follow"} className="bg-black" />
        </div>
      </div>
      <div className="flex flex-row px-5 justify-between hover:bg-gray-100 w-full px-5 py-3 cursor-pointer">
        <div className="flex flex-row">
          <ProfileLogo />
          <div className="flex flex-col text-sm mx-2 overflow-hidden">
            <span className="font-bold truncate">Zee Tamil News</span>
            <span className="truncate">@ZeeTamilNews</span>
          </div>
        </div>
        <div className="w-fit text-white text-sm font-bold">
          <FollowButton insideText={"Follow"} className="bg-black" />
        </div>
      </div>
      <ShowMore className="flex flex-col hover:bg-gray-100 w-full px-5 py-3 justify-center cursor-pointer text-[rgb(29,155,240)]" />
    </div>
  );
}
