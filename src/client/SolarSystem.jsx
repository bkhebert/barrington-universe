import React, { useRef, useState, useEffect, Suspense } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture, CubeCamera, useEnvironment, Environment, Text } from '@react-three/drei';
import * as THREE from "three"
import planetAssets from '../assets/planetAssets';



function Planet({ size, distance, speed, color, image, xp, solid, itemExpanded, name, description, selectedPlanetName, setSelectedPlanetName, isSun = false}) {

  const ref = useRef();
  const refspin = useRef();
  const angle = useRef(xp * Math.PI * 2);
  const [isHovered, setIsHovered ] = useState(false);
  const isClicked = selectedPlanetName === name;
  // const [planetSelected, setPlanetSelected] = useState(false);

  useEffect(() => {

  }, [isHovered])



  useFrame((state, delta) => {
  
    angle.current += speed; // Always update the orbit angle

    if (isClicked && !isSun) {
      
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
        envMapMapping={THREE.CubeReflectionMapping}
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
          envMapMapping={THREE.CubeReflectionMapping}
        />
      </mesh>
           {/* Floating Text */}
           <Suspense useFallback={null}>
        <Text
          position={[0, size + 1, 0]} // above the planet
          rotation={[0, 1.5, 0]}
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

  const sunRef = useRef();

  useEffect(() => {
    if (sunRef.current) {
      sunRef.current.layers.set(1); // Assign layer 1
    }
  }, []);

  return (
    <mesh 
      ref={sunRef}
    onPointerDown={(e) => e.stopPropagation()}
    onPointerMove={(e) => e.stopPropagation()}
    onPointerOver={(e) => e.stopPropagation()}
    onPointerOut={(e) => e.stopPropagation()}>
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
  const cubeCameraRef = useRef();
  const { camera } = useThree();
  useEffect(() => {
    if (cubeCameraRef.current) {
      // Exclude layer 1 (Sun's layer)
      cubeCameraRef.current.layers.enableAll();
      cubeCameraRef.current.layers.disable(1);
    }
  }, []);
  useEffect(() => {
    // Let the main camera see both default layer (0) and the Sun layer (1)
    camera.layers.enable(1);
  }, [camera]);
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
     {!preloadOnly && (<Environment map={envMap} background ></Environment>
     )}
      <CubeCamera ref={cubeCameraRef} near={1} far={1000} resolution={512} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      {(texture) => {
    
    return (
      <>
        <Environment map={texture} />
      </>
    );
  }}
      </CubeCamera>
        <Sun></Sun>
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
