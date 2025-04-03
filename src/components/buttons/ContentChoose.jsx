import React, { useState } from "react";

export default function ContentChoose() {
  const [activeTab, setActiveTab] = useState("For you");

  return (
    <div className="flex flex-row justify-center">
      <div
        className={`w-1/2 flex justify-center font-semibold cursor-pointer hover:bg-[#8585852d] ${
          activeTab === "For you" ? "text-black font-bold" : "text-gray-500" 
        }`}
        onClick={() => setActiveTab("For you")}
      >
        <span className={`py-3 px-1 ${activeTab === "For you" ? "border-b-4 border-[rgb(29,155,240)] " : ""}`}>
        For you
        </span>
      </div>
      <div
        className={`w-1/2 flex justify-center font-semibold cursor-pointer hover:bg-[#8585852d] ${
          activeTab === "Following" ? "text-black font-bold" : "text-gray-500"
        }`}
        onClick={() => setActiveTab("Following")}
      ><span className={`py-3 px-1 ${activeTab === "Following" ? "border-b-4 border-[rgb(29,155,240)]" : ""}`}> Following
      </span>
      </div>
    </div>
  );
}
