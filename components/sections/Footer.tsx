"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="py-8 max-[960px]:px-4 max-[640px]:px-4 flex justify-center px-8">
      <footer className="w-[70%] flex flex-col gap-4 items-center text-[rgb(242,243,244)]">
        <h1 className="font-semibold text-[rgb(133,76,230)] text-2xl">
          Tasneem Fandakli
        </h1>
        <div className="flex gap-3">
          <Link
            href="https://www.linkedin.com/in/tasneem-fandakli"
            target="_blank"
            aria-label="linkedIn profile"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/TasneemFand"
            aria-label="Github profile"
            target="_blank"
          >
            <FaGithub />
          </Link>
        </div>
        <p className="text-sm text-[rgb(242,243,244)] mt-2">
          &copy; 2023 Tasneem Fandakli. All rights reserved.
        </p>
      </footer>
    </section>
  );
};
