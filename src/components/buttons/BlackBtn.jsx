import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Postbtn({ children }) {
    return (
        <>
            <div className="w-11/12 bg-black text-white font-semibold py-3.5 px-14 rounded-full my-4">{children}</div>
        </>
    );
};