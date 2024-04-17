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

export default function CanvasContainer({ toggleOverlayOne, toggleOverlayTwo, toggleOverlayThree, toggleOverlayFour, toggleOverlayFive }) {

  const handleWhiteButtonOne = () => {
    toggleOverlayOne(); // Call toggleOverlay function from props
  };

  const handleWhiteButtonTwo = () => {
    toggleOverlayTwo();
  };

  const handleWhiteButtonThree = () => {
    toggleOverlayThree();
  };

  const handleWhiteButtonFour = () => {
    toggleOverlayFour(); 
  };

  const handleWhiteButtonFive = () => {
    toggleOverlayFive(); 
  };

    return (
        <>
         <Canvas shadows >
            <Html
              as="div"
              distanceFactor={10}
              wrapperClass=""
              position={[-1.899, -1.5, -1.935]}
            >
              <div className='white-button' onClick={handleWhiteButtonOne} ></div>
            </Html>

            <Html
              as="div"
              distanceFactor={10}
              wrapperClass=""
              position={[3.25, -1.1, -1.5]}
            >
              <div className='white-button' onClick={handleWhiteButtonTwo} ></div>
            </Html>

            <Html
              as="div"
              distanceFactor={10}
              wrapperClass=""
              position={[3.355, -0.7, 2.796]}
            >
              <div className='white-button' onClick={handleWhiteButtonThree} ></div>
            </Html>

            <Html
              as="div"
              distanceFactor={10}
              wrapperClass=""
              position={[-2.85, -1.5, 1.36]}
            >
              <div className='white-button' onClick={handleWhiteButtonFour} ></div>
            </Html>

            <Html
              as="div"
              distanceFactor={10}
              wrapperClass=""
              position={[-10.5, -0.75, 0]}
            >
              <div className='white-button' onClick={handleWhiteButtonFive} ></div>
            </Html>
            <ToneMapping />
            <Experience />
         </Canvas>
        </>
    )
}