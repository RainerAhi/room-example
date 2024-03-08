import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function Model(props) {
    const { nodes, materials } = useGLTF("./optimized.gltf");
    return (
      <group {...props} dispose={null}>
        <group position={[0, 4.916, 1.092]} rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[4.437, 4.156, 0]}>
            <mesh
              geometry={nodes.Cube2_0.geometry}
              material={nodes.Cube2_0.material}
              position={[-17.343, -30.35, 0]}
            />
            <mesh
              geometry={nodes.Cube2_1.geometry}
              material={nodes.Cube2_1.material}
              position={[0, -30.35, 0]}
            />
            <mesh
              geometry={nodes.Cube2_2.geometry}
              material={nodes.Cube2_2.material}
              position={[17.343, -30.35, 0]}
            />
            <mesh
              geometry={nodes.Cube2_3.geometry}
              material={nodes.Cube2_3.material}
              position={[-17.343, -21.679, 0]}
            />
            <mesh
              geometry={nodes.Cube2_4.geometry}
              material={nodes.Cube2_4.material}
              position={[0, -21.679, 0]}
            />
            <mesh
              geometry={nodes.Cube2_5.geometry}
              material={nodes.Cube2_5.material}
              position={[17.343, -21.679, 0]}
            />
            <mesh
              geometry={nodes.Cube2_6.geometry}
              material={nodes.Cube2_6.material}
              position={[-17.343, -13.007, 0]}
            />
            <mesh
              geometry={nodes.Cube2_7.geometry}
              material={nodes.Cube2_7.material}
              position={[0, -13.007, 0]}
            />
            <mesh
              geometry={nodes.Cube2_8.geometry}
              material={nodes.Cube2_8.material}
              position={[17.343, -13.007, 0]}
            />
            <mesh
              geometry={nodes.Cube2_9.geometry}
              material={nodes.Cube2_9.material}
              position={[-17.343, -4.336, 0]}
            />
            <mesh
              geometry={nodes.Cube2_10.geometry}
              material={nodes.Cube2_10.material}
              position={[0, -4.336, 0]}
            />
            <mesh
              geometry={nodes.Cube2_11.geometry}
              material={nodes.Cube2_11.material}
              position={[17.343, -4.336, 0]}
            />
            <mesh
              geometry={nodes.Cube2_12.geometry}
              material={nodes.Cube2_12.material}
              position={[-17.343, 4.336, 0]}
            />
            <mesh
              geometry={nodes.Cube2_13.geometry}
              material={nodes.Cube2_13.material}
              position={[0, 4.336, 0]}
            />
            <mesh
              geometry={nodes.Cube2_14.geometry}
              material={nodes.Cube2_14.material}
              position={[17.343, 4.336, 0]}
            />
            <mesh
              geometry={nodes.Cube2_15.geometry}
              material={nodes.Cube2_15.material}
              position={[-17.343, 13.007, 0]}
            />
            <mesh
              geometry={nodes.Cube2_16.geometry}
              material={nodes.Cube2_16.material}
              position={[0, 13.007, 0]}
            />
            <mesh
              geometry={nodes.Cube2_17.geometry}
              material={nodes.Cube2_17.material}
              position={[17.343, 13.007, 0]}
            />
            <mesh
              geometry={nodes.Cube2_18.geometry}
              material={nodes.Cube2_18.material}
              position={[-17.343, 21.679, 0]}
            />
            <mesh
              geometry={nodes.Cube2_19.geometry}
              material={nodes.Cube2_19.material}
              position={[0, 21.679, 0]}
            />
            <mesh
              geometry={nodes.Cube2_20.geometry}
              material={nodes.Cube2_20.material}
              position={[17.343, 21.679, 0]}
            />
            <mesh
              geometry={nodes.Cube2_21.geometry}
              material={nodes.Cube2_21.material}
              position={[-17.343, 30.35, 0]}
            />
            <mesh
              geometry={nodes.Cube2_22.geometry}
              material={nodes.Cube2_22.material}
              position={[0, 30.35, 0]}
            />
            <mesh
              geometry={nodes.Cube2_23.geometry}
              material={nodes.Cube2_23.material}
              position={[17.343, 30.35, 0]}
            />
          </group>
          <group position={[-4.235, 0.032, -0.041]}>
            <mesh
              geometry={nodes.Cube2_0_1.geometry}
              material={nodes.Cube2_0_1.material}
              position={[-17.343, -30.35, 0]}
            />
            <mesh
              geometry={nodes.Cube2_1_1.geometry}
              material={nodes.Cube2_1_1.material}
              position={[0, -30.35, 0]}
            />
            <mesh
              geometry={nodes.Cube2_2_1.geometry}
              material={nodes.Cube2_2_1.material}
              position={[17.343, -30.35, 0]}
            />
            <mesh
              geometry={nodes.Cube2_3_1.geometry}
              material={nodes.Cube2_3_1.material}
              position={[-17.343, -21.679, 0]}
            />
            <mesh
              geometry={nodes.Cube2_4_1.geometry}
              material={nodes.Cube2_4_1.material}
              position={[0, -21.679, 0]}
            />
            <mesh
              geometry={nodes.Cube2_5_1.geometry}
              material={nodes.Cube2_5_1.material}
              position={[17.343, -21.679, 0]}
            />
            <mesh
              geometry={nodes.Cube2_6_1.geometry}
              material={nodes.Cube2_6_1.material}
              position={[-17.343, -13.007, 0]}
            />
            <mesh
              geometry={nodes.Cube2_7_1.geometry}
              material={nodes.Cube2_7_1.material}
              position={[0, -13.007, 0]}
            />
            <mesh
              geometry={nodes.Cube2_8_1.geometry}
              material={nodes.Cube2_8_1.material}
              position={[17.343, -13.007, 0]}
            />
            <mesh
              geometry={nodes.Cube2_9_1.geometry}
              material={nodes.Cube2_9_1.material}
              position={[-17.343, -4.336, 0]}
            />
            <mesh
              geometry={nodes.Cube2_10_1.geometry}
              material={nodes.Cube2_10_1.material}
              position={[0, -4.336, 0]}
            />
            <mesh
              geometry={nodes.Cube2_11_1.geometry}
              material={nodes.Cube2_11_1.material}
              position={[17.343, -4.336, 0]}
            />
            <mesh
              geometry={nodes.Cube2_12_1.geometry}
              material={nodes.Cube2_12_1.material}
              position={[-17.343, 4.336, 0]}
            />
            <mesh
              geometry={nodes.Cube2_13_1.geometry}
              material={nodes.Cube2_13_1.material}
              position={[0, 4.336, 0]}
            />
            <mesh
              geometry={nodes.Cube2_14_1.geometry}
              material={nodes.Cube2_14_1.material}
              position={[17.343, 4.336, 0]}
            />
            <mesh
              geometry={nodes.Cube2_15_1.geometry}
              material={nodes.Cube2_15_1.material}
              position={[-17.343, 13.007, 0]}
            />
            <mesh
              geometry={nodes.Cube2_16_1.geometry}
              material={nodes.Cube2_16_1.material}
              position={[0, 13.007, 0]}
            />
            <mesh
              geometry={nodes.Cube2_17_1.geometry}
              material={nodes.Cube2_17_1.material}
              position={[17.343, 13.007, 0]}
            />
            <mesh
              geometry={nodes.Cube2_18_1.geometry}
              material={nodes.Cube2_18_1.material}
              position={[-17.343, 21.679, 0]}
            />
            <mesh
              geometry={nodes.Cube2_19_1.geometry}
              material={nodes.Cube2_19_1.material}
              position={[0, 21.679, 0]}
            />
            <mesh
              geometry={nodes.Cube2_20_1.geometry}
              material={nodes.Cube2_20_1.material}
              position={[17.343, 21.679, 0]}
            />
            <mesh
              geometry={nodes.Cube2_21_1.geometry}
              material={nodes.Cube2_21_1.material}
              position={[-17.343, 30.35, 0]}
            />
            <mesh
              geometry={nodes.Cube2_22_1.geometry}
              material={nodes.Cube2_22_1.material}
              position={[0, 30.35, 0]}
            />
            <mesh
              geometry={nodes.Cube2_23_1.geometry}
              material={nodes.Cube2_23_1.material}
              position={[17.343, 30.35, 0]}
            />
          </group>
        </group>
        <mesh
          geometry={nodes.Cube1.geometry}
          material={nodes.Cube1.material}
          position={[0.006, 1.409, 6.398]}
          rotation={[0, -0.037, 0]}
        />
        <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} />
        <group position={[0, 1.75, 0]}>
          <mesh geometry={nodes.Tube.geometry} material={nodes.Tube.material} />
          <mesh
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            position={[0, -0.512, 0]}
          />
        </group>
        <group position={[0, 1.75, 0]}>
          <mesh
            geometry={nodes.outer_ring_1.geometry}
            material={nodes.outer_ring_1.material}
          />
          <group position={[12.12, 0, 0]}>
            <group position={[-12.12, 0, 0]}>
              <mesh
                geometry={nodes.Tube4.geometry}
                material={nodes.Tube4.material}
                position={[0, 0.074, 0]}
                rotation={[0, 1.553, 0]}
              />
              <mesh
                geometry={nodes.Tube3.geometry}
                material={nodes.Tube3.material}
                position={[0, 0.074, 0]}
                rotation={[-Math.PI, 0.018, -Math.PI]}
              />
              <mesh
                geometry={nodes.Tube2.geometry}
                material={nodes.Tube2.material}
                position={[0, 0.074, 0]}
                rotation={[Math.PI, -1.553, Math.PI]}
              />
              <mesh
                geometry={nodes.Tube1.geometry}
                material={nodes.Tube1.material}
                position={[0, 0.074, 0]}
              />
            </group>
            <mesh
              geometry={nodes.Cube_1.geometry}
              material={nodes.Cube_1.material}
            />
          </group>
        </group>
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={nodes.Cube_2.material}
          position={[11.746, 2.079, 0]}
        />
        <group position={[0, 4.208, 0]}>
          <mesh
            geometry={nodes.ceilng.geometry}
            material={nodes.ceilng.material}
          />
          <mesh
            geometry={nodes.Null1.geometry}
            material={nodes.Null1.material}
            position={[0.112, -0.012, -0.975]}
          />
        </group>
        <mesh
          geometry={nodes.Cube3.geometry}
          material={nodes.Cube3.material}
          position={[3.125, 0.173, 2.681]}
        />
        <group position={[3.124, 1.056, 2.68]}>
          <mesh
            geometry={nodes.Cylinder1.geometry}
            material={nodes.Cylinder1.material}
            position={[0, 0.034, 0]}
          />
          <group position={[0, -0.07, 0]}>
            <mesh
              geometry={nodes.Cube_4.geometry}
              material={nodes.Cube_4.material}
              position={[0, 0.04, 0]}
            />
          </group>
          <group position={[0, -0.07, 0]}>
            <mesh
              geometry={nodes.Cube_5.geometry}
              material={nodes.Cube_5.material}
              position={[0, 0.04, 0]}
            />
          </group>
          <mesh
            geometry={nodes.Cube_3.geometry}
            material={nodes.Cube_3.material}
            position={[0, 0.034, 0]}
          />
        </group>
        <mesh
          geometry={nodes.Aset_nature_rock_M_wgptdfh_LOD0.geometry}
          material={nodes.Aset_nature_rock_M_wgptdfh_LOD0.material}
          position={[3.125, 0.543, 2.67]}
          rotation={[-0.485, -1.248, 2.619]}
        />
        <mesh
          geometry={nodes.Sweep_2.geometry}
          material={nodes.Sweep_2.material}
          position={[0, 1.409, 6.491]}
        />
        <group position={[3.68, 0.049, -1.848]}>
          <mesh
            geometry={nodes.Boole2_remesh.geometry}
            material={nodes.Boole2_remesh.material}
            position={[-0.048, 0.599, 0.007]}
          />
        </group>
        <group position={[0, 0.465, 0]}>
          <mesh
            geometry={nodes.Cube14_0.geometry}
            material={nodes.Cube14_0.material}
            position={[0, 0, -9.37]}
          />
          <mesh
            geometry={nodes.Cube14_1.geometry}
            material={nodes.Cube14_1.material}
            position={[9.37, 0, 0]}
            rotation={[0, -1.571, 0]}
          />
          <mesh
            geometry={nodes.Cube14_2.geometry}
            material={nodes.Cube14_2.material}
            position={[0, 0, 9.37]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            geometry={nodes.Cube14_3.geometry}
            material={nodes.Cube14_3.material}
            position={[-9.37, 0, 0]}
            rotation={[0, 1.571, 0]}
          />
        </group>
        <group position={[0, 2.689, 0]}>
          <group position={[0, 0, -10.52]}>
            <group position={[0, -1.017, 0]}>
              <mesh
                geometry={nodes.Volume_Mesher.geometry}
                material={nodes.Volume_Mesher.material}
                position={[0.018, 0, 0]}
              />
            </group>
            <mesh
              geometry={nodes.Cylinder.geometry}
              material={nodes.Cylinder.material}
              position={[0, -0.079, 0]}
            />
          </group>
          <group position={[7.439, 0, -7.439]} rotation={[0, -Math.PI / 4, 0]}>
            <group position={[0, -1.017, 0]}>
              <mesh
                geometry={nodes.Volume_Mesher_1.geometry}
                material={nodes.Volume_Mesher_1.material}
                position={[0.018, 0, 0]}
              />
            </group>
            <mesh
              geometry={nodes.Cylinder_1.geometry}
              material={nodes.Cylinder_1.material}
              position={[0, -0.079, 0]}
            />
          </group>
          <group position={[10.52, 0, 0]} rotation={[0, -1.571, 0]}>
            <group position={[0, -1.017, 0]}>
              <mesh
                geometry={nodes.Volume_Mesher_2.geometry}
                material={nodes.Volume_Mesher_2.material}
                position={[0.018, 0, 0]}
              />
            </group>
            <mesh
              geometry={nodes.Cylinder_2.geometry}
              material={nodes.Cylinder_2.material}
              position={[0, -0.079, 0]}
            />
          </group>
          <group
            position={[7.439, 0, 7.439]}
            rotation={[Math.PI, -Math.PI / 4, Math.PI]}
          >
            <group position={[0, -1.017, 0]}>
              <mesh
                geometry={nodes.Volume_Mesher_3.geometry}
                material={nodes.Volume_Mesher_3.material}
                position={[0.018, 0, 0]}
              />
            </group>
            <mesh
              geometry={nodes.Cylinder_3.geometry}
              material={nodes.Cylinder_3.material}
              position={[0, -0.079, 0]}
            />
          </group>
          <group position={[0, 0, 10.52]} rotation={[-Math.PI, 0, -Math.PI]}>
            <group position={[0, -1.017, 0]}>
              <mesh
                geometry={nodes.Volume_Mesher_4.geometry}
                material={nodes.Volume_Mesher_4.material}
                position={[0.018, 0, 0]}
              />
            </group>
            <mesh
              geometry={nodes.Cylinder_4.geometry}
              material={nodes.Cylinder_4.material}
              position={[0, -0.079, 0]}
            />
          </group>
          <group
            position={[-7.439, 0, 7.439]}
            rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
          >
            <group position={[0, -1.017, 0]}>
              <mesh
                geometry={nodes.Volume_Mesher_5.geometry}
                material={nodes.Volume_Mesher_5.material}
                position={[0.018, 0, 0]}
              />
            </group>
            <mesh
              geometry={nodes.Cylinder_5.geometry}
              material={nodes.Cylinder_5.material}
              position={[0, -0.079, 0]}
            />
          </group>
          <group position={[-10.52, 0, 0]} rotation={[0, 1.571, 0]}>
            <group position={[0, -1.017, 0]}>
              <mesh
                geometry={nodes.Volume_Mesher_6.geometry}
                material={nodes.Volume_Mesher_6.material}
                position={[0.018, 0, 0]}
              />
            </group>
            <mesh
              geometry={nodes.Cylinder_6.geometry}
              material={nodes.Cylinder_6.material}
              position={[0, -0.079, 0]}
            />
          </group>
          <group position={[-7.439, 0, -7.439]} rotation={[0, Math.PI / 4, 0]}>
            <group position={[0, -1.017, 0]}>
              <mesh
                geometry={nodes.Volume_Mesher_7.geometry}
                material={nodes.Volume_Mesher_7.material}
                position={[0.018, 0, 0]}
              />
            </group>
            <mesh
              geometry={nodes.Cylinder_7.geometry}
              material={nodes.Cylinder_7.material}
              position={[0, -0.079, 0]}
            />
          </group>
        </group>
        <mesh
          geometry={nodes.Cube2.geometry}
          material={nodes.Cube2.material}
          position={[3.125, 0.764, 2.681]}
        />
        <group position={[-1.052, 0.325, -1.517]}>
          <mesh
            geometry={nodes.Cube4_1.geometry}
            material={nodes.Cube4_1.material}
            position={[0.009, 0.057, -0.007]}
            rotation={[-Math.PI, -1.562, -Math.PI]}
          />
          <mesh
            geometry={nodes.Connect_1.geometry}
            material={nodes.Connect_1.material}
            position={[0.009, -0.037, -0.007]}
          />
        </group>
        <group position={[1.065, 0.869, 3.317]}>
          <group position={[-4.549, 0.17, -0.652]}>
            <mesh
              geometry={nodes.Cube_6.geometry}
              material={nodes.Cube_6.material}
              position={[0.512, 0.009, 0.034]}
            />
            <group position={[0.32, -0.014, -0.141]}>
              <mesh
                geometry={nodes.counter_1.geometry}
                material={nodes.counter_1.material}
              />
              <group position={[0.192, 0.01, 0.175]}>
                <mesh
                  geometry={nodes["Cube-smudged"].geometry}
                  material={nodes["Cube-smudged"].material}
                />
                <mesh
                  geometry={nodes["Cube-wall"].geometry}
                  material={nodes["Cube-wall"].material}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    );
  }
  
  useGLTF.preload("./optimized.gltf");