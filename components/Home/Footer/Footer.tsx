import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <div>
        <Image
          priority
          src="/images/logo.png"
          alt="logo"
          width={180}
          height={180}
          className="mx-auto"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold pt-5">
        <div className="pt-[13px]">Home.</div>
        <div>Services.</div>
        <div>Project.</div>
        <div>Reviews.</div>
        <div>Contact.</div>
      </div>
      <p className="text-white text-opacity-60 mt-6 text-center">
        © 2024 All Rights Reserved by DEVxNET
      </p>
    </div>
  );
};

export default Footer;
