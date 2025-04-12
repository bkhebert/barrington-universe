import React, { useState, useEffect, lazy, Suspense } from "react";
import Time from "./Time";
const Scene =  lazy(() => import("./Scene"));
import selfie from "../assets/selfie.jpg"
const Portfolio = lazy(() => import("./Portfolio"));
const Contact = lazy(() => import("./Contact"));

const Home = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [glow, setGlow] = useState("");
  const [ animation, setAnimation ] = useState(false);
  const [finished, setFinished] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [portfolioVisibility, setPortfolioVisibility] = useState(false);
  const [ itemExpanded, setItemExpanded ] = useState(false);

  const showPortfolio = (bool) => {
    setPortfolioVisibility(bool);
  }

  const showProfile = () => {
    setIsHovered(!isHovered);
    if(!isHovered){
    setGlow('drop-shadow(0 10px 10px rgb(75, 78, 255))')
    } else {
      setGlow("")
    }
  }

  useEffect(() => {

  }, [finished])

  const startAnimation = () => {
    setAnimation(true);
  }

  const finishAnimation = (bool) => {
    if(bool){
   
      setFinished(true);
    }
  }

  const skippedAnimation = () => {
    setFinished(true);
    setSkipped(true);
  }

  const makeItemExpanded = (bool) => {
    setItemExpanded(bool);
  }
  return (
    <div className="relative min-h-screen">

      <div className={`fixed inset-0 w-screen h-screen ${portfolioVisibility ? '' : '-z-10'}`}>
      <Suspense useFallback={null}><Scene itemExpanded={itemExpanded} skipped={skipped} animation={animation} showPortfolio={showPortfolio} finishAnimation={finishAnimation} finished={finished}></Scene></Suspense> 
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
            onClick={skippedAnimation}
            >
              Skip
            </button>
            </div>
  )}
    {
      portfolioVisibility && 
      <div className="mb-2">
      <div className="absolute inset-x-0 bottom-0">
        <div className="md:hidden flex justify-center items-center  mt-0">
      <img 
        class=" w-[70x] h-[65px] p-1 rounded-full ring-2 mb-[10px] ring-raccoon-primary opacity-90 animate-fade-in"
        src={selfie} 
        alt="Bordered avatar"
      />
      </div>
      <Suspense useFallback={null}><Portfolio itemExpanded={makeItemExpanded} ></Portfolio></Suspense>
      <Suspense useFallback={null}><Contact/></Suspense>
      </div>
      </div>
    }
    </div>
    
  )
}

export default Home;