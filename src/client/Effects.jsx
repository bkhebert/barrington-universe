import React from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function Effects() {
  return (
    <EffectComposer>
      <Bloom
        intensity={0.002}               // Bloom strength
        luminanceThreshold={0.1}      // Only bloom bright things
        luminanceSmoothing={0.9}      // Smooth transition around threshold
      />
    </EffectComposer>
  )
}

export default Effects