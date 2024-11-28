import React from "react";
import { BaseInfo } from "@/lib/data";
import { FaDownload } from "react-icons/fa";

interface BaseInfoType {
  name?: string;
  position?: string;
  description?: string;
  profilePic?: string;
  cvLink?: string; // Relative path to the CV file
}

const Hero: React.FC = () => {
  const info: BaseInfoType = BaseInfo || {};

  const handleDownloadAndView = () => {
    if (info.cvLink) {
      const fileUrl = `${info.cvLink}`;
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileUrl.split("/").pop() || "CV.pdf"; // Use file name or default
      link.click();
    } else {
      alert("CV file is not available!");
    }
  };

  return (
    <div
      id="hero"
      className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative"
    >
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* CONTENT */}
          <div>
            <h1
              data-aos="fade-right"
              className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold"
            >
              Hey there! I’m {info.name || "Guest"}, nice to meet you.
            </h1>
            <h1
              data-aos="fade-left"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
            >
              {info.position || "Full-Stack Developer"}
            </h1>
            <p
              data-aos="zoom-out-right"
              className="mt-6 text-sm md:text-base text-white text-opacity-60"
            >
              {info.description ||
                "I am passionate about building scalable and efficient web solutions to solve real-world problems."}
            </p>

            <button
              data-aos="fade-up-right"
              onClick={handleDownloadAndView}
              className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2"
            >
              <span>Download CV</span>
              <FaDownload />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
