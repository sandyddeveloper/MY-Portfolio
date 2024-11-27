"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  skills: {
    id: number;
    title: string;
    image: string;
    percent: string; // A percentage value, e.g., "75%"
  };
};

const SkillCard = ({ skills }: Props) => {
  const { image, percent, title } = skills;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900"
    >
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[18px] mt-4 text-white font-[600]">{title}</h1>
      <div className="relative w-full mt-4 bg-gray-700 rounded-lg h-6 overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full text-white text-center flex items-center justify-center rounded-lg transition-all duration-1000 ${
            isVisible
              ? "bg-blue-500 animate-fadeInAndScale animate-glow"
              : "w-0"
          }`}
          style={{
            width: isVisible ? percent : "0%",
          }}
        >
          {isVisible && <span className="absolute">{percent}</span>}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
