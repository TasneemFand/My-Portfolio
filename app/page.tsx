import { Footer } from "@/components/sections/Footer";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import dynamic from "next/dynamic";

export default function Home() {
  const MyComponent = dynamic<{}>(() =>
    import("../components/header").then(module =>   module.default)
);
  return (
    <div className="h-full overflow-x-hidden w-full">
      <MyComponent />
      <Hero />
      <div
        className="clip-path-polygonSkills max-[768px]:clip-path-none
      bg-[linear-gradient(38.73deg,_#cc00bb26_0%,_#c920b800_50%),linear-gradient(141.27deg,_#0046d100_50%,_#0046d126_100%)]
      "
      >
        <Skills />
        <Experience />
      </div>
      <div className="bg-[linear-gradient(343.07deg,_rgba(132,59,206,0.06)_5.71%,_rgba(132,59,206,0)_64.83%)] clip-path-polygonProjects">
        <Projects />
      </div>
      <div
        className="bg-[linear-gradient(38.73deg,_rgba(204,0,187,0.15)_0%,_rgba(201,32,184,0)_50%),linear-gradient(141.27deg,_rgba(0,70,209,0)_50%,_rgba(0,70,209,0.15)_100%)]
        clip-path-polygonContact"
      >
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}
