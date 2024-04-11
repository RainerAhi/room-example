import { Environment, SoftShadows, ScrollControls, Html } from '@react-three/drei'
import Model from './Model'
import { Suspense } from 'react'
import { EffectComposer, N8AO } from '@react-three/postprocessing'
import { Loading } from './Loading'

export default function Experience() {

  return (
    <>
      <SoftShadows />
      <Suspense fallback  >
        <ScrollControls damping={0.5} maxSpeed={0.5} pages={10}>
            <Model position={ [ 0, -2, 0 ] } />
            <Environment files="./env4.hdr" background />
            <Html>
              <h1>Scroll</h1>
            </Html>
        </ScrollControls>
      </Suspense>
      <EffectComposer disableNormalPass >
        <N8AO distanceFalloff={ 1 } aoRadius={2} intensity={1.5} />
      </EffectComposer>
      <directionalLight 
      color={ "#FCEBE4" }
      shadow-bias={-0.001} castShadow position={[10, 35, -25]} 
      intensity={1.3} shadow-mapSize={2048} shadow-mapSize-width={4096} 
      shadow-mapSize-height={4096} shadow-camera-near={0.1} shadow-camera-far={100} 
      >
        <orthographicCamera attach="shadow-camera" args={[-25, 25, -25, 25, 0.1, 100]} />
      </directionalLight>
      <ambientLight color={ "black" } intensity={ 0.5 } />
      </>
  )
}