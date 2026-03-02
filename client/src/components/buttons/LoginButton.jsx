import google_image from "../../../public/google.png";
import apple_image from "../../../public/apple.png";
import { useRef } from "react";

export default function LoginButton({ className, logBrand }) {
  let buttonStyle = useRef({
    button_text: "",
    button_logo: "",
    button_bg: "",
    logo_size: "",
    font_color: "",
    font_style:""
  });

  if (logBrand == "google") {
    buttonStyle.current.button_text = "Sign up with Google";
    buttonStyle.current.button_logo = google_image;
    buttonStyle.current.button_bg = "transparent";
    buttonStyle.current.logo_size = 6;
  } else if (logBrand == "apple") {
    buttonStyle.current.button_text = "Sign up with Apple";
    buttonStyle.current.button_logo = apple_image;
    buttonStyle.current.button_bg = "transparent";
    buttonStyle.current.logo_size = 10;
  } else {
    buttonStyle.current.button_text = "Create account";
    buttonStyle.current.button_logo = "";
    buttonStyle.current.button_bg = "black";
    buttonStyle.current.font_color = "white";
    buttonStyle.current.font_style = "semibold"
  }

  return (
    <div
      className={`${className} bg-${buttonStyle.current.button_bg} w-[295px] flex flex-row gap-2 
      justify-center align-middle border-1 border-solid border-gray-300 rounded-3xl py-2 cursor-pointer 
      my-3 text-${buttonStyle.current.font_color} font-${buttonStyle.current.font_style}`}
    >
      <img
        src={buttonStyle.current.button_logo}
        alt=""
        className={`w-${buttonStyle.current.logo_size}`}
      />
      <span>{buttonStyle.current.button_text}</span>
    </div>
  );
}
