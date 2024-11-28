import SeactionHeading from "@/components/ui/SeactionHeading";
import { projectData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div data-aos="fade-up" className="pt-16 pb-16 bg-[#050709]">
      <SeactionHeading data-aos="flip-right">My Projects</SeactionHeading>
      <div
        data-aos="zoom-in-up"
        className="w-[80%] mx-auto grid pt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center"
      >
        {projectData.map((project) => {
          return (
            <div
              data-aos="zoom-in-up"
              key={project.id}
              className="bg-white p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Link href={project.url} target="_blank">
                <Image
                  src={project.image}
                  alt="project"
                  width={300}
                  height={300}
                  className="w-full"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
