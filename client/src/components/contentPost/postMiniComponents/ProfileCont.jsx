import { Ellipsis } from "lucide-react";
import ProfileLogo from "./ProfileLogo";
import { useContext } from "react";
import { UserDataContext } from "../../../store/user-data-context";

export default function ProfileCont({ iconDisplay }) {
  const userContext = useContext(UserDataContext);
  return (
    <div className="w-full p-2 my-4 flex flex-row justify-between items-center rounded-full hover:bg-gray-200 active:bg-gray-400/40">
      <ProfileLogo />
      {!iconDisplay ? (
        <>
          <div className="flex flex-col text-sm mx-2 overflow-hidden">
            <span className="font-bold truncate">{userContext.userData.user_data.full_name}</span>
            <span className="truncate tes">@{userContext.userData.user_data.username}</span>
          </div>
          <div className="shrink-0">
            <Ellipsis />
          </div>
        </>
      ) : null}
    </div>
  );
}
