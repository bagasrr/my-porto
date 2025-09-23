import Image from "next/image";
import React from "react";

const Skills = () => {
  const data = [
    { name: "Javascript", image: "/images/javascript-logo.png" },
    { name: "Typescript", image: "/images/typescript-logo.png" },
    { name: "React", image: "/images/react-logo.png" },
    { name: "Next.js", image: "/images/nextjs-logo.png" },
    { name: "Tailwind CSS", image: "/images/tailwindcss-logo.png" },
    { name: "Node.js", image: "/images/nodejs-logo.png" },
    { name: "Express.js", image: "/images/expressjs-logo.png" },
    { name: "PostgreSQL", image: "/images/postgresql-logo.png" },
    { name: "Git", image: "/images/git-logo.png" },
    { name: "GitHub", image: "/images/github-logo.png" },
    { name: "Figma", image: "/images/figma-logo.png" },
  ];

  return (
    <div className="w-full py-5 my-10">
      <div className="w-[90%] mx-auto ">
        <div className="group w-full  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll group-hover:[animation-play-state:paused]">
            {data.map((skill, index) => (
              <li key={`skill-a-${index}`} className="relative mx-4 flex h-16 w-16 items-center justify-center transition-transform duration-300 hover:scale-110">
                <Image src={skill.image} alt={skill.name} fill className="object-contain p-2" sizes="(max-width: 768px) 100vw, 96px" />
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
            {data.map((skill, index) => (
              <li key={`skill-a-${index}`} className="relative mx-4 flex h-16 w-16 items-center justify-center transition-transform duration-300 hover:scale-110">
                <Image src={skill.image} alt={skill.name} fill className="object-contain p-2" sizes="(max-width: 768px) 100vw, 96px" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
