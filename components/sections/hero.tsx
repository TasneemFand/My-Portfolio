/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import HeroSVG from "../heroSVG";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section id="home">
      <div
        className="flex justify-center relative  bg-[#191924] clip-path-mypolygon py-[140px] px-8 
      max-[640px]:py-16 max-[640px]:px-4
      max-[960px]:py-8 max-[960px]:px-4
      "
      >
        <div className="flex justify-end max-[960px]:justify-center max-[960px]:px-0  absolute right-0 bottom-0  w-full h-full max-w-[1360px] overflow-hidden top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] py-0 px-8">
          <div className="w-[600px] h-[600px]">
            <HeroSVG />
          </div>
        </div>
        <div className="flex justify-between items-center w-full max-w-[1100px] relative max-[960px]:flex-col">
          <div
            className="w-full order-1 max-[960px]:order-2 max-[960px]:mb-8 max-[960px]:flex max-[960px]:flex-col max-[960px]:items-center
            max-[640px]:order-2 max-[640px]:mb-8 max-[640px]:flex max-[640px]:flex-col max-[640px]:items-center
            "
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="text-6xl text-center min-[960px]:text-start max-[1024px]:text-5xl max-[640px]:text-4xl">
                Tasneem {""}
                <span className="text-purple-800 font-semibold">Fandakli</span>
              </p>

              <p className="mt-7 mb-7 text-3xl text-center min-[960px]:text-start uppercase font-semibold max-[640px]:text-2xl">
                I am a web developer
              </p>
              <p
                className="text-xl max-[640px]:text-lg text-center min-[960px]:text-start max-[960px]:max-w-[550px] max-[640px]:max-w-[450px] leading-8 mt-7 text-[#B1B2B3] font-semibold
              "
              >
                experienced in creating dynamic web applications and websites.
                I am Dedicated to writing clean code and producing high-quality results with
                the ability to meet deadlines.
              </p>
            </motion.div>

            {/* CALL TO ACTIONS */}
            <motion.div
              className="flex mt-5 justify-center md:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Link
                target="_blank"
                className="rounded-2xl py-3 px-7 font-semibold  max-w-[300px] 
                bg-[#8400FF] bg-gradient-to-r from-[#8400FF] to-[#E500FF] brightness-100
                "
                href="https://drive.google.com/file/d/1v3Vse71qH2Ucr8L8R5l3RpX-2lYR30kH/view?usp=sharing"
              >
                Check Resume
              </Link>
              <Link href="/#contact">
                <div className="hover:text-purple-600 transition duration-500 w-full h-full flex items-center justify-center px-7 text-xl">
                  Let's talk.
                </div>
              </Link>
            </motion.div>
          </div>

          <div
            className="w-full flex order-2 justify-end gap-3 
            max-[960px]:order-1 max-[960px]:justify-center max-[960px]:items-center max-[960px]:mb-20
            max-[640px]:mb-8
            "
          >
            <Image
              src={"/images/profile.webp"}
              alt="my profile photo"
              width={400}
              height={400}
              priority
              className="relative w-full h-full max-w-[400px] max-h-[400px] border-2 border-[#854CE6] border-solid rounded-[50%]
                max-[640px]:max-w-[280px] max-[640px]:max-h-[280px] 
                max-[768px]:max-w-[400px] max-[768px]:max-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
