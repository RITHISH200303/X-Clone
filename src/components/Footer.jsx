import Subscription from "./extras/Subscription"
import SearchBar from "./extras/SearchBar"
import TodaysNews from "./extras/TodaysNews"
import WhatHappening from "./extras/WhatHappening"

export default function Footer({ className }) {
    return (
        <div className={className}>
            <div className="flex flex-col w-[90%] gap-5 text-left">
                <SearchBar className="w-[95%]"/>
                <Subscription className="w-90% px-5 py-4 flex flex-col gap-3 rounded-lg border-solid border-1 border-gray-300/40"/>
                <TodaysNews className="w-90% flex flex-col justify-around rounded-lg border-solid border-1 border-gray-300/40"/>
                <WhatHappening className="w-90% flex flex-col justify-around rounded-lg border-solid border-1 border-gray-300/40"></WhatHappening>
            </div>
        </div>
    )
}