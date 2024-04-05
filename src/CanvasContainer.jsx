import Experience from "./Experience";
import { Canvas } from '@react-three/fiber'

export default function CanvasContainer() {

    return (
        <>
         <Canvas shadows camera={{ position: [-10 , 0, 0], fov: 40 }} >
            <Experience />
         </Canvas>
        </>
    )
}