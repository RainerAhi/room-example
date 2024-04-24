import { Environment, ScrollControls, Html, Scroll } from '@react-three/drei'
import Model from './Model'
import { Suspense, useState } from 'react'
import { EffectComposer, N8AO } from '@react-three/postprocessing'

export default function Experience() {

  return (
    <>
      <Suspense fallback  >
        <ScrollControls damping={1} maxSpeed={0.5} pages={10}>
            <Model position={ [ 0, -2, 0 ] } />
            <Environment files="./env4.hdr" background />
        </ScrollControls>
      </Suspense>
      <EffectComposer disableNormalPass >
        <N8AO distanceFalloff={ 1 } aoRadius={2} intensity={1.5} />
      </EffectComposer>
      <directionalLight 
      color={ "#FCEBE4" }
      shadow-bias={-0.0003} castShadow position={[10, 35, -25]} 
      intensity={1} shadow-mapSize={2048} shadow-mapSize-width={4096} 
      shadow-mapSize-height={4096} shadow-camera-near={0.1} shadow-camera-far={100} 
      >
        <orthographicCamera attach="shadow-camera" args={[-25, 25, -25, 25, 0.1, 100]} />
      </directionalLight>
      <ambientLight color={ "black" } intensity={ 0.5 } />

      </>
  )
}