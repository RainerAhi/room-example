import Experience from "./Experience";
import { Canvas } from '@react-three/fiber'
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from 'three';

function ToneMapping() {
    const { gl, scene } = useThree(({ gl, scene }) => ({ gl, scene }));
    useEffect(() => {
      gl.toneMapping = THREE.ACESFilmicToneMapping;
      gl.toneMappingExposure = 0.85;
      scene.traverse((object) => {
        if (object.material) {
          object.material.needsUpdate = true;
        }
      });
    }, [gl, scene]);
    return <></>;
  }

export default function CanvasContainer() {

    return (
        <>
         <Canvas shadows >
            <ToneMapping />
            <Experience />
         </Canvas>
        </>
    )
}