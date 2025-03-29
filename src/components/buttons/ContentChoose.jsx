import React, { useState } from "react"

export default function ContentChoose({ }) {
    var [activeContentItem, setActiveContentItem] = useState("For you")
    return (
        <div className="fixed top-0 left-0 w-full z-50 flex flex-row justify-center">
            <div className="w-1/2 flex justify-center py-3 font-semibold cursor-pointer">
                For you
            </div>
            <div className="w-1/2 flex justify-center py-3 font-semibold cursor-pointer">
                Following
            </div>
        </div>
    )
};