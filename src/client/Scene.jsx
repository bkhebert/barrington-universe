import React, { Suspense } from 'react';
// import ThreeJSTest from './ThreeJSTest'
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf'
// import SolarSystemApp from './SolarSystem';
import { PerspectiveCamera } from '@react-three/drei';
import Ripple from './Ripple';

const Scene = () => {

    return ( 
      <Suspense fallback={<div>Loading</div>}> 
      <Canvas className="mx-auto">
        <PerspectiveCamera
        makeDefault
        fov={75}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
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