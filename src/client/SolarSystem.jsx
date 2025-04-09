import React, { useRef } from 'react';
import { Canvas, useFrame,  useThree } from '@react-three/fiber';
import { OrbitControls, Html, PerspectiveCamera, useTexture, useCubeTexture } from '@react-three/drei';
import * as THREE from 'three';
import js from "../assets/javascript.png";
import { useControls } from 'leva';
import skewedjs from "../assets/skewedjs.png";
import rockdiff from "../assets/aerial_rocks_02_diff_1k.jpg" ;
import rockdisp from "../assets/aerial_rocks_02_disp_1k.jpg" ;
import rocknor from "../assets/aerial_rocks_02_nor_gl_1k.jpg"
import rockarm from "../assets/aerial_rocks_02_arm_1k.jpg";
import angular from "../assets/skewedlogos/angular.png"
import css from "../assets/skewedlogos/css.png"
import digitalocean from "../assets/skewedlogos/digitalocean.png"
import expressjs from "../assets/skewedlogos/express-js.png"
import github from "../assets/skewedlogos/github.png"
import googlecloud from "../assets/skewedlogos/googlecloud.png"
import HTML5 from "../assets/skewedlogos/HTML5.png"
import linux from "../assets/skewedlogos/linux.png"
import magicui from "../assets/skewedlogos/magicui.png"
import materialui from "../assets/skewedlogos/materialui.png"
import mongodb from "../assets/skewedlogos/mongodb.png"
import mysql from "../assets/skewedlogos/mysql.png"
import nginx from "../assets/skewedlogos/nginx.png"
import node from "../assets/skewedlogos/node.png"
import npm from "../assets/skewedlogos/npm.png"
import pixi from "../assets/skewedlogos/pixi.png"
import postgresql from "../assets/skewedlogos/postgresql.png"
import prettier from "../assets/skewedlogos/prettier.png"
import react from "../assets/skewedlogos/react.png"
import shadcn from "../assets/skewedlogos/shadcn.png"
import sql from "../assets/skewedlogos/SQL.png"
import sqlite from "../assets/skewedlogos/sqlite.png"
import tailwind from "../assets/skewedlogos/tailwind.png"
import threejs from "../assets/skewedlogos/threejs.png"
import typescript from "../assets/skewedlogos/typescript.png"
import webpack from "../assets/skewedlogos/webpack.png"
import skewedjsdisp from "../assets/skewedjsdisp.png";
import spaceCubenx from "../assets/milkyway/nx.png";
import spaceCubeny from "../assets/milkyway/ny.png";
import spaceCubenz from "../assets/milkyway/nz.png";
import spaceCubepx from "../assets/milkyway/px.png";
import spaceCubepy from "../assets/milkyway/py.png";
import spaceCubepz from "../assets/milkyway/pz.png";


function Planet({ size, distance, speed, color, image, emissive, shininess, specular, textDIFF, textDISP, imageDisp, textARM, textNOR, xp}) {

  const ref = useRef();
  const angle = useRef(xp * Math.PI * 2);
  
  useFrame(() => {
    angle.current += speed;
    const x = Math.cos(angle.current) * distance;
    const z = Math.sin(angle.current) * distance;
   // const y = Math.cos(angle.current);
    ref.current.position.set(x, 0, z);
  });


  const SpaceCubeTexture = useCubeTexture([
    spaceCubepx,
    spaceCubenx,
    spaceCubepy,
    spaceCubeny,
    spaceCubepz,
    spaceCubenz,
  ], {path: ""});

  // const textures = useTexture({
  //   map: textDIFF,
  //   displacementMap: textDISP,
  //   aoMap: textARM,        // Ambient occlusion
  //   roughnessMap: textARM,  // Surface roughness
  //   metalnessMap: textARM,  // Metallic reflection
  //   normalMap: textNOR,      // Surface bumps
  // })

  const overlayTextures = useTexture({
    map: image,
    // displacementMap: textDISP,
    // aoMap: textARM,        // Ambient occlusion
    // roughnessMap: textARM,  // Surface roughness
    // metalnessMap: textARM,  // Metallic reflection
    // normalMap: textNOR      // Surface bumps
  })
  return (
    <group ref={ref}>
      {/* Base Sphere */}
      <mesh>
        <sphereGeometry args={[size, 256, 256]} />
        <meshPhongMaterial  envMap={SpaceCubeTexture}
         color={color} 
         specular={specular} // color of shine
         emissive={emissive} 
         shininess={shininess} // how sharp the shine is
        />
        
      </mesh>
      
      {/* Overlay Sphere (slightly larger) */}
      <mesh>
        <sphereGeometry args={[size * 1.008, 32, 32]} />
        <meshStandardMaterial 
          {...overlayTextures} 
          transparent
         
          // displacementScale={0.007}
          metalness={0.3}
          roughness={0}
        />
      </mesh>
    </group>
  );
}


