import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Brat(props) {
  const { nodes, materials } = useGLTF("/brat.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Circle001"
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials["Material.002"]}
        position={[-2.1493, 14.3173, 11.0524]}
        scale={0.0389}
      />
      <mesh
        name="Circle006"
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials["Material.002"]}
        position={[-4.237, 14.3173, 10.9933]}
        rotation={[-Math.PI, 0, 0]}
        scale={-0.0391}
      />
      <mesh
        name="Circle007"
        castShadow
        receiveShadow
        geometry={nodes.Circle007.geometry}
        material={materials["Material.002"]}
        position={[-2.1493, 13.7315, 11.0524]}
        scale={0.0389}
      />
      <mesh
        name="Circle008"
        castShadow
        receiveShadow
        geometry={nodes.Circle008.geometry}
        material={materials["Material.002"]}
        position={[-4.237, 13.7315, 10.9933]}
        rotation={[-Math.PI, 0, 0]}
        scale={-0.0391}
      />
      <mesh
        name="gheara-noua-1-1004"
        castShadow
        receiveShadow
        geometry={nodes["gheara-noua-1-1004"].geometry}
        material={materials["Material.005"]}
        position={[-4.8787, 14.0289, 12.5429]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.0415}
      />
      <mesh
        name="gheara-noua-1-1005"
        castShadow
        receiveShadow
        geometry={nodes["gheara-noua-1-1005"].geometry}
        material={materials["Material.005"]}
        position={[-1.5409, 14.0289, 12.6358]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.0415}
      />
      <mesh
        name="gheara-noua-1-1006"
        castShadow
        receiveShadow
        geometry={nodes["gheara-noua-1-1006"].geometry}
        material={materials["Material.005"]}
        position={[-4.8787, 13.463, 12.5429]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.0415}
      />
      <mesh
        name="gheara-noua-1-1007"
        castShadow
        receiveShadow
        geometry={nodes["gheara-noua-1-1007"].geometry}
        material={materials["Material.005"]}
        position={[-1.5409, 13.463, 12.6358]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.0415}
      />
      <mesh
        name="Gheara-sup001"
        castShadow
        receiveShadow
        geometry={nodes["Gheara-sup001"].geometry}
        material={materials["Material.005"]}
        position={[-3.1764, 16.7009, 5.6074]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.0597}
      />
      <mesh
        name="Prindere-gh-de-gls001"
        castShadow
        receiveShadow
        geometry={nodes["Prindere-gh-de-gls001"].geometry}
        material={materials["Material.005"]}
        position={[-2.0651, 17.865, -2.2382]}
        scale={0.0601}
      />
      <mesh
        name="glisiera001"
        castShadow
        receiveShadow
        geometry={nodes.glisiera001.geometry}
        material={materials["Material.002"]}
        position={[-0.7639, -1.5115, -5.1777]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.0625, 0.0625, 0.3743]}
      />
      <mesh
        name="glisiera003"
        castShadow
        receiveShadow
        geometry={nodes.glisiera003.geometry}
        material={materials["Material.001"]}
        position={[-0.7865, -27.0062, -5.1765]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.0625, 0.0625, 0.3743]}
      />
    </group>
  );
}

useGLTF.preload("/brat.glb");
