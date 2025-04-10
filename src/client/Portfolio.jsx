import React, { useState, useEffect, useRef } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Resume from "./Resume";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import { IconContext } from "react-icons";
import { GiNotebook, GiRaccoonHead } from "react-icons/gi";
import { initDrawers } from 'flowbite';

const Portfolio = () => {
  const [expanded, setExpanded] = useState(null);
  const [ progressBar, setProgressBar] = useState("0");
  const [ progressBarColor, setProgressBarColor] = useState("text-red-500");
  const [ progressReached, setProgressReached] = useState(false);
  const progIntervalRef = useRef(null);
  const progRef = useRef({ value: 0});
  const handleClick = (componentName) => {
    console.log('called')
    setExpanded(componentName === expanded ? null : componentName);
  };

  const [isVisible, setIsVisible] = useState(false); // for fade-in

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // delay ensures transition is detected
    return () => clearTimeout(timeout);
  }, []);

    useEffect(() => {
      // Manually initialize drawers
      initDrawers();
    }, []);

  useEffect(() => {

    if(!progressReached){
    progIntervalRef.current = setInterval(() => {
      let p = progRef.current;
      console.log('progress is running', progressBar, p.value)
     
      if(p.value === 25){
        setProgressBarColor('text-yellow-500')
      }
      if(p.value === 60){
        setProgressBarColor('text-green-500')
      }


      if(p.value < 75) {
        console.log('adding to p')
        p.value += 1
        
      }

      setProgressBar(p.value)
      if(p.value === 75){
        console.log('progress is at 75!!');
        setProgressReached(true);
        setProgressBarColor('text-cyan-500')
      }
    }, 50);
  }

    if(progressReached){
      clearInterval(progIntervalRef.current);
      console.log('progress interval interval cleared')
    }

    return (() => {
      clearInterval(progIntervalRef.current);
    });

  }, [progressReached])

  return (
    <div className={`transition-opacity duration-[3000ms] ease-in ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
    <div className="min-w-full h-screen flex flex-col">
    <div className="flex-grow overflow-hidden flex flex-col min-h-0">
    { expanded === "Resume" && <div className="flex-1 min-h-0 overflow-hidden"> <Resume></Resume> </div>}
    { expanded === "Skills" && <Skills handleClick={handleClick}></Skills>}
    { expanded === "Projects" && <Projects></Projects>}
        
        <div
        id="drawer-example"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-raccoon-primary/70 w-full dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <h5 id="drawer-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-200 dark:text-gray-400">
          <svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          Info
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-example"
          aria-controls="drawer-example"
          className="text-gray-200 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        
        
      </div>
        
    <AboutMe></AboutMe>
    </div>
   <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
    <div className="relative bg-yellow-400/40 h-15/35 p-4 m-3 rounded-xl hover:outline outline-white"
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
    <div className="relative bg-red-600/40 h-15/35  p-4 m-3 rounded-xl hover:outline outline-white"
    onClick={(() => {
      handleClick("Skills")
    })}
    >
      <h1 className="text-sm text-red-950 md:text-2xl font-bold">Skills</h1>
      <div className="absolute inset-0 flex justify-center items-center pt-6">
      <p1 className="font-bold text-[4em] text-white md:text-[6em] lg:text-[8em]">28</p1>
      </div>
    </div>
    <div className="bg-cyan-400/40 h-15/35  p-4 m-3 rounded-xl hover:outline outline-white"
      onClick={(() => {
        handleClick("Projects")
      })}
    >
      <h1 className="text-sm text-cyan-950 md:text-2xl font-bold">Projects</h1>
      <div className="flex justify-center items-center align">
<div class="relative size-40" >
  <svg class="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
  
    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-white" stroke-width="1" stroke-dasharray="75 100"></circle>


    <circle cx="18" cy="18" r="16" fill="none" class={`stroke-current ${progressBarColor}`} stroke-width="2" stroke-dasharray={`${Math.floor(progRef.current.value)} 100`}></circle>
  </svg>

  <div class="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <span class="text-2xl font-semibold text-blue-50">{Math.floor(progRef.current.value / .75)} %</span>
    <span class="text-cyan-50 font-bold block">completed</span>
  </div>
</div>
</div>

  {/* Text below circle
  <div className="mt-2 text-center">
    <p className="text-xl font-bold">58+</p>
    <p className="text-sm text-gray-200">Completed 58+ Projects</p>
  </div> */}
    </div>
    <div className="bg-green-600/40 h-15/35  p-4 m-3 rounded-xl hover:outline outline-white"
    type="button"
    data-drawer-target="drawer-example"
    data-drawer-show="drawer-example"
    aria-controls="drawer-example"
    >
      <h1 className="text-sm text-green-950 md:text-2xl font-bold">About Me</h1>
      <div className="flex justify-center items-center">
      <IconContext.Provider value={{ className: "w-full h-full mt-6 max-w-[6em] text-white md:max-w-[6em] lg:max-w-[8em]"}}>
      <GiRaccoonHead />
      </IconContext.Provider>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Portfolio;