import { X } from "lucide-react";
import ProfileRepeat from "../labels/ProfileRepeat";

export default function TodaysNews({ className }) {
  return (
    <div className={className}>
      <div className="flex flex-row justify-between">
        <p className="font-bold text-xl">Today's News</p>
        <span>
          <X className="w-5"></X>
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="line-clamp-2 font-bold">
          Fans of Vijay clash with fans of Siva Kartikeyan over Jana Nayagan
          trailer views and Parasakthi film performance
        </p>
        <div className="flex flex-row">
          <ProfileRepeat className={`w-7 flex flex-col justify-start aspect-square rounded-full overflow-hidden`}/>
          <span>Trending now · Entertainment ·</span>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
