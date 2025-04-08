import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Planet({ size, distance, speed, color }) {
  const ref = useRef();
  const angle = useRef(Math.random() * Math.PI * 2);

  useFrame(() => {
    angle.current += speed;
    const x = Math.cos(angle.current) * distance;
    const z = Math.sin(angle.current) * distance;
    ref.current.position.set(x, 0, z);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[5, 32, 32]} />
      <meshBasicMaterial color="yellow" />
    </mesh>
  );
}

export default function SolarSystemApp() {
  return (
    <>
         <PerspectiveCamera
            makeDefault
            fov={50} // Real Cam
            position={[ 0, 50, 100]} 
            rotation={[ 0, 0, 0]}
            // position={[ posX, posY, posZ]} //  Leva Control
            // rotation={[ rotX, rotY, rotZ]} //
            // fov={fov} //
            />
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={2} />
      <Sun />
      <Planet size={1} distance={10} speed={0.01} color="skyblue" />
      <Planet size={2} distance={16} speed={0.008} color="tomato" />
      <Planet size={2.5} distance={24} speed={0.006} color="steelblue" />
      <Planet size={1.8} distance={30} speed={0.005} color="firebrick" />
      <OrbitControls enableDamping />
    </>
  );
}

// export default function SolarSystemApp() {
//   return (
//     <div style={{ height: '100vh', width: '100vw' }}>
//       <Canvas camera={{ position: [0, 50, 100], fov: 60 }}>
//         <SolarSystemScene />
//       </Canvas>
//       <div style={{
//         position: 'absolute',
//         top: 10,
//         left: 10,
//         color: 'white',
//         fontFamily: 'sans-serif',
//         zIndex: 10
//       }}>
//         Solar System Simulation
//       </div>
//     </div>
//   );
// }