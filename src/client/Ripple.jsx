import * as THREE from "three";
import transparentstar from "../assets/transparentstar.png";
import React, { useMemo, useCallback, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";

function Ripple(){

  const pointsRef = useRef(); // Hook to rotate the whole ripple
  const bufferRef = useRef(); // Hook to move individual points
  const imgTex= useLoader(THREE.TextureLoader, transparentstar); // Load image with THREEJS

  /* ===== WAVE SETTINGS ===== */
  // Used for equation to make a ripple
  // Think of these like dials you can turn to change the wave:
  let phaseShift = 0; // Makes the waves move outward (like dropping a pebble in water)
  let frequency = 0.028; // Higher = more ripples (like tiny waves vs big ocean waves)
  let amplitude = 1; // Higher = taller waves
  const rotationSpeed = 0.01; // How fast the whole thing spins

  /* ===== THE MAGIC WAVE FORMULA ===== */
  // This math creates the ripple pattern:
  const graph = useCallback((x, z) => {
    // this equation can be demonstrated in https://grapher.mathpix.com/
    // Radial Sine Wave (x² + z²) gets squared distance from the origin (0, 0) (like a circle/sphere equation)
    // sin(frequency * (x² + z² + phaseShift)) creates "concentric wave" patterns (like ripples in water).
    // "concentric wave"= like ripples in water)

    // 1. Calculate distance from center: x² + z² (like measuring how far from the middle)
    // 2. Add phaseShift to make it move over time
    // 3. Multiply by frequency to control ripple spacing
    // 4. Take the sine of that to get wave pattern
    // 5. Multiply by amplitude to make waves bigger/smaller
    return Math.sin( frequency * (x ** 2 + z ** 2 + phaseShift )) * amplitude;
  }, [frequency, amplitude, phaseShift]);



    // using a 32 float array, we cannot create a 2d array, 
    // it will come out like this
    // [x1, y1, z1, x1, y1, z1...]
    // so we need two constants, a count and separation

    /* ===== CREATE ALL THE POINTS ===== */
    const count = 100; // # of points
    const sep = 1.3; // distance to each point

  // This creates all the starting positions:
  let positions = useMemo(() => {
    let positions = []
    
    // Build a flat grid of points:
    // go through each point along the x axis
    for(let xi = 0; xi < count; xi++){ // Left to right
      // go through each point along the z axis
      for(let zi = 0; zi < count; zi++){ // Front to back
        // we are placing these around the origin of 0, 0 as the center
        // Center the grid around (0,0):
        let x = sep * (xi - count / 2); // x position
        let z = sep * (zi - count / 2); // z position
        let y = graph(x, z); // y position (height from wave formula)
        positions.push(x, y, z) // Save the position
      }
    }
 
    return new Float32Array(positions); // Special format Three.js likes
  }, [count, sep]);

  /* ===== ANIMATION LOOP ===== */
  
  useFrame((state) => {
    phaseShift += 1; // Makes waves move outward

    // Get current positions of all points:
    const positions = bufferRef.current.array;
    const time = state.clock.getElapsedTime() * 2; // Clock for smooth rotation

    // Update each point's height (y position):
    let i = 0
    for(let xi = 0; xi < count; xi++){
      for(let zi = 0; zi < count; zi++){
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        positions[i + 1] = graph(x, z); // Only change Y position (i+1)
        i += 3 // Move to next point (x,y,z are every 3 numbers)
      }
    }
    bufferRef.current.needsUpdate = true; // Tell Three.js we changed things

    // Make the whole thing spin:
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * rotationSpeed; // Spin around Y axis
    }
  })

  return(
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
        ref={bufferRef}
        attach={'attributes-position'}
        array={positions}
        count={positions.length / 3}
        itemSize={3}
        >

        </bufferAttribute>
      </bufferGeometry>
      <pointsMaterial
      attach={"material"}
      color={"white"}
      map={imgTex}
      size={0.5}
      transparent={false}
      alphaTest={0.5}
      opacity={1.0}
      >

      </pointsMaterial>
    </points>
  )
}

export default Ripple;
