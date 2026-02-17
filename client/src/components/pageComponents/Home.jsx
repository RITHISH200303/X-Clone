import NavBar from "./NavBar";
import MainBody from "./MainBody";
import Footer from "./Footer";
import "../../App.css";
import { UserDataContext } from "../../store/user-data-context";
import { useEffect, useState } from "react";
import { getHomeData } from "../../api/home.api";

export default function Home({ path }) {
  let [userData, setUserData] = useState({ user_data:{}, path:"" });
  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      try {
        const data = await getHomeData();
        if (isMounted) {
          setUserData({user_data:data, path:window.location.pathname.slice(1)})
        }
      } catch (error) {
        if (!isMounted) {
          console.error("Failed to fetch data", error);
        }
      }
    }
    fetchData();
    return () => {
      isMounted = false;
      setUserData({user_data:{}, path:""});
    };
  },[]);
  
  return (
    <UserDataContext.Provider value={{userData, setUserData}}>
      <div className="max-w-full max-h-full">
        <div className="w-full m-0 pt-0 pb-0 flex flex-row h-screen justify-center">
          <header className="flex justify-end w-auto">
            <NavBar />
          </header>
          <main className="flex flex-row">
            {
              
            }
            <MainBody className="mainBody overflow-y-auto no-scrollbar border-solid border-x-[1px] border-gray-300/40" />
            <Footer className="mainFooter overflow-auto py-1" />
          </main>
        </div>
      </div>
    </UserDataContext.Provider>
  );
}