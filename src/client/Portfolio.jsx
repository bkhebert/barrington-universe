import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Resume from "./Resume";
import ContactMe from "./ContactMe";
import Projects from "./Projects";


const Portfolio = () => {

  return (
   <div className="grid grid-cols-4 gap-2">
    <div className="bg-red-500 h-32">01</div>
    <div className="bg-red-500 h-32">02</div>
    <div className="bg-red-500 h-32">03</div>
    <div className="bg-red-500 h-32">04</div>
  </div>
  )
}

export default Portfolio;