import SeactionHeading from "@/components/ui/SeactionHeading";
import { skillsData } from "@/lib/data";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div data-aos="fade-up" className="pt-16 pb-16 bg-[#0f0715]">
      <SeactionHeading data-aos="flip-right">My Skills</SeactionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.map((skills) => {
          return (
            <div key={skills.id}>
              <SkillCard skills={skills} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
