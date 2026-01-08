import { forwardRef } from "react"
import FollowButton from "../buttons/FollowButton"
import { BadgeCheck } from "lucide-react"
import { useRef } from "react"

export default forwardRef(function ProfileHoverCard({onMouseEnter, onMouseLeave},hovref){
        let hoveEntered = useRef(true)
        function onHovEnter(){
            if(hoveEntered.current){
                hoveEntered.current = false
                hovref.current.show()
            }
        }

        function onHovLeave(){
            if (!hoveEntered.current){
                hoveEntered.current = true
                hovref.current.close()
            }
        }

        return(
            <div onMouseEnter={onHovEnter} onMouseLeave={onHovLeave}>
            <dialog ref={hovref} className="bg-light-50 w-80 absolute top-9 left-0 p-4 rounded outline-none rounded-2xl" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div className="flex flex-row justify-between w-full">
                    <div className="w-14 flex flex-col justify-start aspect-square rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/76/5b/bc/765bbc893a035f5517d151a411f5df72.jpg" alt=""/>
                    </div>
                    <div className="w-fit text-black text-[1rem] font-bold">
                        <FollowButton/>
                    </div>
                </div>
                <div className="flex flex-col py-2 text-left">
                    <div className="flex flex-row">
                        <a href="x.com" className ='font-bold text-black no-underline hover:underline decoration-1 truncate'>Mahatma Gandhi</a>
                        <span><BadgeCheck className='text-blue-400 w-4 mx-1' /></span>
                    </div>
                    <span className='text-left'>@mahatmagandhi</span>
                </div>
                <div className="flex break-words text-left">
                    நாய் நன்றி உள்ளதா இருந்தாலும் அதற்கு ‘தாங்க் யூ’ சொல்ல தெரியாது..
                </div>
                <div>
                    <a href=""><b>379 </b><span>Following</span></a>
                    <a><b>2,582 </b><span>Followers</span></a>
                </div>
                <div>
                    d
                </div>
                
            </dialog>
            </div>
        )
    })