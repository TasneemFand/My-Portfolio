import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { projects } from "@/data";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { ProjectCard } from "./ProjectCard";

export const WorksSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }}
      lazyPreloadPrevNext={3}
      pagination={{
        clickable: true,
      }}
      freeMode
      modules={[Pagination, FreeMode]}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <ProjectCard key={`project-${index}`} info={project}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
