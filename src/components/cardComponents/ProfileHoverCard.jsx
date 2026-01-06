import { forwardRef } from "react"
import FollowButton from "../buttons/FollowButton"

export default forwardRef(function ProfileHoverCard({onMouseEnter, onMouseLeave},ref){
        return(
            <dialog ref={ref} className="bg-light-50 w-80 absolute top-9 left-0 p-4 rounded outline-none rounded-2xl" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div className="flex flex-row justify-between w-full">
                    <div className="w-14 flex flex-col justify-start aspect-square rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/76/5b/bc/765bbc893a035f5517d151a411f5df72.jpg" alt=""/>
                    </div>
                    <div className="w-fit text-black text-[1rem] font-bold">
                        <FollowButton/>
                    </div>
                </div>
                <div>
                    a
                </div>
                <div>
                    b
                </div>
                <div>
                    c
                </div>
                <div>
                    d
                </div>
                
            </dialog>
        )
    })