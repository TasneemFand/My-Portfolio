"use client";

import { education, experience } from "@/data";
import { motion } from "framer-motion";
import { EducationCardItem } from "../EducationCardItem";
import { ExperienceCardItem } from "../ExperienceCardItem";
import { Timeline } from "flowbite-react";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-8 max-[960px]:px-4 max-[640px]:px-4 flex flex-col items-center px-8"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div className="px-8">
          <p className="font-semibold text-5xl text-center text-white">
            My Journey
          </p>
          <div className="flex md:justify-end mt-5">
            <div className="h-0.5 bg-[#8400FF] bg-gradient-to-r from-[#8400FF] to-[#E500FF] w-[50%]" />
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center max-[640px]:flex-col flex-wrap gap-6 py-8 ">
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
          <div className="flex flex-col justify-start gap-5">
            <p className="font-semibold text-3xl text-[#F2F3F4]">Education</p>
            {education.map((item) => (
              <EducationCardItem key={item.faculty} info={item} />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className=" max-[640px]:hidden"
        >
          <div className="flex flex-col justify-start gap-5">
            <p className="font-semibold text-3xl text-[#F2F3F4]">Experience</p>
            <Timeline>
              {experience.map((item) => (
                <Timeline.Item key={item.companyName}>
                  <Timeline.Point/>
                  <ExperienceCardItem info={item} />
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        </motion.div>
        <div className=" flex-col justify-start gap-5 hidden  max-[640px]:flex">
            <p className="font-semibold text-3xl text-[#F2F3F4]">Experience</p>
            <Timeline>
              {experience.map((item) => (
                <Timeline.Item key={item.companyName}>
                  <Timeline.Point/>
                  <ExperienceCardItem info={item} />
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
      </div>
    </section>
  );
};
