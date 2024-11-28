import SeactionHeading from "@/components/ui/SeactionHeading";
import { aboutInfo } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" data-aos="fade-up" className="pt-16 pb-16 bg-[#050709]">
      {/* HEADING */}
      <SeactionHeading data-aos="flip-right">About Me</SeactionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
        {/* Text Content */}
        <div>
          <h1
            data-aos="zoom-in-right"
            className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200"
          >
            {aboutInfo.title}
          </h1>
          <p data-aos="zoom-in-down" className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div
                data-aos="zoom-in-right"
                className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center"
              >
                <FaCheck className="text-white" />
              </div>
              <p
                data-aos="zoom-in-right"
                className="text-sm sm:text-base md:text-lg font-bold text-gray-300"
              >
                Frontent Development
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div
                data-aos="zoom-in-right"
                className="w-7 h-7 bg-yellow-500 flex flex-col items-center justify-center"
              >
                <FaCheck className="text-white" />
              </div>
              <p
                data-aos="zoom-in-right"
                className="text-sm sm:text-base md:text-lg font-bold text-gray-300"
              >
                Backend Development
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div
                data-aos="zoom-in-right"
                className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center"
              >
                <FaCheck className="text-white" />
              </div>
              <p
                data-aos="zoom-in-right"
                className="text-sm sm:text-base md:text-lg font-bold text-gray-300"
              >
                Full Stack Development
              </p>
            </div>
          </div>
        </div>

        {/* Statue Content */}
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
          <div data-aos="fade-up-left">
            <Image
              priority
              src="/images/customer.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.client}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Satisfied Clients
            </p>
          </div>

          <div data-aos="fade-up-left">
            <Image
              priority
              src="/images/completed.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.project}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Completed Project
            </p>
          </div>
          <div data-aos="fade-up-left">
            <Image
              priority
              src="/images/rocket.png"
              alt="image"
              width={80}
              height={80}
              className="mx-auto"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {aboutInfo.website}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Website Launched
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
