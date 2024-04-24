import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, PerspectiveCamera, ScrollControls, useScroll, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';

export default function Model(props, { handleWhiteButtonOneClick }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const scroll = useScroll()
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./final9.glb')
  const { actions, ref } = useAnimations(animations, group)
  const [anim3Playing, setAnim3Playing] = useState(false);

  useEffect(() => void (actions.Camera.reset().play().paused = true), [])
  useFrame(() => (actions.Camera.time = actions.Camera.getClip().duration * scroll.offset))

  useEffect(() => {
    // Loop through all animations and start them except Anim_0
    for (const key in actions) {
      if (key !== 'Camera' && key !== 'Anim_3') {
        actions[key].reset().play();
      }
    }
  }, []); // Run this effect only once after component mount

  const handleAnim3Click = () => {
    if (!anim3Playing) {
      actions.Anim_3.reset().play();
      setAnim3Playing(true);
    }
  };



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="circles001"
          castShadow
          receiveShadow
          geometry={nodes.circles001.geometry}
          material={materials.Material}
          position={[1.543, 2.921, -0.244]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="traventine_stools"
          castShadow
          receiveShadow
          geometry={nodes.traventine_stools.geometry}
          material={materials['Material.002']}
          position={[0.061, 0.353, 2.056]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="traventine_stools_1"
          castShadow
          receiveShadow
          geometry={nodes.traventine_stools_1.geometry}
          material={materials['Material.002']}
          position={[0.061, 0.353, 2.056]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <group name="headphones" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            name="headphones1"
            castShadow
            receiveShadow
            geometry={nodes.headphones1.geometry}
            material={materials.emeka}
            position={[279.646, -163.759, -84.48]}
            rotation={[0, 0, 1.916]}
          />
          <mesh
            name="headphones2"
            castShadow
            receiveShadow
            geometry={nodes.headphones2.geometry}
            material={materials.emeka}
            position={[300.198, -112.533, -90.507]}
            rotation={[0, 0, 0.669]}
          />
          <mesh
            name="headphones3"
            castShadow
            receiveShadow
            geometry={nodes.headphones3.geometry}
            material={materials.emeka}
            position={[365.71, -101.876, -77.737]}
            rotation={[0, 0, -0.644]}
          />
          <mesh
            name="headphones4"
            castShadow
            receiveShadow
            geometry={nodes.headphones4.geometry}
            material={materials.emeka}
            position={[384.116, -182.896, -67.234]}
            rotation={[0, 0, 1.405]}
          />
          <mesh
            name="headphones5"
            castShadow
            receiveShadow
            geometry={nodes.headphones5.geometry}
            material={materials.emeka}
            position={[329.042, -210.728, -74.513]}
            rotation={[0, 0, 0.113]}
          />
        </group>
        <mesh
          name="titles"
          castShadow
          receiveShadow
          geometry={nodes.titles.geometry}
          material={materials['Material.001']}
          position={[-0.05, 0.01, 0.048]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <group name="sideboard" position={[-1.899, 0.321, -1.935]}>
          <mesh
            name="Buch1"
            castShadow
            receiveShadow
            geometry={nodes.Buch1.geometry}
            material={materials['Material.009']}
            position={[-0.123, 0.33, -0.11]}
            rotation={[Math.PI / 2, 0, -1.476]}
          />
          <mesh
            name="Buch7"
            castShadow
            receiveShadow
            geometry={nodes.Buch7.geometry}
            material={materials['Material.010']}
            position={[0.083, 0.063, -0.102]}
          />
        </group>
        <mesh
          name="drawer1"
          castShadow
          receiveShadow
          geometry={nodes.drawer1.geometry}
          material={materials.metal}
          position={[-1.534, 0.491, -1.942]}>
          <mesh
            name="Buch002"
            castShadow
            receiveShadow
            geometry={nodes.Buch002.geometry}
            material={materials['leather.001']}
            position={[-0.282, -0.034, -0.161]}
          />
        </mesh>
        <mesh
          name="Plane1"
          castShadow
          receiveShadow
          geometry={nodes.Plane1.geometry}
          material={nodes.Plane1.material}
          position={[0.011, -0.173, 0.147]}
          rotation={[-1.888, -0.364, -3.084]}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
          position={[-0.104, -0.148, -0.125]}
          rotation={[-1.107, 0.218, 0.354]}
        />
        <mesh
          name="maps_baker1"
          castShadow
          receiveShadow
          geometry={nodes.maps_baker1.geometry}
          material={materials['Material.011']}
          position={[-10.521, 1.629, 0.001]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <mesh
            name="Plane002"
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials.metal}
            position={[-10.378, -12.462, 14.82]}
            rotation={[-1.027, 0.346, -0.232]}
          />
          <mesh
            name="Plane_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials.metal}
            position={[1.12, 14.674, 17.286]}
            rotation={[1.233, -0.054, 2.777]}
          />
        </mesh>
        <mesh
          name="Cube__Copy_"
          castShadow
          receiveShadow
          geometry={nodes.Cube__Copy_.geometry}
          material={nodes.Cube__Copy_.material}
          position={[-10.495, 1.6, -0.099]}
          rotation={[1.571, -0.009, 1.583]}
          scale={0.01}
        >
          <PerspectiveCamera far={ 10000 } rotation={ [ Math.PI * -0.5, 0, 0 ] } fov={isMobile ? 85 : 40} makeDefault/>
        </mesh>
        <mesh
          name="null"
          castShadow
          receiveShadow
          geometry={nodes['null'].geometry}
          material={materials.metal}
          position={[-2.111, 0.509, -2.058]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <group
          name="stone"
          position={[-1.784, 0.325, -2.037]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <mesh
            name="Mesh024"
            castShadow
            receiveShadow
            geometry={nodes.Mesh024.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Mesh024_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh024_1.geometry}
            material={materials.metal}
          />
        </group>
        <group name="hangers" position={[0, 2.689, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            name="carabiner"
            castShadow
            receiveShadow
            geometry={nodes.carabiner.geometry}
            material={materials.metal}
            position={[27.465, 28.203, 259.135]}
          />
          <mesh
            name="rope"
            castShadow
            receiveShadow
            geometry={nodes.rope.geometry}
            material={materials.metal}
            position={[0, 0, -244.617]}
          />
        </group>
        <mesh
          name="emeka"
          castShadow
          receiveShadow
          geometry={nodes.emeka.geometry}
          material={materials.emeka}
          position={[1.662, 0.207, -0.779]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="floor"
          castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={materials['Material.012']}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <group
          name="susu001"
          position={[3.355, 1.232, 2.796]}
          rotation={[Math.PI / 2, 0.157, 0]}
          scale={0.01}>
          <mesh
            name="bag001"
            castShadow
            receiveShadow
            geometry={nodes.bag001.geometry}
            material={materials['Material.004']}
            position={[-24.506, -0.549, 14.487]}
            rotation={[-0.072, -0.031, -0.01]}>
            <mesh
              name="Aset_nature_tree_S_wgyrci0s_00_LOD2"
              castShadow
              receiveShadow
              geometry={nodes.Aset_nature_tree_S_wgyrci0s_00_LOD2.geometry}
              material={materials['Material.007']}
              position={[7.669, 14.833, -66.021]}
              rotation={[-0.002, -0.167, 0.387]}>
              <mesh
                name="Aset_props__M_wgxiaew_00_lod3"
                castShadow
                receiveShadow
                geometry={nodes.Aset_props__M_wgxiaew_00_lod3.geometry}
                material={materials['Material.006']}
                position={[-42.961, -0.486, -4.139]}
                rotation={[-1.424, 1.149, 1.436]}>
                <mesh
                  name="Aset_props__M_wgxiaew_00_lod3_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Aset_props__M_wgxiaew_00_lod3_1.geometry}
                  material={materials['Material.006']}
                  position={[30.43, -5.171, -1.494]}
                />
                <mesh
                  name="Aset_props__M_wgxiaew_00_lod3_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Aset_props__M_wgxiaew_00_lod3_2.geometry}
                  material={materials['Material.006']}
                  position={[43.415, -0.178, -1.862]}
                />
                <mesh
                  name="Aset_props__M_wgxiaew_00_lod3_2_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Aset_props__M_wgxiaew_00_lod3_2_2.geometry}
                  material={materials['Material.006']}
                  position={[30.684, 5.321, -1.733]}
                />
              </mesh>
              <mesh
                name="small_statue"
                castShadow
                receiveShadow
                geometry={nodes.small_statue.geometry}
                material={materials['Material.013']}
                position={[22.739, 2.415, -23.481]}
                rotation={[0.11, 0.152, 2.977]}
              />
            </mesh>
            <mesh
              name="bag_inlay001"
              castShadow
              receiveShadow
              geometry={nodes.bag_inlay001.geometry}
              material={materials['Material.005']}
              position={[39.507, -0.689, -27.569]}
              rotation={[-0.022, -0.091, 3.103]}
              scale={0.039}
            />
            <mesh
              name="handle001"
              castShadow
              receiveShadow
              geometry={nodes.handle001.geometry}
              material={materials['leather.001']}
              position={[3.29, -5.132, -33.762]}
              rotation={[-0.004, 0.004, -0.02]}
            />
          </mesh>
          <mesh
            name="basket001"
            castShadow
            receiveShadow
            geometry={nodes.basket001.geometry}
            material={materials['Material.003']}
            position={[-29.87, -1.111, 62.255]}
            rotation={[-0.013, -0.178, 0.028]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./final9.glb')