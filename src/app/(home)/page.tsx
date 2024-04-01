import Hero from "@/components/Hero";
import Scroll from "@/components/Scroll";
import Projects from "@/components/Projects";
import { Header } from "@/components/Header";
import { client } from "@/lib/sanity";

import { type Projects as ProjectsType } from "../types/sanity";
import { projectsQuery } from "@/utils/querys";
import SiteHeader from "@/components/layout/SiteHeader";
import { Spotlight } from "@/components/ui/spotlight";

export default async function Home() {
  const projects = (await client.fetch<ProjectsType[]>(projectsQuery)) ?? []

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative">
        <div className="max-w-7xl mx-auto p-5">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <SiteHeader />
          <Hero />
          <Scroll />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-background absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="container flex-1">
        <Header title="Latest Projects" />
        <Projects projects={projects} />
      </div>  
    </main>
  )
}