import React, { Suspense, useState, useEffect } from 'react';
// import ThreeJSTest from './ThreeJSTest'
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf'
// import SolarSystemApp from './SolarSystem';
import { PerspectiveCamera } from '@react-three/drei';
import Ripple from './Ripple';
import { useControls } from 'leva';


const Scene = ({animation}) => {
  const [ camPosX, setCamPosX] = useState(-3.9);
  const [ camPosY, setCamPosY] = useState(16.7);
  const [ camPosZ, setCamPosZ] = useState(33.1);
  const [ camRotX, setCamRotX] = useState(-0.7);
  const [ camRotY, setCamRotY] = useState(0.1);
  const [ camRotZ, setCamRotZ] = useState(0.0);
  const [ camFOV, setCamFOV ] = useState(40.0);

    let cpx = -3.9;
    let cpy = 16.7;
    let cpz = 33.1;
    let crx = -0.7;
    let cry = 0.1;
    let crz = 0.0;
    let cfv = 40.0;
  
    const animationInterval = (bool) => {
      let startanimate = setInterval(() => {
        // freq = freq + 0.001;
        cpx <= 0 ?   cpx += 0.05 : null;
        cpy <= 50 ?  cpy += 0.3   : null;  
        cpz >= 0 ?    cpz -= 0.15  : null;  
        crx >= -1.6 ? crx -= 0.005 : null;
        cry >= 0  ?  cry -= 0.003 : null;
        crz >= 0  ?  crz -= 0.001 : null;
        cfv <= 90 ?  cfv += 0.333   : null;
        // setFrequency(freq)
        setCamPosX(cpx)
        setCamPosY(cpy)
        setCamPosZ(cpz)
        setCamRotX(crx)
        setCamRotY(cry)
        setCamRotZ(crz)
        setCamFOV(cfv)
      }, 25);
  
      if(!bool){
      clearInterval(startanimate)
      }
    }

    useEffect(() => {
      if(animation){
          animationInterval(true)
        }
        return () => {
          animationInterval(false)
        }
      }, [animation])



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
        fov={camFOV}
        position={[ camPosX, camPosY, camPosZ]}
        rotation={[ camRotX, camRotY, camRotZ]}
  />
        <Perf />
      <Ripple animation={animation}></Ripple>
     {/*  <ThreeJSTest></ThreeJSTest>*/}
      </Canvas> 
      {/* <SolarSystemApp></SolarSystemApp> */}
      </Suspense>
    )
};


export default Scene;