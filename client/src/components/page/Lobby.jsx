import x_logo from "../../../public/x_logo.png";
import LoginButton from "../buttons/LoginButton";

export default function Lobby() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center">
      <div className="w-auto h-auto m-auto">
        <img src={x_logo} className="w-[330px] m-auto" alt="" />
      </div>
      <div className="w-auto m-auto font-sans text-left">
        <h2 className="text-7xl font-extrabold my-16">Hapenning now</h2>
        <h3 className="text-4xl font-sans font-extrabold my-7">Join today</h3>
        <div className="">
          <LoginButton logBrand="google"/>
          <LoginButton logBrand="apple"/>
          <div className="flex flex-row w-[295px] items-center"><span className="w-full h-[0.5px] bg-gray-200"></span><span className="w-fit px-2">OR</span><span className="w-full h-[0.5px] bg-gray-200"></span></div>
          <LoginButton logBrand="creat_account"/>
          <div></div>
          <div>
            <span></span><span></span>
          </div>
          <div></div>
          <span></span>
        </div>
        <div>
            <div>Already have an account?</div>
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
  );
}


