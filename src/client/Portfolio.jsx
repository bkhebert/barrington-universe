import React, { useState, useEffect } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Resume from "./Resume";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import { IconContext } from "react-icons";
import { GiNotebook } from "react-icons/gi";

const Portfolio = () => {
  const [expanded, setExpanded] = useState(null);

  const handleClick = (componentName) => {
    setExpanded(componentName === expanded ? null : componentName);
  };

  const [isVisible, setIsVisible] = useState(false); // for fade-in

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // delay ensures transition is detected
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`transition-opacity duration-[3000ms] ease-in ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
    <div className="min-w-full h-screen flex flex-col">
    <div className="flex-grow">
      {expanded}
    { expanded === "Resume" && <Resume></Resume>}
    { expanded === "Skills" && <Skills></Skills>}
    { expanded === "Projects" && <Projects></Projects>}
    { expanded === "AboutMe" && <AboutMe></AboutMe>}
    </div>
   <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
    <div className="relative bg-yellow-400/40 h-15/35 p-4 m-3 rounded-xl"
    onClick={(() => {
      handleClick("Resume")
    })}>
      <h1 className="text-sm text-yellow-950 md:text-2xl font-bold">Resume</h1>
      <div className="flex justify-center items-center">
      <IconContext.Provider value={{ className: "w-full h-full mt-2 max-w-[6em] text-white md:max-w-[6em] lg:max-w-[8em]"}}>
      <GiNotebook />
      </IconContext.Provider>
      </div>
    </div>
    <div className="relative bg-red-600/40 h-15/35  p-4 m-3 rounded-xl"
    onClick={(() => {
      handleClick("Skills")
    })}
    >
      <h1 className="text-sm text-red-950 md:text-2xl font-bold">Skills</h1>
      <div className="absolute inset-0 flex justify-center items-center pt-6">
      <p1 className="font-bold text-[4em] text-white md:text-[6em] lg:text-[8em]">28</p1>
      </div>
    </div>
    <div className="bg-cyan-400/40 h-15/35  p-4 m-3 rounded-xl"
    onClick={(() => {
      handleClick("Projects")
    })}
    >
      <h1 className="text-sm text-cyan-950 md:text-2xl font-bold">Projects</h1>
    </div>
    <div className="bg-green-600/40 h-15/35  p-4 m-3 rounded-xl"
    onClick={(() => {
      handleClick("AboutMe")
    })}
    >
      <h1 className="text-sm text-green-950 md:text-2xl font-bold">About Me</h1>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Portfolio;