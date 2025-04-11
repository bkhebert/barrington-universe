import React, { useEffect } from 'react';
import { initDrawers } from 'flowbite';
import skillAssets from '../assets/skillAssets';
import learningAssets from '../assets/learningAssets';

export default function Skills({handleClick}) {


  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-full overflow-y-auto">
       
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
                { skillAssets.map((skill) => (
                  <img class={`w-[45px] h-[45px] border-2 border-black rounded-lg overflow-hidden md:w-[60px] md:h-[60px]`} style={{backgroundColor: `${skill.color}`}} src={skill.image} alt="Default avatar"></img>
                ))}
            </div>
        
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            </div>
        </div>
    </div>
</div>
  )
}