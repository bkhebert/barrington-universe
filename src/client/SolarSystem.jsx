import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame,  useThree } from '@react-three/fiber';
import { OrbitControls, Html, useTexture, useCubeTexture, CubeCamera, useEnvironment, Environment } from '@react-three/drei';
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
import qwantani_moonrise_4k from "../assets/qwantani_dawn_4k.hdr";

function Planet({ size, distance, speed, color, image, xp, solid}) {

  const ref = useRef();
  const angle = useRef(xp * Math.PI * 2);
  const texture = useMemo(() => new THREE.TextureLoader().load(image), [image]);

  useFrame(() => {
    angle.current += speed;
    ref.current.position.set(
      Math.cos(angle.current) * distance,
      0,
      Math.sin(angle.current) * distance
    );
  });

  const overlayTextures = useTexture({
    map: image,
  })
  return (
    <group ref={ref}>
      {/* Base Sphere */}
      <mesh>
        <sphereGeometry args={solid ? [size, 32, 32]: [size, 256, 256]} />
        <meshStandardMaterial  
        color={color}
        roughness={ solid ? 1 : 0}
        metalness={ solid ? 0 : 1} 
        />
      </mesh>
      {/* Overlay Sphere (slightly larger) */}
      <mesh>
        <sphereGeometry args={[size * 1.005, 128, 128]} />
        <meshPhysicalMaterial 
          {...overlayTextures} 
          transparent
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
      <sphereGeometry args={[20, 64, 64]} />
        <meshPhysicalMaterial  
         color={"white"} 
         transmission={1}
         roughness={0}
         metalness={0}
         ior={2.33}
        />
    </mesh>
  );
}

export default function SolarSystemApp() {

  const envMap = useEnvironment({ files: qwantani_moonrise_4k });

  const { 
    color,
    
  } = useControls({
    color: "white"
  })

  return (
    <>
      <ambientLight color={"white"}intensity={2} />
      <directionalLight 
        position={[10, 10, 10]} 
        intensity={1}
        color={"white"}
        />
      <pointLight position={[0, 0, 0]} intensity={1} />
      <Environment map={envMap} background></Environment>

      <CubeCamera>
        {(texture) => 
          <>
            <Sun />
            <Environment map={texture} />
          </>
        }
      </CubeCamera>

      <Planet size={2} xp={1/27} distance={30} speed={0.002} color="#f4ec0f" image={skewedjs}/>
      <Planet size={2} xp={2/27} distance={30} speed={0.002} color="#eda100" image={angular}/>
      <Planet size={2} xp={3/27} distance={30} speed={0.002} color="#0fd6f4" image={css}/>
      <Planet size={2} xp={4/27} distance={30} speed={0.002} color={"#005fff"} image={digitalocean}/>
      <Planet size={2} xp={5/27} distance={30} speed={0.002} color={"#25f900"} image={expressjs}/>
      <Planet size={2} xp={6/27} distance={30} speed={0.002} color={"#ffffff"} image={github}/>
      <Planet size={2} xp={7/27} distance={30} speed={0.002} color={"#000000"} image={googlecloud}/>
      <Planet size={2} xp={8/27} distance={30} speed={0.002} color={"#f4810f"} image={HTML5}/>
      <Planet size={2} xp={9/27} distance={30} speed={0.002} color={"#504e42"} image={linux}/>
      <Planet size={2} xp={10/27} distance={30} speed={0.002} color={"#6800ff"} image={magicui}/>
      <Planet size={2} xp={11/27} distance={30} speed={0.002} color={"#ffffff"} image={materialui}/>
      <Planet size={2} xp={12/27} distance={30} speed={0.002} color={"#60ef61"} image={mongodb}/>
      <Planet size={2} xp={13/27} distance={30} speed={0.002} color={"#97e7ff"} image={mysql}/>      
      <Planet size={2} xp={14/27} distance={30} speed={0.002} color={"#005e19"} image={nginx}/>
      <Planet size={2} xp={15/27} distance={30} speed={0.002} color={"#ffffff"} image={node}/>
      <Planet size={2} xp={16/27} distance={30} speed={0.002} color={"#c20000"} image={npm}/>
      <Planet size={2} xp={17/27} distance={30} speed={0.002} color={"#ff7edf"} image={pixi}/>
      <Planet size={2} xp={18/27} distance={30} speed={0.002} color={"#ffffff"} image={postgresql}/>
      <Planet size={2} xp={19/27} distance={30} speed={0.002} color={"#a2a2a2"} image={prettier}/>
      <Planet size={2} xp={20/27} distance={30} speed={0.002} color={"#ffffff"} image={react} solid={true}/>
      <Planet size={2} xp={21/27} distance={30} speed={0.002} color={"#00ff23"} image={shadcn}/>
      <Planet size={2} xp={22/27} distance={30} speed={0.002} color={"#7adcee"} image={sql}/>
      <Planet size={2} xp={23/27} distance={30} speed={0.002} color={"#7aa8ee"} image={sqlite}/>
      <Planet size={2} xp={24/27} distance={30} speed={0.002} color={"#ffffff"} image={tailwind}/>
      <Planet size={2} xp={25/27} distance={30} speed={0.002} color={"#7a5dd1"} image={threejs}/>
      <Planet size={2} xp={26/27} distance={30} speed={0.002} color={"#0061c0"} image={typescript}/>
      <Planet size={2} xp={27/27} distance={30} speed={0.002} color={"#ffffff"} image={webpack} solid={true}/> 
      
    </>
  );
}
