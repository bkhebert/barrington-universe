import React, { useEffect, useRef, useState } from 'react';
// import Scene from './Scene';
import Home from './Home';
import RaccoonCityMassacreBeat from "../assets/sounds/RaccoonCityMassacreBeat.mp3"
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; // for the icon

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

    return ( 
        <div className="relative">
      <Home/>
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 text-white text-3xl hover:scale-110 transition"
        aria-label="Toggle music"
      >
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>

      {/* Audio Element */}
      <audio ref={audioRef} src={RaccoonCityMassacreBeat} loop preload="auto" />
   
      </div>

    )
};

export default App;