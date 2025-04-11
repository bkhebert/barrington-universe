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
    <div className="relative w-full max-w-4xl mx-auto h-[500px] overflow-hidden">
      {/* Project Slides */}
      <div 
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projects.map((project, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full flex flex-col md:flex-row gap-6 p-4">
            {/* Media */}
            <div className="md:w-1/2 h-full rounded-lg overflow-hidden border-2 border-gray-200">
              <img 
                src={project.gif} 
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10"
      >
        ←
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10"
      >
        →
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCarousel;