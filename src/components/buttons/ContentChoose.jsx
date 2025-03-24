import React, { useState } from "react"

export default function ContentChoose({ }) {
    var [activeContentItem, setActiveContentItem] = useState("For you")
    return (
        <div>
            <div>
                <div>
                    For you
                </div>
            </div>
            <div>
                <div>
                    Following
                </div>
            </div>
        </div>
    )
};