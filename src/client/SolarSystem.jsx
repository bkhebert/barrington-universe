import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, CubeCamera, useEnvironment, Environment, Text } from '@react-three/drei';

import { useControls } from 'leva';
import qwantani_moonrise_4k from "../assets/qwantani_dawn_4k.hdr";
import planetAssets from '../assets/planetAssets';



function Planet({ size, distance, speed, color, image, xp, solid, itemExpanded, name, description}) {
  // const font = useLoader(FontLoader, '/optimer_regular.typeface.json')
  const ref = useRef();
  const refspin = useRef();
  const angle = useRef(xp * Math.PI * 2);
  const [isHovered, setIsHovered ] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    console.log('hovering', isHovered)
  }, [isHovered])

  useEffect(() => {
    isClicked ? setTimeout(() => {
      setIsClicked(false);
    }, 5000) : null
  }, [isClicked])
  useFrame((state, delta) => {
    angle.current += speed;
    ref.current.position.set(
      Math.cos(angle.current) * distance,
      0,
      Math.sin(angle.current) * distance
    );
    const shouldSpin = isHovered && !itemExpanded; // 👈 only spin if nothing is open
    const spinner = shouldSpin ? 10 : 0;
    refspin.current.rotation.y += delta * spinner;
  });

  const overlayTextures = useTexture({
    map: image,
  })
  return (
    <group ref={ref}
    
    onPointerOver={(event) => (event.stopPropagation(), setIsHovered(true))}
    onPointerOut={() => setIsHovered(false) }
    onClick={() => setIsClicked(!isClicked)}
    >
      {/* Base Sphere */}
      <mesh
            onPointerOver={(event) => (event.stopPropagation(), setIsHovered(true))}
            onPointerOut={() => setIsHovered(false) }
            onClick={() => setIsClicked(!isClicked)}
      >
        <sphereGeometry args={solid ? [size, 16, 16]: [size, 32, 32]} />
        <meshStandardMaterial  
        color={color}
        roughness={ solid ? 1 : 0}
        metalness={ solid ? 0 : 1} 
        />
      </mesh>
      {/* Overlay Sphere (slightly larger) */}
      <mesh
      ref={refspin}
      onPointerOver={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerOut={() => setIsHovered(false) }
      onClick={() => setIsClicked(!isClicked)}
      
      >
        <sphereGeometry args={[size * 1.005, 32, 32]} />
        <meshPhysicalMaterial 
          {...overlayTextures} 
          transparent
          metalness={0.3}
          roughness={0}
        />
      </mesh>
           {/* Floating Text */}
           <Suspense useFallback={null}>
        <Text
          position={[0, size + 1, 0]} // above the planet
          rotation={[0, -5, 0]}
          fontSize={0.2}
          color="black"
          anchorX="center"
          anchorY="bottom"
        >
       {isClicked ? `${name}\n${description}` : ''}
        </Text> 
        </Suspense>
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

export default function SolarSystemApp({itemExpanded}) {

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
          solid={planet.solid}
          itemExpanded={itemExpanded}
          name={planet.name}
          description={planet.description}
          />
        ))}
      
    </>
  );
}
