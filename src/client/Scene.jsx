import React, { Suspense, useState, useEffect, useRef } from 'react';
// import ThreeJSTest from './ThreeJSTest'
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf'
// import SolarSystemApp from './SolarSystem';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import Ripple from './Ripple';
import { useControls } from 'leva';
import SolarSystemApp from './SolarSystem';

const Scene = ({animation, finishAnimation, finished}) => {

  const [ camPosX, setCamPosX] = useState(-3.9);
  const [ camPosY, setCamPosY] = useState(16.7);
  const [ camPosZ, setCamPosZ] = useState(33.1);
  const [ camRotX, setCamRotX] = useState(-0.7);
  const [ camRotY, setCamRotY] = useState(0.1);
  const [ camRotZ, setCamRotZ] = useState(0.0);
  const [ camFOV, setCamFOV ] = useState(40.0);

  const intervalRef = useRef(null);

  // Ref values for mutable camera state during animation
  const camRef = useRef({
    posX: -3.9,
    posY: 16.7,
    posZ: 33.1,
    rotX: -0.7,
    rotY: 0.1,
    rotZ: 0.0,
    fov: 40.0
  });

  useEffect(() => {
    if (animation && !finished) {
      // Start interval
      intervalRef.current = setInterval(() => {
        const c = camRef.current;
        console.log('hello world')
        if (c.posX <= 0) c.posX += 0.05;
        if (c.posY <= 50) c.posY += 0.3;
        if (c.posZ >= 0) c.posZ -= 0.15;
        if (c.rotX >= -1.6) c.rotX -= 0.005;
        if (c.rotY >= 0) c.rotY -= 0.003;
        if (c.rotZ >= 0) c.rotZ -= 0.001;
        if (c.fov <= 90) c.fov += 0.333;

        setCamPosX(c.posX);
        setCamPosY(c.posY);
        setCamPosZ(c.posZ);
        setCamRotX(c.rotX);
        setCamRotY(c.rotY);
        setCamRotZ(c.rotZ);
        setCamFOV(c.fov);
      }, 25);
    } else {
      // Clear interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    if(finished){
      console.log('finished animation')
      setCamFOV(45)
    }
    // Cleanup on unmount or animation change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [animation, finished]);

  // const {posX, posY, posZ, rotX, rotY, rotZ, fov} = useControls("PerspectiveCamera", {
  //    posX: {
  //     value: -3.9,
  //     step: 0.1,
  //    },
  //    posY: {
  //     value: 16.7,
  //     step: 0.1,
  //    },
  //    posZ: {
  //     value: 33.1,
  //     step: 0.1,
  //    },
  //    rotX: {
  //     value: -0.7,
  //     step: 0.1,
  //    },
  //    rotY: {
  //     value: 0.1,
  //     step: 0.1,
  //    },
  //    rotZ: {
  //     value: 0.0,
  //     step: 0.1,
  //    },
  //    fov: {
  //     value: 74,
  //     step: 0.1,
  //    }
  // });

    return ( 
      <Suspense fallback={<div>Loading</div>}> 
      
      <Canvas className="mx-auto">
        <PerspectiveCamera
        makeDefault
        fov={camFOV} // Real Cam
        position={[ camPosX, camPosY, camPosZ]} 
        rotation={[ camRotX, camRotY, camRotZ]}
        // position={[ posX, posY, posZ]} //  Leva Control
        // rotation={[ rotX, rotY, rotZ]} //
        // fov={fov} //
        // fov={75} // Orbit controls
        // position={[10, 0, 50]}
        // rotation={[0, 0, 0]}
        /> 
     <OrbitControls enableZoom={true} enablePan={true}
          enableRotate={true}
           />
        { finished && (<SolarSystemApp></SolarSystemApp>)}
        <Perf />
      {/* <SolarSystemApp></SolarSystemApp> */}
      {!finished &&  <Ripple animation={animation} finishAnimation={finishAnimation} finished={finished}></Ripple> }
     {/*  <ThreeJSTest></ThreeJSTest>*/}
      </Canvas> 
      </Suspense>
    )
};


export default Scene;