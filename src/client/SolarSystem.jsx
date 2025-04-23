import React, { useRef, useState, useEffect, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, CubeCamera, useEnvironment, Environment, Text } from '@react-three/drei';
import * as THREE from "three"
import planetAssets from '../assets/planetAssets';



function Planet({ size, distance, speed, color, image, xp, solid, itemExpanded, name, description, selectedPlanetName, setSelectedPlanetName}) {

  const ref = useRef();
  const refspin = useRef();
  const angle = useRef(xp * Math.PI * 2);
  const [isHovered, setIsHovered ] = useState(false);
  const isClicked = selectedPlanetName === name;
  const [planetSelected, setPlanetSelected] = useState(false);

  useEffect(() => {

  }, [isHovered])



  useFrame((state, delta) => {
    const cameraOffset = new THREE.Vector3(0, 0, 0.0000001); // Planet comes 5 units closer on Z
    const currentPosition = ref.current.position;
  
    angle.current += speed; // Always update the orbit angle

    if (isClicked) {
      const cameraDirection = new THREE.Vector3();
      state.camera.getWorldDirection(cameraDirection);
      const target = state.camera.position.clone().add(cameraDirection.multiplyScalar(5));
      ref.current.position.lerp(target, 0.1);
      // setPlanetSelected(true);
    } else {
      const target = new THREE.Vector3(
        Math.cos(angle.current) * distance,
        0,
        Math.sin(angle.current) * distance
      );
      ref.current.position.lerp(target, 0.05);
      // setPlanetSelected(false);
    }
  
    const shouldSpin = isHovered && !itemExpanded;
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
    onClick={(e) => {
      e.stopPropagation();
      setSelectedPlanetName(isClicked ? null : name);
    }}
    >
      {/* Base Sphere */}
      <mesh
            onPointerOver={(event) => (event.stopPropagation(), setIsHovered(true))}
            onPointerOut={() => setIsHovered(false) }
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPlanetName(isClicked ? null : name);
            }}
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
      onClick={(e) => {
        e.stopPropagation();
        setSelectedPlanetName(isClicked ? null : name);
      }}
      
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

export default function SolarSystemApp({itemExpanded, preloadOnly}) {

  const envMap = useEnvironment({ files:  "/assets/qwantani_dawn_4k.hdr" });
  const [selectedPlanetName, setSelectedPlanetName] = useState(null);
  return (
    <>
      <ambientLight color={"white"}intensity={2} />
      <directionalLight 
        position={[10, 10, 10]} 
        intensity={1}
        color={"white"}
        />
      <pointLight position={[0, 0, 0]} intensity={1} />
     {!preloadOnly && (<Environment map={envMap} background></Environment>
     )}
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
          selectedPlanetName={selectedPlanetName}
          setSelectedPlanetName={setSelectedPlanetName}
          />
        ))}
      
    </>
  );
}
