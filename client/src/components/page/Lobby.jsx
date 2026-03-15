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
          <LoginButton logBrand="google" />
          <LoginButton logBrand="apple" />
          <div className="flex flex-row w-[295px] items-center">
            <span className="w-full h-[0.5px] bg-gray-200"></span>
            <span className="w-fit px-2">OR</span>
            <span className="w-full h-[0.5px] bg-gray-200"></span>
          </div>
          <LoginButton logBrand="create" />
          <div className="text-[12px] text-wrap w-[295px] my-4">
            By signing up, you agree to the <a href="" className="text-[rgb(29,155,240)] hover:underline">Terms of Service</a> and <a href="" className="text-[rgb(29,155,240)] hover:underline">Privacy Policy, </a>
            including <a href="" className="text-[rgb(29,155,240)] hover:underline">Cookie Use.</a>
          </div>
        </div>
        <div className="my-10">
          <div className="font-bold text-lg">Already have an account?</div>
          <LoginButton logBrand="" />
          <LoginButton logBrand="grook" />
        </div>
      </div>
    </div>
  );
}
