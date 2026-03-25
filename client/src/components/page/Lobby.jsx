import x_logo from "../../../public/x_logo.png";
import LoginButton from "../buttons/LoginButton";
import useWindowChange from "../../hooks/useWindowChange";
import '../../../public/lobby.css'

export default function Lobby() {
  return (
    <div className="lobby-cont">
      <div className="m-auto">
        <img src={x_logo} className="x-logo" alt="" />
      </div>
      <div className="m-auto font-sans text-left">
        <h2 className="font-extrabold">Hapenning now</h2>
        <h3 className="font-sans font-extrabold">Join today</h3>
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
            By signing up, you agree to the{" "}
            <a href="" className="text-[rgb(29,155,240)] hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="" className="text-[rgb(29,155,240)] hover:underline">
              Privacy Policy,{" "}
            </a>
            including{" "}
            <a href="" className="text-[rgb(29,155,240)] hover:underline">
              Cookie Use.
            </a>
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
