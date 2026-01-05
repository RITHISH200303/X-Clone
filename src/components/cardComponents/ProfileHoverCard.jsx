import { forwardRef } from "react"

export default forwardRef(function ProfileHoverCard({onMouseEnter, onMouseLeave},ref){
        return(
            <dialog ref={ref} className="absolute top-9 left-0 p-4 rounded text-white outline-none" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                
            </dialog>
        )
    })