import React, {lazy, Suspense} from "react";
const ProjectsCarousel = lazy(() => import('./ProjectsCarousel'));
import projectsData from '../assets/projects';

const Projects = ({ handleClick }) => {

  return (
    <div
  
    className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform  bg-raccoon-primary/70 w-full md:w-1/2 dark:bg-gray-800"
    
  >
    <a href="https://github.com/bkhebert">
    <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-200 dark:text-gray-400">
      <svg className="w-4 h-4 me-2.5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      My Projects
    </h5>
    </a>
    <button
      type="button"
      className="text-gray-200 bg-transparent hover:bg-yellow-300 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      onClick={() => {
        handleClick("Projects")
      }}
    >
      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span className="sr-only"
   
      >Close menu</span>
    </button>
    <section className="py-12 bg-slate-50/50 dark:bg-gray-900 border md:h-3/4 rounded-lg ">
      <div className="container mx-auto px-4 overflow-auto">
      <Suspense
              fallback={
                <div className="flex justify-center align-center">
                  <div>lazily loading</div>
                </div>
              }
            >
        <ProjectsCarousel projects={projectsData} />
        </Suspense>
      </div>
    </section>
  </div>

);
}

export default Projects;