import { TEducation } from "@/data";
import Image from "next/image";

export const EducationCardItem = ({ info }: { info: TEducation[0] }) => {
  return (
    <div
      className="w-[650px] border-[0.1px] border-solid border-[#854CE6] rounded-2xl
        shadow-[0px_4px_24px_rgba(23,92,230,0.15)] py-3 px-4 flex flex-col gap-3
        transition ease-in-out duration-[0.3s] hover:shadow-[0px_0px_20px_rgba(0,0,0,0.2)] hover:translate-y-[-5px] relative overflow-hidden
        max-[768px]:p-3 max-[768px]:gap-2 max-[768px]:w-[500px] max-[640px]:w-[300px] bg-[#1c1c27]"
    >
      <div className="w-full flex gap-3">
        {info.img ? (
          <Image
            src={info?.img}
            alt={info.faculty}
            width={50}
            height={50}
            className="self-start rounded-md"
          />
        ) : null}
        <div className="flex flex-col gap-1">
          <div className="text-lg font-bold text-[#f2f3f499] max-[768px]:text-sm ">
            {info.faculty}, {info.universityName} University
          </div>
          <div className="text-sm font-semibold text-[#b1b2b399] max-[768px]:text-xs">
            {info.degree} of {info.faculty} - {info.specialization}
          </div>
          <div className="text-xs max-[768px]:text-[10px] font-semibold text-[#b1b2b380]">
            {info.startData} - {info.endDate}
          </div>
        </div>
      </div>
      <div className="px-3 flex flex-col gap-2">
        <div className="text-sm font-semibold text-[#b1b2b399] max-[768px]:text-xs ">
          <b>Grade: </b>
          {info.grade}
        </div>
        <div className="text-sm font-semibold text-[#f2f3f499]  max-[768px]:text-xs leading-7 max-[768px]:leading-8 flex flex-wrap">
          <span>{info.descrp}</span>
        </div>
      </div>
    </div>
  );
};
