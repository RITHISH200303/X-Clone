import { useContext } from "react"
import { UserDataContext } from "../../../store/user-data-context"

export default function ProfileLogo({onMouseEnter,onMouseLeave}){
    const profileData = useContext(UserDataContext)
    return(
    <div onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave} className="w-11 flex flex-col justify-start aspect-square rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={profileData.userData.user_data.profile_image} alt=""/>
    </div>
    )
}