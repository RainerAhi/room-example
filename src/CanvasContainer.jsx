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
  

  const [audio] = useState(new Audio('/websitesound.mp3'));

  useEffect(() => {
    // Set up audio loop and start playing on component mount
    audio.loop = true;
    audio.play().catch(error => {
      console.error('Failed to play audio:', error);
    });

    return () => {
      // Clean up audio on component unmount
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const [showOtherDiv, setShowOtherDiv] = useState(false);

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