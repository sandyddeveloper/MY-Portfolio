"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHander = () => setShowNav(true);
  const closeNavHander = () => setShowNav(false);

  return (
    <div>
      <Navbar openNav={showNavHander} />
      <MobileNav showNav={showNav} closeNav={closeNavHander} />
    </div>
  );
};

export default ResponsiveNav;
