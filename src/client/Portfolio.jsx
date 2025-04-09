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
    <div className="bg-red-500/10 min-w-full h-[70rem] flex flex-col">
    <div className="flex-grow">
      {expanded}
    { expanded === "Resume" && <Resume></Resume>}
    { expanded === "Skills" && <Skills></Skills>}
    { expanded === "Projects" && <Projects></Projects>}
    { expanded === "AboutMe" && <AboutMe></AboutMe>}
    </div>
   <div className="grid grid-cols-4">
    <div className="bg-red-500 h-[26rem] p-4 mb-6"
    onClick={(() => {
      handleClick("Resume")
    })}>01 Resume</div>
    <div className="bg-red-500 h-[26rem] p-4 mb-6"
    onClick={(() => {
      handleClick("Skills")
    })}
    >02 Skills</div>
    <div className="bg-red-500 h-[26rem] p-4 mb-6"
    onClick={(() => {
      handleClick("Projects")
    })}
    >03 Projects</div>
    <div className="bg-red-500 h-[26rem] p-4 mb-6"
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