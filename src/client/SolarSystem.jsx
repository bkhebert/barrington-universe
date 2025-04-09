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

function Planet({ size, distance, speed, color, image, xp}) {

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
        <sphereGeometry args={[size, 256, 256]} />
        <meshStandardMaterial  
        color={color}
        roughness={0}
        metalness={1} 
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

      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={1/27} distance={30} speed={0.002} color="skyblue" image={skewedjs} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={2/27} distance={30} speed={0.002} color="tomato" image={angular} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={3/27} distance={30} speed={0.002} color="steelblue" image={css} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={4/27} distance={30} speed={0.002} color={color} image={digitalocean} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={5/27} distance={30} speed={0.002} color={color} image={expressjs} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={6/27} distance={30} speed={0.002} color={color} image={github} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={7/27} distance={30} speed={0.002} color={color} image={googlecloud} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={8/27} distance={30} speed={0.002} color={color} image={HTML5} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={9/27} distance={30} speed={0.002} color={color} image={linux} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={10/27} distance={30} speed={0.002} color={color} image={magicui} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={11/27} distance={30} speed={0.002} color={color} image={materialui} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={12/27} distance={30} speed={0.002} color={color} image={mongodb} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={13/27} distance={30} speed={0.002} color={color} image={mysql} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>      
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={14/27} distance={30} speed={0.002} color={color} image={nginx} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={15/27} distance={30} speed={0.002} color={color} image={node} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={16/27} distance={30} speed={0.002} color={color} image={npm} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={17/27} distance={30} speed={0.002} color={color} image={pixi} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={18/27} distance={30} speed={0.002} color={color} image={postgresql} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={19/27} distance={30} speed={0.002} color={color} image={prettier} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={20/27} distance={30} speed={0.002} color={color} image={react} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={21/27} distance={30} speed={0.002} color={color} image={shadcn} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={22/27} distance={30} speed={0.002} color={color} image={sql} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={23/27} distance={30} speed={0.002} color={color} image={sqlite} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={24/27} distance={30} speed={0.002} color={color} image={tailwind} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={25/27} distance={30} speed={0.002} color={color} image={threejs} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={26/27} distance={30} speed={0.002} color={color} image={typescript} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/>
      <Planet size={2} shininess={shininess} specular={specular} emissive={emissive} xp={27/27} distance={30} speed={0.002} color={color} image={webpack} textDIFF={rockdiff} textDISP={rockdisp} imageDisp={skewedjsdisp} textARM={rockarm} textNOR={rocknor}/> 
      
    </>
  );
}
