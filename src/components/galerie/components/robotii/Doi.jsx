import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Doi(props) {
  const { nodes, materials } = useGLTF("/robotii/sez2.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Body1370"
        castShadow
        receiveShadow
        geometry={nodes.Body1370.geometry}
        material={materials["Aluminum - Polished"]}
      />
      <mesh
        name="Body1370_1"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_1.geometry}
        material={materials["Opaque(228,233,237).003"]}
      />
      <mesh
        name="Body1370_2"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_2.geometry}
        material={materials["Opaque(255,255,255).003"]}
      />
      <mesh
        name="Body1370_3"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_3.geometry}
        material={materials["Opaque(192,192,0).003"]}
      />
      <mesh
        name="Body1370_4"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_4.geometry}
        material={materials["Opaque(202,209,238).003"]}
      />
      <mesh
        name="Body1370_5"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_5.geometry}
        material={materials["Opaque(2,61,210).003"]}
      />
      <mesh
        name="Body1370_6"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_6.geometry}
        material={materials["Opaque(229,235,237).003"]}
      />
      <mesh
        name="Body1370_7"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_7.geometry}
        material={materials["Opaque(192,192,192).003"]}
      />
      <mesh
        name="Body1370_8"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_8.geometry}
        material={materials["Opaque(229,229,229).003"]}
      />
      <mesh
        name="Body1370_9"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_9.geometry}
        material={materials["Opaque(165,158,150).003"]}
      />
      <mesh
        name="Body1370_10"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_10.geometry}
        material={materials["Opaque(255,0,0).003"]}
      />
      <mesh
        name="Body1370_11"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_11.geometry}
        material={materials["Opaque(64,64,64).003"]}
      />
      <mesh
        name="Body1370_12"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_12.geometry}
        material={materials["Opaque(198,193,188).003"]}
      />
      <mesh
        name="Body1370_13"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_13.geometry}
        material={materials["Opaque(63,63,63).002"]}
      />
      <mesh
        name="Body1370_14"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_14.geometry}
        material={materials["Opaque(203,210,239).002"]}
      />
      <mesh
        name="Body1370_15"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_15.geometry}
        material={materials["Steel - Satin.003"]}
      />
      <mesh
        name="Body1370_16"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_16.geometry}
        material={materials["Opaque(153,153,153).001"]}
      />
      <mesh
        name="Body1370_17"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_17.geometry}
        material={materials["Plastic - Glossy (Green).002"]}
      />
      <mesh
        name="Body1370_18"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_18.geometry}
        material={materials["Plastic - Matte (Black)"]}
      />
      <mesh
        name="Body1370_19"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_19.geometry}
        material={materials["Plastic - Translucent Matte (Blue)"]}
      />
      <mesh
        name="Body1370_20"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_20.geometry}
        material={materials["Polycarbonate (Bronze)"]}
      />
      <mesh
        name="Body1370_21"
        castShadow
        receiveShadow
        geometry={nodes.Body1370_21.geometry}
        material={materials["Plastic - Matte (Green)"]}
      />
    </group>
  );
}

useGLTF.preload("/robotii/sez2.glb");