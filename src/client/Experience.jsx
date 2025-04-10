import React from "react";
import ExperienceCard from "./ExperienceCard";
import resumeAssets from "../assets/resumeAssets";


const Experience = () => {

  return (
    <div>{
      resumeAssets.map((experience) => 
        (

          <ExperienceCard 
          logo={experience.logo}
          title={experience.title} 
          dateOrStack={experience.dateOrStack} 
          lengthOrDescription={experience.lengthOrDescription} 
          role={experience.role} 
          techStackArray={experience.techStackArray}
          bulletsArray={experience.bulletsArray}
           />
      ))
    }
  </div>
  )
}

export default Experience