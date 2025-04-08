import React, { useState } from "react";
import Time from "./Time";
import Scene from "./Scene";
import selfie from "../assets/selfie.jpg"
const Home = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [glow, setGlow] = useState("");
  const [ animation, setAnimation ] = useState(false);
  const [finished, setFinished] = useState(false);
  const showProfile = () => {
    setIsHovered(!isHovered);
    if(!isHovered){
    setGlow('drop-shadow(0 10px 10px rgb(75, 78, 255))')
    } else {
      setGlow("")
    }
  }

  const startAnimation = () => {
    setAnimation(true);
  }

  const finishAnimation = (bool) => {
    if(bool){
      console.log('animation is completed')
      setFinished(true);
    }
  }

  return (
    <div className="relative min-h-screen">

      <div className="inset-0 w-screen h-screen -z-10">
      <Scene animation={animation} finishAnimation={finishAnimation} finished={finished}></Scene>
      </div>
    {
      !animation && 
    <>
      <div className="fixed inset-0 flex flex-col items-center justify-center mb-40">
      <div className="h-[200px] flex items-center"> {/* Reserved space */}
   { 
    isHovered && (
      <img 
        class="w-[200px] h-[190px] p-1 rounded-full ring-2 mb-[10px] ring-raccoon-primary opacity-90 animate-fade-in"
        src={selfie} 
        alt="Bordered avatar"
      />)
   }
    </div>
        <button 
        className={`w-32 h-16 bg-raccoon-primary/50 border-4 border-double rounded-xl text-white font-bold`}
        style={{ filter: glow }}
        onPointerEnter={showProfile}
        onPointerLeave={showProfile}
        onClick={startAnimation}
        >
          Enter Site
        </button>
      </div>
    
      <div className="absolute bottom-0 left-0 ">
      <Time></Time>
      </div>
    </>
  
  }
  { animation && !finished && (
     <div className="fixed inset-0 flex flex-col items-center justify-center mb-40">
            <button 
            className={`w-16 h-8 bg-gray-200/5 border-4 border-double rounded-xl text-white/30 font-bold animate-[moveToBottom_1s_ease-in-out_forwards] hover:text-white`}
            onPointerEnter={showProfile}
            onPointerLeave={showProfile}
            onClick={finishAnimation}
            >
              Skip
            </button>
            </div>
  )}
    </div>
    
  )
}

export default Home;