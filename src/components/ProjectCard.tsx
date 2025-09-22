import { Code, ExternalLink, Tag } from "lucide-react";
import Image from "next/image";

type Project = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  codeUrl: string;
};

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between max-w-[45%]">
      <Image src={project.image} alt={`Screenshot of ${project.title}`} width={600} height={400} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 text-base">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <p className="font-bold">Tech Stack:&nbsp;</p>
          {project.tags.map((tag) => (
            <p key={tag}>{tag},</p>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-4 p-6">
        <a href={project.liveUrl} target="_blank" className="flex items-center text-slate-600 dark:text-slate-300 hover:text-maroon-600 dark:hover:text-maroon-500 font-semibold transition-colors">
          <ExternalLink size={20} className="mr-2" /> Live Demo
        </a>
        <a href={project.codeUrl} target="_blank" className="flex items-center text-slate-600 dark:text-slate-300 hover:text-maroon-600 dark:hover:text-maroon-500 font-semibold transition-colors">
          <Code size={20} className="mr-2" /> Lihat Kode
        </a>
      </div>
    </div>
  );
};
