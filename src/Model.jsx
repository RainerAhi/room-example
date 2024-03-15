import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./r2.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube1.geometry}
        material={materials["Material.003"]}
        position={[-1.348, 3.443, 14.185]}
        rotation={[0, -0.037, 0]}
        scale={2.418}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.004"]}
        position={[-1.362, 0.037, -1.286]}
        scale={2.418}
      />
      <group position={[-1.362, 4.269, -1.286]} scale={2.418}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.006"]}
          position={[0, -0.512, 0]}
        />
      </group>
      <group position={[-1.362, 4.269, -1.286]} scale={2.418}>
        <group position={[12.12, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={nodes.Cube002.material}
          />
          <group position={[-12.12, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Tube1.geometry}
              material={materials["Material.011"]}
              position={[0, 0.074, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Tube2.geometry}
              material={materials["Material.010"]}
              position={[0, 0.074, 0]}
              rotation={[Math.PI, -1.553, Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Tube3.geometry}
              material={materials["Material.009"]}
              position={[0, 0.074, 0]}
              rotation={[-Math.PI, 0.018, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Tube4.geometry}
              material={materials["Material.008"]}
              position={[0, 0.074, 0]}
              rotation={[0, 1.553, 0]}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.outer_ring001.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.012"]}
        position={[27.044, 5.063, -1.286]}
        scale={2.418}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube3.geometry}
        material={materials["Material.014"]}
        position={[6.195, 0.455, 5.196]}
        scale={2.418}
      />
      <group position={[6.192, 2.59, 5.194]} scale={2.418}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1.geometry}
          material={materials["Material.015"]}
          position={[0, 0.034, 0]}
        />
        <group position={[0, -0.07, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials["Material.018"]}
            position={[0, 0.04, 0]}
          />
        </group>
        <group position={[0, -0.07, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials["Material.017"]}
            position={[0, 0.04, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["Material.016"]}
          position={[0, 0.034, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sweep002.geometry}
        material={materials["Material.020"]}
        position={[-1.362, 3.443, 14.411]}
        scale={2.418}
      />
      <group position={[7.537, 0.156, -5.754]} scale={2.418}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Boole2_remesh.geometry}
          material={materials["Material.021"]}
          position={[-0.048, 0.599, 0.007]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube14_0.geometry}
        material={materials["Material.022"]}
        position={[-1.362, 0.037, -23.945]}
        scale={2.418}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube14_1.geometry}
        material={materials["Material.022"]}
        position={[21.297, 0.037, -1.286]}
        rotation={[0, -1.571, 0]}
        scale={2.418}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube14_2.geometry}
        material={materials["Material.022"]}
        position={[-1.362, 0.037, 21.372]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={2.418}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube14_3.geometry}
        material={materials["Material.022"]}
        position={[-24.021, 0.037, -1.286]}
        rotation={[0, 1.571, 0]}
        scale={2.418}
      />
      <group position={[-1.362, 6.54, -1.286]} scale={2.418}>
        <group position={[0, 0, -10.52]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials["Material.024"]}
            position={[0, -0.079, 0]}
          />
          <group position={[0, -1.017, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Volume_Mesher.geometry}
              material={materials["Material.023"]}
              position={[0.018, 0, 0]}
            />
          </group>
        </group>
        <group position={[7.439, 0, -7.439]} rotation={[0, -Math.PI / 4, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials["Material.024"]}
            position={[0, -0.079, 0]}
          />
          <group position={[0, -1.017, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Volume_Mesher001.geometry}
              material={materials["Material.025"]}
              position={[0.018, 0, 0]}
            />
          </group>
        </group>
        <group position={[10.52, 0, 0]} rotation={[0, -1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials["Material.024"]}
            position={[0, -0.079, 0]}
          />
          <group position={[0, -1.017, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Volume_Mesher002.geometry}
              material={materials["Material.026"]}
              position={[0.018, 0, 0]}
            />
          </group>
        </group>
        <group
          position={[7.439, 0, 7.439]}
          rotation={[Math.PI, -Math.PI / 4, Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials["Material.024"]}
            position={[0, -0.079, 0]}
          />
          <group position={[0, -1.017, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Volume_Mesher003.geometry}
              material={materials["Material.027"]}
              position={[0.018, 0, 0]}
            />
          </group>
        </group>
        <group position={[0, 0, 10.52]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005.geometry}
            material={materials["Material.024"]}
            position={[0, -0.079, 0]}
          />
          <group position={[0, -1.017, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Volume_Mesher004.geometry}
              material={materials["Material.028"]}
              position={[0.018, 0, 0]}
            />
          </group>
        </group>
        <group
          position={[-7.439, 0, 7.439]}
          rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials["Material.024"]}
            position={[0, -0.079, 0]}
          />
          <group position={[0, -1.017, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Volume_Mesher005.geometry}
              material={materials["Material.029"]}
              position={[0.018, 0, 0]}
            />
          </group>
        </group>
        <group position={[-10.52, 0, 0]} rotation={[0, 1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials["Material.024"]}
            position={[0, -0.079, 0]}
          />
          <group position={[0, -1.017, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Volume_Mesher006.geometry}
              material={materials["Material.030"]}
              position={[0.018, 0, 0]}
            />
          </group>
        </group>
        <group position={[-7.439, 0, -7.439]} rotation={[0, Math.PI / 4, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials["Material.024"]}
            position={[0, -0.079, 0]}
          />
          <group position={[0, -1.017, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Volume_Mesher007.geometry}
              material={materials["Material.031"]}
              position={[0.018, 0, 0]}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube2.geometry}
        material={materials["Material.032"]}
        position={[6.195, 1.885, 5.196]}
        scale={2.418}
      />
      <group position={[-3.905, 0.823, -4.954]} scale={2.418}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Connect001.geometry}
          material={materials["Material.034"]}
          position={[0.009, -0.037, -0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["Material.033"]}
          position={[0.009, 0.057, -0.007]}
          rotation={[Math.PI, -1.562, Math.PI]}
        />
      </group>
      <group position={[-12.363, 0.447, -2.864]} scale={2.418}>
        <group position={[0.32, -0.014, -0.141]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.counter001.geometry}
            material={materials["Material.036"]}
          />
          <group position={[0.192, 0.01, 0.175]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cube-smudged"].geometry}
              material={materials["Material.037"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cube-wall"].geometry}
              material={materials["Material.038"]}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["Material.035"]}
          position={[0.512, 0.009, 0.034]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.039"]}
        position={[-1.362, 10.294, -0.959]}
        rotation={[0, 0, Math.PI]}
        scale={[2.418, 2.418, 2.729]}
      />
    </group>
  );
}

useGLTF.preload("./r2.glb");
