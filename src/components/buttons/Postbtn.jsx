import React, { useState } from "react";

export default function Postbtn({children, className, trimIcon}) {
    const [dumma, setDumma] = useState(false)

    return (
        <>
            <div className={`${className} text-white font-semibold hover:bg-[#272C30]`} onClick={()=>setDumma(true)}>{children}</div>
        </> 
    );
};