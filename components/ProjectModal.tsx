import { useModal } from "@/hooks/use-modal";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Carousel } from "flowbite-react";

export const ProjectModal = () => {
  const { data, isOpen, onClose, type } = useModal();
  return (
    <Dialog open={isOpen && type === "ProjectDetails"} onOpenChange={onClose}>
      <DialogContent className="dark:bg-[#171721] overflow-y-auto max-h-full max-w-screen-lg border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold max-[768px]:text-lg">
            {data.Project?.data?.projectName}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 w-full rounded-2xl text-[#b1b2b3] px-6 h-fit ">
          {data.Project?.index === 0 ? null : data.Project?.data?.img?.length! >
            2 ? (
            <Carousel
              className="h-[100vh] max-md:h-[80vh] max-sm:h-[50vh] max-[450px]:h-[40vh]"
              indicators={false}
              slide={false}
            >
              {data.Project?.data?.img?.slice(1).map((img) => (
                <Image
                  key={img}
                  src={img}
                  alt="project_image"
                  width={1000}
                  height={1000}
                />
              ))}
            </Carousel>
          ) : (
            <Image
              src={data.Project?.data?.img?.[1]!}
              alt="project_image"
              width={1000}
              height={1000}
            />
          )}
          <div className=" flex flex-wrap text-sm max-[768px]:text-xs leading-7 max-[768px]:leading-5">
            {data?.Project?.data?.descrp}
          </div>
          {data.Project?.data?.MyWorks ? (
            <div>
              <div className="text-base font-semibold  max-[768px]:text-sm mb-3 ">
                What I worked on:
              </div>
              <div className="text-sm  max-[768px]:text-xs leading-7 max-[768px]:leading-5 flex flex-wrap px-4">
                <ul className="list-disc">
                  {data.Project?.data?.MyWorks?.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
          <div className="text-sm font-semibold max-[768px]:text-xs text-[#854CE6] first-letter:uppercase flex flex-wrap gap-2">
            {data.Project?.data?.skills.map((skill, index) => (
              <span key={index}>#{skill}</span>
            ))}
          </div>
          {data.Project?.data?.codeLink ? (
            <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <a
                target="_blank"
                href={data.Project?.data?.codeLink}
                className="transition-all cursor-pointer hover:bg-[rgba(133,76,230,0.6)] ease-in-out duration-[0.5s] hover:bg[rgba(133,76,230,0.6)]  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[rgb(133,76,230)] text-[rgb(210,211,212)]"
              >
                View Code
              </a>
              {data.Project?.data?.liveLink ? (
                <a
                  target="_blank"
                  href={data.Project?.data?.liveLink}
                  className="transition-all cursor-pointer hover:bg-[rgba(133,76,230,0.6)] ease-in-out duration-[0.5s] hover:bg[rgba(133,76,230,0.6)]  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[rgb(133,76,230)] text-[rgb(210,211,212)]"
                >
                  Live Link
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
};
