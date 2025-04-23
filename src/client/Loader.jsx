import { Html, useProgress } from '@react-three/drei';
import React, { useState, useEffect } from 'react';

export default function Loader() {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [fakeProgressStats, setFakeProgressStats] = useState("Loading Universe...")
  const fakeArray = [
    "Compiling Quantum Flux Capacitors…",
    "Calibrating Hyperdrive Coordinates…",
    "Injecting JavaScript into the Mainframe…",
    "Bypassing Firewall with Digital Espresso…",
    "Negotiating with AI Overlords…",
    "Synchronizing 5D Chess Moves…",
    "ERROR: Missing semicolon in universe. Rebuilding spacetime…",
  ]
  // Delay state update until after render
  useEffect(() => {
    if(displayProgress !== 100){
      console.log(displayProgress)
    setDisplayProgress(progress)
    setFakeProgressStats(fakeArray[Math.floor(Math.random() * fakeArray.length)])
    }
    
  }, [progress, displayProgress]);

  return (
<Html fullscreen>
  <div className="absolute top-4 left-1/2 -translate-x-1/2">
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      width: '300px'
    }}>
      <div style={{ color: 'white', fontSize: '1rem' }}>
        {fakeProgressStats}
      </div>

      {/* Progress Bar Container */}
      <div style={{
        width: '100%',
        height: '6px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '3px',
        overflow: 'hidden'
      }}>
        {/* Animated Progress Bar */}
        <div style={{
          width: `${displayProgress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
          borderRadius: '3px',
          transition: 'width 0.3s ease-out',
          boxShadow: '0 0 8px rgba(79, 172, 254, 0.6)'
        }} />
      </div>
    </div>
  </div>
</Html>

  );
}