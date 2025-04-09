import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Resume from "./Resume";
import ContactMe from "./ContactMe";
import Projects from "./Projects";


const Portfolio = () => {

  return (
    <div>
    <div className="bg-red-500/10 min-w-full h-[90rem] flex flex-col">
    <div className="flex-grow">nothing</div>
   <div className="grid grid-cols-4">
    <div className="bg-red-500 h-[26rem] p-4 mb-6">01 Resume</div>
    <div className="bg-red-500 h-[26rem] p-4 mb-6">02 Skills</div>
    <div className="bg-red-500 h-[26rem] p-4 mb-6">03 Projects</div>
    <div className="bg-red-500 h-[26rem] p-4 mb-6">04 About Me</div>
  </div>
  </div>
  </div>
  )
}

export default Portfolio;