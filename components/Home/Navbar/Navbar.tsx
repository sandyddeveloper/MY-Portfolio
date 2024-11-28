"use client";
import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handle = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handle);
    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, []);
  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#240b39]" : ""
      } h-[12vh] z-[10] w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Image
          priority
          src="/images/logo.png"
          alt="LOGO"
          width={170}
          height={170}
          className="sm:ml-0 ml-4"
          style={{ width: "auto", height: "auto" }}
        />

        {/* LINKs */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className="nav__link">{navlink.lable}</p>
                </Link>
              );
            })}
          </div>
          {/* BUTTON */}
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
              Hire Me
            </button>
            {/* BURGER_MENU */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
