import { useModal } from "@/hooks/use-modal";
import { Modal } from "flowbite-react";

export const ProjectModal = () => {
  const { data, isOpen, onClose, type } = useModal();
  return (
    <Modal
      show={isOpen && type === "ProjectDetails"}
      className="dark:bg-[#171721]"
      onClose={onClose}
    >
      <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
        <button
          onClick={onClose}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div className="p-6 space-y-6">
        <div className="flex flex-col gap-3 overflow-y-auto max-w-[800px] w-full rounded-2xl  h-min text-[#b1b2b3]">
          <div className="text-xl font-semibold max-[768px]:text-lg">
            {data.Project?.projectName}
          </div>
          <div className=" flex flex-wrap text-sm max-[768px]:text-xs leading-7 max-[768px]:leading-5">
            {data?.Project?.descrp}
          </div>
          {data.Project?.MyWorks ? (
            <div>
              <div className="text-base font-semibold  max-[768px]:text-sm ">
                What I worked on:
              </div>
              <div className="text-sm  max-[768px]:text-xs leading-7 max-[768px]:leading-5 flex flex-wrap">
                <ul className="list-disc">
                  {data.Project?.MyWorks?.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
          <div className="text-sm font-semibold max-[768px]:text-xs text-[#854CE6] first-letter:uppercase flex flex-wrap gap-2">
            {data.Project?.skills.map((skill, index) => (
              <span key={index}>#{skill}</span>
            ))}
          </div>
        </div>
      </div>
      {data.Project?.codeLink ? (
        <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <a
            target="_blank"
            href={data.Project?.codeLink}
            className="transition-all cursor-pointer hover:bg-[rgba(133,76,230,0.6)] ease-in-out duration-[0.5s] hover:bg[rgba(133,76,230,0.6)]  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[rgb(133,76,230)] text-[rgb(210,211,212)]"
          >
            View Code
          </a>
        </div>
      ) : null}
    </Modal>
  );
};
