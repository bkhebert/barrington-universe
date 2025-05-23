import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
const AboutMe = lazy(() => import("./AboutMe"));
const Skills = lazy(() => import("./Skills"));
const Resume = lazy(() => import("./Resume"));
const ContactForm = lazy(() => import("./ContactForm"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
import { FaBook } from '@react-icons/all-files/fa/FaBook';
import { GiRaccoonHead } from '@react-icons/all-files/gi/GiRaccoonHead';
import { initDrawers } from 'flowbite';

const Portfolio = ({itemExpanded}) => {
  const [expanded, setExpanded] = useState(null);
  const [ progressBar, setProgressBar] = useState("0");
  const [ progressBarColor, setProgressBarColor] = useState("text-red-500");
  const [ progressReached, setProgressReached] = useState(false);
  const progIntervalRef = useRef(null);
  const progRef = useRef({ value: 0});
  const [formView, setFormView] = useState(false);
  const handleClick = (componentName) => {
    setExpanded(componentName === expanded ? null : componentName);
  };

  const [isVisible, setIsVisible] = useState(false); // for fade-in

  const toggleFormView = (bool) => {
    setFormView(bool);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // delay ensures transition is detected
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if(expanded !== null){
      itemExpanded(true)
    } else {
      itemExpanded(false)
    }
  }, [expanded])

    useEffect(() => {
      // Manually initialize drawers
      initDrawers();
    }, []);

  useEffect(() => {

    if(!progressReached){
    progIntervalRef.current = setInterval(() => {
      let p = progRef.current;
     
      if(p.value === 25){
        setProgressBarColor('text-yellow-500')
      }
      if(p.value === 60){
        setProgressBarColor('text-green-500')
      }


      if(p.value < 75) {
        p.value += 1
        
      }

      setProgressBar(p.value)
      if(p.value === 75){

        setProgressReached(true);
        setProgressBarColor('text-cyan-500')
      }
    }, 50);
  }

    if(progressReached){
      clearInterval(progIntervalRef.current);
    
    }

    return (() => {
      clearInterval(progIntervalRef.current);
    });

  }, [progressReached])

  return (
    <>
    <div className={`transition-opacity duration-[3000ms] ease-in ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
    <div className="">
    <div className="">
    { expanded === "Resume" &&  
       <Suspense useFallback={null}>
    <Resume handleClick={handleClick}></Resume></Suspense> }
    { expanded === "Skills" && <Suspense useFallback={null}><Skills handleClick={handleClick}></Skills></Suspense>}
    { expanded === "Projects" && <Suspense useFallback={null}><Projects handleClick={handleClick}></Projects></Suspense>}
    { formView && <Suspense useFallback={null}><ContactForm toggleFormView={toggleFormView}></ContactForm></Suspense>}
        <div
        id="drawer-example"
        className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-raccoon-primary/70 w-full dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <a href="https://raccooncitymassacre.bandcamp.com/">
        <h5 id="drawer-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-200 dark:text-gray-400">
          <svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          Info
        </h5>
        </a>
        <button
          type="button"
          data-drawer-hide="drawer-example"
          aria-controls="drawer-example"
         className="text-gray-200 bg-raccoon-primary hover:bg-yellow-300 hover:text-gray-900 rounded-lg text-sm w-16 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white border border-2 border-white"
        >
          Back
          {/* <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span className="sr-only">Close menu</span> */}
        </button>
        <Suspense useFallback={null}> <AboutMe></AboutMe> </Suspense>
        <div className="flex justify-center items-center">
        <button
        data-drawer-hide="drawer-example"
        aria-controls="drawer-example"
        className="text-gray-200 bg-transparent border border-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-12 h-8 mb-2 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white mt-4"
        >TL;DR</button>
        </div>
      </div>   
    </div>


   <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
    <div className="relative bg-yellow-400/40 h-15/35 p-4 m-3 rounded-xl hover:outline outline-white"
    onClick={(() => {
      handleClick("Resume")
    })}>
      <h1 className="text-sm text-yellow-950 md:text-2xl font-bold">Resume</h1>
      <div className="flex justify-center items-center">
      <FaBook className="w-full h-full mt-6 max-w-[6em] text-white md:max-w-[6em] lg:max-w-[8em]" />
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
  </div>

    <div className="bg-green-600/40 h-15/35  p-4 m-3 rounded-xl hover:outline outline-white"
    type="button"
    data-drawer-target="drawer-example"
    data-drawer-show="drawer-example"
    aria-controls="drawer-example"
    >
      <h1 className="text-sm text-green-950 md:text-2xl font-bold">About Me</h1>
      <div className="flex justify-center items-center">

      <GiRaccoonHead className="w-full h-full mt-6 max-w-[6em] text-white md:max-w-[6em] lg:max-w-[8em]" />

      </div>
    </div>
  </div>
  </div>
  </div>
  <Suspense useFallback={null}><Contact toggleFormView={toggleFormView}/></Suspense>
  </>
  )
}

export default Portfolio;