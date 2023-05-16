import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Sase(props) {
  const { nodes, materials } = useGLTF("/robotii/sez6.glb");
  return (
    <group {...props} dispose={null} scale={[1.7, 1.7, 1.7]} position={[0, -7, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.suport_baterie.geometry}
        material={materials.verde}
        position={[-7.5794, 5.4788, 5.9965]}
        rotation={[0, -1.5705, 0]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.baterie.geometry}
        material={materials["Material.003"]}
        position={[-7.6227, 5.2782, 6.0151]}
        rotation={[0, 1.5705, 0]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.007"]}
        position={[-10.3569, 10.3212, -0.1864]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[6.2358, 5.9376, 11.7025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.007"]}
        position={[8.5135, 10.3212, -0.1864]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[6.2358, 5.9376, 11.7025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["REV-31-1153_v1"].geometry}
        material={materials["Material.003"]}
        position={[-9.056, 6.9917, -7.5869]}
        rotation={[-Math.PI, -1.5705, 0]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["REV-31-1153_v1001"].geometry}
        material={materials["Material.003"]}
        position={[-9.056, 6.9917, -1.1284]}
        rotation={[0, 1.5705, 0]}
        scale={-0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3606-0100-0096_assembly_v1001"].geometry}
        material={materials["galben "]}
        position={[8.0629, 0.3423, 8.5163]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3606-0100-0096_assembly_v1004"].geometry}
        material={materials["galben "]}
        position={[-10.4082, 0.3423, 8.5163]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={-0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3606-0100-0096_assembly_v1006"].geometry}
        material={materials["galben "]}
        position={[-10.4082, 0.3423, -8.6358]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3606-0100-0096_assembly_v1005"].geometry}
        material={materials["negru roti"]}
        position={[-10.4082, 0.3423, 8.5163]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={-0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3606-0100-0096_assembly_v1_001002"].geometry}
        material={materials["galben "]}
        position={[-10.4082, 0.3423, 8.5163]}
        rotation={[-Math.PI, 0, -Math.PI / 2]}
        scale={-0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3606-0100-0096_assembly_v1003"].geometry}
        material={materials["negru roti"]}
        position={[8.0629, 0.3423, 8.5163]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3606-0100-0096_assembly_v1007"].geometry}
        material={materials["negru roti"]}
        position={[-10.4082, 0.3423, -8.6358]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle046.geometry}
        material={materials.metal}
        position={[-3.6526, 0.8948, 8.7952]}
        rotation={[-1.0407, 0, Math.PI / 2]}
        scale={-0.2612}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3606-0100-0096_assembly_v1_001003"].geometry}
        material={materials["galben "]}
        position={[-10.4082, 0.3423, -8.6358]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle047.geometry}
        material={materials.chrome}
        position={[-3.6526, 0.8948, 8.7952]}
        rotation={[-1.0407, 0, Math.PI / 2]}
        scale={-0.2612}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle048.geometry}
        material={materials.metal}
        position={[1.3074, 0.8948, 8.7952]}
        rotation={[2.1009, 0, Math.PI / 2]}
        scale={0.2612}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3606-0100-0096_assembly_v1_001001"].geometry}
        material={materials["galben "]}
        position={[8.0629, 0.3423, 8.5163]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle049.geometry}
        material={materials.chrome}
        position={[1.3074, 0.8948, 8.7952]}
        rotation={[2.1009, 0, Math.PI / 2]}
        scale={0.2612}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle050.geometry}
        material={materials.metal}
        position={[1.3074, 0.8948, -8.9147]}
        rotation={[-2.1009, 0, -Math.PI / 2]}
        scale={-0.2612}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle051.geometry}
        material={materials.chrome}
        position={[1.3074, 0.8948, -8.9147]}
        rotation={[-2.1009, 0, -Math.PI / 2]}
        scale={-0.2612}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle052.geometry}
        material={materials.metal}
        position={[-3.622, 0.8948, -8.9147]}
        rotation={[1.0407, 0, -Math.PI / 2]}
        scale={0.2612}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle053.geometry}
        material={materials.chrome}
        position={[-3.622, 0.8948, -8.9147]}
        rotation={[1.0407, 0, -Math.PI / 2]}
        scale={0.2612}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.channel_10_gauri.geometry}
        material={materials["Material.001"]}
        position={[-10.6194, -0.5188, -4.8158]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle060.geometry}
        material={nodes.Circle060.material}
        position={[8.817, 3.7316, -28.7895]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3606-0100-0096_assembly_v1_001004"].geometry}
        material={materials["galben "]}
        position={[8.0936, 0.3423, -8.6358]}
        rotation={[0, 0, Math.PI / 2]}
        scale={-0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.motor006.geometry}
        material={nodes.motor006.material}
        position={[7.8449, 2.538, 3.2317]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={-0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3606-0100-0096_assembly_v1008"].geometry}
        material={materials["galben "]}
        position={[8.0936, 0.3423, -8.6358]}
        rotation={[0, 0, Math.PI / 2]}
        scale={-0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.motor007.geometry}
        material={nodes.motor007.material}
        position={[-10.1902, 2.538, 3.2317]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.motor008.geometry}
        material={nodes.motor008.material}
        position={[-10.1902, 2.538, -3.3513]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.motor009.geometry}
        material={nodes.motor009.material}
        position={[7.8756, 2.538, -3.3513]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane023.geometry}
        material={materials["Material.003"]}
        position={[5.2668, 2.3225, 10.5392]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.deadwheels_v1001.geometry}
        material={materials.negru}
        position={[8.2021, -0.4037, -1.6974]}
        rotation={[Math.PI / 2, -0.0023, 0]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane036.geometry}
        material={materials.negru}
        position={[8.817, 3.7316, -28.7895]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.deadwheels_v1004.geometry}
        material={materials.negru}
        position={[-3.1063, 0.7651, -8.8169]}
        rotation={[1.5731, 0, Math.PI / 2]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane037.geometry}
        material={materials.negru}
        position={[23.9857, 4.9004, -8.202]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3606-0100-0096_assembly_v1009"].geometry}
        material={materials["negru roti"]}
        position={[8.0936, 0.3423, -8.6358]}
        rotation={[0, 0, Math.PI / 2]}
        scale={-0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["REV-11-1271_v1001"].geometry}
        material={materials.negru}
        position={[9.1893, -0.4234, -1.9672]}
        rotation={[2.7386, 0, -Math.PI / 2]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["REV-11-1271_v1004"].geometry}
        material={materials.negru}
        position={[-2.8365, 0.7454, -7.8297]}
        rotation={[Math.PI / 2, 1.1678, 0]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={materials["Material.001"]}
        position={[-0.7832, 5.2272, 7.2915]}
        scale={0.0389}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials["Material.001"]}
        position={[-2.8709, 5.2272, 7.2324]}
        rotation={[-Math.PI, 0, 0]}
        scale={-0.0391}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["gheara-noua-1-1"].geometry}
        material={materials["Material.005"]}
        position={[-3.3053, 5.5245, 8.8367]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.0415}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["gheara-noua-1-1001"].geometry}
        material={materials["Material.005"]}
        position={[-0.3821, 5.5245, 8.9296]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.0415}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["gheara-noua-1-1002"].geometry}
        material={materials["Material.005"]}
        position={[-3.3053, 4.9587, 8.8367]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.0415}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["gheara-noua-1-1003"].geometry}
        material={materials["Material.005"]}
        position={[-0.3821, 4.9587, 8.9296]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.0415}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Gheara-sup"].geometry}
        material={materials["Material.005"]}
        position={[-1.7125, 8.0899, 1.6745]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={0.0597}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Prindere-gh-de-gls"].geometry}
        material={materials["Material.005"]}
        position={[-0.8744, 10.1056, -6.4772]}
        scale={0.0601}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.servo_1001.geometry}
        material={materials.gri}
        position={[-2.9196, 8.1838, 6.5438]}
        rotation={[0, 0, -Math.PI]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.servou.geometry}
        material={materials.gri}
        position={[-1.7808, 8.3433, -5.1038]}
        rotation={[0, -1.5705, 0]}
        scale={-0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.servou001.geometry}
        material={materials.gri}
        position={[-1.8148, 10.1731, -4.391]}
        rotation={[0, -1.5705, 0]}
        scale={-0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.profil_6_gauri001.geometry}
        material={materials["Material.001"]}
        position={[14.9276, 2.3225, -1.3961]}
        rotation={[0, 1.5705, 0]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["5202-0002-0001_v1"].geometry}
        material={materials["Material.002"]}
        position={[7.9016, 11.3752, -0.0227]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle055.geometry}
        material={materials.verde}
        position={[4.9261, 6.7171, 21.7154]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gear_motor.geometry}
        material={materials["Material.003"]}
        position={[5.5598, 9.8787, -5.6837]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.1278}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gear_motor001.geometry}
        material={materials["Material.003"]}
        position={[5.5598, 9.8787, -4.6914]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1278}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glisiera.geometry}
        material={materials["Material.001"]}
        position={[5.3027, 20.536, -8.9386]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.0625, 0.0625, 0.3743]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glisiera001.geometry}
        material={materials["Material.001"]}
        position={[3.7279, 20.536, -8.9386]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.0625, 0.0625, 0.3743]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glisiera002.geometry}
        material={materials["Material.001"]}
        position={[2.1564, 20.536, -8.9386]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.0625, 0.0625, 0.3743]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glisiera003.geometry}
        material={materials["Material.001"]}
        position={[0.5744, 20.536, -8.9386]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.0625, 0.0625, 0.3743]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane045.geometry}
        material={materials.negru}
        position={[-7.9222, 14.1962, -8.8836]}
        rotation={[0, -1.5705, 0]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane046.geometry}
        material={materials.rosu}
        position={[-7.9222, 14.2899, -8.8836]}
        rotation={[0, -1.5705, 0]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane047.geometry}
        material={materials.negru}
        position={[-9.511, 14.1962, -8.8836]}
        rotation={[0, -1.5705, 0]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane048.geometry}
        material={materials.rosu}
        position={[-9.511, 14.2899, -8.8836]}
        rotation={[0, -1.5705, 0]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane049.geometry}
        material={materials.negru}
        position={[-11.0726, 14.1962, -8.8836]}
        rotation={[0, -1.5705, 0]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane050.geometry}
        material={materials.rosu}
        position={[-11.0726, 14.2899, -8.8836]}
        rotation={[0, -1.5705, 0]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3_gauri"].geometry}
        material={materials["Material.001"]}
        position={[5.2654, 7.4564, -1.4931]}
        scale={0.062}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.profil_6_gauri002.geometry}
        material={materials["Material.001"]}
        position={[5.2643, 5.3277, 16.5247]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.profil_13_gauri.geometry}
        material={materials["Material.001"]}
        position={[5.2668, 2.3225, 10.5392]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.profil_13_gauri001.geometry}
        material={materials["Material.001"]}
        position={[-7.5825, 2.3225, 10.5392]}
        scale={0.0625}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.quad_block001.geometry}
        material={materials["Material.001"]}
        position={[5.2633, 9.8091, -4.4988]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.0625}
      />
    </group>
  );
}

useGLTF.preload("/robotii/sez6.glb");
