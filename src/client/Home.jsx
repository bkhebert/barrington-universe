import React from "react";
import Time from "./Time";
import Scene from "./Scene";

const Home = () => {

  return (
    <>
    <div className="fixed inset-0 w-screen h-screen -z-10">
    <Scene></Scene>
    </div>
    <div className="absolute bottom-0 left-0 ">
     <Time></Time>
    </div>
    </>
  )
}

export default Home;