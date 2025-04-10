import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame,  useThree } from '@react-three/fiber';
import { OrbitControls, Html, useTexture, useCubeTexture, CubeCamera, useEnvironment, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from 'leva';
import qwantani_moonrise_4k from "../assets/qwantani_dawn_4k.hdr";
import planetAssets from '../assets/planetAssets';

function Planet({ size, distance, speed, color, image, xp, solid}) {

  const ref = useRef();
  const angle = useRef(xp * Math.PI * 2);

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
        <sphereGeometry args={solid ? [size, 16, 16]: [size, 32, 32]} />
        <meshStandardMaterial  
        color={color}
        roughness={ solid ? 1 : 0}
        metalness={ solid ? 0 : 1} 
        />
      </mesh>
      {/* Overlay Sphere (slightly larger) */}
      <mesh>
        <sphereGeometry args={[size * 1.005, 32, 32]} />
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
      <sphereGeometry args={[5, 64, 64]} />
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
        {planetAssets.map((planet) => (
          <Planet 
          size={planet.size} 
          xp={planet.xp} 
          distance={planet.distance} 
          speed={planet.speed} 
          color={planet.color} 
          image={planet.image} 
          solid={planet.solid}/>
        ))}
      
    </>
  );
}
