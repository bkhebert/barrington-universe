import React, { Suspense, useState, useEffect, useRef, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Preload,  } from '@react-three/drei';
import Loader from './Loader';
const Ripple =  lazy(() => import('./Ripple'));
const SolarSystemApp =  lazy(() => import('./SolarSystem'));

const Scene = ({itemExpanded, animation, finishAnimation, finished, skipped, showPortfolio}) => {

  const [ camPosX, setCamPosX] = useState(-3.9);
  const [ camPosY, setCamPosY] = useState(16.7);
  const [ camPosZ, setCamPosZ] = useState(33.1);
  const [ camRotX, setCamRotX] = useState(-0.7);
  const [ camRotY, setCamRotY] = useState(0.1);
  const [ camRotZ, setCamRotZ] = useState(0.0);
  const [ camFOV, setCamFOV ] = useState(40.0);

  const introIntervalRef = useRef(null);
  const solarSystemIntervalRef = useRef(null);

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
    if (animation && !finished && !skipped) {
      // Start interval
      introIntervalRef.current = setInterval(() => {
        const c = camRef.current;
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
      if (introIntervalRef.current) {
        clearInterval(introIntervalRef.current);
        introIntervalRef.current = null;
      }
    }

    if(finished && !skipped){
      solarSystemIntervalRef.current = setInterval(() => {
        const c = camRef.current;
        if (c.posX <= 16.5) c.posX += 0.03;
        if (c.posY >= 0) c.posY -= 0.5;
        if (c.posZ >= -0.3) c.posZ -= 0.001;
        if (c.rotX <= 0) c.rotX += 0.005;
        if (c.rotY >= -4.7) c.rotY -= 0.008;
        if (c.rotZ >= 0) c.rotZ -= 0.001;
        if (c.fov >= 50.2) c.fov -= 0.2;

        setCamPosX(c.posX);
        setCamPosY(c.posY);
        setCamPosZ(c.posZ);
        setCamRotX(c.rotX);
        setCamRotY(c.rotY);
        setCamRotZ(c.rotZ);
        setCamFOV(c.fov);

        if(
          !(c.posX <= 16.5 ) &&
          !(c.posY >= 0 ) &&
          !(c.posZ >= -0.3 ) &&
          !(c.rotX <= 0 ) &&
          !(c.rotY >= -4.7 ) &&
          !(c.rotZ >= 0 ) &&
          !(c.fov >= 50.2 ) ){
          clearInterval(solarSystemIntervalRef.current);
          showPortfolio(true);
        }
      }, 20)
    } else {
      // Clear interval
      if (solarSystemIntervalRef.current) {
        clearInterval(solarSystemIntervalRef.current);
        solarSystemIntervalRef.current = null;
       
      }
    }

    if(skipped){

      setCamPosX(16.5);
      setCamPosY(0);
      setCamPosZ(-0.3);
      setCamRotX(0);
      setCamRotY(-4.7);
      setCamRotZ(0);
      setCamFOV(50.2);
      showPortfolio(true);
    }
    // Cleanup on unmount or animation change
    return () => {
      if (introIntervalRef.current) {
        clearInterval(introIntervalRef.current);
        introIntervalRef.current = null;
      }
      if (solarSystemIntervalRef.current) {
        clearInterval(solarSystemIntervalRef.current);
        solarSystemIntervalRef.current = null;
      }
    };
  }, [animation, finished, skipped]);

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
      <>
      <Canvas className="mx-auto">
        <Suspense fallback={<Loader/>}>
        <Preload all /> 
        <PerspectiveCamera
        makeDefault
        fov={camFOV} // Real Cam
        position={[ camPosX, camPosY, camPosZ]} 
        rotation={[ camRotX, camRotY, camRotZ]}
        /> 
     {/* <OrbitControls enableZoom={true} enablePan={true}
          enableRotate={true}
           /> */}
      <group visible={false}>
        <SolarSystemApp itemExpanded={itemExpanded} preloadOnly={true} />
      </group>

   

        { finished && ( 
          <SolarSystemApp itemExpanded={itemExpanded} preloadOnly={false}></SolarSystemApp>
          )}
       

      {!finished &&
      <Ripple animation={animation} finishAnimation={finishAnimation} finished={finished}></Ripple>
      }
      </Suspense>

      </Canvas> 
      
     </>
    )
};


export default Scene;