import logo from "../public/oppalogo.png";
import Image from "next/image";

function OnlyDesktopPage() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-slate-800 bg-opacity-100 backdrop-blur-sm z-[100]">
      <div className="flex flex-col  justify-center items-center h-screen text-white">
        <div className="pb-10">
          <Image src={logo} alt="logo" />
        </div>
        <div className="text-xl font-bold">
          This Application Does not support mobile.
        </div>
        <span className="text-md">
          please login to this website on your PC.
        </span>
      </div>
    </div>
  );
}

export default OnlyDesktopPage;
