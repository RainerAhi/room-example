import CustomEffects from "./Effects";
import Experience from "./Experience";
import { Canvas, useFrame } from '@react-three/fiber'

export default function CanvasContainer() {

    return (
        <>
         <Canvas shadows camera={{ position: [1 , 0, 0], fov: 50 }} >
            <Experience />
            <CustomEffects />
         </Canvas>
        </>
    )
}