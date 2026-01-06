
export default function ProfileLogo({onMouseEnter,onMouseLeave}){
    return(
    <div onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave} className="w-11 flex flex-col justify-start aspect-square rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/76/5b/bc/765bbc893a035f5517d151a411f5df72.jpg" alt=""/>
    </div>
    )
}