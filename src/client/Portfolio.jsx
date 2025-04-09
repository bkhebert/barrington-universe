import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Resume from "./Resume";
import ContactMe from "./ContactMe";
import Projects from "./Projects";


const Portfolio = () => {
  const [expanded, setExpanded] = useState(null);

  const handleClick = (componentName) => {
    setExpanded(componentName === expanded ? null : componentName);
  };

  return (
    <div>
    <div className="min-w-full h-[70rem] flex flex-col">
    <div className="flex-grow">
      {expanded}
    { expanded === "Resume" && <Resume></Resume>}
    { expanded === "Skills" && <Skills></Skills>}
    { expanded === "Projects" && <Projects></Projects>}
    { expanded === "AboutMe" && <AboutMe></AboutMe>}
    </div>
   <div className="grid grid-cols-4 gap-2">
    <div className="bg-yellow-400/40 h-[26rem] p-4 mb-6 rounded-xl"
    onClick={(() => {
      handleClick("Resume")
    })}>01 Resume</div>
    <div className="bg-red-600/40 h-[26rem] p-4 mb-6 rounded-xl"
    onClick={(() => {
      handleClick("Skills")
    })}
    >02 Skills</div>
    <div className="bg-cyan-400/40 h-[26rem] p-4 mb-6 rounded-xl"
    onClick={(() => {
      handleClick("Projects")
    })}
    >03 Projects</div>
    <div className="bg-green-600/40 h-[26rem] p-4 mb-6 rounded-xl"
    onClick={(() => {
      handleClick("AboutMe")
    })}
    >04 About Me</div>
  </div>
  </div>
  </div>
  )
}

export default Portfolio;