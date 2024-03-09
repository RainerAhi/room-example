import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./dining-room.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.175}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[0, -4.892, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
            scale={[1379.1, 1734, 765]}
          >
            <mesh
              geometry={nodes.Modern_Dining_Room_Floor_0.geometry}
              material={materials.Floor}
            />
            <mesh
              geometry={nodes.Walls_Walls_0.geometry}
              material={materials.Walls}
              position={[0, 0, 0.006]}
              scale={[0.986, 1, 1]}
            />
            <mesh
              geometry={nodes.Roof_Roof_0.geometry}
              material={materials.Roof}
              position={[0, 0, 1.106]}
              scale={[0.986, 1, 1]}
            />
            <mesh
              geometry={nodes.Backdrop_Backdrop_0.geometry}
              material={materials.Backdrop}
              position={[0, 1.557, 0.006]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[1.943, 3.503, 1.546]}
            />
            <mesh
              geometry={nodes.DoorFrame_DoorFrame_0.geometry}
              material={materials.DoorFrame}
              position={[0, 1.129, -0.315]}
              scale={[0.986, 1, 1]}
            />
            <mesh
              geometry={nodes.Window_Window_0.geometry}
              material={materials.Window}
              position={[0, 0, 0.006]}
              scale={[0.986, 1, 1]}
            />
            <mesh
              geometry={nodes.DiningTable_DiningTable_0.geometry}
              material={materials.DiningTable}
              position={[0, 0.058, -0.567]}
              scale={[0.145, 0.115, 0.261]}
            />
            <mesh
              geometry={nodes.Pot_Pot_0.geometry}
              material={materials.material}
              position={[0, 0.058, -0.429]}
              scale={[0.073, 0.058, 0.131]}
            />
            <mesh
              geometry={nodes.CurtainPole_CurtainPole_0.geometry}
              material={materials.CurtainPole}
              position={[0, 1.096, 0.791]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.024, 0.01, 0.615]}
            />
            <mesh
              geometry={nodes.Curtains_Curtains_0.geometry}
              material={materials.Curtains}
              position={[0, 1.066, 0.27]}
              scale={[0.16, 0.369, 0.131]}
            />
            <mesh
              geometry={nodes.Paintings_Paintings_0.geometry}
              material={materials.Paintings}
              position={[1.174, 0.173, 0.006]}
              scale={[0.073, 0.058, 0.131]}
            />
            <mesh
              geometry={nodes.PictureFrame_PictureFrame_0.geometry}
              material={materials.PictureFrame}
              position={[-1.177, 0.058, 0.006]}
              scale={[0.516, 0.615, 0.929]}
            />
            <mesh
              geometry={nodes.Picture_Picture_0.geometry}
              material={materials.Picture}
              position={[-1.173, 0.058, 0.006]}
              scale={[0.516, 0.615, 0.929]}
            />
            <mesh
              geometry={nodes.Plant_Plant_0.geometry}
              material={materials.Plant}
              position={[0.001, 0.058, -0.177]}
              scale={[0.044, 0.035, 0.078]}
            />
            <mesh
              geometry={nodes.Carpet_Carpet_0.geometry}
              material={materials.Carpet}
              position={[0, 0.058, -1.089]}
              scale={[0.887, 0.518, 0.173]}
            />
            <mesh
              geometry={nodes.LightChrome_LightChrome_0.geometry}
              material={materials.LightChrome}
              position={[0, 0.058, 0.834]}
              scale={[0.003, 0.003, 0.006]}
            />
            <mesh
              geometry={nodes.LightGlass_Lights_0.geometry}
              material={materials.Lights}
              position={[0, 0.058, 0.456]}
              scale={[0.003, 0.003, 0.006]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./dining-room.glb");
