import Experience from "./Experience";
import { Canvas } from '@react-three/fiber'

export default function CanvasContainer() {

    return (
        <>
         <Canvas shadows camera={{ position: [-10 , 0, 0], fov: 25 }} >
            <Experience />
         </Canvas>
        </>
    )
}