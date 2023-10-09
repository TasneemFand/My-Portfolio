"use client";

import { skills } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";

export const Skills = () => {
  return (
    <section id="skills" className="py-8 max-[960px]:px-4 max-[640px]:px-4 flex flex-col items-center">
      <motion.div
        className=" md:w-2/5 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex flex-col gap-2 items-center">
          <p className="font-semibold text-5xl text-center text-white">
            My Skills
          </p>
          <div className="h-0.5 bg-[#8400FF] bg-gradient-to-r from-[#8400FF] to-[#E500FF] w-[50%]" />
        </div>
        <p className="my-7 text-xl text-center text-[#F2F3F4] leading-8">
          These are some of the most technologies which I have been working with
          for the past 3 years.
        </p>
      </motion.div>
        <div className="flex flex-wrap justify-center gap-4 text-center py-8 w-[70%]">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <div className=" flex flex-col h-full items-center justify-center gap-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-6 px-8">
                <Image
                  src={skill.img}
                  alt={skill.name}
                  width={100}
                  height={100}
                />
                <p className="font-semibold uppercase">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  );
};
