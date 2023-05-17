/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Room1(props) {
  const { nodes, materials } = useGLTF("/scenes/sez1_room.glb");
  return (
    <group {...props} dispose={null}>
      <group
        name="Group003001"
        position={[-2.8041, 0.1408, 2.464]}
        rotation={[0, 1.5316, 0]}
        scale={[0.0217, 0.0217, 0.0256]}
      >
        <group name="Group001001" position={[-13.5454, -0.1372, 0]}>
          <mesh toneMapped={false}
            name="Veshalka001001"
            castShadow
            receiveShadow
            geometry={nodes.Veshalka001001.geometry}
            material={materials.metal}
            position={[0.4183, -0.0548, 3.1405]}
            rotation={[1.5583, 0.9486, -1.5554]}
            scale={-0.0917}
          />
          <mesh toneMapped={false}
            name="Wheel002001"
            castShadow
            receiveShadow
            geometry={nodes.Wheel002001.geometry}
            material={materials["headphones.001"]}
            position={[0.5969, -0.4058, 3.3731]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={-1}
          />
          <mesh toneMapped={false}
            name="Wheel003001"
            castShadow
            receiveShadow
            geometry={nodes.Wheel003001.geometry}
            material={materials["headphones.001"]}
            position={[0.6025, -0.4058, -3.3731]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="Group002001" position={[14.4895, -0.1372, 0]}>
          <mesh toneMapped={false}
            name="Veshalka001"
            castShadow
            receiveShadow
            geometry={nodes.Veshalka001.geometry}
            material={materials.metal}
            position={[-0.4183, -0.0892, 3.1405]}
            rotation={[-1.5833, 0.9486, -1.5554]}
            scale={0.0917}
          />
          <mesh toneMapped={false}
            name="Wheel001001"
            castShadow
            receiveShadow
            geometry={nodes.Wheel001001.geometry}
            material={materials["headphones.001"]}
            position={[-0.5969, -0.4058, 3.3731]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
          />
          <mesh toneMapped={false}
            name="Wheel001"
            castShadow
            receiveShadow
            geometry={nodes.Wheel001.geometry}
            material={materials["headphones.001"]}
            position={[-0.6025, -0.4058, -3.3731]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={-1}
          />
        </group>
        <mesh toneMapped={false}
          name="Line001002"
          castShadow
          receiveShadow
          geometry={nodes.Line001002.geometry}
          material={materials["socket_power.001"]}
          position={[-0.5984, 1.7409, -1.6991]}
        />
        <mesh toneMapped={false}
          name="Line001003"
          castShadow
          receiveShadow
          geometry={nodes.Line001003.geometry}
          material={nodes.Line001003.material}
          position={[-0.5984, 1.7409, -1.6991]}
        />
      </group>
      <mesh toneMapped={false}
        name="Perfil2020"
        castShadow
        receiveShadow
        geometry={nodes.Perfil2020.geometry}
        material={materials.metal}
        position={[-1.9738, 0.1199, 1.6218]}
        rotation={[Math.PI / 2, 0, 0.3688]}
        scale={0.0002}
      />
      <mesh toneMapped={false}
        name="Perfil2020003"
        castShadow
        receiveShadow
        geometry={nodes.Perfil2020003.geometry}
        material={materials.metal}
        position={[-1.9707, 0.6129, 1.2285]}
        rotation={[Math.PI / 2, 0, 2.0036]}
        scale={0.0002}
      />
      <mesh toneMapped={false}
        name="Perfil2020001"
        castShadow
        receiveShadow
        geometry={nodes.Perfil2020001.geometry}
        material={materials.metal}
        position={[-1.6876, 0.142, 1.6867]}
        rotation={[1.5706, -0.075, 1.5679]}
        scale={0.0002}
      />
      <mesh toneMapped={false}
        name="Perfil2020002"
        castShadow
        receiveShadow
        geometry={nodes.Perfil2020002.geometry}
        material={materials.metal}
        position={[-2.1785, 0.1033, 2.0213]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.0002}
      />
      <mesh toneMapped={false}
        name="Cube012"
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[-2, 1, 0]}
      />
      <mesh toneMapped={false}
        name="Cube019"
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={nodes.Cube019.material}
        position={[-3.1, 1, 2]}
        scale={[0.1, 1, 1]}
      />
      <mesh toneMapped={false}
        name="Cube018"
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials.cardboard}
        position={[-2, 0.0675, 2]}
        scale={[1, 0.0312, 1]}
      />
      <mesh toneMapped={false}
        name="cardboard_box_01_1k005"
        castShadow
        receiveShadow
        geometry={nodes.cardboard_box_01_1k005.geometry}
        material={materials.cardboard}
        position={[-2.7623, 0.1983, 1.6016]}
        rotation={[0, -0.6104, 0]}
        scale={0.8339}
      />
      <mesh toneMapped={false}
        name="cardboard_box_01_1k007"
        castShadow
        receiveShadow
        geometry={nodes.cardboard_box_01_1k007.geometry}
        material={materials.cardboard}
        position={[-2.541, 1.328, 1.2853]}
        rotation={[0, -0.6104, 0]}
        scale={0.8339}
      />
      <mesh toneMapped={false}
        name="bench_vice_01_1k002"
        castShadow
        receiveShadow
        geometry={nodes.bench_vice_01_1k002.geometry}
        material={materials.merenghina}
        position={[-2.6935, 0.576, 1.6127]}
        rotation={[0, -0.4842, 0]}
        scale={0.6206}
      />
      <mesh toneMapped={false}
        name="lampa_perete002"
        castShadow
        receiveShadow
        geometry={nodes.lampa_perete002.geometry}
        material={materials.lampa_pereti}
        position={[-2.049, 1.3954, 1.1254]}
        scale={0.0093}
      />
      <mesh toneMapped={false}
        name="lampa_perete003"
        castShadow
        receiveShadow
        geometry={nodes.lampa_perete003.geometry}
        material={materials["lampa_pereti.001"]}
        position={[-1.2689, 1.3954, 1.1288]}
        scale={0.0093}
      />
      <mesh toneMapped={false}
        name="Cube002"
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.router}
        position={[-2.2097, 0.1304, 2.4112]}
        rotation={[Math.PI / 2, 0, -0.2094]}
        scale={0.4621}
      />
      <mesh toneMapped={false}
        name="katana001"
        castShadow
        receiveShadow
        geometry={nodes.katana001.geometry}
        material={materials.katarama}
        position={[-1.4998, 0.129, 1.1287]}
        rotation={[Math.PI / 2, 0, 1.323]}
        scale={[0.7095, 0.8261, 0.7008]}
      />
      <mesh toneMapped={false}
        name="surusurubelnita002"
        castShadow
        receiveShadow
        geometry={nodes.surusurubelnita002.geometry}
        material={materials.tabla}
        position={[-1.8656, 0.1132, 2.68]}
        rotation={[0, -0.5929, Math.PI / 2]}
        scale={1.0594}
      />
      <mesh toneMapped={false}
        name="steel_frame_shelves_01_1k001"
        castShadow
        receiveShadow
        geometry={nodes.steel_frame_shelves_01_1k001.geometry}
        material={materials.tabla}
        position={[-2.6475, 0.1012, 1.4689]}
        rotation={[0, 0.9604, 0]}
        scale={0.7445}
      />
      <mesh toneMapped={false}
        name="banca"
        castShadow
        receiveShadow
        geometry={nodes.banca.geometry}
        material={materials.tabla}
        position={[-1.6155, 0.4431, 1.1909]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.2196}
      />
      <mesh toneMapped={false}
        name="screwdriver003"
        castShadow
        receiveShadow
        geometry={nodes.screwdriver003.geometry}
        material={materials.tabla}
        position={[-1.1649, 0.114, 2.1988]}
        rotation={[0, 1.1641, 0]}
        scale={0.0011}
      />
      <mesh toneMapped={false}
        name="Drill_01_1k002"
        castShadow
        receiveShadow
        geometry={nodes.Drill_01_1k002.geometry}
        material={materials.boromiro_masina}
        position={[-1.4573, 0.6058, 1.2462]}
        rotation={[0, 0.4206, -0.089]}
        scale={1.2866}
      />
    </group>
  );
}

useGLTF.preload("scenes/sez1_room.glb");