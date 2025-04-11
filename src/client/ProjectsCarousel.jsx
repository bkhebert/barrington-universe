import React from 'react';
import { Carousel } from 'flowbite-react';

const ProjectsCarousel = ({ projects }) => {
  return (
    <div className="h-[500px] w-full max-w-4xl mx-auto">
      <Carousel 
        slideInterval={6000} 
        pauseOnHover={true}
        indicators={true}
        leftControl={<ArrowControl direction="left" />}
        rightControl={<ArrowControl direction="right" />}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Carousel>
    </div>
  );
};

// Custom Arrow Controls
const ArrowControl = ({ direction }) => (
  <span className={`absolute ${direction === 'left' ? 'left-2' : 'right-2'} top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full cursor-pointer z-10`}>
    {direction === 'left' ? '←' : '→'}
  </span>
);

// Project Card Component
const ProjectCard = ({ project }) => (
  <div className="h-full flex flex-col md:flex-row gap-6 p-4">
    {/* Media Container (Left Side) */}
    <div className="md:w-1/2 h-full rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600">
      <img 
        src={project.gif} 
        alt={project.name} 
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Text Content (Right Side) */}
    <div className="md:w-1/2 flex flex-col justify-center">
      <h3 className="text-2xl font-bold mb-3 dark:text-white">{project.name}</h3>
      <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
      
      {/* Optional: Add tags or links */}
      {/* <div className="mt-4 flex flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
      </div> */}
    </div>
  </div>
);

export default ProjectsCarousel;