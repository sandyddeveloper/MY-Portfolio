import SeactionHeading from "@/components/ui/SeactionHeading";
import { servicesData } from "@/lib/data";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div id="services" data-aos="fade-up" className="pt-16 pb-16 bg-[#0f0715]">
      <SeactionHeading data-aos="flip-right">Services</SeactionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20">
        {servicesData.map((service) => {
          return (
            <div key={service.id}>
              <ServiceCard service={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
