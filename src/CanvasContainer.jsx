import { Html } from "@react-three/drei";
import Experience from "./Experience";
import { Canvas } from '@react-three/fiber'
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from 'three';

function ToneMapping() {
    const { gl, scene } = useThree(({ gl, scene }) => ({ gl, scene }));
    useEffect(() => {
      gl.toneMapping = THREE.ACESFilmicToneMapping;
      gl.toneMappingExposure = 1.1;
      scene.traverse((object) => {
        if (object.material) {
          object.material.needsUpdate = true;
        }
      });
    }, [gl, scene]);
    return <></>;
  }

export default function CanvasContainer({ toggleOverlay }) {

  const handleWhiteButtonClick = () => {
    toggleOverlay(); // Call toggleOverlay function from props
  };

    return (
        <>
         <Canvas shadows >
            <Html
              as="div"
              distanceFactor={5}
              wrapperClass=""
              position={[-1.899, -1.5, -1.935]}
            >
              <div className='white-button' onClick={handleWhiteButtonClick} ></div>
            </Html>
            <ToneMapping />
            <Experience />
         </Canvas>
        </>
    )
}