import { Header } from "@/components/header";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header/>
      <Hero/>
      <Skills/>
      <Experience/>
    </div>
  )
}
