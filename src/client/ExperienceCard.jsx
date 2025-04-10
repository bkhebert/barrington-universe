import React from "react";

const ExperienceCard = ({
  logo,
  title, 
  dateOrStack, 
  lengthOrDescription, 
  role, 
  techStackArray,
  bulletsArray,
}) => {

  return (
    <div className="flex space-x-4 relative">
      {/* Left: Logo + Line */}
      <div className="flex flex-col items-center">
        <img
          src={logo} 
          alt="Company Logo"
          className="w-[120px] h-[120px] rounded-md"
        />
        <div className="w-px h-full bg-purple-300 mt-2"></div>
      </div>

      {/* Right: Content */}
      <div className="pb-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
          <h3 className="text-lg font-semibold text-purple-400">{title}</h3>
          <span className="text-sm text-gray-400">
            {lengthOrDescription}
          </span>
        </div>

        {/* Role & Location */}
        <div className="text-sm text-lime-600 mb-2">
          <span className="font-semibold text-lime-300">{role}</span>{" "}
          {dateOrStack}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {techStackArray.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-xs text-white rounded-full border border-gray-600 hover:bg-raccoon-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Responsibilities */}
        <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
         {
         bulletsArray.map((bullet) => ( <li>{bullet}</li> ))
          }
        </ul>
      </div>
    </div>
  )
}

export default ExperienceCard;