function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[6, 64, 64]} />
      <meshBasicMaterial color="yellow" />
    </mesh>
  );
}

export default function SolarSystemApp() {

  const { 
    emissive, 
    shininess, 
    specular, 
  } = useControls({
    shininess: 30,
    specular: "#111111",
    emissive: "skyblue"
  })
  
  const SpaceCubeTexture = useCubeTexture([
    spaceCubepx,
    spaceCubenx,
    spaceCubepy,
    spaceCubeny,
    spaceCubepz,
    spaceCubenz,
  ], {path: ""});

  const {scene} = useThree()

  scene.background = SpaceCubeTexture;


  return (
    <>
         {/* <PerspectiveCamera
            makeDefault
            fov={50} // Real Cam
            position={[ 0, 50, 100]} 
            rotation={[ 0, 0, 0]}
            // position={[ posX, posY, posZ]} //  Leva Control
            // rotation={[ rotX, rotY, rotZ]} //
            // fov={fov} //
            /> */}
            <directionalLight 
        position={[10, 10, 10]} 
        intensity={1}
        
        color={"white"}
        />
        {/* <directionalLight 
        position={[-10, -10, -10]} 
        intensity={1}
        
        color={"white"}
        /> */}
      {/* <ambientLight color={"white"}intensity={1} />
      <ambientLight color={"white"}intensity={1} /> */}
      <ambientLight color={"white"}intensity={2} />
      <pointLight position={[0, 0, 0]} intensity={1} />
      <Sun />
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={1/27} distance={30} speed={0.002} color="skyblue" image={skewedjs} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={2/27} distance={30} speed={0.002} color="tomato" image={angular} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={3/27} distance={30} speed={0.002} color="steelblue" image={css} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={4/27} distance={30} speed={0.002} color="firebrick" image={digitalocean} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={5/27} distance={30} speed={0.002} color="firebrick" image={expressjs} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={6/27} distance={30} speed={0.002} color="firebrick" image={github} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={7/27} distance={30} speed={0.002} color="firebrick" image={googlecloud} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={8/27} distance={30} speed={0.002} color="firebrick" image={HTML5} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={9/27} distance={30} speed={0.002} color="firebrick" image={linux} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={10/27} distance={30} speed={0.002} color="firebrick" image={magicui} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={11/27} distance={30} speed={0.002} color="firebrick" image={materialui} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={12/27} distance={30} speed={0.002} color="firebrick" image={mongodb} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={13/27} distance={30} speed={0.002} color="firebrick" image={mysql} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>      
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={14/27} distance={30} speed={0.002} color="firebrick" image={nginx} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={15/27} distance={30} speed={0.002} color="firebrick" image={node} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={16/27} distance={30} speed={0.002} color="firebrick" image={npm} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={17/27} distance={30} speed={0.002} color="firebrick" image={pixi} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={18/27} distance={30} speed={0.002} color="firebrick" image={postgresql} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={19/27} distance={30} speed={0.002} color="firebrick" image={prettier} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={20/27} distance={30} speed={0.002} color="firebrick" image={react} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={21/27} distance={30} speed={0.002} color="firebrick" image={shadcn} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={22/27} distance={30} speed={0.002} color="firebrick" image={sql} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={23/27} distance={30} speed={0.002} color="firebrick" image={sqlite} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={24/27} distance={30} speed={0.002} color="firebrick" image={tailwind} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={25/27} distance={30} speed={0.002} color="firebrick" image={threejs} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={26/27} distance={30} speed={0.002} color="firebrick" image={typescript} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={27/27} distance={30} speed={0.002} color="firebrick" image={webpack} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/> 
     
    </>
  );
}

//
// Math.random() * 0.01
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