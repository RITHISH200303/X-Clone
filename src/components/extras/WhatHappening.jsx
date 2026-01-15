import ShowMore from "../buttons/ShowMore";

export default function WhatHappening({ className }) {
  return (
    <div className={className}>
      <div className="flex flex-row justify-between px-5 py-3">
        <p className="font-extrabold text-xl">What’s happening</p>
      </div>
      <div className="flex flex-col hover:bg-gray-100 w-full px-5 py-3 justify-center cursor-pointer">
        <span className="truncate text-sm text-gray-600">
          Entertainment · Trending
        </span>
        <p className="line-clamp-2 font-bold">#Karuppu</p>
      </div>
      <div className="flex flex-col hover:bg-gray-100 w-full px-5 py-3 justify-center cursor-pointer">
        <span className="truncate text-sm text-gray-600">
          Politics · Trending
        </span>
        <p className="line-clamp-2 font-bold">#BMCElections2026</p>
      </div>
      <div className="flex flex-col hover:bg-gray-100 w-full px-5 py-3 justify-center cursor-pointer">
        <span className="truncate text-sm text-gray-600">Trending</span>
        <p className="line-clamp-2 font-bold">#TributeToShaheedFazilRahoo</p>
      </div>
      <ShowMore className="flex flex-col hover:bg-gray-100 w-full px-5 py-3 justify-center cursor-pointer text-[rgb(29,155,240)]"/>
    </div>
  );
}
