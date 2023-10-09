import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="py-8 bg-[#191924]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/**logo */}
          <Image
            src={"/images/logo.svg"}
            alt={"logo"}
            width={200}
            height={200}
          />
          {/**button */}
          <Link
            href="/#contact"
            className="max-w-[300px] text-center py-3 px-8
            text-white font-semibold text-xl
           rounded-2xl cursor-pointer
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
