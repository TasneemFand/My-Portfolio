import { TExperience } from "@/data";
import Image from "next/image";

export const ExperienceCardItem = ({ info }: { info: TExperience[0] }) => {
  return (
    <div
      className="w-[650px] border-[0.1px] border-solid border-[#854CE6] rounded-2xl
        shadow-[0px_4px_24px_rgba(23,92,230,0.15)] py-3 px-4 flex flex-col gap-3
        transition ease-in-out duration-[0.3s] hover:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:translate-y-[-5px]
        max-[768px]:p-3 max-[768px]:gap-2 max-[768px]:w-[500px] bg-[#1c1c27] max-[640px]:w-[300px]
        group"
    >
      <div className="w-full flex gap-3">
        <Image
          src={info?.img}
          alt={info.companyName}
          width={50}
          height={50}
          className="self-start rounded-md"
        />
        <div className="flex flex-col gap-1">
          <div className="text-lg font-bold text-[#f2f3f499] max-[768px]:text-sm ">
            {info.position}, {info.worktype}
          </div>
          <div className="text-sm font-semibold text-[#b1b2b399] max-[768px]:text-xs">
            {info.companyName} | {info.location}
          </div>
          <div className="text-xs max-[768px]:text-[10px] font-semibold text-[#b1b2b380]">
            {info.startData} - {info.endDate}
          </div>
        </div>
      </div>
      <div className="px-3 flex flex-col gap-4">
        <div className=" flex flex-wrap text-sm font-semibold text-[#b1b2b399] max-[768px]:text-xs leading-7 max-[768px]:leading-8 ">
          {info.descrp}
        </div>
        <div className="text-base font-semibold text-[#f2f3f499] max-[768px]:text-sm ">
          My Tasks:
        </div>
        <div className="text-sm font-semibold text-[#f2f3f499]  max-[768px]:text-xs leading-7 max-[768px]:leading-8 flex flex-wrap">
          <ul className="list-disc">
            {info.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3 flex-wrap">
          <div className="text-base font-semibold text-[#f2f3f499] max-[768px]:text-sm ">
            Skills:
          </div>
          {info.skills.map((skill, index) => (
            <div
              key={index}
              className=" self-start flex items-center text-sm font-semibold text-[#f2f3f480] border-[#1787f680] border-solid border-[1px] rounded-xl py-2 px-4 max-[768px]:text-xs max-[768px]:py-2 max-[768px]:px-3"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
