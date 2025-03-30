import React, { useState } from "react";

export default function ContentChoose() {
  const [activeTab, setActiveTab] = useState("For you");

  return (
    <div className="flex flex-row justify-center">
      <div
        className={`w-1/2 flex justify-center py-3 font-semibold cursor-pointer ${
          activeTab === "For you" ? "text-black font-bold" : "text-gray-500"
        }`}
        onClick={() => setActiveTab("For you")}
      >
        For you
      </div>
      <div
        className={`w-1/2 flex justify-center py-3 font-semibold cursor-pointer ${
          activeTab === "Following" ? "text-black font-bold" : "text-gray-500"
        }`}
        onClick={() => setActiveTab("Following")}
      >
        Following
      </div>
    </div>
  );
}
