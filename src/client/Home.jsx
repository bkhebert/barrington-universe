import React from "react";
import Time from "./Time";
import Scene from "./Scene";
import selfie from "../assets/selfie.jpg"
const Home = () => {

  return (
    <div className="relative min-h-screen">
    <div className="fixed inset-0 w-screen h-screen -z-10">
    <Scene></Scene>
    </div>

    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
    <img 
  class="w-[200px] h-[190px] p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 opacity-90"
  src={selfie} 
  alt="Bordered avatar"
/>
    <button className="w-32 h-16 bg-raccoon-primary/50 border-4 border-double rounded-xl text-white">
      Enter Site
    </button>
    </div>
    <div className="absolute bottom-0 left-0 ">
     <Time></Time>
    </div>
    </div>
  )
}

export default Home;