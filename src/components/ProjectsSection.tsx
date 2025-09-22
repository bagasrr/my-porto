import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";
import projectsData from "../data/projects.json";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4  sm:px-6 lg:px-8">
        <SectionTitle>Proyek Pilihan</SectionTitle>
        <div className="flex flex-wrap justify-center gap-8 ">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
