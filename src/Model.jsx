import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, PerspectiveCamera, ScrollControls, useScroll, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';

export default function Model(props) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const scroll = useScroll()
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./final3.glb')
  const { actions, ref } = useAnimations(animations, group)

  useEffect(() => void (actions.Anim_0.reset().play().paused = true), [])
  useFrame(() => (actions.Anim_0.time = actions.Anim_0.getClip().duration * scroll.offset))

  useEffect(() => {
    // Loop through all animations and start them except Anim_0
    for (const key in actions) {
      if (key !== 'Anim_0') {
        actions[key].reset().play();
      }
    }
  }, []); // Run this effect only once after component mount


  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="sideboard"
          position={[-1.899, 0.321, -1.935]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <mesh
            name="drawer1"
            castShadow
            receiveShadow
            geometry={nodes.drawer1.geometry}
            material={materials.metal}
            position={[36.498, -0.699, -16.911]}
          />
          <mesh
            name="stone"
            castShadow
            receiveShadow
            geometry={nodes.stone.geometry}
            material={materials['Material.008']}
            position={[11.498, -10.193, -0.357]}
          />
        </group>
        <mesh
          name="Buch_1001"
          castShadow
          receiveShadow
          geometry={nodes.Buch_1001.geometry}
          material={materials['Material.009']}
          position={[-2.022, 0.652, -2.045]}
          rotation={[-Math.PI, -1.476, 0]}
          scale={0.01}
        />
        <mesh
          name="Buch_7001"
          castShadow
          receiveShadow
          geometry={nodes.Buch_7001.geometry}
          material={materials['Material.010']}
          position={[-1.816, 0.384, -2.037]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
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
        <group name="DOT1" />
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
          name="Cube_(Copy)"
          castShadow
          receiveShadow
          geometry={nodes['Cube_(Copy)'].geometry}
          material={materials.emeka}
          position={[-8.909, 1.6, -0.099]}
          rotation={[-2.503, -1.553, -2.503]}
        >
          <PerspectiveCamera fov={isMobile ? 85 : 40} makeDefault/>
        </mesh>
        <mesh
          name="titles"
          castShadow
          receiveShadow
          geometry={nodes.titles.geometry}
          material={materials['Material.001']}
          position={[-0.05, 0.005, 0.048]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
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
        <mesh
          name="maps_baker1"
          castShadow
          receiveShadow
          geometry={nodes.maps_baker1.geometry}
          material={materials['Material.011']}
          position={[-10.521, 1.629, 0.001]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
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
        <group
          name="susu"
          position={[3.355, 1.232, 2.796]}
          rotation={[Math.PI / 2, 0.157, 0]}
          scale={0.01}
        />
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
                position={[22.766, 2.288, -22.387]}
                rotation={[0.052, 0.209, 2.997]}
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

useGLTF.preload('./final3.glb')
