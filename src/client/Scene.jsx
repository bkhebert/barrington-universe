import React, { Suspense } from 'react';
// import ThreeJSTest from './ThreeJSTest'
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf'
// import SolarSystemApp from './SolarSystem';
import { PerspectiveCamera } from '@react-three/drei';
import Ripple from './Ripple';
import { useControls } from 'leva';


const Scene = () => {

  const {posX, posY, posZ, rotX, rotY, rotZ, fov} = useControls("PerspectiveCamera", {
     posX: {
      value: -3.9,
      step: 0.1,
     },
     posY: {
      value: 16.7,
      step: 0.1,
     },
     posZ: {
      value: 33.1,
      step: 0.1,
     },
     rotX: {
      value: -0.7,
      step: 0.1,
     },
     rotY: {
      value: 0.1,
      step: 0.1,
     },
     rotZ: {
      value: 0.0,
      step: 0.1,
     },
     fov: {
      value: 74,
      step: 0.1,
     }
  });
    return ( 
      <Suspense fallback={<div>Loading</div>}> 
      <Canvas className="mx-auto">
        <PerspectiveCamera
        makeDefault
        fov={fov}
        position={[posX, posY, posZ]}
        rotation={[rotX, rotY, rotZ]}
  />
        <Perf />
      <Ripple></Ripple>
     {/*  <ThreeJSTest></ThreeJSTest>*/}
      </Canvas> 
      {/* <SolarSystemApp></SolarSystemApp> */}
      </Suspense>
    )
};


export default Scene;