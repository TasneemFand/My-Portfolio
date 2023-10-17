"use client";

import { motion } from "framer-motion";
import { WorksSlider } from "../WorksSlider";
import { ProjectModal } from "../ProjectModal";

export const Projects = () => {
  return (
    <section
      id="Works"
      className="py-8 max-[960px]:px-4 max-[640px]:px-4 flex flex-col px-8 items-center"
    >
      <div className="flex flex-col gap-7 m-auto w-[50%] max-[640px]:w-[60%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex w-full"
        >
          <div>
            <p className="font-semibold text-5xl text-white">My Works</p>
            <div className="flex md:justify-start mt-5">
              <div className="h-0.5 bg-[#8400FF] bg-gradient-to-r from-[#8400FF] to-[#E500FF] w-[50%]" />
            </div>
          </div>
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-xl text-[#B1B2B3]  font-semibold leading-8"
        >
          Following projects showcases my skills and experience. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 0, y: -100 },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        className="py-8 w-[80%]"
      >
        <WorksSlider />
      </motion.div>
      <ProjectModal />
    </section>
  );
};
