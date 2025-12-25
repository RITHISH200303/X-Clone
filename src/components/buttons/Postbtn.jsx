import React, { useState } from "react";
import { use } from "react";

export default function Postbtn({children, className}) {
    const [dumma, setDumma] = useState(false)

    return (
        <>
            <div className={`${className} text-white font-semibold hover:bg-[#272C30]`} onClick={()=>setDumma(true)}>{children}</div>
        </> 
    );
};