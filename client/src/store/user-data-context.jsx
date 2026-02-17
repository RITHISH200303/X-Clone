import { createContext } from "react";

export const UserDataContext = createContext({
  userData: { user_data:{}, path: "" },
  setUserData: () => {}
});
