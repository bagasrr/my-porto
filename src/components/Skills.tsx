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
    // LANGKAH 1: Tambahkan class `group` pada div pembungkus utama.
    // Ini menandai bahwa div ini adalah "induk" untuk state hover.
    <div className="w-full bg-maroon-300 py-11">
      <div className="w-[90%] mx-auto ">
        <div className="group w-full  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
          {/* LANGKAH 2: Ganti `hover:[...]` menjadi `group-hover:[...]` pada kedua list.
          Ini berarti "jika 'group' (induknya) sedang di-hover, maka pause animasi ini". */}
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll group-hover:[animation-play-state:paused]">
            {data.map((skill, index) => (
              <li key={index}>
                <Image src={skill.image} fill alt={skill.name} className="h-16 w-auto max-w-none hover:scale-110 transition-all duration-300" />
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
            {data.map((skill, index) => (
              <li key={index}>
                <img src={skill.image} alt={skill.name} className="h-16 w-auto max-w-none hover:scale-110 transition-all duration-300" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
