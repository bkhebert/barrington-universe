import React from "react";
import ExperienceCard from "./ExperienceCard";
import educationAssets from "../assets/educationAssets";

const Education = () => {
  return (
    <div>{
      educationAssets.map((education) => 
        (

          <ExperienceCard 
          logo={education.logo}
          title={education.title} 
          dateOrStack={education.dateOrStack} 
          lengthOrDescription={education.lengthOrDescription} 
          role={education.role} 
          techStackArray={education.techStackArray}
          bulletsArray={education.bulletsArray}
           />
      ))
    }
  </div>
  )
}

export default Education