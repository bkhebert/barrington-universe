import { Html, useProgress } from '@react-three/drei';
import React, { useState, useEffect } from 'react';

export default function Loader() {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);

  // Delay state update until after render
  useEffect(() => {
    setDisplayProgress(progress);
  }, [progress]);

  return (
    <Html center>
      <div style={{ color: 'white', fontSize: '1.5rem' }}>
        {displayProgress.toFixed(0)}% loaded
      </div>
    </Html>
  );
}