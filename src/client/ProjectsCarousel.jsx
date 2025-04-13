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
    <div className="relative w-full mx-auto h-[400px] md:h-[600px] overflow-y-auto overflow-x-hidden bg-indigo-700/50  rounded"> {/* Reduced height */}
      {/* Project Slides */}
      <div 
        className="flex transition-transform duration-300 ease-in-out h-full rounded"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projects.map((project, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 flex-col gap-2 p-1 "> {/* Reduced padding */}
            {/* Media - Now above text on all screens */}

            <div className="flex justify-center items-center h-5/9 overflow-hidden "> {/* Smaller media area */}
              <div className="flex justify-center items-center border border-gray-200 rounded-lg  ">
              <a href={project.link}>
              <img 
                src={project.gif} 
                alt={project.name}
                className="  w-full h-full md:max-w-[600px] md:min-h-[250px] object-cover rounded-lg"
              />
              </a>
              </div>
            </div>

            {/* Content - Compact text */}
            <div className="h-4/9 overflow-y-auto ml-6 mr-6"> {/* Scrollable description */}
              <h3 className="text-base text-yellow-200 font-bold line-clamp-1 md:text-lg lg:text-4xl">{project.name}</h3> {/* Single line title */}
              <p className="text-sm text-black md:text-base lg:text-lg font-semibold">{project.description}</p> {/* Two line description */}
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
      <div className="fixed bottom-1 left-0 ml-6 -translate-x-1/2 flex gap-1 z-50">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-yellow-500' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCarousel;