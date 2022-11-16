import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

import logo from "../public/oppalogo.png";

function Header() {
  return (
    <div
      id="menu-container"
      className="flex pt-[20px] pb-[20px] pr-[30px] pl-[30px] bg-gradient-to-b from-[#757575b7]  justify-end"
    >
      <div
        id="oppabear-logo-box"
        className="w-[150px] absolute top-[3%] left-[3%]"
      >
        <Image id="oppabear-logo-image" src={logo} alt="oppabear-logo"></Image>
      </div>
      <Link
        className="text-white self-center pr-2 hover:underline"
        href="/minting"
        passHref
      >
        mint mock nft
      </Link>
      <ConnectButton />
    </div>
  );
}

export default Header;
