import x_logo from "../../../public/x_logo.png";

export default function Lobby() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center">
      <div className="w-auto h-auto m-auto">
        <img src={x_logo} className="w-[400px] m-auto" alt="" />
      </div>
      <div className="w-1/2 m-auto">
        <h2 className="text-7xl font-sans font-extrabold">Hapenning now</h2>
        <h3>Join today</h3>
        <div>
          <div></div>
          <div></div>
          <div>
            <span></span>OR<span></span>
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
