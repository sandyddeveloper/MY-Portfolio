import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Projects from "./Project/Projects";
import Skills from "./Skills/Skills";
import Blog from "./Blog/Blog";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Blog />
    </div>
  );
};

export default Home;
