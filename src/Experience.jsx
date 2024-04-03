import { Suspense, useRef, useState, useLayoutEffect, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, Lightformer, MeshReflectorMaterial, Sparkles, Float, MeshPortalMaterial, useTexture, useHelper, Stage, SoftShadows, Effects } from '@react-three/drei'
import { easing } from 'maath'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import * as THREE from "three"
import CustomEffects from './Effects'
import { Loading } from './Loading'
import Model from './Model'
gsap.registerPlugin(ScrollTrigger)

export default function Experience() {

  const controlsRef = useRef()

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile device on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isMobile)

  const { camera, scene } = useThree()

  const tl = gsap.timeline()

  useLayoutEffect(() => {

    //ONE TO TWO

    tl

    .to(camera.position, {
      x: -2,
      y: 0,
      z: 0,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(controlsRef.current.target, {
      x: 0,
      y: -10,
      z: -10,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    //TWO TO THREE

    .to(camera.position, {
      x: 5,
      y: 0,
      z: -4,
      scrollTrigger: {
        trigger: ".three",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(controlsRef.current.target, {
      x: 0,
      y: -5,
      z: 5,
      scrollTrigger: {
        trigger: ".three",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    
    //THREE TO FOUR

    .to(camera.position, {
      x: 3,
      y: 0,
      z: 1,
      scrollTrigger: {
        trigger: ".four",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(controlsRef.current.target, {
      x: 3.5,
      y: -3,
      z: -3,
      scrollTrigger: {
        trigger: ".four",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

        //FOUR TO FIVE

        .to(camera.position, {
          x: 2,
          y: -0.25,
          z: 1,
          scrollTrigger: {
            trigger: ".five",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
    
        .to(controlsRef.current.target, {
          x: 5,
          y: 0,
          z: 6,
          scrollTrigger: {
            trigger: ".five",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

                //FIVE TO SIX

                .to(camera.position, {
                  x: -1,
                  y: 0,
                  z: 3,
                  scrollTrigger: {
                    trigger: ".six",
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    immediateRender: false,
                  },
                })
            
                .to(controlsRef.current.target, {
                  x: -5,
                  y: -3,
                  z: 0,
                  scrollTrigger: {
                    trigger: ".six",
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    immediateRender: false,
                  },
                })

  }, [])

  return (
    <>
      <SoftShadows intensity={ 10 } />
      <Suspense fallback={ <Loading /> } >
          <Model position={ [ 0, -2, 0 ] } rotation={ [ 0, 0, 0 ] } />
      </Suspense>
      <OrbitControls ref={controlsRef} minPolarAngle={Math.PI / -2} maxPolarAngle={Math.PI / 1} enableZoom={ false } enableRotate={ false } enablePan={ false } />
      <Environment environmentIntensity={ 0.1 } preset='warehouse' />
      <ambientLight intensity={0.15} />
      <directionalLight 
      shadow-bias={-0.001} castShadow position={[15, 20, 0]} 
      intensity={2} shadow-mapSize={2048} shadow-mapSize-width={4096} 
      shadow-mapSize-height={4096} shadow-camera-near={0.1} shadow-camera-far={100} 
      >
        <orthographicCamera attach="shadow-camera" args={[-20, 20, -20, 20, 0.1, 100]} />
      </directionalLight>
      <pointLight position={[-10, 0, -20]} color="white" intensity={0.1} />
      <pointLight position={[0, -10, 0]} intensity={0.1} />
      </>
  )
}