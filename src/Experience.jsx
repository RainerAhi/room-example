import { OrbitControls, Environment, SoftShadows, ScrollControls,  } from '@react-three/drei'
import Model from './Model'
import { Canvas } from '@react-three/fiber'

export default function Experience() {

  return (
    <>
      <SoftShadows intensity={ 10 } />
      <ScrollControls damping={0.5} maxSpeed={0.5} pages={10}>
          <Model position={ [ 0, -2, 0 ] } rotation={ [ 0, 0, 0 ] } />
      </ScrollControls>
      <Environment files="./env.hdr" background />
      <directionalLight 
      shadow-bias={-0.001} castShadow position={[15, 20, 0]} 
      intensity={2} shadow-mapSize={2048} shadow-mapSize-width={4096} 
      shadow-mapSize-height={4096} shadow-camera-near={0.1} shadow-camera-far={100} 
      >
        <orthographicCamera attach="shadow-camera" args={[-20, 20, -20, 20, 0.1, 100]} />
      </directionalLight>
      </>
  )
}