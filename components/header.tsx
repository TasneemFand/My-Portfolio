"use client";

import Image from "next/image";
import Link from "next/link";

 const Header = () => {
  return (
    <header className="py-8 bg-[#191924]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/**logo */}
          <Image
            src={"/images/logo.webp"}
            alt={"logo"}
            width={200}
            height={200}
            priority
          />
          {/**button */}
          <Link
            href="/#contact"
            className="text-center
            text-white
            py-3 px-7 font-semibold  max-w-[300px] 
           rounded-2xl
            transition-all ease-in-out duration-[0.2s] bg-[#8400FF] bg-gradient-to-r from-[#8400FF] to-[#E500FF] hover:scale-[1.05]
            hover:duration-[0.4s] brightness-100
            "
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;