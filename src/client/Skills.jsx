import React, { useEffect } from 'react';
import { initDrawers } from 'flowbite';
import skillAssets from '../assets/skillAssets';
import learningAssets from '../assets/learningAssets';
import { initPopovers } from 'flowbite';

export default function Skills({handleClick}) {
  useEffect(() => {
    initPopovers();
  }, []);

  return (

    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-full ">
       
        <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700  bg-neutral-300">
          
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Skills
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                 onClick={(() => {
                  handleClick("Skills")
                })}
                >
                    <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                  
                </button>
            </div>
          
            <div class="grid grid-cols-4 p-4  md:grid-cols-7 md:p-5 gap-4">
            {skillAssets.map((skill, index) => {
  const popoverId = `popover-${index}`;

  return (
    <div key={index} className="relative">
      <img
        data-popover-target={popoverId}
        className="w-[45px] h-[45px] border-2 border-black rounded-lg overflow-hidden md:w-[60px] md:h-[60px]"
        style={{ backgroundColor: `${skill.color}` }}
        src={skill.image}
        alt="Skill icon"
      />
      <div
        data-popover
        id={popoverId}
        role="tooltip"
        className="absolute z-50 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
      >
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
        </div>
        <div className="px-3 py-2">
          <p>{skill.description}</p>
        </div>
        <div data-popper-arrow></div>
        </div>
         </div>
     );
  })}
            </div>
        
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <div class="grid grid-cols-4 p-4  md:grid-cols-7 md:p-5 gap-4">
Learning:
            {learningAssets.map((learning, index) => {
  const popoverIdLearning = `popover-learning-${index}`;

  return (
    <div key={index} className="relative">
      <img
        data-popover-target={popoverIdLearning}
        className="w-[25px] h-[25px] border-2 border-black rounded-lg overflow-hidden md:w-[30px] md:h-[30px]"
        style={{ backgroundColor: `${learning.color}` }}
        src={learning.image}
        alt="learning icon"
      />
      <div
        data-popover
        id={popoverIdLearning}
        role="tooltip"
        className="absolute z-50 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
      >
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">{learning.name}</h3>
        </div>
        <div className="px-3 py-2">
          <p>{learning.description}</p>
        </div>
        <div data-popper-arrow></div>
        </div>
         </div>
     );
  })}
            </div>
            </div>
        </div>
    </div>
</div>
  )
}