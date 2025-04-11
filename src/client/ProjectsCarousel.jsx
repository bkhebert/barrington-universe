import React, { useState } from 'react';

const ProjectsCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full mx-auto h-[400px] md:h-[600px] overflow-hidden  bg-indigo-500/50  rounded"> {/* Reduced height */}
      {/* Project Slides */}
      <div 
        className="flex transition-transform duration-300 ease-in-out h-full rounded"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projects.map((project, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 flex-col gap-2 p-2 "> {/* Reduced padding */}
            {/* Media - Now above text on all screens */}

            <div className="flex justify-center items-center h-2/3 overflow-hidden "> {/* Smaller media area */}
              <div className="flex justify-center items-center border border-gray-200 rounded-lg  ">
              <img 
                src={project.gif} 
                alt={project.name}
                className="  w-full h-full md:max-w-[600px] md:min-h-[250px] object-cover rounded-lg"
              />
              </div>
            </div>

            {/* Content - Compact text */}
            <div className="h-1/3 overflow-y-auto"> {/* Scrollable description */}
              <h3 className="text-sm font-bold line-clamp-1">{project.name}</h3> {/* Single line title */}
              <p className="text-xs text-gray-600 ">{project.description}</p> {/* Two line description */}
            </div>
          </div>
        ))}
      </div>

      {/* Compact Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-yellow-600/50 hover:bg-yellow-300/70 text-white p-1 rounded-full z-10 text-xs"
      >
        ←
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-yellow-600/50 hover:bg-yellow-300/70 text-white p-1 rounded-full z-10 text-xs"
      >
        →
      </button>

      {/* Tiny Indicators */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCarousel;