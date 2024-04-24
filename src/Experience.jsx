import { Environment, ScrollControls, Html, Scroll, SoftShadows } from '@react-three/drei'
import Model from './Model'
import { Suspense, useState } from 'react'
import { EffectComposer, N8AO } from '@react-three/postprocessing'

export default function Experience() {

  return (
    <>
      <SoftShadows intensity={ 1 } />
      <Suspense fallback  >
        <ScrollControls damping={1} maxSpeed={0.5} pages={10}>
            <Model position={ [ 0, -2, 0 ] } />
            <Environment files="./env4.hdr" background />
        </ScrollControls>
      </Suspense>
      <directionalLight 
      color={ "#FCEBE4" }
      shadow-bias={-0.0004} castShadow position={[10, 35, -25]} 
      intensity={1} shadow-mapSize={2048} shadow-mapSize-width={4096} 
      shadow-mapSize-height={4096} shadow-camera-near={0.1} shadow-camera-far={100} 
      >
        <orthographicCamera attach="shadow-camera" args={[-25, 25, -25, 25, 0.1, 100]} />
      </directionalLight>
      <EffectComposer disableNormalPass >
        <N8AO aoRadius={20} distanceFalloff={0.5} intensity={2} screenSpaceRadius quality='high' halfRes  />
      </EffectComposer>

      </>
  )
}