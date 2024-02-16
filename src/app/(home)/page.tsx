import Hero from "@/components/Hero";
import Scroll from "@/components/Scroll";
import Projects from "@/components/Projects";
import { Header } from "@/components/Header";
import { client } from "@/lib/sanity";

import { type Projects as ProjectsType } from "../types/sanity";
import { projectsQuery } from "@/utils/querys";

export default async function Home() {
  const projects = (await client.fetch<ProjectsType[]>(projectsQuery)) ?? []

  return (
    <main>
      <Hero />
      <Scroll />
      <Header title="Latest Projects" />
      <Projects projects={projects} />
    </main>
  )
}