import { TProject } from "@/data";
import { useModal } from "@/hooks/use-modal";
import Image from "next/image";

export const ProjectCard = ({ info }: { info: TProject[0] }) => {
  const { onOpen } = useModal();
  return (
    <div
      onClick={() => onOpen("ProjectDetails", { Project: info })}
      className="cursor-pointer h-[600px] overflow-hidden
    bg-[rgb(23,23,33)] rounded-2xl py-6 px-5 flex flex-col gap-4 transition-all duration-[0.5s] ease-in-out
    hover:translate-y-[-10px] brightness-105 shadow-[0_0_12px_4px_rgba(0,0,0,0.4)]
    hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)]"
    >
      <Image
        src={info.img[0]}
        alt="project_image"
        width={500}
        height={500}
        className="rounded-2xl"
      />

      <div className="px-3 py-3">
        <div className="flex flex-col gap-1">
          <div className="text-lg font-bold text-[#f2f3f499] max-[768px]:text-sm ">
            {info.projectName}
          </div>
          {info.projectType ? (
            <div className="text-sm font-semibold text-[#b1b2b399] max-[768px]:text-xs">
              {info.projectType}
            </div>
          ) : null}
          <div className="text-xs max-[768px]:text-[10px] font-semibold text-[#b1b2b380]">
            {info.Date}
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-3 ">
          <div className=" flex flex-wrap text-sm font-semibold text-[#f2f3f499] max-[768px]:text-xs leading-7 max-[768px]:leading-5 ">
            {info.excerpt ?? info.descrp}
          </div>
          {/* {info.MyWorks ? (
            <div>
              <div className="text-base font-semibold text-[#f2f3f499] max-[768px]:text-sm ">
                What I worked on:
              </div>
              <div className="text-sm font-semibold text-[#f2f3f499]  max-[768px]:text-xs leading-7 flex flex-wrap">
                <ul className="list-disc">
                  {info.MyWorks?.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null} */}
          <div className="text-sm font-semibold max-[768px]:text-xs text-[#854CE6] first-letter:uppercase flex flex-wrap gap-2">
            {info.skills.map((skill, index) => (
              <span key={index}>#{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
