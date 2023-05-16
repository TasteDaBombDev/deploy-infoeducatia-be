import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Trei(props) {
  const { nodes, materials } = useGLTF("/robotii/sez3.glb");
  return (
    <group {...props} dispose={null} scale={[100, 100, 100]} position={[0, -10, 20]}>
      <group
        name="balder_facelift_v15"
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.001}
      >
        <group
          name="1106-0012-0096_v11"
          position={[74.5113, -181.2658, -160.0757]}
          rotation={[0.9599, 0, 0]}
        >
          <mesh
            name="Body1367"
            castShadow
            receiveShadow
            geometry={nodes.Body1367.geometry}
            material={materials["Aluminum - Bead Blasted"]}
            scale={10}
          />
        </group>
        <group
          name="1108-0002-0001_v11"
          position={[108, -390, -142.4264]}
          rotation={[Math.PI, -1.1781, Math.PI / 2]}
        />
        <group
          name="1108-0002-0001_v12"
          position={[187.598, -392.5, -165.4558]}
          rotation={[0, 1.1781, -Math.PI / 2]}
        />
        <group
          name="1111-0002-0001_v11"
          position={[172, -224.1729, -98.327]}
          rotation={[0.1745, Math.PI / 2, 0]}
        >
          <mesh
            name="Body1304"
            castShadow
            receiveShadow
            geometry={nodes.Body1304.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1111-0002-0001_v11001"
          position={[95.6238, -390, -138.9706]}
          rotation={[Math.PI / 2, 0, 2.3562]}
        >
          <mesh
            name="Body1370"
            castShadow
            receiveShadow
            geometry={nodes.Body1370.geometry}
            material={materials["Aluminum - Bead Blasted"]}
            scale={10}
          />
        </group>
        <group
          name="1111-0002-0001_v12"
          position={[-120.8022, -231.0773, -96.6227]}
          rotation={[0.1745, Math.PI / 2, 0]}
        >
          <mesh
            name="Body1305"
            castShadow
            receiveShadow
            geometry={nodes.Body1305.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1111-0002-0001_v12001"
          position={[-95.6238, -342, -138.9706]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
        >
          <mesh
            name="Body1372"
            castShadow
            receiveShadow
            geometry={nodes.Body1372.geometry}
            material={materials["Aluminum - Bead Blasted"]}
            scale={10}
          />
        </group>
        <group
          name="1113-0001-0048_v1_(2)_(1)2"
          position={[102.5, -290, -138]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <group
          name="1113-0001-0048_v11"
          position={[124, -390, -44.5]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            name="Body1369"
            castShadow
            receiveShadow
            geometry={nodes.Body1369.geometry}
            material={materials["Aluminum - Bead Blasted"]}
            scale={10}
          />
        </group>
        <group
          name="1113-0001-0048_v12"
          position={[-124, -342, -44.5]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        >
          <mesh
            name="Body1371"
            castShadow
            receiveShadow
            geometry={nodes.Body1371.geometry}
            material={materials["Aluminum - Bead Blasted"]}
            scale={10}
          />
        </group>
        <group
          name="1118-0024-0240_v11"
          position={[-144.8022, -40.1777, -224.2241]}
          rotation={[-2.1817, 0, 0]}
        >
          <mesh
            name="Body1306"
            castShadow
            receiveShadow
            geometry={nodes.Body1306.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1118-0024-0240_v12"
          position={[148, -34.9115, -224.7812]}
          rotation={[-2.1817, 0, 0]}
        >
          <mesh
            name="Body1307"
            castShadow
            receiveShadow
            geometry={nodes.Body1307.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1119-0021-0168_v1_(1)1"
          position={[-140.4142, -53.3297, -247.5982]}
          rotation={[0.9599, -Math.PI / 2, 0]}
        >
          <mesh
            name="Body1318"
            castShadow
            receiveShadow
            geometry={nodes.Body1318.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1119-0021-0168_v1_(2)1"
          position={[-12.4142, -101.6597, -213.7572]}
          rotation={[0.9599, -Math.PI / 2, 0]}
        >
          <mesh
            name="Body1319"
            castShadow
            receiveShadow
            geometry={nodes.Body1319.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1119-0021-0168_v1_(2)2"
          position={[-84.4142, -59.8829, -243.0096]}
          rotation={[-2.1817, 0, Math.PI]}
        >
          <mesh
            name="Body1365"
            castShadow
            receiveShadow
            geometry={nodes.Body1365.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1119-0021-0168_v11"
          position={[-12.4142, -59.8829, -243.0096]}
          rotation={[0.9599, -Math.PI / 2, 0]}
        >
          <mesh
            name="Body1317"
            castShadow
            receiveShadow
            geometry={nodes.Body1317.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1120-0001-0048_v1_(1)1"
          position={[27.5858, -116.7375, -242.2644]}
          rotation={[2.5307, -Math.PI / 2, 0]}
        >
          <mesh
            name="Body1309"
            castShadow
            receiveShadow
            geometry={nodes.Body1309.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
          <mesh
            name="Body2005"
            castShadow
            receiveShadow
            geometry={nodes.Body2005.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1120-0001-0048_v11"
          position={[27.5858, -116.7375, -242.2644]}
          rotation={[2.5307, Math.PI / 2, 0]}
        >
          <mesh
            name="Body1308"
            castShadow
            receiveShadow
            geometry={nodes.Body1308.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1120-0004-0120_v1_(1)1"
          position={[124, -387.5, -162]}
          rotation={[Math.PI, 0, 0]}
        />
        <group
          name="1120-0017-0432_v11"
          position={[124, 42, -39.5]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            name="Body1"
            castShadow
            receiveShadow
            geometry={nodes.Body1.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1120-0017-0432_v12"
          position={[-124, 42, -39.5]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            name="Body1139"
            castShadow
            receiveShadow
            geometry={nodes.Body1139.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1201-0043-0002_v1_(4)1"
          position={[3.5858, -99.1258, -254.5963]}
          rotation={[2.5307, -Math.PI / 2, 0]}
        >
          <mesh
            name="Body1310"
            castShadow
            receiveShadow
            geometry={nodes.Body1310.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1201-0043-0002_v1_(4)2"
          position={[3.5858, -85.3599, -234.9366]}
          rotation={[2.5307, 0, 0]}
        >
          <mesh
            name="Body1316"
            castShadow
            receiveShadow
            geometry={nodes.Body1316.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1201-0043-0002_v1_(8)(Mirror)1"
          position={[-124, -302, -18]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="1204-0002-0001_v1_(1)1"
          position={[91.5858, -96.4984, -212.4881]}
          rotation={[-2.1817, 0, 0]}
        >
          <mesh
            name="Body1327"
            castShadow
            receiveShadow
            geometry={nodes.Body1327.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1204-0002-0001_v11"
          position={[91.5858, -54.7216, -241.7405]}
          rotation={[-2.1817, 0, 0]}
        >
          <mesh
            name="Body1326"
            castShadow
            receiveShadow
            geometry={nodes.Body1326.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1204-0002-0001_v12"
          position={[-116.4142, -48.1684, -246.3291]}
          rotation={[-2.1817, 0, 0]}
        >
          <mesh
            name="Body1332"
            castShadow
            receiveShadow
            geometry={nodes.Body1332.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1309-0016-4008_assembly_v11"
          position={[0, 100, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group
            name="1309-0016-40081"
            position={[51.5858, 211.857, -169.5046]}
            rotation={[-0.6109, 0, 0]}
          >
            <mesh
              name="Body1340"
              castShadow
              receiveShadow
              geometry={nodes.Body1340.geometry}
              material={materials["Aluminum - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="2800-0004-0014_90128A2071"
            position={[49.5329, 218.2344, -160.3967]}
            rotation={[0.3445, Math.PI / 6, 0.9553]}
          >
            <mesh
              name="Body1341"
              castShadow
              receiveShadow
              geometry={nodes.Body1341.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="2800-0004-0014_90128A2072"
            position={[53.6386, 205.4795, -178.6125]}
            rotation={[1.5754, -Math.PI / 6, -2.1863]}
          >
            <mesh
              name="Body1342"
              castShadow
              receiveShadow
              geometry={nodes.Body1342.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
        </group>
        <group
          name="1400-0032-0032_assembly_v11"
          position={[-136.3177, -251.9527, -90.0836]}
          rotation={[0, 1.5705, 0]}
        >
          <group
            name="1400-0032-00321"
            position={[58.0361, -14.3202, 34.3177]}
            rotation={[0, 0, -Math.PI / 6]}
          >
            <mesh
              name="Body1374"
              castShadow
              receiveShadow
              geometry={nodes.Body1374.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="2800-0004-0012_90128A2071"
            position={[10.4636, -0.9517, -2.5558]}
            rotation={[Math.PI / 2, 0.0068, 0]}
          />
        </group>
        <group
          name="1600-0515-0006_(2)1"
          position={[99.5858, -82.7788, -231.2504]}
          rotation={[2.5307, 0, 2.5629]}
        >
          <mesh
            name="Body3005"
            castShadow
            receiveShadow
            geometry={nodes.Body3005.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
          <mesh
            name="Body1325"
            castShadow
            receiveShadow
            geometry={nodes.Body1325.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body2007"
            castShadow
            receiveShadow
            geometry={nodes.Body2007.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1600-0515-0006_(2)2"
          position={[99.5858, -57.2466, -195.6584]}
          rotation={[2.5307, 0, -Math.PI]}
        >
          <mesh
            name="Body3006"
            castShadow
            receiveShadow
            geometry={nodes.Body3006.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
          <mesh
            name="Body1329"
            castShadow
            receiveShadow
            geometry={nodes.Body1329.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body2008"
            castShadow
            receiveShadow
            geometry={nodes.Body2008.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1600-0515-0006_(2)3"
          position={[-108.4142, -78.3882, -234.569]}
          rotation={[2.5307, 0, -Math.PI]}
        >
          <mesh
            name="Body3007"
            castShadow
            receiveShadow
            geometry={nodes.Body3007.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
          <mesh
            name="Body1331"
            castShadow
            receiveShadow
            geometry={nodes.Body1331.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body2009"
            castShadow
            receiveShadow
            geometry={nodes.Body2009.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1600-0515-0006_(2)4"
          position={[-108.4142, -53.1509, -198.5262]}
          rotation={[2.5307, 0, -Math.PI]}
        >
          <mesh
            name="Body3008"
            castShadow
            receiveShadow
            geometry={nodes.Body3008.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
          <mesh
            name="Body1333"
            castShadow
            receiveShadow
            geometry={nodes.Body1333.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body2010"
            castShadow
            receiveShadow
            geometry={nodes.Body2010.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1605-0024-00061"
          position={[-108.4142, -74.2585, -228.6711]}
          rotation={[-0.6109, 0, 0]}
        >
          <mesh
            name="Body1330"
            castShadow
            receiveShadow
            geometry={nodes.Body1330.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1605-0024-00062"
          position={[-108.4142, -49.0211, -192.6284]}
          rotation={[-0.6109, 0, 0]}
        >
          <mesh
            name="Body1334"
            castShadow
            receiveShadow
            geometry={nodes.Body1334.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1606-0043-0006_(1)1"
          position={[99.5858, -78.7638, -225.5164]}
          rotation={[-0.6109, 0, 0]}
        >
          <mesh
            name="Body1324"
            castShadow
            receiveShadow
            geometry={nodes.Body1324.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="1606-0043-0006_(1)2"
          position={[99.5858, -53.1169, -189.7605]}
          rotation={[-0.6109, 0, 0]}
        >
          <mesh
            name="Body1328"
            castShadow
            receiveShadow
            geometry={nodes.Body1328.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="2101-0006-0180_v1_(1)1"
          position={[-108.4142, -26.9199, -160.7377]}
          rotation={[-0.6109, 0, 0]}
        >
          <mesh
            name="Body1391"
            castShadow
            receiveShadow
            geometry={nodes.Body1391.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="2101-0006-0180_v11"
          position={[92, -387.5219, -13.5615]}
          rotation={[0, 1.5705, 0]}
        >
          <group name="2101-0006-0180_v1" position={[0, -0.0001, 0]}>
            <mesh
              name="Body1350"
              castShadow
              receiveShadow
              geometry={nodes.Body1350.geometry}
              material={materials["Steel - Satin"]}
              position={[0, -0.0001, 0]}
              scale={10}
            />
          </group>
        </group>
        <group
          name="2101-0006-0180_v11001"
          position={[99.6883, -31.2855, -157.4367]}
          rotation={[-0.6109, 0, 0.5787]}
        >
          <mesh
            name="Body1392"
            castShadow
            receiveShadow
            geometry={nodes.Body1392.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="2101-0006-0180_v12"
          position={[90, -450.6891, -26.0615]}
          rotation={[0, 1.5705, 0]}
        >
          <mesh
            name="Body1351"
            castShadow
            receiveShadow
            geometry={nodes.Body1351.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="2101-0006-0180_v13"
          position={[90, -388.6891, -77.5508]}
          rotation={[0, 1.5705, 0]}
        >
          <mesh
            name="Body1352"
            castShadow
            receiveShadow
            geometry={nodes.Body1352.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="2101-0006-0180_v14"
          position={[84, -228.4744, -170.0508]}
          rotation={[0, 1.5705, 0]}
        >
          <mesh
            name="Body1353"
            castShadow
            receiveShadow
            geometry={nodes.Body1353.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="2101-0006-0180_v15"
          position={[89, -227.3072, -106.0615]}
          rotation={[0, 1.5705, 0]}
        >
          <mesh
            name="Body1354"
            castShadow
            receiveShadow
            geometry={nodes.Body1354.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="2101-0006-0260_v1_(2)_(1)2"
          position={[51.5858, 21.522, -81.8576]}
          rotation={[-0.6109, 0, 0]}
        >
          <mesh
            name="Body1323"
            castShadow
            receiveShadow
            geometry={nodes.Body1323.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="2302-0014-0090_v11"
          position={[51.5858, -121.1265, -285.5807]}
          rotation={[-0.6109, Math.PI / 2, 0]}
        >
          <mesh
            name="Body1338"
            castShadow
            receiveShadow
            geometry={nodes.Body1338.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group name="2303-4008-0030_assembly_v11" position={[240, 0, 0]}>
          <group
            name="2303-4008-00301"
            position={[-140.4142, -66.7187, -208.3142]}
            rotation={[0.9599, 0.5787, 0]}
          >
            <mesh
              name="Body1337"
              castShadow
              receiveShadow
              geometry={nodes.Body1337.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="2806-0005-0004_91390A1171"
            position={[3.1515, 17.4087, -21.6569]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <group
            name="2806-0005-0004_91390A1172"
            position={[8.2711, 17.4087, -12.7896]}
            rotation={[-Math.PI / 2, 0, -2.0944]}
          />
        </group>
        <group
          name="2306-1006-0014_assembly_v1_(3)(Mirror)1"
          position={[224.9048, -834.641, -58.2379]}
          rotation={[-1.5708, -1.4835, -Math.PI]}
        >
          <group
            name="2306-0006-0014_(3)(Mirror)1"
            position={[-480.3998, 40.2379, 392.2672]}
            rotation={[-0.7, 0.0668, 0.0562]}
          />
          <group
            name="2306-0006-0014_clamp_(3)(Mirror)1"
            position={[-480.4003, 40.2379, 392.2672]}
            rotation={[-0.7, 0.0668, 0.0562]}
          />
          <group
            name="2800-0004-0012_90128A207_(3)(Mirror)1"
            position={[-484.1127, 41.8405, 402.708]}
            rotation={[-2.2634, -0.1104, 0.0672]}
          />
          <group
            name="2800-0004-0012_90128A207_(3)(Mirror)2"
            position={[-484.701, 49.884, 395.9844]}
            rotation={[-2.2671, -0.0561, 0.0669]}
          />
        </group>
        <group
          name="2306-1006-0014_assembly_v1_(3)(Mirror)2"
          position={[272.8405, -286.7339, -58.2379]}
          rotation={[-1.5708, -1.4835, -Math.PI]}
        >
          <group
            name="2800-0004-0012_90128A207_(3)(Mirror)1001"
            position={[-196.4141, 42.2616, 405.4744]}
            rotation={[-0.8382, 0.113, -3.0767]}
          />
        </group>
        <group
          name="2306-1006-0014_assembly_v1_(3)1"
          position={[-224.9048, -834.641, -58.2379]}
          rotation={[-Math.PI / 2, 1.4835, 0]}
        />
        <group
          name="2306-1006-0014_assembly_v1_(3)2"
          position={[-272.8405, -286.7339, -58.2379]}
          rotation={[-Math.PI / 2, 1.4835, 0]}
        />
        <group
          name="2306-1006-0014_assembly_v1_(3)3"
          position={[-44.5632, -330.5069, -146.1639]}
          rotation={[-1.4881, 1.3546, 0.0353]}
        >
          <group
            name="2306-0006-0014_(3)1002"
            position={[-196.4446, 134.1758, 117.9084]}
            rotation={[0.047, -1.3546, 0.0383]}
          >
            <mesh
              name="Body1312"
              castShadow
              receiveShadow
              geometry={nodes.Body1312.geometry}
              material={materials["Aluminum - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="2306-0006-0014_clamp_(3)1002"
            position={[-196.4447, 134.1758, 117.908]}
            rotation={[0.047, -1.3546, 0.0383]}
          >
            <mesh
              name="Body1313"
              castShadow
              receiveShadow
              geometry={nodes.Body1313.geometry}
              material={materials["Aluminum - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="2800-0004-0012_90128A207_(3)1002"
            position={[-206.0221, 139.3721, 115.3325]}
            rotation={[1.6336, -0.0035, 1.3546]}
          >
            <mesh
              name="Body1314"
              castShadow
              receiveShadow
              geometry={nodes.Body1314.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="2800-0004-0012_90128A207_(3)2002"
            position={[-205.9358, 128.873, 115.2322]}
            rotation={[1.5803, 0.0082, 1.3547]}
          >
            <mesh
              name="Body1315"
              castShadow
              receiveShadow
              geometry={nodes.Body1315.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
        </group>
        <group
          name="2306-1006-0014_assembly_v11"
          position={[-272.427, 0, -127.5373]}
        >
          <group
            name="2306-0006-0014_clamp1"
            position={[170.4269, -247.7966, -31.2495]}
            rotation={[2.618, 0, -Math.PI / 2]}
          >
            <mesh
              name="Body1377"
              castShadow
              receiveShadow
              geometry={nodes.Body1377.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="2306-0006-00141"
            position={[170.4269, -247.7962, -31.2498]}
            rotation={[2.618, 0, -Math.PI / 2]}
          >
            <mesh
              name="Body1376"
              castShadow
              receiveShadow
              geometry={nodes.Body1376.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="2800-0004-0012_90128A2071001"
            position={[175.677, -256.1625, -36.5231]}
            rotation={[Math.PI / 3, -1.5163, Math.PI]}
          >
            <mesh
              name="Body1378"
              castShadow
              receiveShadow
              geometry={nodes.Body1378.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="2800-0004-0012_90128A2072"
            position={[165.1769, -256.1625, -36.5231]}
            rotation={[-2.0944, -1.5705, 0]}
          >
            <mesh
              name="Body1379"
              castShadow
              receiveShadow
              geometry={nodes.Body1379.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
        </group>
        <group
          name="2307-0014-0028_v11"
          position={[51.5858, -91.6511, -243.4855]}
          rotation={[-0.6109, Math.PI / 2, 0]}
        >
          <mesh
            name="Body1339"
            castShadow
            receiveShadow
            geometry={nodes.Body1339.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="2307-0014-0028_v11001"
          position={[-117.3887, -228.2869, -170.0508]}
        >
          <mesh
            name="Body1380"
            castShadow
            receiveShadow
            geometry={nodes.Body1380.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="2910-1020-4008_assembly_v11"
          position={[-355.3361, 0, -140.7906]}
        >
          <group
            name="2800-0004-0010_90128A2071"
            position={[-4.0818, 13.1635, 19.8789]}
            rotation={[0, 0, -Math.PI / 2]}
          />
        </group>
        <group name="3205-0001-0003_v11" position={[0, -540, 0]}>
          <group
            name="1503-5100-60801"
            position={[0.6463, 20.4069, -10.0773]}
            rotation={[Math.PI / 2, 0, -1.2438]}
          />
          <group
            name="1503-5100-60802"
            position={[0.6463, 20.4069, -42.0773]}
            rotation={[Math.PI / 2, 0, -1.2438]}
          />
          <group
            name="1503-5100-60803"
            position={[32.6463, 20.4069, -10.0773]}
            rotation={[Math.PI / 2, 0, -1.2438]}
          />
          <group
            name="1503-5100-60804"
            position={[32.6463, 20.4069, -42.0773]}
            rotation={[Math.PI / 2, 0, -1.2438]}
          />
          <group
            name="2800-0004-0008_90128A2071"
            position={[0.6463, 28.4068, -10.0773]}
          />
          <group
            name="2800-0004-0008_90128A2072"
            position={[0.6463, 28.4068, -42.0773]}
          />
          <group
            name="2800-0004-0008_90128A2073"
            position={[32.6463, 28.4068, -10.0773]}
          />
          <group
            name="2800-0004-0008_90128A2074"
            position={[32.6463, 28.4068, -42.0773]}
          />
          <group
            name="3600-0005-1010_Assembly1"
            position={[23.3791, -30.9987, 36.6943]}
            rotation={[-Math.PI, 0.6375, Math.PI / 2]}
          >
            <group
              name="1600-0208-00051"
              position={[-53.9055, 46.1062, 24.0538]}
              rotation={[-0.0362, -Math.PI / 2, 0]}
            />
            <group
              name="1600-0208-00052"
              position={[-61.4055, 46.1062, 24.0538]}
              rotation={[0.029, -Math.PI / 2, 0]}
            />
            <group
              name="3600-0005-10101"
              position={[-56.4055, 46.1062, 24.0538]}
            />
          </group>
          <group
            name="3600-0005-1010_Assembly2"
            position={[23.3791, -30.9987, 4.6943]}
            rotation={[-Math.PI, 0.6375, Math.PI / 2]}
          >
            <group
              name="1600-0208-00051001"
              position={[-53.9054, 46.1062, 24.0538]}
              rotation={[-0.0362, -Math.PI / 2, 0]}
            />
            <group
              name="1600-0208-00052001"
              position={[-61.4055, 46.1062, 24.0538]}
              rotation={[0.029, -Math.PI / 2, 0]}
            />
            <group
              name="3600-0005-10101001"
              position={[-56.4054, 46.1062, 24.0538]}
            />
          </group>
          <group
            name="3600-0005-1010_Assembly3"
            position={[55.3791, -30.9987, 36.6943]}
            rotation={[-Math.PI, 0.6375, Math.PI / 2]}
          >
            <group
              name="1600-0208-00051002"
              position={[-53.9055, 46.1062, 24.0538]}
              rotation={[-0.0362, -Math.PI / 2, 0]}
            />
            <group
              name="1600-0208-00052002"
              position={[-61.4055, 46.1062, 24.0538]}
              rotation={[0.029, -Math.PI / 2, 0]}
            />
            <group
              name="3600-0005-10101002"
              position={[-56.4055, 46.1062, 24.0538]}
            />
          </group>
          <group
            name="3600-0005-1010_Assembly4"
            position={[55.3791, -30.9987, 4.6943]}
            rotation={[-Math.PI, 0.6375, Math.PI / 2]}
          >
            <group
              name="1600-0208-00051003"
              position={[-53.9054, 46.1062, 24.0538]}
              rotation={[-0.0362, -Math.PI / 2, 0]}
            />
            <group
              name="1600-0208-00052003"
              position={[-61.4055, 46.1062, 24.0538]}
              rotation={[0.029, -Math.PI / 2, 0]}
            />
            <group
              name="3600-0005-10101003"
              position={[-56.4054, 46.1062, 24.0538]}
            />
          </group>
        </group>
        <group
          name="39062_TXM-LBrackets_v11"
          position={[68.0384, -362.7436, -183.4746]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <group name="39066_TXM-96mmChannel_v11" position={[62, -283.5, -180]} />
        <group
          name="39066_TXM-96mmChannel_v11001"
          position={[-83.4411, -289, -212.9411]}
        >
          <mesh
            name="Body1548"
            castShadow
            receiveShadow
            geometry={nodes.Body1548.geometry}
            material={materials["Opaque(228,233,237)"]}
            scale={10}
          />
        </group>
        <group
          name="39079_TXM-Motor_Shaft_Hub_With_Set_Screw_v12"
          position={[112.3476, -333.9944, -219.5965]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <group
          name="39079_txm-motor_shaft_hub_with_set_screw_v12"
          position={[-90.1387, -340.8465, -262.1776]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body1556"
            castShadow
            receiveShadow
            geometry={nodes.Body1556.geometry}
            material={materials["Opaque(202,209,238)"]}
            scale={10}
          />
          <mesh
            name="Body2148"
            castShadow
            receiveShadow
            geometry={nodes.Body2148.geometry}
            material={materials["Opaque(198,193,188)"]}
            scale={10}
          />
        </group>
        <group
          name="39079_TXM-Motor_Shaft_Hub_With_Set_Screw_v13"
          position={[135.8524, -348.0706, -219.0812]}
          rotation={[-1.8326, 0, -Math.PI / 2]}
        />
        <group
          name="39079_TXM-Motor_Shaft_Hub_With_Set_Screw_v14"
          position={[158.7476, -380.4029, -210.4178]}
          rotation={[1.309, 0, Math.PI / 2]}
        />
        <group
          name="39086_TXM-Gear80-Tooth_v11"
          position={[-47.7606, -252.8469, -177.0245]}
        >
          <mesh
            name="Body1526"
            castShadow
            receiveShadow
            geometry={nodes.Body1526.geometry}
            material={materials["Opaque(228,233,237)"]}
            scale={10}
          />
        </group>
        <group
          name="39086_TXM-Gear80-Tooth_v12"
          position={[-47.7606, -251.6797, -113.0352]}
        >
          <mesh
            name="Body1527"
            castShadow
            receiveShadow
            geometry={nodes.Body1527.geometry}
            material={materials["Opaque(228,233,237)"]}
            scale={10}
          />
        </group>
        <group
          name="39107_txm-stand-offposts6-32x32mm_v11"
          position={[93.7605, -398.4649, -184.0145]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <group
          name="39107_txm-stand-offposts6-32x32mm_v12"
          position={[93.7605, -384.6085, -184.0145]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <group
          name="39165_TXM-#25_chain_sprocket_v11"
          position={[70, -450.5016, -26.0615]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body1481"
            castShadow
            receiveShadow
            geometry={nodes.Body1481.geometry}
            material={materials["Opaque(228,233,237)"]}
            scale={10}
          />
        </group>
        <group
          name="39165_TXM-#25_chain_sprocket_v12"
          position={[70, -388.5016, -77.5508]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body1482"
            castShadow
            receiveShadow
            geometry={nodes.Body1482.geometry}
            material={materials["Opaque(228,233,237)"]}
            scale={10}
          />
        </group>
        <group
          name="39169_TXM-#25_chain_sprocket_v11"
          position={[-108.4142, -115.179, -286.7847]}
          rotation={[0.9599, 0, 0]}
        >
          <mesh
            name="Body1394"
            castShadow
            receiveShadow
            geometry={nodes.Body1394.geometry}
            material={materials["Opaque(228,233,237)"]}
            scale={10}
          />
        </group>
        <group
          name="39171_TXM-Aluminim_#25_chain_sprocket_v11"
          position={[51.5858, -119.9793, -283.9424]}
          rotation={[0.9599, 0, 0]}
        >
          <mesh
            name="Body1393"
            castShadow
            receiveShadow
            geometry={nodes.Body1393.geometry}
            material={materials["Opaque(228,233,237)"]}
            scale={10}
          />
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v11"
          position={[-108.7307, -136.2654, -273.9948]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1395"
            castShadow
            receiveShadow
            geometry={nodes.Body1395.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2017" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v110"
          position={[-57.3566, -139.7939, -271.5241]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1404"
            castShadow
            receiveShadow
            geometry={nodes.Body1404.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2026" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1100"
          position={[69.0901, -399.9523, -88.4977]}
          rotation={[-0.785, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1496"
            castShadow
            receiveShadow
            geometry={nodes.Body1496.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2116" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1101"
          position={[69.0901, -465.2571, -31.8258]}
          rotation={[-1.1754, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1497"
            castShadow
            receiveShadow
            geometry={nodes.Body1497.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2117" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1102"
          position={[69.0901, -466.3405, -25.7759]}
          rotation={[-1.5659, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1498"
            castShadow
            receiveShadow
            geometry={nodes.Body1498.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2118" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1103"
          position={[69.0901, -465.0398, -19.769]}
          rotation={[-1.9563, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1499"
            castShadow
            receiveShadow
            geometry={nodes.Body1499.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2119" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1104"
          position={[69.0901, -461.5506, -14.7092]}
          rotation={[-2.3468, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1500"
            castShadow
            receiveShadow
            geometry={nodes.Body1500.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2120" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1105"
          position={[69.0901, -456.3982, -11.3583]}
          rotation={[-2.7372, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1501"
            castShadow
            receiveShadow
            geometry={nodes.Body1501.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2121" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1106"
          position={[69.0901, -450.3583, -10.2206]}
          rotation={[-3.1277, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1502"
            castShadow
            receiveShadow
            geometry={nodes.Body1502.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2122" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1107"
          position={[69.0901, -444.3399, -11.4674]}
          rotation={[2.7651, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1503"
            castShadow
            receiveShadow
            geometry={nodes.Body1503.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2123" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1108"
          position={[69.0901, -439.249, -14.911]}
          rotation={[2.3746, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1504"
            castShadow
            receiveShadow
            geometry={nodes.Body1504.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2124" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1109"
          position={[69.0901, -434.4797, -18.8717]}
          rotation={[2.3746, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1505"
            castShadow
            receiveShadow
            geometry={nodes.Body1505.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2125" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v111"
          position={[-51.6483, -140.186, -271.2495]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1405"
            castShadow
            receiveShadow
            geometry={nodes.Body1405.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2027" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1110"
          position={[69.0901, -429.7105, -22.8324]}
          rotation={[2.3746, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1506"
            castShadow
            receiveShadow
            geometry={nodes.Body1506.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2126" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1111"
          position={[69.0901, -424.9412, -26.7932]}
          rotation={[2.3746, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1507"
            castShadow
            receiveShadow
            geometry={nodes.Body1507.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2127" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1112"
          position={[69.0901, -420.1719, -30.7539]}
          rotation={[2.3746, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1508"
            castShadow
            receiveShadow
            geometry={nodes.Body1508.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2128" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1113"
          position={[69.0901, -415.4027, -34.7147]}
          rotation={[2.3746, 0.0125, 1.4999]}
        >
          <group
            name="39173_TXM-_#25_Chain_Outside_Link_v1112_1"
            position={[0, 0, 0]}
          >
            <mesh
              name="Body1509"
              castShadow
              receiveShadow
              geometry={nodes.Body1509.geometry}
              material={materials["Opaque(153,153,153)"]}
              position={[0, 0, 0]}
              scale={10}
            />
            <group name="Body2129" position={[0, 0, 0]} scale={10}>
              <mesh
                name="Body2009_1"
                castShadow
                receiveShadow
                geometry={nodes.Body2009_1.geometry}
                material={materials["Opaque(229,229,229)"]}
              />
              <mesh
                name="Body2009_2"
                castShadow
                receiveShadow
                geometry={nodes.Body2009_2.geometry}
                material={materials["Opaque(153,153,153)"]}
              />
            </group>
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1114"
          position={[69.0901, -410.6335, -38.6754]}
          rotation={[2.3746, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1510"
            castShadow
            receiveShadow
            geometry={nodes.Body1510.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2130" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1115"
          position={[69.0901, -405.8642, -42.6362]}
          rotation={[2.3746, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1511"
            castShadow
            receiveShadow
            geometry={nodes.Body1511.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2131" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1116"
          position={[69.0901, -401.0949, -46.5969]}
          rotation={[2.3746, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1512"
            castShadow
            receiveShadow
            geometry={nodes.Body1512.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2132" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1117"
          position={[69.0901, -396.3257, -50.5576]}
          rotation={[2.3746, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1513"
            castShadow
            receiveShadow
            geometry={nodes.Body1513.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2133" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1118"
          position={[69.0901, -391.5564, -54.5184]}
          rotation={[2.3746, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1514"
            castShadow
            receiveShadow
            geometry={nodes.Body1514.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2134" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1119"
          position={[69.0901, -386.7871, -58.4791]}
          rotation={[2.3746, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1515"
            castShadow
            receiveShadow
            geometry={nodes.Body1515.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2135" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v112"
          position={[-45.9401, -140.5781, -270.975]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1406"
            castShadow
            receiveShadow
            geometry={nodes.Body1406.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2028" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1120"
          position={[69.0901, -382.0179, -62.4399]}
          rotation={[2.3746, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1516"
            castShadow
            receiveShadow
            geometry={nodes.Body1516.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2136" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1121"
          position={[69.0901, -377.2487, -66.4006]}
          rotation={[2.3746, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1517"
            castShadow
            receiveShadow
            geometry={nodes.Body1517.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2137" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1122"
          position={[69.0901, -394.8345, -92.0714]}
          rotation={[-0.3883, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1518"
            castShadow
            receiveShadow
            geometry={nodes.Body1518.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2138" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1123"
          position={[69.0901, -388.7336, -93.3907]}
          rotation={[0.0083, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1519"
            castShadow
            receiveShadow
            geometry={nodes.Body1519.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2139" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1124"
          position={[69.0901, -382.5966, -92.2507]}
          rotation={[0.4049, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1520"
            castShadow
            receiveShadow
            geometry={nodes.Body1520.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2140" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1125"
          position={[69.0901, -377.3764, -88.8285]}
          rotation={[0.8015, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1521"
            castShadow
            receiveShadow
            geometry={nodes.Body1521.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2141" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1126"
          position={[69.0901, -373.8835, -83.6553]}
          rotation={[1.1981, 0.0125, 1.4999]}
        >
          <group
            name="39173_TXM-_#25_Chain_Outside_Link_v1125_1"
            position={[0, 0, 0.0001]}
          >
            <mesh
              name="Body1522"
              castShadow
              receiveShadow
              geometry={nodes.Body1522.geometry}
              material={materials["Opaque(153,153,153)"]}
              position={[0, 0, 0.0001]}
              scale={10}
            />
            <group name="Body2142" position={[0, 0, 0.0001]} scale={10}>
              <mesh
                name="Body2009_1"
                castShadow
                receiveShadow
                geometry={nodes.Body2009_1.geometry}
                material={materials["Opaque(229,229,229)"]}
              />
              <mesh
                name="Body2009_2"
                castShadow
                receiveShadow
                geometry={nodes.Body2009_2.geometry}
                material={materials["Opaque(153,153,153)"]}
              />
            </group>
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1127"
          position={[69.0901, -372.6601, -77.5344]}
          rotation={[1.5948, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1523"
            castShadow
            receiveShadow
            geometry={nodes.Body1523.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2143" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1128"
          position={[69.0901, -373.8962, -71.4161]}
          rotation={[1.9914, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1524"
            castShadow
            receiveShadow
            geometry={nodes.Body1524.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2144" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v1129"
          position={[69.0901, -377.3999, -66.2502]}
          rotation={[2.388, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1525"
            castShadow
            receiveShadow
            geometry={nodes.Body1525.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2145" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v113"
          position={[-40.2318, -140.9701, -270.7005]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1407"
            castShadow
            receiveShadow
            geometry={nodes.Body1407.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2029" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v114"
          position={[-34.5236, -141.3622, -270.426]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1408"
            castShadow
            receiveShadow
            geometry={nodes.Body1408.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2030" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v115"
          position={[-28.8154, -141.7543, -270.1515]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1409"
            castShadow
            receiveShadow
            geometry={nodes.Body1409.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2031" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v116"
          position={[-23.1071, -142.1463, -269.8769]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1410"
            castShadow
            receiveShadow
            geometry={nodes.Body1410.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2032" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v117"
          position={[-17.3989, -142.5384, -269.6024]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1411"
            castShadow
            receiveShadow
            geometry={nodes.Body1411.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2033" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v118"
          position={[-11.6906, -142.9305, -269.3278]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1412"
            castShadow
            receiveShadow
            geometry={nodes.Body1412.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2034" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v119"
          position={[-5.9824, -143.3225, -269.0533]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1413"
            castShadow
            receiveShadow
            geometry={nodes.Body1413.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2035" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v12"
          position={[-103.0225, -136.6574, -273.7203]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1396"
            castShadow
            receiveShadow
            geometry={nodes.Body1396.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2018" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v120"
          position={[-0.2742, -143.7146, -268.7788]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1414"
            castShadow
            receiveShadow
            geometry={nodes.Body1414.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2036" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v121"
          position={[5.4341, -144.1067, -268.5043]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1415"
            castShadow
            receiveShadow
            geometry={nodes.Body1415.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2037" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v122"
          position={[11.1423, -144.4987, -268.2298]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1416"
            castShadow
            receiveShadow
            geometry={nodes.Body1416.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2038" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v123"
          position={[16.8505, -144.8908, -267.9552]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1417"
            castShadow
            receiveShadow
            geometry={nodes.Body1417.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2039" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v124"
          position={[22.5588, -145.2829, -267.6807]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1418"
            castShadow
            receiveShadow
            geometry={nodes.Body1418.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2040" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v125"
          position={[28.267, -145.6749, -267.4062]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1419"
            castShadow
            receiveShadow
            geometry={nodes.Body1419.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2041" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v126"
          position={[33.9753, -146.067, -267.1317]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1420"
            castShadow
            receiveShadow
            geometry={nodes.Body1420.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2042" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v127"
          position={[39.6835, -146.4591, -266.8571]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1421"
            castShadow
            receiveShadow
            geometry={nodes.Body1421.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2043" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v128"
          position={[45.3917, -146.8511, -266.5826]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1422"
            castShadow
            receiveShadow
            geometry={nodes.Body1422.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2044" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v129"
          position={[51.1155, -147.1884, -266.3464]}
          rotation={[0.9599, -0.0416, -Math.PI]}
        >
          <mesh
            name="Body1423"
            castShadow
            receiveShadow
            geometry={nodes.Body1423.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2045" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v13"
          position={[-97.3142, -137.0495, -273.4458]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1397"
            castShadow
            receiveShadow
            geometry={nodes.Body1397.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2019" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v130"
          position={[56.8657, -146.8434, -266.588]}
          rotation={[0.9599, 0.1352, -Math.PI]}
        >
          <mesh
            name="Body1424"
            castShadow
            receiveShadow
            geometry={nodes.Body1424.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2046" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v131"
          position={[62.4521, -145.6755, -267.4058]}
          rotation={[0.9599, 0.312, -Math.PI]}
        >
          <mesh
            name="Body1425"
            castShadow
            receiveShadow
            geometry={nodes.Body1425.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2047" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v132"
          position={[67.7007, -143.7209, -268.7744]}
          rotation={[0.9599, 0.4888, -Math.PI]}
        >
          <mesh
            name="Body1426"
            castShadow
            receiveShadow
            geometry={nodes.Body1426.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2048" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v133"
          position={[72.4479, -141.0406, -270.6512]}
          rotation={[0.9599, 0.6656, -Math.PI]}
        >
          <mesh
            name="Body1427"
            castShadow
            receiveShadow
            geometry={nodes.Body1427.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2049" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v134"
          position={[76.5456, -137.7183, -272.9775]}
          rotation={[0.9599, 0.8424, -Math.PI]}
        >
          <mesh
            name="Body1428"
            castShadow
            receiveShadow
            geometry={nodes.Body1428.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2050" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v135"
          position={[79.8662, -133.8574, -275.6809]}
          rotation={[0.9599, 1.0192, Math.PI]}
        >
          <mesh
            name="Body1429"
            castShadow
            receiveShadow
            geometry={nodes.Body1429.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2051" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v136"
          position={[82.3061, -129.5783, -278.6772]}
          rotation={[0.9599, 1.196, Math.PI]}
        >
          <mesh
            name="Body1430"
            castShadow
            receiveShadow
            geometry={nodes.Body1430.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2052" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v137"
          position={[83.7893, -125.0144, -281.8728]}
          rotation={[0.9599, 1.3727, -Math.PI]}
        >
          <mesh
            name="Body1431"
            castShadow
            receiveShadow
            geometry={nodes.Body1431.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2053" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v138"
          position={[84.2695, -120.3079, -285.1683]}
          rotation={[0.9599, 1.5495, Math.PI]}
        >
          <mesh
            name="Body1432"
            castShadow
            receiveShadow
            geometry={nodes.Body1432.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2054" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v139"
          position={[83.7318, -115.6057, -288.4609]}
          rotation={[-2.1817, 1.4153, 0]}
        >
          <mesh
            name="Body1433"
            castShadow
            receiveShadow
            geometry={nodes.Body1433.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2055" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v14"
          position={[-91.606, -137.4415, -273.1712]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1398"
            castShadow
            receiveShadow
            geometry={nodes.Body1398.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2020" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v140"
          position={[82.1929, -111.0542, -291.6479]}
          rotation={[-2.1817, 1.2385, 0]}
        >
          <mesh
            name="Body1434"
            castShadow
            receiveShadow
            geometry={nodes.Body1434.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2056" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v141"
          position={[79.7008, -106.7953, -294.63]}
          rotation={[-2.1817, 1.0617, 0]}
        >
          <mesh
            name="Body1435"
            castShadow
            receiveShadow
            geometry={nodes.Body1435.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2057" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v142"
          position={[76.3332, -102.9618, -297.3142]}
          rotation={[-2.1817, 0.8849, 0]}
        >
          <mesh
            name="Body1436"
            castShadow
            receiveShadow
            geometry={nodes.Body1436.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2058" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v143"
          position={[72.1951, -99.6732, -299.6169]}
          rotation={[-2.1817, 0.7081, 0]}
        >
          <mesh
            name="Body1437"
            castShadow
            receiveShadow
            geometry={nodes.Body1437.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2059" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v144"
          position={[67.4154, -97.0321, -301.4663]}
          rotation={[-2.1817, 0.5313, 0]}
        >
          <mesh
            name="Body1438"
            castShadow
            receiveShadow
            geometry={nodes.Body1438.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2060" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v145"
          position={[62.1432, -95.1206, -302.8047]}
          rotation={[-2.1817, 0.3546, 0]}
        >
          <mesh
            name="Body1439"
            castShadow
            receiveShadow
            geometry={nodes.Body1439.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2061" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v146"
          position={[56.5427, -93.9985, -303.5904]}
          rotation={[-2.1817, 0.1778, 0]}
        >
          <mesh
            name="Body1440"
            castShadow
            receiveShadow
            geometry={nodes.Body1440.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2062" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v147"
          position={[50.7887, -93.7007, -303.7989]}
          rotation={[-2.1817, 0.001, 0]}
        >
          <mesh
            name="Body1441"
            castShadow
            receiveShadow
            geometry={nodes.Body1441.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2063" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v148"
          position={[45.0577, -93.7885, -303.7375]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1442"
            castShadow
            receiveShadow
            geometry={nodes.Body1442.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2064" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v149"
          position={[39.3303, -93.8701, -303.6802]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1443"
            castShadow
            receiveShadow
            geometry={nodes.Body1443.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2065" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v15"
          position={[-85.8978, -137.8336, -272.8967]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1399"
            castShadow
            receiveShadow
            geometry={nodes.Body1399.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2021" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v150"
          position={[33.6029, -93.9518, -303.623]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1444"
            castShadow
            receiveShadow
            geometry={nodes.Body1444.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2066" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v151"
          position={[27.8755, -94.0335, -303.5658]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1445"
            castShadow
            receiveShadow
            geometry={nodes.Body1445.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2067" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v152"
          position={[22.1481, -94.1152, -303.5086]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1446"
            castShadow
            receiveShadow
            geometry={nodes.Body1446.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2068" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v153"
          position={[16.4207, -94.1969, -303.4514]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1447"
            castShadow
            receiveShadow
            geometry={nodes.Body1447.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2069" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v154"
          position={[10.6933, -94.2786, -303.3943]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1448"
            castShadow
            receiveShadow
            geometry={nodes.Body1448.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2070" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v155"
          position={[4.9659, -94.3603, -303.337]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1449"
            castShadow
            receiveShadow
            geometry={nodes.Body1449.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2071" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v156"
          position={[-0.7615, -94.442, -303.2798]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1450"
            castShadow
            receiveShadow
            geometry={nodes.Body1450.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2072" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v157"
          position={[-6.4889, -94.5236, -303.2227]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1451"
            castShadow
            receiveShadow
            geometry={nodes.Body1451.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2073" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v158"
          position={[-12.2163, -94.6053, -303.1655]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1452"
            castShadow
            receiveShadow
            geometry={nodes.Body1452.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2074" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v159"
          position={[-17.9437, -94.687, -303.1083]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1453"
            castShadow
            receiveShadow
            geometry={nodes.Body1453.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2075" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v16"
          position={[-80.1895, -138.2257, -272.6222]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1400"
            castShadow
            receiveShadow
            geometry={nodes.Body1400.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2022" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v160"
          position={[-23.6711, -94.7687, -303.0511]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1454"
            castShadow
            receiveShadow
            geometry={nodes.Body1454.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2076" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v161"
          position={[-29.3985, -94.8504, -302.9939]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1455"
            castShadow
            receiveShadow
            geometry={nodes.Body1455.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2077" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v162"
          position={[-35.1259, -94.9321, -302.9367]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1456"
            castShadow
            receiveShadow
            geometry={nodes.Body1456.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2078" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v163"
          position={[-40.8533, -95.0138, -302.8795]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1457"
            castShadow
            receiveShadow
            geometry={nodes.Body1457.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2079" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v164"
          position={[-46.5807, -95.0955, -302.8223]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1458"
            castShadow
            receiveShadow
            geometry={nodes.Body1458.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2080" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v165"
          position={[-52.3081, -95.1771, -302.7651]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1459"
            castShadow
            receiveShadow
            geometry={nodes.Body1459.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2081" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v166"
          position={[-58.0355, -95.2588, -302.7079]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1460"
            castShadow
            receiveShadow
            geometry={nodes.Body1460.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2082" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v167"
          position={[-63.7629, -95.3405, -302.6507]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1461"
            castShadow
            receiveShadow
            geometry={nodes.Body1461.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2083" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v168"
          position={[-69.4903, -95.4222, -302.5935]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1462"
            castShadow
            receiveShadow
            geometry={nodes.Body1462.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2084" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v169"
          position={[-75.2177, -95.5039, -302.5363]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1463"
            castShadow
            receiveShadow
            geometry={nodes.Body1463.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2085" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v17"
          position={[-74.4813, -138.6177, -272.3477]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1401"
            castShadow
            receiveShadow
            geometry={nodes.Body1401.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2023" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v170"
          position={[-80.9451, -95.5856, -302.4791]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1464"
            castShadow
            receiveShadow
            geometry={nodes.Body1464.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2086" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v171"
          position={[-86.6725, -95.6673, -302.4219]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1465"
            castShadow
            receiveShadow
            geometry={nodes.Body1465.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2087" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v172"
          position={[-92.3999, -95.749, -302.3647]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1466"
            castShadow
            receiveShadow
            geometry={nodes.Body1466.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2088" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v173"
          position={[-98.1273, -95.8307, -302.3075]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1467"
            castShadow
            receiveShadow
            geometry={nodes.Body1467.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2089" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v174"
          position={[-103.8547, -95.9123, -302.2503]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1468"
            castShadow
            receiveShadow
            geometry={nodes.Body1468.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2090" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v175"
          position={[-109.5821, -95.994, -302.1931]}
          rotation={[-2.1817, -0.0138, 0]}
        >
          <mesh
            name="Body1469"
            castShadow
            receiveShadow
            geometry={nodes.Body1469.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2091" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v176"
          position={[-114.9682, -135.539, -274.5034]}
          rotation={[0.9599, -0.344, -Math.PI]}
        >
          <mesh
            name="Body1470"
            castShadow
            receiveShadow
            geometry={nodes.Body1470.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2092" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v177"
          position={[-120.7761, -133.5393, -275.9036]}
          rotation={[0.9599, -0.6007, -Math.PI]}
        >
          <mesh
            name="Body1471"
            castShadow
            receiveShadow
            geometry={nodes.Body1471.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2093" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v178"
          position={[-125.774, -130.3972, -278.1038]}
          rotation={[0.9599, -0.8573, -Math.PI]}
        >
          <mesh
            name="Body1472"
            castShadow
            receiveShadow
            geometry={nodes.Body1472.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2094" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v179"
          position={[-129.6343, -126.3186, -280.9596]}
          rotation={[0.9599, -1.114, -Math.PI]}
        >
          <mesh
            name="Body1473"
            castShadow
            receiveShadow
            geometry={nodes.Body1473.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2095" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v18"
          position={[-68.773, -139.0098, -272.0731]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1402"
            castShadow
            receiveShadow
            geometry={nodes.Body1402.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2024" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v180"
          position={[-132.104, -121.5709, -284.284]}
          rotation={[0.9599, -1.3707, Math.PI]}
        >
          <mesh
            name="Body1474"
            castShadow
            receiveShadow
            geometry={nodes.Body1474.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2096" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v181"
          position={[-133.0213, -116.4651, -287.8591]}
          rotation={[-2.1817, -1.5142, 0]}
        >
          <mesh
            name="Body1475"
            castShadow
            receiveShadow
            geometry={nodes.Body1475.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2097" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v182"
          position={[-132.326, -111.3359, -291.4507]}
          rotation={[-2.1817, -1.2575, 0]}
        >
          <group
            name="39173_TXM-_#25_Chain_Outside_Link_v1081"
            position={[0, 0, 0]}
          >
            <mesh
              name="Body1476"
              castShadow
              receiveShadow
              geometry={nodes.Body1476.geometry}
              material={materials["Opaque(153,153,153)"]}
              position={[0, 0, 0]}
              scale={10}
            />
            <group name="Body2098" position={[0, 0, 0]} scale={10}>
              <mesh
                name="Body2009_1"
                castShadow
                receiveShadow
                geometry={nodes.Body2009_1.geometry}
                material={materials["Opaque(229,229,229)"]}
              />
              <mesh
                name="Body2009_2"
                castShadow
                receiveShadow
                geometry={nodes.Body2009_2.geometry}
                material={materials["Opaque(153,153,153)"]}
              />
            </group>
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v183"
          position={[-130.0638, -106.5192, -294.8233]}
          rotation={[-2.1817, -1.0008, 0]}
        >
          <mesh
            name="Body1477"
            castShadow
            receiveShadow
            geometry={nodes.Body1477.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2099" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v184"
          position={[-126.3829, -102.3309, -297.756]}
          rotation={[-2.1817, -0.7441, 0]}
        >
          <mesh
            name="Body1478"
            castShadow
            receiveShadow
            geometry={nodes.Body1478.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2100" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v185"
          position={[-121.5245, -99.0453, -300.0566]}
          rotation={[-2.1817, -0.4874, 0]}
        >
          <mesh
            name="Body1479"
            castShadow
            receiveShadow
            geometry={nodes.Body1479.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2101" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v186"
          position={[-115.8069, -96.8778, -301.5743]}
          rotation={[-2.1817, -0.2307, 0]}
        >
          <mesh
            name="Body1480"
            castShadow
            receiveShadow
            geometry={nodes.Body1480.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2102" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v187"
          position={[69.0901, -461.9526, -37.0081]}
          rotation={[-0.785, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1483"
            castShadow
            receiveShadow
            geometry={nodes.Body1483.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2103" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v188"
          position={[69.0901, -457.1833, -40.9688]}
          rotation={[-0.785, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1484"
            castShadow
            receiveShadow
            geometry={nodes.Body1484.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2104" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v189"
          position={[69.0901, -452.4141, -44.9296]}
          rotation={[-0.785, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1485"
            castShadow
            receiveShadow
            geometry={nodes.Body1485.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2105" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v19"
          position={[-63.0648, -139.4019, -271.7986]}
          rotation={[0.9599, -0.0873, Math.PI]}
        >
          <mesh
            name="Body1403"
            castShadow
            receiveShadow
            geometry={nodes.Body1403.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2025" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v190"
          position={[69.0901, -447.6449, -48.8903]}
          rotation={[-0.785, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1486"
            castShadow
            receiveShadow
            geometry={nodes.Body1486.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2106" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v191"
          position={[69.0901, -442.8756, -52.8511]}
          rotation={[-0.785, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1487"
            castShadow
            receiveShadow
            geometry={nodes.Body1487.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2107" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v192"
          position={[69.0901, -438.1064, -56.8118]}
          rotation={[-0.785, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1488"
            castShadow
            receiveShadow
            geometry={nodes.Body1488.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2108" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v193"
          position={[69.0901, -433.3371, -60.7725]}
          rotation={[-0.785, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1489"
            castShadow
            receiveShadow
            geometry={nodes.Body1489.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2109" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v194"
          position={[69.0901, -428.5678, -64.7333]}
          rotation={[-0.785, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1490"
            castShadow
            receiveShadow
            geometry={nodes.Body1490.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2110" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v195"
          position={[69.0901, -423.7986, -68.694]}
          rotation={[-0.785, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1491"
            castShadow
            receiveShadow
            geometry={nodes.Body1491.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2111" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v196"
          position={[69.0901, -419.0293, -72.6548]}
          rotation={[-0.785, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1492"
            castShadow
            receiveShadow
            geometry={nodes.Body1492.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2112" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v197"
          position={[69.0901, -414.2601, -76.6155]}
          rotation={[-0.785, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1493"
            castShadow
            receiveShadow
            geometry={nodes.Body1493.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2113" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v198"
          position={[69.0901, -409.4908, -80.5762]}
          rotation={[-0.785, 0.0125, 1.4999]}
        >
          <group
            name="39173_TXM-_#25_Chain_Outside_Link_v1097"
            position={[0, 0, 0]}
          >
            <mesh
              name="Body1494"
              castShadow
              receiveShadow
              geometry={nodes.Body1494.geometry}
              material={materials["Opaque(153,153,153)"]}
              position={[0, 0, 0]}
              scale={10}
            />
            <group name="Body2114" position={[0, 0, 0]} scale={10}>
              <mesh
                name="Body2009_1"
                castShadow
                receiveShadow
                geometry={nodes.Body2009_1.geometry}
                material={materials["Opaque(229,229,229)"]}
              />
              <mesh
                name="Body2009_2"
                castShadow
                receiveShadow
                geometry={nodes.Body2009_2.geometry}
                material={materials["Opaque(153,153,153)"]}
              />
            </group>
          </group>
        </group>
        <group
          name="39173_TXM-_#25_Chain_Outside_Link_v199"
          position={[69.0901, -404.7215, -84.537]}
          rotation={[-0.785, 0.0125, 1.4999]}
        >
          <mesh
            name="Body1495"
            castShadow
            receiveShadow
            geometry={nodes.Body1495.geometry}
            material={materials["Opaque(153,153,153)"]}
            scale={10}
          />
          <group name="Body2115" scale={10}>
            <mesh
              name="Body2009_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_1.geometry}
              material={materials["Opaque(229,229,229)"]}
            />
            <mesh
              name="Body2009_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2009_2.geometry}
              material={materials["Opaque(153,153,153)"]}
            />
          </group>
        </group>
        <group
          name="39197_TXM-485HB_Standard_Servo_with_Horn_v1(Mirror)2"
          position={[80.0062, -327.483, -216.75]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
        />
        <group
          name="39280_txm-adjustableservobracketsf3d__Copy_v11"
          position={[78.5062, -298.233, -169.05]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <group
          name="39281_txm-insidecornerbrackets_v1_(2)_(1)2"
          position={[170, -363.5, -212]}
          rotation={[1.3963, -1.5706, 0]}
        />
        <group
          name="39281_txm-insidecornerbrackets_v11"
          position={[131.5, -318.2, -178]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <group
          name="41253_txm-16mm_length_post_v11"
          position={[94, -371.5, -180]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <group
          name="41253_txm-16mm_length_post_v12"
          position={[94, -355.5, -180]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <group
          name="41789_TXM-Servo_Plate_v11"
          position={[-99.9837, -339.1524, -245.4411]}
          rotation={[-Math.PI, 0, -1.5462]}
        >
          <mesh
            name="Body1554"
            castShadow
            receiveShadow
            geometry={nodes.Body1554.geometry}
            material={materials["Opaque(228,233,237)"]}
            scale={10}
          />
        </group>
        <group
          name="41791_TXM-Adjustable_Angle_Flat_Bracket_v11"
          position={[96, -363.5, -196]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
        <group
          name="41791_TXM-Adjustable_Angle_Flat_Bracket_v12"
          position={[130, -363.5, -196]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
        <group
          name="44708_TXM-6mm_x_100mm_Axle_v1_(6)1"
          position={[87.2292, -144.519, -218.6859]}
          rotation={[0.9599, 0.5787, 0]}
        />
        <group
          name="44708_TXM-6mm_x_100mm_Axle_v1_(6)2"
          position={[-103.0296, -46.3169, -291.3541]}
          rotation={[-2.1817, -0.6981, -Math.PI]}
        />
        <group
          name="44708_TXM-6mm_x_100mm_Axle_v1_(6)3"
          position={[45.3796, -359.2057, -258.3643]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
        />
        <group
          name="44708_TXM-6mm_x_100mm_Axle_v1_(6)4"
          position={[35.8796, -405.4477, -253.8643]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
        />
        <group
          name="5202-0002-0005_part_v1_(4)4"
          position={[-104.9142, -99.1258, -254.5963]}
          rotation={[-0.6109, 0, Math.PI / 2]}
        >
          <mesh
            name="Body15004"
            castShadow
            receiveShadow
            geometry={nodes.Body15004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body18004"
            castShadow
            receiveShadow
            geometry={nodes.Body18004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body1311"
            castShadow
            receiveShadow
            geometry={nodes.Body1311.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body10004"
            castShadow
            receiveShadow
            geometry={nodes.Body10004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body11004"
            castShadow
            receiveShadow
            geometry={nodes.Body11004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body2006"
            castShadow
            receiveShadow
            geometry={nodes.Body2006.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body14004"
            castShadow
            receiveShadow
            geometry={nodes.Body14004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body12004"
            castShadow
            receiveShadow
            geometry={nodes.Body12004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body17004"
            castShadow
            receiveShadow
            geometry={nodes.Body17004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body13004"
            castShadow
            receiveShadow
            geometry={nodes.Body13004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body25004"
            castShadow
            receiveShadow
            geometry={nodes.Body25004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body16004"
            castShadow
            receiveShadow
            geometry={nodes.Body16004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body19004"
            castShadow
            receiveShadow
            geometry={nodes.Body19004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body20004"
            castShadow
            receiveShadow
            geometry={nodes.Body20004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body21004"
            castShadow
            receiveShadow
            geometry={nodes.Body21004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body22004"
            castShadow
            receiveShadow
            geometry={nodes.Body22004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body23004"
            castShadow
            receiveShadow
            geometry={nodes.Body23004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body24004"
            castShadow
            receiveShadow
            geometry={nodes.Body24004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body27004"
            castShadow
            receiveShadow
            geometry={nodes.Body27004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body26004"
            castShadow
            receiveShadow
            geometry={nodes.Body26004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body30004"
            castShadow
            receiveShadow
            geometry={nodes.Body30004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body32004"
            castShadow
            receiveShadow
            geometry={nodes.Body32004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body28004"
            castShadow
            receiveShadow
            geometry={nodes.Body28004.geometry}
            material={materials["Aluminum - Satin"]}
            scale={10}
          />
          <mesh
            name="Body5004"
            castShadow
            receiveShadow
            geometry={nodes.Body5004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body7004"
            castShadow
            receiveShadow
            geometry={nodes.Body7004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body9004"
            castShadow
            receiveShadow
            geometry={nodes.Body9004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body31004"
            castShadow
            receiveShadow
            geometry={nodes.Body31004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body37004"
            castShadow
            receiveShadow
            geometry={nodes.Body37004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body38004"
            castShadow
            receiveShadow
            geometry={nodes.Body38004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body4004"
            castShadow
            receiveShadow
            geometry={nodes.Body4004.geometry}
            material={materials["Opaque(28,28,28)"]}
            scale={10}
          />
          <mesh
            name="Body6004"
            castShadow
            receiveShadow
            geometry={nodes.Body6004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body8004"
            castShadow
            receiveShadow
            geometry={nodes.Body8004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body29004"
            castShadow
            receiveShadow
            geometry={nodes.Body29004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body3004"
            castShadow
            receiveShadow
            geometry={nodes.Body3004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body33004"
            castShadow
            receiveShadow
            geometry={nodes.Body33004.geometry}
            material={materials["Opaque(255,255,0)"]}
            scale={10}
          />
          <mesh
            name="Body34004"
            castShadow
            receiveShadow
            geometry={nodes.Body34004.geometry}
            material={materials["Aluminum - Anodized Glossy (Grey)"]}
            scale={10}
          />
          <mesh
            name="Body35004"
            castShadow
            receiveShadow
            geometry={nodes.Body35004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body36004"
            castShadow
            receiveShadow
            geometry={nodes.Body36004.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="91280A152_(1)4"
          position={[147.5858, -51.6234, -231.2138]}
          rotation={[0.9599, 0, Math.PI / 2]}
        >
          <mesh
            name="Body1320"
            castShadow
            receiveShadow
            geometry={nodes.Body1320.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="91280A152_(1)5"
          position={[147.5858, -93.4002, -201.9614]}
          rotation={[0.9599, 0, Math.PI / 2]}
        >
          <mesh
            name="Body1321"
            castShadow
            receiveShadow
            geometry={nodes.Body1321.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="91280A152_(1)6"
          position={[-140.4142, -44.4967, -234.9833]}
          rotation={[0.9599, 0, Math.PI / 2]}
        >
          <mesh
            name="Body1322"
            castShadow
            receiveShadow
            geometry={nodes.Body1322.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="A_nsamblu_gheara_v6_Component1_v11"
          position={[-67.4411, -369.8002, -165.4411]}
          rotation={[Math.PI / 2, 0, Math.PI]}
        >
          <mesh
            name="Body1547"
            castShadow
            receiveShadow
            geometry={nodes.Body1547.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
        </group>
        <group
          name="am-3461a_NeveRest_4_with_Motor_REV3_v11"
          position={[-251.7437, 0, -78.2862]}
        >
          <group
            name="NeveRest_4_Gearbox_Assembly1"
            position={[-32.5145, 6.0763, -16.3106]}
          >
            <group
              name="7804K117_STAINLESS_STEEL_BALL_BEARING_7804K1171"
              position={[182.2581, -266.3281, -56.9991]}
              rotation={[-Math.PI / 6, 0.1889, 0]}
            >
              <mesh
                name="Body9007"
                castShadow
                receiveShadow
                geometry={nodes.Body9007.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body1386"
                castShadow
                receiveShadow
                geometry={nodes.Body1386.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body11007"
                castShadow
                receiveShadow
                geometry={nodes.Body11007.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body13007"
                castShadow
                receiveShadow
                geometry={nodes.Body13007.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body15007"
                castShadow
                receiveShadow
                geometry={nodes.Body15007.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body14007"
                castShadow
                receiveShadow
                geometry={nodes.Body14007.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body2016"
                castShadow
                receiveShadow
                geometry={nodes.Body2016.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body3011"
                castShadow
                receiveShadow
                geometry={nodes.Body3011.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body7008"
                castShadow
                receiveShadow
                geometry={nodes.Body7008.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body6007"
                castShadow
                receiveShadow
                geometry={nodes.Body6007.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body10008"
                castShadow
                receiveShadow
                geometry={nodes.Body10008.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body12007"
                castShadow
                receiveShadow
                geometry={nodes.Body12007.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body16008"
                castShadow
                receiveShadow
                geometry={nodes.Body16008.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body4008"
                castShadow
                receiveShadow
                geometry={nodes.Body4008.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body5008"
                castShadow
                receiveShadow
                geometry={nodes.Body5008.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
              <mesh
                name="Body8007"
                castShadow
                receiveShadow
                geometry={nodes.Body8007.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
            </group>
            <group
              name="97633A150_BLACK-FINISH_STEEL_EXTERNAL_RETAINING_RING_97_68c55d7"
              position={[182.2581, -263.7781, -58.4713]}
              rotation={[-Math.PI / 6, -0.24, -Math.PI / 2]}
            >
              <mesh
                name="Body1387"
                castShadow
                receiveShadow
                geometry={nodes.Body1387.geometry}
                material={materials["Opaque(192,192,192)"]}
                scale={10}
              />
            </group>
            <group
              name="am-3104_NeveRest_Motor1"
              position={[182.2581, -286.971, -45.0809]}
              rotation={[-Math.PI / 6, Math.PI / 4, 0]}
            >
              <group name="Body1389" scale={10}>
                <mesh
                  name="Body1089"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1089.geometry}
                  material={materials["Opaque(229,234,237)"]}
                />
                <mesh
                  name="Body1089_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1089_1.geometry}
                  material={materials["Opaque(26,26,26)"]}
                />
                <mesh
                  name="Body1089_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1089_2.geometry}
                  material={materials["Opaque(75,75,75)"]}
                />
              </group>
            </group>
            <group
              name="NeveRest_4_Gearbox1"
              position={[182.2581, -286.9779, -45.0769]}
              rotation={[-Math.PI / 6, 0, 0]}
            >
              <group name="Body1381" scale={10}>
                <mesh
                  name="Body1084"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1084.geometry}
                  material={materials["Opaque(64,64,64)"]}
                />
                <mesh
                  name="Body1084_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1084_1.geometry}
                  material={materials["Opaque(192,192,192)"]}
                />
              </group>
            </group>
            <group
              name="SHCS_M3_x_16mm1"
              position={[182.2581, -275.9742, -67.9277]}
              rotation={[-Math.PI / 6, 0, 0]}
            >
              <mesh
                name="Body1382"
                castShadow
                receiveShadow
                geometry={nodes.Body1382.geometry}
                material={materials["Opaque(202,209,238)"]}
                scale={10}
              />
            </group>
            <group
              name="SHCS_M3_x_16mm2"
              position={[196.5456, -268.8304, -55.5544]}
              rotation={[-Math.PI / 6, -1.5705, 0]}
            >
              <mesh
                name="Body1383"
                castShadow
                receiveShadow
                geometry={nodes.Body1383.geometry}
                material={materials["Opaque(202,209,238)"]}
                scale={10}
              />
            </group>
            <group
              name="SHCS_M3_x_16mm3"
              position={[182.2581, -261.6866, -43.181]}
              rotation={[2.618, 0, Math.PI]}
            >
              <mesh
                name="Body1384"
                castShadow
                receiveShadow
                geometry={nodes.Body1384.geometry}
                material={materials["Opaque(202,209,238)"]}
                scale={10}
              />
            </group>
            <group
              name="SHCS_M3_x_16mm4"
              position={[167.9706, -268.8304, -55.5544]}
              rotation={[-Math.PI / 6, 1.5705, 0]}
            >
              <mesh
                name="Body1385"
                castShadow
                receiveShadow
                geometry={nodes.Body1385.geometry}
                material={materials["Opaque(202,209,238)"]}
                scale={10}
              />
            </group>
            <group
              name="Shim1"
              position={[182.2581, -264.053, -58.3126]}
              rotation={[-2.0944, 0, 0]}
            >
              <mesh
                name="Body1388"
                castShadow
                receiveShadow
                geometry={nodes.Body1388.geometry}
                material={materials["Opaque(202,209,238)"]}
                scale={10}
              />
            </group>
          </group>
        </group>
        <group
          name="Ansamblu_curea_+_roti_fulie_mica_absortie_v11"
          position={[-30.5, -227.1197, -106.0615]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body1355"
            castShadow
            receiveShadow
            geometry={nodes.Body1355.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="Ansamblu_curea_+_roti_fulie_mica_absortie_v110"
          position={[-12, -228.3243, -169.7078]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body1364"
            castShadow
            receiveShadow
            geometry={nodes.Body1364.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="Ansamblu_curea_+_roti_fulie_mica_absortie_v12"
          position={[4.5, -227.1197, -106.0615]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body1356"
            castShadow
            receiveShadow
            geometry={nodes.Body1356.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="Ansamblu_curea_+_roti_fulie_mica_absortie_v13"
          position={[34.5, -227.1197, -106.0615]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body1357"
            castShadow
            receiveShadow
            geometry={nodes.Body1357.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="Ansamblu_curea_+_roti_fulie_mica_absortie_v14"
          position={[-30, -387.5219, -13.5615]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <group
            name="Ansamblu_curea_+_roti_fulie_mica_absortie_v1003"
            position={[0.0001, 0, 0]}
          >
            <mesh
              name="Body1358"
              castShadow
              receiveShadow
              geometry={nodes.Body1358.geometry}
              material={materials["Steel - Satin"]}
              position={[0.0001, 0, 0]}
              scale={10}
            />
          </group>
        </group>
        <group
          name="Ansamblu_curea_+_roti_fulie_mica_absortie_v15"
          position={[5, -387.5219, -13.5615]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <group
            name="Ansamblu_curea_+_roti_fulie_mica_absortie_v1004"
            position={[0.0001, 0, 0]}
          >
            <mesh
              name="Body1359"
              castShadow
              receiveShadow
              geometry={nodes.Body1359.geometry}
              material={materials["Steel - Satin"]}
              position={[0.0001, 0, 0]}
              scale={10}
            />
          </group>
        </group>
        <group
          name="Ansamblu_curea_+_roti_fulie_mica_absortie_v16"
          position={[35, -387.5219, -13.5615]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <group
            name="Ansamblu_curea_+_roti_fulie_mica_absortie_v1005"
            position={[0.0001, 0, 0]}
          >
            <mesh
              name="Body1360"
              castShadow
              receiveShadow
              geometry={nodes.Body1360.geometry}
              material={materials["Steel - Satin"]}
              position={[0.0001, 0, 0]}
              scale={10}
            />
          </group>
        </group>
        <group
          name="Ansamblu_curea_+_roti_fulie_mica_absortie_v17"
          position={[-12, -388.5016, -77.5508]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body1361"
            castShadow
            receiveShadow
            geometry={nodes.Body1361.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="Ansamblu_curea_+_roti_fulie_mica_absortie_v18"
          position={[21, -388.5016, -77.5508]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body1362"
            castShadow
            receiveShadow
            geometry={nodes.Body1362.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="Ansamblu_curea_+_roti_fulie_mica_absortie_v19"
          position={[21, -228.3243, -169.7078]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body1363"
            castShadow
            receiveShadow
            geometry={nodes.Body1363.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="Component186(Mirror)1"
          position={[142, -102.3594, -336.7186]}
          rotation={[2.618, 0, 0]}
        >
          <mesh
            name="Body1349"
            castShadow
            receiveShadow
            geometry={nodes.Body1349.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
        </group>
        <group name="Component1881" position={[0, 1.7207, 2.4575]}>
          <mesh
            name="Body1368"
            castShadow
            receiveShadow
            geometry={nodes.Body1368.geometry}
            material={materials["Acrylic (Clear)"]}
            scale={10}
          />
        </group>
        <group
          name="CUREA3"
          position={[-61.3, -69.9286, 70.487]}
          rotation={[0.2443, 0, 0]}
        >
          <mesh
            name="CUREA001"
            castShadow
            receiveShadow
            geometry={nodes.CUREA001.geometry}
            material={materials["Plastic - Matte (Gray)"]}
            scale={10}
          />
        </group>
        <group
          name="CUREA4"
          position={[-26.3, -69.9286, 70.487]}
          rotation={[0.2443, 0, 0]}
        >
          <mesh
            name="CUREA003"
            castShadow
            receiveShadow
            geometry={nodes.CUREA003.geometry}
            material={materials["Plastic - Matte (Gray)"]}
            scale={10}
          />
        </group>
        <group
          name="CUREA5"
          position={[2.7, -69.9286, 70.487]}
          rotation={[0.2443, 0, 0]}
        >
          <mesh
            name="CUREA005"
            castShadow
            receiveShadow
            geometry={nodes.CUREA005.geometry}
            material={materials["Plastic - Matte (Gray)"]}
            scale={10}
          />
        </group>
        <group
          name="CUREA6"
          position={[-43.3, -70.1207, 5.2131]}
          rotation={[0.2443, 0, 0]}
        >
          <mesh
            name="CUREA007"
            castShadow
            receiveShadow
            geometry={nodes.CUREA007.geometry}
            material={materials["Plastic - Matte (Gray)"]}
            scale={10}
          />
        </group>
        <group
          name="CUREA7"
          position={[-10.3, -70.1207, 5.2131]}
          rotation={[0.2443, 0, 0]}
        >
          <mesh
            name="CUREA009"
            castShadow
            receiveShadow
            geometry={nodes.CUREA009.geometry}
            material={materials["Plastic - Matte (Gray)"]}
            scale={10}
          />
        </group>
        <group
          name="cuva_gogosi_v61"
          position={[-1.9532, -153.213, -125.5968]}
          rotation={[-0.6109, 0, 0]}
        >
          <mesh
            name="cuva_gogosele001"
            castShadow
            receiveShadow
            geometry={nodes.cuva_gogosele001.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
          <group
            name="da_v11"
            position={[55, -66.8987, 37.3519]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <group
              name="39197_TXM-485HB_Standard_Servo_with_Horn_v11"
              position={[35.8252, 27, 5.8251]}
              rotation={[0, 1.5705, 0]}
            >
              <mesh
                name="Body2015"
                castShadow
                receiveShadow
                geometry={nodes.Body2015.geometry}
                material={materials["Opaque(221,221,227)"]}
                scale={10}
              />
              <group name="Body1366" scale={10}>
                <mesh
                  name="Body1072"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1072.geometry}
                  material={materials["Opaque(28,28,28)"]}
                />
                <mesh
                  name="Body1072_1"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1072_1.geometry}
                  material={materials["Opaque(255,0,0)"]}
                />
                <mesh
                  name="Body1072_2"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1072_2.geometry}
                  material={materials["Opaque(79,79,79)"]}
                />
                <mesh
                  name="Body1072_3"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1072_3.geometry}
                  material={materials["Opaque(255,255,0)"]}
                />
                <mesh
                  name="Body1072_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1072_4.geometry}
                  material={materials["Opaque(211,214,211)"]}
                />
              </group>
            </group>
          </group>
          <mesh
            name="Body4007"
            castShadow
            receiveShadow
            geometry={nodes.Body4007.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
          <mesh
            name="Body5007"
            castShadow
            receiveShadow
            geometry={nodes.Body5007.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
        </group>
        <group
          name="fitting_test_v51"
          position={[-117.3887, -228.2869, -170.0508]}
        >
          <mesh
            name="Body10007"
            castShadow
            receiveShadow
            geometry={nodes.Body10007.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
        </group>
        <group
          name="logitech_c920_v11"
          position={[-49.9076, -46.0201, -20.9596]}
          rotation={[0.0567, 0, 0]}
        >
          <group name="Body1390" scale={10}>
            <mesh
              name="Body1090_1"
              castShadow
              receiveShadow
              geometry={nodes.Body1090_1.geometry}
              material={materials["Opaque(46,46,46)"]}
            />
            <mesh
              name="Body1090_2"
              castShadow
              receiveShadow
              geometry={nodes.Body1090_2.geometry}
              material={materials["Opaque(160,160,160)"]}
            />
          </group>
        </group>
        <group name="motorsiroata_v5_(1)1" position={[0, -450, 0]}>
          <group
            name="ÂóÂ××°Åä1_(1)1"
            position={[242.2856, -246.7613, 57.9296]}
            rotation={[2.3297, 0, Math.PI]}
          >
            <group
              name="BeamD24-010-B_(1)1"
              position={[89.2856, 299.2053, -205.1755]}
              rotation={[0.7589, -Math.PI / 2, 0]}
            />
            <group
              name="Cylinder3_(1)1"
              position={[58.2856, 299.2053, -205.1755]}
              rotation={[0.7589, 0, 0]}
            />
            <group
              name="hexagon_socket_button_head_screws_gb_GB_SOCKET_TYPE7_M4_1034fe3"
              position={[96.4856, 293.4003, -210.6803]}
              rotation={[2.7215, 0, Math.PI]}
            />
            <group
              name="hexagon_socket_button_head_screws_gb_GB_SOCKET_TYPE7_M4_32cc8f9"
              position={[96.4856, 305.0103, -199.6708]}
              rotation={[2.7215, 0, Math.PI]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(1)1"
              position={[40.2856, 312.9672, -219.688]}
              rotation={[0.7589, 0, 0]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(1)2"
              position={[40.2856, 284.6929, -218.9375]}
              rotation={[0.7589, 0, 0]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(1)3"
              position={[40.2856, 285.4435, -190.6631]}
              rotation={[0.7589, 0, 0]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(1)4"
              position={[40.2856, 313.7177, -191.4136]}
              rotation={[0.7589, 0, 0]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(1)5"
              position={[76.2856, 313.7177, -191.4137]}
              rotation={[-0.4201, 0, Math.PI]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(1)6"
              position={[76.2856, 285.4434, -190.6631]}
              rotation={[-0.4201, 0, Math.PI]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(1)7"
              position={[76.2856, 284.6929, -218.9375]}
              rotation={[-0.4201, 0, Math.PI]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(1)8"
              position={[76.2856, 312.9672, -219.688]}
              rotation={[-0.4201, 0, Math.PI]}
            />
            <group
              name="hexagon_socket_head_cap_screws_gb_GB_FASTENER_SCREWS_HS_62c1e07"
              position={[89.2856, 288.6212, -204.1873]}
              rotation={[-2.3827, 1.447, -Math.PI / 2]}
            />
            <group
              name="¾µÏòsupport_plate_(1)1"
              position={[82.2856, 299.2053, -205.1755]}
              rotation={[0.7589, 0, Math.PI / 2]}
            >
              <mesh
                name="Body1071"
                castShadow
                receiveShadow
                geometry={nodes.Body1071.geometry}
                material={materials["Opaque(255,255,255)"]}
                scale={10}
              />
            </group>
            <group
              name="¾µÏòsupport_plate_(1)2"
              position={[34.2856, 299.2053, -205.1755]}
              rotation={[0.7589, 0, -Math.PI / 2]}
            >
              <mesh
                name="Body1082"
                castShadow
                receiveShadow
                geometry={nodes.Body1082.geometry}
                material={materials["Opaque(255,255,255)"]}
                scale={10}
              />
            </group>
            <group
              name="×°ÅäÌå3_(1)1"
              position={[-44.9294, 6.2448, -19.8715]}
              rotation={[0, 0, -0.7519]}
            >
              <group
                name="Flange_Bearing_4x8x3_(1)1"
                position={[-121.3778, 308.2839, -226.6518]}
                rotation={[0.6058, 0.4893, -1.7265]}
              />
              <group
                name="Flange_Bearing_4x8x3_(1)2"
                position={[-166.0239, 301.2756, -202.5884]}
                rotation={[-2.4308, -0.4723, 1.7751]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)1"
                position={[-118.3258, 308.763, -228.2968]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)2"
                position={[-168.5527, 300.8786, -201.2254]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group name="×°ÅäÌå2_(1)1" position={[0.0229, -1.602, -2.3402]}>
                <group name="×°ÅäÌå2_(1)" position={[0, -0.0001, 0]}>
                  <group
                    name="Roller3_(1)1"
                    position={[-143.7237, 306.3817, -212.2799]}
                    rotation={[0.6058, 0.4893, -0.1557]}
                  >
                    <mesh
                      name="Body1073"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body1073.geometry}
                      material={materials["Opaque(63,63,63)"]}
                      scale={10}
                    />
                  </group>
                  <group
                    name="Shaft_(1)1"
                    position={[-143.7237, 306.3817, -212.2799]}
                    rotation={[3.068, -0.4842, -0.1719]}
                  />
                </group>
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(1)2"
              position={[-44.9294, 18.373, 0.358]}
              rotation={[-0.6981, 0, -0.7519]}
            >
              <group name="×°ÅäÌå3_(1)001" position={[0, 0.0001, 0]}>
                <group
                  name="Flange_Bearing_4x8x3_(1)1001"
                  position={[-158.4552, 347.9325, -18.2801]}
                  rotation={[0.6058, 0.4893, -1.7265]}
                />
                <group
                  name="Flange_Bearing_4x8x3_(1)2001"
                  position={[-203.1013, 340.9242, 5.7833]}
                  rotation={[-2.4308, -0.4723, 1.7751]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)1001"
                  position={[-155.4032, 348.4116, -19.925]}
                  rotation={[0.6058, 0.4893, 1.4151]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)2001"
                  position={[-205.6301, 340.5273, 7.1462]}
                  rotation={[0.6058, 0.4893, 1.4151]}
                />
                <group
                  name="×°ÅäÌå2_(1)1001"
                  position={[0.0229, -1.6019, -2.3402]}
                >
                  <group
                    name="Roller3_(1)1001"
                    position={[-180.8011, 346.0303, -3.9082]}
                    rotation={[0.6058, 0.4893, -0.1557]}
                  >
                    <mesh
                      name="Body1090"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body1090.geometry}
                      material={materials["Opaque(63,63,63)"]}
                      scale={10}
                    />
                  </group>
                  <group
                    name="Shaft_(1)1001"
                    position={[-180.8011, 346.0303, -3.9082]}
                    rotation={[3.068, -0.4842, -0.1719]}
                  />
                </group>
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(1)3"
              position={[-44.9294, 40.6671, 8.0588]}
              rotation={[-1.3963, 0, -0.7519]}
            >
              <group name="×°ÅäÌå3_(1)002" position={[0, 0, -0.0001]}>
                <group
                  name="Flange_Bearing_4x8x3_(1)1002"
                  position={[-95.3742, 280.4771, 176.2349]}
                  rotation={[0.6058, 0.4893, -1.7265]}
                />
                <group
                  name="Flange_Bearing_4x8x3_(1)2002"
                  position={[-140.0204, 273.4688, 200.2982]}
                  rotation={[-2.4308, -0.4723, 1.7751]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)1002"
                  position={[-92.3222, 280.9562, 174.5899]}
                  rotation={[0.6058, 0.4893, 1.4151]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)2002"
                  position={[-142.5491, 273.0719, 201.6612]}
                  rotation={[0.6058, 0.4893, 1.4151]}
                />
                <group
                  name="×°ÅäÌå2_(1)1002"
                  position={[0.0229, -1.602, -2.3402]}
                >
                  <group name="×°ÅäÌå2_(1)002" position={[0, 0.0001, 0]}>
                    <group
                      name="Roller3_(1)1002"
                      position={[-117.7201, 278.575, 190.6068]}
                      rotation={[0.6058, 0.4893, -0.1557]}
                    >
                      <mesh
                        name="Body1096"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body1096.geometry}
                        material={materials["Opaque(63,63,63)"]}
                        scale={10}
                      />
                    </group>
                    <group
                      name="Shaft_(1)1002"
                      position={[-117.7201, 278.575, 190.6068]}
                      rotation={[3.068, -0.4842, -0.1719]}
                    />
                  </group>
                </group>
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(1)4"
              position={[-44.9294, 62.6954, -0.3723]}
              rotation={[-2.0944, 0, -0.7519]}
            >
              <group
                name="Flange_Bearing_4x8x3_(1)1003"
                position={[38.3488, 137.4811, 265.8775]}
                rotation={[0.6058, 0.4893, -1.7265]}
              />
              <group
                name="Flange_Bearing_4x8x3_(1)2003"
                position={[-6.2974, 130.4728, 289.9409]}
                rotation={[-2.4308, -0.4723, 1.7751]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)1003"
                position={[41.4007, 137.9602, 264.2325]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)2003"
                position={[-8.8262, 130.0758, 291.3038]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="×°ÅäÌå2_(1)1003"
                position={[0.0228, -1.602, -2.3402]}
              >
                <group
                  name="Roller3_(1)1003"
                  position={[16.0028, 135.5789, 280.2493]}
                  rotation={[0.6058, 0.4893, -0.1557]}
                >
                  <mesh
                    name="Body1102"
                    castShadow
                    receiveShadow
                    geometry={nodes.Body1102.geometry}
                    material={materials["Opaque(63,63,63)"]}
                    scale={10}
                  />
                </group>
                <group
                  name="Shaft_(1)1003"
                  position={[16.0028, 135.5789, 280.2493]}
                  rotation={[3.068, -0.4842, -0.1719]}
                />
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(1)5"
              position={[-44.9294, 74.1506, -20.9905]}
              rotation={[-2.7925, 0, -0.7519]}
            >
              <group
                name="Flange_Bearing_4x8x3_(1)1004"
                position={[180.1434, -14.1462, 208.7028]}
                rotation={[0.6058, 0.4893, -1.7265]}
              />
              <group
                name="Flange_Bearing_4x8x3_(1)2004"
                position={[135.4972, -21.1546, 232.7661]}
                rotation={[-2.4308, -0.4723, 1.7751]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)1004"
                position={[183.1954, -13.6672, 207.0579]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)2004"
                position={[132.9685, -21.5515, 234.1291]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="×°ÅäÌå2_(1)1004"
                position={[0.0229, -1.602, -2.3402]}
              >
                <group
                  name="Roller3_(1)1004"
                  position={[157.7974, -16.0485, 223.0748]}
                  rotation={[0.6058, 0.4893, -0.1557]}
                >
                  <mesh
                    name="Body1108"
                    castShadow
                    receiveShadow
                    geometry={nodes.Body1108.geometry}
                    material={materials["Opaque(63,63,63)"]}
                    scale={10}
                  />
                </group>
                <group
                  name="Shaft_(1)1004"
                  position={[157.7974, -16.0485, 223.0748]}
                  rotation={[3.068, -0.4842, -0.1719]}
                />
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(1)6"
              position={[-44.9294, 69.6726, -44.1482]}
              rotation={[2.7925, 0, -0.7519]}
            >
              <group name="×°ÅäÌå3_(1)005" position={[0, 0, 0]}>
                <group
                  name="Flange_Bearing_4x8x3_(1)1005"
                  position={[263.6623, -103.4568, 31.4637]}
                  rotation={[0.6058, 0.4893, -1.7265]}
                />
                <group
                  name="Flange_Bearing_4x8x3_(1)2005"
                  position={[219.0161, -110.4652, 55.5271]}
                  rotation={[-2.4308, -0.4723, 1.7751]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)1005"
                  position={[266.7142, -102.9777, 29.8187]}
                  rotation={[0.6058, 0.4893, 1.4151]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)2005"
                  position={[216.4873, -110.8622, 56.89]}
                  rotation={[0.6058, 0.4893, 1.4151]}
                />
                <group
                  name="×°ÅäÌå2_(1)1005"
                  position={[0.0229, -1.602, -2.3402]}
                >
                  <group name="×°ÅäÌå2_(1)005" position={[0, -0.0001, 0]}>
                    <group
                      name="Roller3_(1)1005"
                      position={[241.3163, -105.359, 45.8356]}
                      rotation={[0.6058, 0.4893, -0.1557]}
                    >
                      <mesh
                        name="Body1114"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body1114.geometry}
                        material={materials["Opaque(63,63,63)"]}
                        scale={10}
                      />
                    </group>
                    <group
                      name="Shaft_(1)1005"
                      position={[241.3163, -105.359, 45.8356]}
                      rotation={[3.068, -0.4842, -0.1719]}
                    />
                  </group>
                </group>
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(1)7"
              position={[-44.9294, 51.3568, -59.0096]}
              rotation={[2.0944, 0, -0.7519]}
            >
              <group
                name="Flange_Bearing_4x8x3_(1)1006"
                position={[249.8261, -88.6611, -182.9079]}
                rotation={[0.6058, 0.4893, -1.7265]}
              />
              <group
                name="Flange_Bearing_4x8x3_(1)2006"
                position={[205.18, -95.6695, -158.8445]}
                rotation={[-2.4308, -0.4723, 1.7751]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)1006"
                position={[252.878, -88.182, -184.5528]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)2006"
                position={[202.6512, -96.0664, -157.4816]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="×°ÅäÌå2_(1)1006"
                position={[0.0229, -1.602, -2.3402]}
              >
                <group name="×°ÅäÌå2_(1)006" position={[0, -0.0001, 0]}>
                  <group
                    name="Roller3_(1)1006"
                    position={[227.4802, -90.5634, -168.536]}
                    rotation={[0.6058, 0.4893, -0.1557]}
                  >
                    <mesh
                      name="Body1120"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body1120.geometry}
                      material={materials["Opaque(63,63,63)"]}
                      scale={10}
                    />
                  </group>
                  <group
                    name="Shaft_(1)1006"
                    position={[227.4802, -90.5634, -168.536]}
                    rotation={[3.068, -0.4842, -0.1719]}
                  />
                </group>
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(1)8"
              position={[-44.9294, 27.7734, -58.621]}
              rotation={[1.3963, 0, -0.7519]}
            >
              <group name="×°ÅäÌå3_(1)007" position={[0, 0, 0]}>
                <group
                  name="Flange_Bearing_4x8x3_(1)1007"
                  position={[145.1089, 23.3177, -334.1049]}
                  rotation={[0.6058, 0.4893, -1.7265]}
                />
                <group
                  name="Flange_Bearing_4x8x3_(1)2007"
                  position={[100.4628, 16.3093, -310.0416]}
                  rotation={[-2.4308, -0.4723, 1.7751]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)1007"
                  position={[148.1609, 23.7968, -335.7499]}
                  rotation={[0.6058, 0.4893, 1.4151]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)2007"
                  position={[97.934, 15.9124, -308.6786]}
                  rotation={[0.6058, 0.4893, 1.4151]}
                />
                <group
                  name="×°ÅäÌå2_(1)1007"
                  position={[0.0229, -1.6019, -2.3402]}
                >
                  <group name="×°ÅäÌå2_(1)007" position={[0, 0, -0.0001]}>
                    <group
                      name="Roller3_(1)1007"
                      position={[122.763, 21.4155, -319.7331]}
                      rotation={[0.6058, 0.4893, -0.1557]}
                    >
                      <mesh
                        name="Body1126"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body1126.geometry}
                        material={materials["Opaque(63,63,63)"]}
                        scale={10}
                      />
                    </group>
                    <group
                      name="Shaft_(1)1007"
                      position={[122.763, 21.4155, -319.7331]}
                      rotation={[3.068, -0.4842, -0.1719]}
                    />
                  </group>
                </group>
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(1)9"
              position={[-44.9294, 9.9573, -43.1642]}
              rotation={[0.6981, 0, -0.7519]}
            >
              <group
                name="Flange_Bearing_4x8x3_(1)1008"
                position={[-1.491, 180.0835, -351.3808]}
                rotation={[0.6058, 0.4893, -1.7265]}
              />
              <group
                name="Flange_Bearing_4x8x3_(1)2008"
                position={[-46.1371, 173.0752, -327.3174]}
                rotation={[-2.4308, -0.4723, 1.7751]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)1008"
                position={[1.561, 180.5626, -353.0257]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(1)2008"
                position={[-48.6659, 172.6782, -325.9544]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="×°ÅäÌå2_(1)1008"
                position={[0.0229, -1.602, -2.3402]}
              >
                <group
                  name="Roller3_(1)1008"
                  position={[-23.8369, 178.1814, -337.0088]}
                  rotation={[0.6058, 0.4893, -0.1557]}
                >
                  <mesh
                    name="Body1132"
                    castShadow
                    receiveShadow
                    geometry={nodes.Body1132.geometry}
                    material={materials["Opaque(63,63,63)"]}
                    scale={10}
                  />
                </group>
                <group
                  name="Shaft_(1)1008"
                  position={[-23.8369, 178.1814, -337.0088]}
                  rotation={[3.068, -0.4842, -0.1719]}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="motorsiroata_v5_(2)1" rotation={[0, 0, -Math.PI]}>
          <group
            name="ÂóÂ××°Åä1_(2)1"
            position={[242.2856, -246.7613, 57.9296]}
            rotation={[2.3297, 0, Math.PI]}
          >
            <group
              name="BeamD24-010-B_(2)1"
              position={[89.2856, 460.2194, -374.9709]}
              rotation={[0.7589, -Math.PI / 2, 0]}
            />
            <group
              name="Cylinder3_(2)1"
              position={[58.2856, 460.2194, -374.9709]}
              rotation={[0.7589, 0, 0]}
            />
            <group
              name="hexagon_socket_button_head_screws_gb_GB_SOCKET_TYPE7_M4_c591875"
              position={[96.4856, 454.4144, -380.4756]}
              rotation={[2.7215, 0, Math.PI]}
            />
            <group
              name="hexagon_socket_button_head_screws_gb_GB_SOCKET_TYPE7_M4_facc9ab"
              position={[96.4856, 466.0244, -369.4662]}
              rotation={[2.7215, 0, Math.PI]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(2)1"
              position={[40.2856, 473.9813, -389.4833]}
              rotation={[0.7589, 0, 0]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(2)2"
              position={[40.2856, 445.707, -388.7328]}
              rotation={[0.7589, 0, 0]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(2)3"
              position={[40.2856, 446.4575, -360.4585]}
              rotation={[0.7589, 0, 0]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(2)4"
              position={[40.2856, 474.7318, -361.209]}
              rotation={[0.7589, 0, 0]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(2)5"
              position={[76.2856, 474.7318, -361.209]}
              rotation={[-0.4201, 0, -Math.PI]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(2)6"
              position={[76.2856, 446.4575, -360.4585]}
              rotation={[-0.4201, 0, -Math.PI]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(2)7"
              position={[76.2856, 445.7069, -388.7328]}
              rotation={[-0.4201, 0, -Math.PI]}
            />
            <group
              name="Hexagon_socket_button_head_screws_M4¡Á8_(2)8"
              position={[76.2856, 473.9813, -389.4834]}
              rotation={[-0.4201, 0, -Math.PI]}
            />
            <group
              name="hexagon_socket_head_cap_screws_gb_GB_FASTENER_SCREWS_HS_cd3f209"
              position={[89.2856, 449.6353, -373.9826]}
              rotation={[-2.3827, 1.447, -Math.PI / 2]}
            />
            <group
              name="¾µÏòsupport_plate_(2)1"
              position={[82.2856, 460.2194, -374.9709]}
              rotation={[0.7589, 0, Math.PI / 2]}
            >
              <mesh
                name="Body1210"
                castShadow
                receiveShadow
                geometry={nodes.Body1210.geometry}
                material={materials["Opaque(255,255,255)"]}
                scale={10}
              />
            </group>
            <group
              name="¾µÏòsupport_plate_(2)2"
              position={[34.2856, 460.2194, -374.9709]}
              rotation={[0.7589, 0, -Math.PI / 2]}
            >
              <mesh
                name="Body1221"
                castShadow
                receiveShadow
                geometry={nodes.Body1221.geometry}
                material={materials["Opaque(255,255,255)"]}
                scale={10}
              />
            </group>
            <group
              name="×°ÅäÌå3_(2)1"
              position={[-44.9294, 6.2448, -19.8715]}
              rotation={[0, 0, -0.7519]}
            >
              <group
                name="Flange_Bearing_4x8x3_(2)1"
                position={[-231.3549, 425.8874, -396.4472]}
                rotation={[0.6058, 0.4893, -1.7265]}
              />
              <group
                name="Flange_Bearing_4x8x3_(2)2"
                position={[-276.001, 418.879, -372.3838]}
                rotation={[-2.4308, -0.4723, 1.7751]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)1"
                position={[-228.3029, 426.3665, -398.0921]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)2"
                position={[-278.5298, 418.4821, -371.0208]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group name="×°ÅäÌå2_(2)1" position={[0.0229, -1.602, -2.3402]}>
                <group
                  name="Roller3_(2)1"
                  position={[-253.7008, 423.9851, -382.0753]}
                  rotation={[0.6058, 0.4893, -0.1557]}
                >
                  <group name="Roller3_(2)" position={[0, 0, 0.0001]}>
                    <mesh
                      name="Body1212"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body1212.geometry}
                      material={materials["Opaque(63,63,63)"]}
                      position={[0, 0, 0.0001]}
                      scale={10}
                    />
                  </group>
                </group>
                <group
                  name="Shaft_(2)1"
                  position={[-253.7008, 423.9851, -382.0753]}
                  rotation={[3.068, -0.4842, -0.1719]}
                />
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(2)2"
              position={[-44.9294, 18.3731, 0.358]}
              rotation={[-0.6981, 0, -0.7519]}
            >
              <group
                name="Flange_Bearing_4x8x3_(2)1001"
                position={[-317.2498, 517.7387, -44.853]}
                rotation={[0.6058, 0.4893, -1.7265]}
              />
              <group
                name="Flange_Bearing_4x8x3_(2)2001"
                position={[-361.8959, 510.7303, -20.7897]}
                rotation={[-2.4308, -0.4723, 1.7751]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)1001"
                position={[-314.1978, 518.2178, -46.498]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)2001"
                position={[-364.4247, 510.3334, -19.4267]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="×°ÅäÌå2_(2)1001"
                position={[0.0229, -1.602, -2.3402]}
              >
                <group
                  name="Roller3_(2)1001"
                  position={[-339.5957, 515.8365, -30.4811]}
                  rotation={[0.6058, 0.4893, -0.1557]}
                >
                  <mesh
                    name="Body1229"
                    castShadow
                    receiveShadow
                    geometry={nodes.Body1229.geometry}
                    material={materials["Opaque(63,63,63)"]}
                    scale={10}
                  />
                </group>
                <group
                  name="Shaft_(2)1001"
                  position={[-339.5957, 515.8365, -30.4811]}
                  rotation={[3.068, -0.4842, -0.1719]}
                />
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(2)3"
              position={[-44.9294, 40.6671, 8.0588]}
              rotation={[-1.3963, 0, -0.7519]}
            >
              <group
                name="Flange_Bearing_4x8x3_(2)1002"
                position={[-228.6846, 423.0319, 305.3181]}
                rotation={[0.6058, 0.4893, -1.7265]}
              />
              <group
                name="Flange_Bearing_4x8x3_(2)2002"
                position={[-273.3307, 416.0236, 329.3815]}
                rotation={[-2.4308, -0.4723, 1.7751]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)1002"
                position={[-225.6326, 423.511, 303.6732]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)2002"
                position={[-275.8594, 415.6266, 330.7444]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="×°ÅäÌå2_(2)1002"
                position={[0.0229, -1.602, -2.3402]}
              >
                <group
                  name="Roller3_(2)1002"
                  position={[-251.0305, 421.1297, 319.69]}
                  rotation={[0.6058, 0.4893, -0.1557]}
                >
                  <mesh
                    name="Body1235"
                    castShadow
                    receiveShadow
                    geometry={nodes.Body1235.geometry}
                    material={materials["Opaque(63,63,63)"]}
                    scale={10}
                  />
                </group>
                <group
                  name="Shaft_(2)1002"
                  position={[-251.0305, 421.1297, 319.69]}
                  rotation={[3.068, -0.4842, -0.1719]}
                />
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(2)4"
              position={[-44.9295, 62.6954, -0.3724]}
              rotation={[-2.0944, 0, -0.7519]}
            >
              <group
                name="Flange_Bearing_4x8x3_(2)1003"
                position={[-7.0999, 186.0815, 490.2174]}
                rotation={[0.6058, 0.4893, -1.7265]}
              />
              <group
                name="Flange_Bearing_4x8x3_(2)2003"
                position={[-51.7461, 179.0731, 514.2808]}
                rotation={[-2.4308, -0.4723, 1.7751]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)1003"
                position={[-4.0479, 186.5606, 488.5725]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)2003"
                position={[-54.2748, 178.6762, 515.6437]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="×°ÅäÌå2_(2)1003"
                position={[0.0229, -1.602, -2.3402]}
              >
                <group
                  name="Roller3_(2)1003"
                  position={[-29.4459, 184.1793, 504.5894]}
                  rotation={[0.6058, 0.4893, -0.1557]}
                >
                  <mesh
                    name="Body1241"
                    castShadow
                    receiveShadow
                    geometry={nodes.Body1241.geometry}
                    material={materials["Opaque(63,63,63)"]}
                    scale={10}
                  />
                </group>
                <group
                  name="Shaft_(2)1003"
                  position={[-29.4459, 184.1793, 504.5894]}
                  rotation={[3.068, -0.4842, -0.1719]}
                />
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(2)5"
              position={[-44.9295, 74.1506, -20.9905]}
              rotation={[-2.7925, 0, -0.7519]}
            >
              <group
                name="Flange_Bearing_4x8x3_(2)1004"
                position={[243.8223, -82.241, 423.3283]}
                rotation={[0.6058, 0.4893, -1.7265]}
              />
              <group
                name="Flange_Bearing_4x8x3_(2)2004"
                position={[199.1761, -89.2493, 447.3917]}
                rotation={[-2.4308, -0.4723, 1.7751]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)1004"
                position={[246.8742, -81.7619, 421.6834]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)2004"
                position={[196.6473, -89.6462, 448.7546]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="×°ÅäÌå2_(2)1004"
                position={[0.0229, -1.602, -2.3402]}
              >
                <group
                  name="Roller3_(2)1004"
                  position={[221.4763, -84.1431, 437.7002]}
                  rotation={[0.6058, 0.4893, -0.1557]}
                >
                  <mesh
                    name="Body1247"
                    castShadow
                    receiveShadow
                    geometry={nodes.Body1247.geometry}
                    material={materials["Opaque(63,63,63)"]}
                    scale={10}
                  />
                </group>
                <group
                  name="Shaft_(2)1004"
                  position={[221.4763, -84.1431, 437.7002]}
                  rotation={[3.068, -0.4842, -0.1719]}
                />
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(2)6"
              position={[-44.9295, 69.6726, -44.1482]}
              rotation={[2.7925, 0, -0.7519]}
            >
              <group
                name="Flange_Bearing_4x8x3_(2)1005"
                position={[406.6726, -256.3843, 135.9491]}
                rotation={[0.6058, 0.4893, -1.7265]}
              />
              <group
                name="Flange_Bearing_4x8x3_(2)2005"
                position={[362.0265, -263.3926, 160.0124]}
                rotation={[-2.4308, -0.4723, 1.7751]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)1005"
                position={[409.7246, -255.9052, 134.3041]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)2005"
                position={[359.4977, -263.7896, 161.3754]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="×°ÅäÌå2_(2)1005"
                position={[0.0229, -1.602, -2.3402]}
              >
                <group
                  name="Roller3_(2)1005"
                  position={[384.3267, -258.2865, 150.321]}
                  rotation={[0.6058, 0.4893, -0.1557]}
                >
                  <mesh
                    name="Body1253"
                    castShadow
                    receiveShadow
                    geometry={nodes.Body1253.geometry}
                    material={materials["Opaque(63,63,63)"]}
                    scale={10}
                  />
                </group>
                <group
                  name="Shaft_(2)1005"
                  position={[384.3267, -258.2865, 150.321]}
                  rotation={[3.068, -0.4842, -0.1719]}
                />
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(2)7"
              position={[-44.9294, 51.3569, -59.0096]}
              rotation={[2.0944, 0, -0.7519]}
            >
              <group
                name="Flange_Bearing_4x8x3_(2)1006"
                position={[405.2519, -254.8649, -237.4524]}
                rotation={[0.6058, 0.4893, -1.7265]}
              />
              <group
                name="Flange_Bearing_4x8x3_(2)2006"
                position={[360.6058, -261.8733, -213.3891]}
                rotation={[-2.4308, -0.4723, 1.7751]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)1006"
                position={[408.3039, -254.3859, -239.0974]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)2006"
                position={[358.077, -262.2702, -212.0261]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="×°ÅäÌå2_(2)1006"
                position={[0.0229, -1.602, -2.3402]}
              >
                <group
                  name="Roller3_(2)1006"
                  position={[382.9059, -256.7671, -223.0805]}
                  rotation={[0.6058, 0.4893, -0.1557]}
                >
                  <mesh
                    name="Body1259"
                    castShadow
                    receiveShadow
                    geometry={nodes.Body1259.geometry}
                    material={materials["Opaque(63,63,63)"]}
                    scale={10}
                  />
                </group>
                <group
                  name="Shaft_(2)1006"
                  position={[382.9059, -256.7671, -223.0805]}
                  rotation={[3.068, -0.4842, -0.1719]}
                />
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(2)8"
              position={[-44.9294, 27.7735, -58.621]}
              rotation={[1.3963, 0, -0.7519]}
            >
              <group
                name="Flange_Bearing_4x8x3_(2)1007"
                position={[240.2246, -78.3938, -522.1575]}
                rotation={[0.6058, 0.4893, -1.7265]}
              />
              <group
                name="Flange_Bearing_4x8x3_(2)2007"
                position={[195.5785, -85.4022, -498.0941]}
                rotation={[-2.4308, -0.4723, 1.7751]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)1007"
                position={[243.2766, -77.9148, -523.8024]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)2007"
                position={[193.0497, -85.7991, -496.7312]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="×°ÅäÌå2_(2)1007"
                position={[0.0229, -1.602, -2.3402]}
              >
                <group
                  name="Roller3_(2)1007"
                  position={[217.8786, -80.296, -507.7856]}
                  rotation={[0.6058, 0.4893, -0.1557]}
                >
                  <mesh
                    name="Body1265"
                    castShadow
                    receiveShadow
                    geometry={nodes.Body1265.geometry}
                    material={materials["Opaque(63,63,63)"]}
                    scale={10}
                  />
                </group>
                <group
                  name="Shaft_(2)1007"
                  position={[217.8786, -80.296, -507.7856]}
                  rotation={[3.068, -0.4842, -0.1719]}
                />
              </group>
            </group>
            <group
              name="×°ÅäÌå3_(2)9"
              position={[-44.9294, 9.9573, -43.1642]}
              rotation={[0.6981, 0, -0.7519]}
            >
              <group
                name="Flange_Bearing_4x8x3_(2)1008"
                position={[-11.1911, 190.4562, -584.9494]}
                rotation={[0.6058, 0.4893, -1.7265]}
              />
              <group
                name="Flange_Bearing_4x8x3_(2)2008"
                position={[-55.8372, 183.4479, -560.886]}
                rotation={[-2.4308, -0.4723, 1.7751]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)1008"
                position={[-8.1391, 190.9353, -586.5944]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="GB£¯T896-86¿ª¿Úµ²È¦3_(2)2008"
                position={[-58.366, 183.0509, -559.5231]}
                rotation={[0.6058, 0.4893, 1.4151]}
              />
              <group
                name="×°ÅäÌå2_(2)1008"
                position={[0.0228, -1.602, -2.3402]}
              >
                <group
                  name="Roller3_(2)1008"
                  position={[-33.537, 188.554, -570.5775]}
                  rotation={[0.6058, 0.4893, -0.1557]}
                >
                  <mesh
                    name="Body1271"
                    castShadow
                    receiveShadow
                    geometry={nodes.Body1271.geometry}
                    material={materials["Opaque(63,63,63)"]}
                    scale={10}
                  />
                </group>
                <group
                  name="Shaft_(2)1008"
                  position={[-33.537, 188.554, -570.5775]}
                  rotation={[3.068, -0.4842, -0.1719]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="ÂóÂ××°Åä11"
          position={[242.2856, -246.7613, 57.9296]}
          rotation={[2.3297, 0, Math.PI]}
        >
          <group
            name="BeamD24-010-B1"
            position={[89.2856, 204.2483, -105.0398]}
            rotation={[0.7589, -Math.PI / 2, 0]}
          />
          <group
            name="Cylinder31"
            position={[58.2856, 204.2483, -105.0398]}
            rotation={[0.7589, 0, 0]}
          />
          <group
            name="hexagon_socket_button_head_screws_gb_GB_SOCKET_TYPE7_M4X14-C1"
            position={[96.4856, 210.0533, -99.5351]}
            rotation={[2.7215, 0, Math.PI]}
          />
          <group
            name="hexagon_socket_button_head_screws_gb_GB_SOCKET_TYPE7_M4X14-C2"
            position={[96.4856, 198.4433, -110.5446]}
            rotation={[2.7215, 0, Math.PI]}
          />
          <group
            name="Hexagon_socket_button_head_screws_M4¡Á81"
            position={[40.2856, 218.0102, -119.5523]}
            rotation={[0.7589, 0, 0]}
          />
          <group
            name="Hexagon_socket_button_head_screws_M4¡Á82"
            position={[40.2856, 189.7359, -118.8017]}
            rotation={[0.7589, 0, 0]}
          />
          <group
            name="Hexagon_socket_button_head_screws_M4¡Á83"
            position={[40.2856, 190.4865, -90.5274]}
            rotation={[0.7589, 0, 0]}
          />
          <group
            name="Hexagon_socket_button_head_screws_M4¡Á84"
            position={[40.2856, 218.7607, -91.278]}
            rotation={[0.7589, 0, 0]}
          />
          <group
            name="Hexagon_socket_button_head_screws_M4¡Á85"
            position={[76.2856, 218.7607, -91.278]}
            rotation={[-0.4201, 0, Math.PI]}
          />
          <group
            name="Hexagon_socket_button_head_screws_M4¡Á86"
            position={[76.2856, 190.4865, -90.5274]}
            rotation={[-0.4201, 0, Math.PI]}
          />
          <group
            name="Hexagon_socket_button_head_screws_M4¡Á87"
            position={[76.2856, 189.7359, -118.8017]}
            rotation={[-0.4201, 0, Math.PI]}
          />
          <group
            name="Hexagon_socket_button_head_screws_M4¡Á88"
            position={[76.2856, 218.0102, -119.5523]}
            rotation={[-0.4201, 0, Math.PI]}
          />
          <group
            name="hexagon_socket_head_cap_screws_gb_GB_FASTENER_SCREWS_HS_7fc88e9"
            position={[89.2856, 193.6642, -104.0515]}
            rotation={[-2.3827, 1.447, -Math.PI / 2]}
          />
          <group
            name="¾µÏòsupport_plate1"
            position={[82.2856, 204.2483, -105.0398]}
            rotation={[0.7589, 0, Math.PI / 2]}
          >
            <mesh
              name="Body1002"
              castShadow
              receiveShadow
              geometry={nodes.Body1002.geometry}
              material={materials["Opaque(255,255,255)"]}
              scale={10}
            />
          </group>
          <group
            name="¾µÏòsupport_plate2"
            position={[34.2856, 204.2483, -105.0398]}
            rotation={[0.7589, 0, -Math.PI / 2]}
          >
            <mesh
              name="Body1013"
              castShadow
              receiveShadow
              geometry={nodes.Body1013.geometry}
              material={materials["Opaque(255,255,255)"]}
              scale={10}
            />
          </group>
          <group
            name="×°ÅäÌå31"
            position={[-44.9294, 6.2448, -19.8715]}
            rotation={[0, 0, -0.7519]}
          >
            <group
              name="Flange_Bearing_4x8x31"
              position={[-56.5195, 238.9281, -126.5161]}
              rotation={[0.6058, 0.4893, -1.7265]}
            />
            <group
              name="Flange_Bearing_4x8x32"
              position={[-101.1657, 231.9197, -102.4527]}
              rotation={[-2.4308, -0.4723, 1.7751]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦32"
              position={[-103.6944, 231.5228, -101.0897]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group name="×°ÅäÌå21" position={[0.0229, -1.602, -2.3402]}>
              <group name="×°ÅäÌå2" position={[0, 0, 0]}>
                <group
                  name="Roller31"
                  position={[-78.8655, 237.0258, -112.1442]}
                  rotation={[0.6058, 0.4893, -0.1557]}
                >
                  <mesh
                    name="Body1004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Body1004.geometry}
                    material={materials["Opaque(63,63,63)"]}
                    scale={10}
                  />
                </group>
                <group
                  name="Shaft1"
                  position={[-78.8655, 237.0258, -112.1442]}
                  rotation={[3.068, -0.4842, -0.1719]}
                />
              </group>
            </group>
          </group>
          <group
            name="×°ÅäÌå32"
            position={[-44.9294, 18.3731, 0.358]}
            rotation={[-0.6981, 0, -0.7519]}
          >
            <group
              name="Flange_Bearing_4x8x31001"
              position={[-64.8071, 247.7903, -2.6089]}
              rotation={[0.6058, 0.4893, -1.7265]}
            />
            <group
              name="Flange_Bearing_4x8x32001"
              position={[-109.4532, 240.782, 21.4545]}
              rotation={[-2.4308, -0.4723, 1.7751]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦31001"
              position={[-61.7551, 248.2694, -4.2538]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦32001"
              position={[-111.982, 240.3851, 22.8175]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group name="×°ÅäÌå21001" position={[0.0229, -1.602, -2.3402]}>
              <group
                name="Roller31001"
                position={[-87.153, 245.8881, 11.763]}
                rotation={[0.6058, 0.4893, -0.1557]}
              >
                <mesh
                  name="Body1021"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1021.geometry}
                  material={materials["Opaque(63,63,63)"]}
                  scale={10}
                />
              </group>
              <group
                name="Shaft1001"
                position={[-87.153, 245.8881, 11.763]}
                rotation={[3.068, -0.4842, -0.1719]}
              />
            </group>
          </group>
          <group
            name="×°ÅäÌå33"
            position={[-44.9294, 40.6671, 8.0588]}
            rotation={[-1.3963, 0, -0.7519]}
          >
            <group
              name="Flange_Bearing_4x8x31002"
              position={[-16.7553, 196.4064, 100.1089]}
              rotation={[0.6058, 0.4893, -1.7265]}
            />
            <group
              name="Flange_Bearing_4x8x32002"
              position={[-61.4015, 189.3981, 124.1722]}
              rotation={[-2.4308, -0.4723, 1.7751]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦31002"
              position={[-13.7033, 196.8855, 98.4639]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦32002"
              position={[-63.9303, 189.0011, 125.5352]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group name="×°ÅäÌå21002" position={[0.0228, -1.602, -2.3402]}>
              <group
                name="Roller31002"
                position={[-39.1013, 194.5042, 114.4808]}
                rotation={[0.6058, 0.4893, -0.1557]}
              >
                <mesh
                  name="Body1027"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1027.geometry}
                  material={materials["Opaque(63,63,63)"]}
                  scale={10}
                />
              </group>
              <group
                name="Shaft1002"
                position={[-39.1013, 194.5042, 114.4808]}
                rotation={[3.068, -0.4842, -0.1719]}
              />
            </group>
          </group>
          <group
            name="×°ÅäÌå34"
            position={[-44.9294, 62.6954, -0.3724]}
            rotation={[-2.0944, 0, -0.7519]}
          >
            <group
              name="Flange_Bearing_4x8x31003"
              position={[65.1518, 108.8194, 133.5744]}
              rotation={[0.6058, 0.4893, -1.7265]}
            />
            <group
              name="Flange_Bearing_4x8x32003"
              position={[20.5057, 101.811, 157.6378]}
              rotation={[-2.4308, -0.4723, 1.7751]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦31003"
              position={[68.2038, 109.2985, 131.9294]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦32003"
              position={[17.9769, 101.4141, 159.0007]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group name="×°ÅäÌå21003" position={[0.0228, -1.602, -2.3402]}>
              <group
                name="Roller31003"
                position={[42.8059, 106.9172, 147.9463]}
                rotation={[0.6058, 0.4893, -0.1557]}
              >
                <mesh
                  name="Body1033"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1033.geometry}
                  material={materials["Opaque(63,63,63)"]}
                  scale={10}
                />
              </group>
              <group
                name="Shaft1003"
                position={[42.8059, 106.9172, 147.9463]}
                rotation={[3.068, -0.4842, -0.1719]}
              />
            </group>
          </group>
          <group
            name="×°ÅäÌå35"
            position={[-44.9294, 74.1506, -20.9905]}
            rotation={[-2.7925, 0, -0.7519]}
          >
            <group
              name="Flange_Bearing_4x8x31004"
              position={[142.5892, 26.0122, 82.1288]}
              rotation={[0.6058, 0.4893, -1.7265]}
            />
            <group
              name="Flange_Bearing_4x8x32004"
              position={[97.943, 19.0038, 106.1922]}
              rotation={[-2.4308, -0.4723, 1.7751]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦31004"
              position={[145.6412, 26.4913, 80.4838]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦32004"
              position={[95.4142, 18.6069, 107.5552]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group name="×°ÅäÌå21004" position={[0.0229, -1.602, -2.3402]}>
              <group
                name="Roller31004"
                position={[120.2432, 24.11, 96.5007]}
                rotation={[0.6058, 0.4893, -0.1557]}
              >
                <mesh
                  name="Body1039"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1039.geometry}
                  material={materials["Opaque(63,63,63)"]}
                  scale={10}
                />
              </group>
              <group
                name="Shaft1004"
                position={[120.2432, 24.11, 96.5007]}
                rotation={[3.068, -0.4842, -0.1719]}
              />
            </group>
          </group>
          <group
            name="×°ÅäÌå36"
            position={[-44.9294, 69.6726, -44.1482]}
            rotation={[2.7925, 0, -0.7519]}
          >
            <group
              name="Flange_Bearing_4x8x31005"
              position={[179.3228, -13.2688, -30.1559]}
              rotation={[0.6058, 0.4893, -1.7265]}
            />
            <group
              name="Flange_Bearing_4x8x32005"
              position={[134.6767, -20.2771, -6.0926]}
              rotation={[-2.4308, -0.4723, 1.7751]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦31005"
              position={[182.3748, -12.7897, -31.8009]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦32005"
              position={[132.1479, -20.6741, -4.7296]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group name="×°ÅäÌå21005" position={[0.0229, -1.602, -2.3402]}>
              <group
                name="Roller31005"
                position={[156.9769, -15.171, -15.784]}
                rotation={[0.6058, 0.4893, -0.1557]}
              >
                <mesh
                  name="Body1045"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1045.geometry}
                  material={materials["Opaque(63,63,63)"]}
                  scale={10}
                />
              </group>
              <group
                name="Shaft1005"
                position={[156.9769, -15.171, -15.784]}
                rotation={[3.068, -0.4842, -0.1719]}
              />
            </group>
          </group>
          <group
            name="×°ÅäÌå37"
            position={[-44.9294, 51.3569, -59.0096]}
            rotation={[2.0944, 0, -0.7519]}
          >
            <group
              name="Flange_Bearing_4x8x31006"
              position={[158.1647, 9.3565, -150.7405]}
              rotation={[0.6058, 0.4893, -1.7265]}
            />
            <group
              name="Flange_Bearing_4x8x32006"
              position={[113.5186, 2.3482, -126.6772]}
              rotation={[-2.4308, -0.4723, 1.7751]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦31006"
              position={[161.2167, 9.8356, -152.3855]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦32006"
              position={[110.9898, 1.9512, -125.3142]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group name="×°ÅäÌå21006" position={[0.0229, -1.602, -2.3402]}>
              <group
                name="Roller31006"
                position={[135.8188, 7.4543, -136.3686]}
                rotation={[0.6058, 0.4893, -0.1557]}
              >
                <mesh
                  name="Body1051"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1051.geometry}
                  material={materials["Opaque(63,63,63)"]}
                  scale={10}
                />
              </group>
              <group
                name="Shaft1006"
                position={[135.8188, 7.4543, -136.3686]}
                rotation={[3.068, -0.4842, -0.1719]}
              />
            </group>
          </group>
          <group
            name="×°ÅäÌå38"
            position={[-44.9294, 27.7734, -58.621]}
            rotation={[1.3963, 0, -0.7519]}
          >
            <group
              name="Flange_Bearing_4x8x31007"
              position={[89.015, 83.3014, -223.2022]}
              rotation={[0.6058, 0.4893, -1.7265]}
            />
            <group
              name="Flange_Bearing_4x8x32007"
              position={[44.3689, 76.2931, -199.1388]}
              rotation={[-2.4308, -0.4723, 1.7751]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦31007"
              position={[92.067, 83.7805, -224.8471]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦32007"
              position={[41.8401, 75.8961, -197.7758]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group name="×°ÅäÌå21007" position={[0.0229, -1.602, -2.3402]}>
              <group
                name="Roller31007"
                position={[66.6691, 81.3992, -208.8302]}
                rotation={[0.6058, 0.4893, -0.1557]}
              >
                <mesh
                  name="Body1057"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1057.geometry}
                  material={materials["Opaque(63,63,63)"]}
                  scale={10}
                />
              </group>
              <group
                name="Shaft1007"
                position={[66.6691, 81.3992, -208.8302]}
                rotation={[3.068, -0.4842, -0.1719]}
              />
            </group>
          </group>
          <group
            name="×°ÅäÌå39"
            position={[-44.9294, 9.9573, -43.1642]}
            rotation={[0.6981, 0, -0.7519]}
          >
            <group
              name="Flange_Bearing_4x8x32008"
              position={[-40.4166, 166.9579, -189.5718]}
              rotation={[-2.4308, -0.4723, 1.7751]}
            />
            <group
              name="GB£¯T896-86¿ª¿Úµ²È¦32008"
              position={[-42.9453, 166.561, -188.2088]}
              rotation={[0.6058, 0.4893, 1.4151]}
            />
            <group name="×°ÅäÌå21008" position={[0.0229, -1.602, -2.3402]}>
              <group
                name="Roller31008"
                position={[-18.1164, 172.0641, -199.2633]}
                rotation={[0.6058, 0.4893, -0.1557]}
              >
                <mesh
                  name="Body1063"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1063.geometry}
                  material={materials["Opaque(63,63,63)"]}
                  scale={10}
                />
              </group>
              <group
                name="Shaft1008"
                position={[-18.1164, 172.0641, -199.2633]}
                rotation={[3.068, -0.4842, -0.1719]}
              />
            </group>
          </group>
        </group>
        <group
          name="motorsiroata_v52"
          position={[-53.5115, 281.6344, -263.5877]}
          rotation={[-1.5046, 0, -Math.PI]}
        >
          <group
            name="ÂóÂ××°Åä11001"
            position={[242.2856, -246.7612, 57.9296]}
            rotation={[2.3297, 0, Math.PI]}
          >
            <group name="ÂóÂ××°Åä1001" position={[0, 0.0001, 0]}>
              <group
                name="BeamD24-010-B1001"
                position={[142.7971, 608.4771, -129.1711]}
                rotation={[0.6927, -Math.PI / 2, 0]}
              />
              <group
                name="Cylinder31001"
                position={[111.7971, 608.4771, -129.1711]}
                rotation={[0.6927, 0, 0]}
              />
              <group
                name="hexagon_socket_button_head_screws_gb_GB_SOCKET_TYPE7_M4X14-001"
                position={[149.9971, 614.6333, -124.0623]}
                rotation={[2.6553, 0, -Math.PI]}
              />
              <group
                name="hexagon_socket_button_head_screws_gb_GB_SOCKET_TYPE7_M4X14-003"
                position={[149.9971, 602.3207, -134.2799]}
                rotation={[2.6553, 0, -Math.PI]}
              />
              <group
                name="Hexagon_socket_button_head_screws_M4¡Á81001"
                position={[93.7971, 621.2491, -144.5618]}
                rotation={[0.6927, 0, 0]}
              />
              <group
                name="Hexagon_socket_button_head_screws_M4¡Á82001"
                position={[93.7971, 593.0864, -141.9432]}
                rotation={[0.6927, 0, 0]}
              />
              <group
                name="Hexagon_socket_button_head_screws_M4¡Á83001"
                position={[93.7971, 595.705, -113.7804]}
                rotation={[0.6927, 0, 0]}
              />
              <group
                name="Hexagon_socket_button_head_screws_M4¡Á84001"
                position={[93.7971, 623.8677, -116.399]}
                rotation={[0.6927, 0, 0]}
              />
              <group
                name="Hexagon_socket_button_head_screws_M4¡Á85001"
                position={[129.7971, 623.8677, -116.399]}
                rotation={[-0.4863, 0, -Math.PI]}
              />
              <group
                name="Hexagon_socket_button_head_screws_M4¡Á86001"
                position={[129.7971, 595.705, -113.7804]}
                rotation={[-0.4863, 0, -Math.PI]}
              />
              <group
                name="Hexagon_socket_button_head_screws_M4¡Á87001"
                position={[129.7971, 593.0864, -141.9432]}
                rotation={[-0.4863, 0, -Math.PI]}
              />
              <group
                name="Hexagon_socket_button_head_screws_M4¡Á88001"
                position={[129.7971, 621.2491, -144.5618]}
                rotation={[-0.4863, 0, -Math.PI]}
              />
              <group
                name="hexagon_socket_head_cap_screws_gb_GB_FASTENER_SCREWS_HS_7fc"
                position={[142.7971, 597.9814, -127.4851]}
                rotation={[-2.4489, 1.447, -Math.PI / 2]}
              />
              <group
                name="¾µÏòsupport_plate1001"
                position={[135.7971, 608.4771, -129.1711]}
                rotation={[0.6927, 0, Math.PI / 2]}
              >
                <mesh
                  name="Body1141"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1141.geometry}
                  material={materials["Opaque(255,255,255)"]}
                  scale={10}
                />
              </group>
              <group
                name="¾µÏòsupport_plate2001"
                position={[87.7971, 608.4771, -129.1711]}
                rotation={[0.6927, 0, -Math.PI / 2]}
              >
                <mesh
                  name="Body1152"
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1152.geometry}
                  material={materials["Opaque(255,255,255)"]}
                  scale={10}
                />
              </group>
              <group
                name="×°ÅäÌå31001"
                position={[-44.9294, 6.2449, -19.8716]}
                rotation={[0, 0, -0.7519]}
              >
                <group
                  name="Flange_Bearing_4x8x31009"
                  position={[-291.6444, 568.7023, -151.5561]}
                  rotation={[0.5449, 0.4514, -1.6989]}
                />
                <group
                  name="Flange_Bearing_4x8x32009"
                  position={[-337.3395, 562.8156, -129.2234]}
                  rotation={[-2.493, -0.4372, 1.7435]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦31009"
                  position={[-288.5207, 569.1047, -153.0828]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦32009"
                  position={[-339.9277, 562.4821, -127.9585]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group name="×°ÅäÌå21009" position={[0.0229, -1.602, -2.3402]}>
                  <group
                    name="Roller31009"
                    position={[-314.5148, 567.3609, -138.0496]}
                    rotation={[0.5449, 0.4514, -0.1281]}
                  >
                    <mesh
                      name="Body1143"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body1143.geometry}
                      material={materials["Opaque(63,63,63)"]}
                      scale={10}
                    />
                  </group>
                  <group
                    name="Shaft1009"
                    position={[-314.5148, 567.3609, -138.0496]}
                    rotation={[3.0218, -0.4392, -0.167]}
                  />
                </group>
              </group>
              <group
                name="×°ÅäÌå32001"
                position={[-44.9294, 18.3731, 0.358]}
                rotation={[-0.6981, 0, -0.7519]}
              >
                <group
                  name="Flange_Bearing_4x8x31010"
                  position={[-245.9316, 519.8196, 237.8299]}
                  rotation={[0.5449, 0.4514, -1.6989]}
                />
                <group
                  name="Flange_Bearing_4x8x32010"
                  position={[-291.6267, 513.9329, 260.1626]}
                  rotation={[-2.493, -0.4372, 1.7435]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦31010"
                  position={[-242.8079, 520.222, 236.3033]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦32010"
                  position={[-294.2149, 513.5995, 261.4275]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group name="×°ÅäÌå21010" position={[0.0229, -1.602, -2.3402]}>
                  <group name="×°ÅäÌå2010" position={[0, -0.0001, 0]}>
                    <group
                      name="Roller31010"
                      position={[-268.802, 518.4781, 251.3365]}
                      rotation={[0.5449, 0.4514, -0.1281]}
                    >
                      <mesh
                        name="Body1160"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body1160.geometry}
                        material={materials["Opaque(63,63,63)"]}
                        scale={10}
                      />
                    </group>
                    <group
                      name="Shaft1010"
                      position={[-268.802, 518.4781, 251.3365]}
                      rotation={[3.0218, -0.4392, -0.167]}
                    />
                  </group>
                </group>
              </group>
              <group
                name="×°ÅäÌå33001"
                position={[-44.9294, 40.6672, 8.0589]}
                rotation={[-1.3963, 0, -0.7519]}
              >
                <group
                  name="Flange_Bearing_4x8x31011"
                  position={[-39.9569, 299.5614, 493.0972]}
                  rotation={[0.5449, 0.4514, -1.6989]}
                />
                <group
                  name="Flange_Bearing_4x8x32011"
                  position={[-85.6519, 293.6747, 515.4299]}
                  rotation={[-2.493, -0.4372, 1.7435]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦31011"
                  position={[-36.8332, 299.9638, 491.5706]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦32011"
                  position={[-88.2401, 293.3413, 516.6948]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group name="×°ÅäÌå21011" position={[0.0229, -1.602, -2.3402]}>
                  <group
                    name="Roller31011"
                    position={[-62.8273, 298.22, 506.6038]}
                    rotation={[0.5449, 0.4514, -0.1281]}
                  >
                    <mesh
                      name="Body1166"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body1166.geometry}
                      material={materials["Opaque(63,63,63)"]}
                      scale={10}
                    />
                  </group>
                  <group
                    name="Shaft1011"
                    position={[-62.8273, 298.22, 506.6038]}
                    rotation={[3.0218, -0.4392, -0.167]}
                  />
                </group>
              </group>
              <group
                name="×°ÅäÌå34001"
                position={[-44.9294, 62.6954, -0.3724]}
                rotation={[-2.0944, 0, -0.7519]}
              >
                <group
                  name="Flange_Bearing_4x8x31012"
                  position={[229.9019, 10.9892, 494.8035]}
                  rotation={[0.5449, 0.4514, -1.6989]}
                />
                <group
                  name="Flange_Bearing_4x8x32012"
                  position={[184.2069, 5.1025, 517.1362]}
                  rotation={[-2.493, -0.4372, 1.7435]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦31012"
                  position={[233.0256, 11.3916, 493.2769]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦32012"
                  position={[181.6187, 4.7691, 518.4012]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group name="×°ÅäÌå21012" position={[0.0228, -1.602, -2.3402]}>
                  <group
                    name="Roller31012"
                    position={[207.0316, 9.6478, 508.3101]}
                    rotation={[0.5449, 0.4514, -0.1281]}
                  >
                    <mesh
                      name="Body1172"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body1172.geometry}
                      material={materials["Opaque(63,63,63)"]}
                      scale={10}
                    />
                  </group>
                  <group
                    name="Shaft1012"
                    position={[207.0316, 9.6478, 508.3101]}
                    rotation={[3.0218, -0.4392, -0.167]}
                  />
                </group>
              </group>
              <group
                name="×°ÅäÌå35001"
                position={[-44.9294, 74.1506, -20.9905]}
                rotation={[-2.7925, 0, -0.7519]}
              >
                <group
                  name="Flange_Bearing_4x8x31013"
                  position={[437.3749, -210.8711, 242.1503]}
                  rotation={[0.5449, 0.4514, -1.6989]}
                />
                <group
                  name="Flange_Bearing_4x8x32013"
                  position={[391.6798, -216.7578, 264.483]}
                  rotation={[-2.493, -0.4372, 1.7435]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦31013"
                  position={[440.4986, -210.4687, 240.6236]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦32013"
                  position={[389.0917, -217.0912, 265.748]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group name="×°ÅäÌå21013" position={[0.0228, -1.602, -2.3402]}>
                  <group name="×°ÅäÌå2013" position={[0.0001, 0, 0]}>
                    <group
                      name="Roller31013"
                      position={[414.5046, -212.2125, 255.6569]}
                      rotation={[0.5449, 0.4514, -0.1281]}
                    >
                      <mesh
                        name="Body1178"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body1178.geometry}
                        material={materials["Opaque(63,63,63)"]}
                        scale={10}
                      />
                    </group>
                    <group
                      name="Shaft1013"
                      position={[414.5046, -212.2125, 255.6569]}
                      rotation={[3.0218, -0.4392, -0.167]}
                    />
                  </group>
                </group>
              </group>
              <group
                name="×°ÅäÌå36001"
                position={[-44.9294, 69.6727, -44.1482]}
                rotation={[2.7925, 0, -0.7519]}
              >
                <group
                  name="Flange_Bearing_4x8x31014"
                  position={[485.3832, -262.2084, -146.6431]}
                  rotation={[0.5449, 0.4514, -1.6989]}
                />
                <group
                  name="Flange_Bearing_4x8x32014"
                  position={[439.6881, -268.0951, -124.3104]}
                  rotation={[-2.493, -0.4372, 1.7435]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦31014"
                  position={[488.5069, -261.806, -148.1698]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦32014"
                  position={[437.0999, -268.4286, -123.0455]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group name="×°ÅäÌå21014" position={[0.0229, -1.602, -2.3402]}>
                  <group name="×°ÅäÌå2014" position={[-0.0001, 0, 0]}>
                    <group
                      name="Roller31014"
                      position={[462.5127, -263.5498, -133.1366]}
                      rotation={[0.5449, 0.4514, -0.1281]}
                    >
                      <mesh
                        name="Body1184"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body1184.geometry}
                        material={materials["Opaque(63,63,63)"]}
                        scale={10}
                      />
                    </group>
                    <group
                      name="Shaft1014"
                      position={[462.5127, -263.5498, -133.1366]}
                      rotation={[3.0218, -0.4392, -0.167]}
                    />
                  </group>
                </group>
              </group>
              <group
                name="×°ÅäÌå37001"
                position={[-44.9294, 51.3569, -59.0097]}
                rotation={[2.0944, 0, -0.7519]}
              >
                <group
                  name="Flange_Bearing_4x8x31015"
                  position={[351.463, -119.0016, -489.656]}
                  rotation={[0.5449, 0.4514, -1.6989]}
                />
                <group
                  name="Flange_Bearing_4x8x32015"
                  position={[305.768, -124.8883, -467.3233]}
                  rotation={[-2.493, -0.4372, 1.7435]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦31015"
                  position={[354.5867, -118.5992, -491.1826]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦32015"
                  position={[303.1798, -125.2217, -466.0584]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group name="×°ÅäÌå21015" position={[0.0229, -1.602, -2.3402]}>
                  <group
                    name="Roller31015"
                    position={[328.5926, -120.343, -476.1495]}
                    rotation={[0.5449, 0.4514, -0.1281]}
                  >
                    <mesh
                      name="Body1190"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body1190.geometry}
                      material={materials["Opaque(63,63,63)"]}
                      scale={10}
                    />
                  </group>
                  <group
                    name="Shaft1015"
                    position={[328.5926, -120.343, -476.1495]}
                    rotation={[3.0218, -0.4392, -0.167]}
                  />
                </group>
              </group>
              <group
                name="×°ÅäÌå38001"
                position={[-44.9294, 27.7735, -58.621]}
                rotation={[1.3963, 0, -0.7519]}
              >
                <group name="×°ÅäÌå3016" position={[0, 0, -0.0001]}>
                  <group
                    name="Flange_Bearing_4x8x31016"
                    position={[98.2773, 151.7414, -626.3889]}
                    rotation={[0.5449, 0.4514, -1.6989]}
                  />
                  <group
                    name="Flange_Bearing_4x8x32016"
                    position={[52.5822, 145.8547, -604.0562]}
                    rotation={[-2.493, -0.4372, 1.7435]}
                  />
                  <group
                    name="GB£¯T896-86¿ª¿Úµ²È¦31016"
                    position={[101.4009, 152.1438, -627.9155]}
                    rotation={[0.5449, 0.4514, 1.4427]}
                  />
                  <group
                    name="GB£¯T896-86¿ª¿Úµ²È¦32016"
                    position={[49.994, 145.5213, -602.7913]}
                    rotation={[0.5449, 0.4514, 1.4427]}
                  />
                  <group
                    name="×°ÅäÌå21016"
                    position={[0.0229, -1.602, -2.3403]}
                  >
                    <group
                      name="Roller31016"
                      position={[75.4068, 150.4, -612.8821]}
                      rotation={[0.5449, 0.4514, -0.1281]}
                    >
                      <mesh
                        name="Body1196"
                        castShadow
                        receiveShadow
                        geometry={nodes.Body1196.geometry}
                        material={materials["Opaque(63,63,63)"]}
                        scale={10}
                      />
                    </group>
                    <group
                      name="Shaft1016"
                      position={[75.4068, 150.4, -612.8821]}
                      rotation={[3.0218, -0.4392, -0.167]}
                    />
                  </group>
                </group>
              </group>
              <group
                name="×°ÅäÌå39001"
                position={[-44.9294, 9.9573, -43.1642]}
                rotation={[0.6981, 0, -0.7519]}
              >
                <group
                  name="Flange_Bearing_4x8x31017"
                  position={[-155.7057, 423.3369, -492.8627]}
                  rotation={[0.5449, 0.4514, -1.6989]}
                />
                <group
                  name="Flange_Bearing_4x8x32017"
                  position={[-201.4008, 417.4502, -470.5301]}
                  rotation={[-2.493, -0.4372, 1.7435]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦31017"
                  position={[-152.582, 423.7393, -494.3893]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group
                  name="GB£¯T896-86¿ª¿Úµ²È¦32017"
                  position={[-203.9889, 417.1168, -469.2651]}
                  rotation={[0.5449, 0.4514, 1.4427]}
                />
                <group name="×°ÅäÌå21017" position={[0.0228, -1.6019, -2.3402]}>
                  <group
                    name="Roller31017"
                    position={[-178.5761, 421.9955, -479.3562]}
                    rotation={[0.5449, 0.4514, -0.1281]}
                  >
                    <mesh
                      name="Body1202"
                      castShadow
                      receiveShadow
                      geometry={nodes.Body1202.geometry}
                      material={materials["Opaque(63,63,63)"]}
                      scale={10}
                    />
                  </group>
                  <group
                    name="Shaft1017"
                    position={[-178.5761, 421.9955, -479.3562]}
                    rotation={[3.0218, -0.4392, -0.167]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="Nu_un_penguin_v11"
          position={[56.7589, -199.6333, -438.8108]}
          rotation={[2.1571, 0, 0]}
        >
          <group
            name="39060_txm-standard_servo_bracket_v1_(1)1"
            position={[-48, -20.5706, 36.9299]}
            rotation={[1.5954, Math.PI / 2, 0]}
          >
            <mesh
              name="Body1536"
              castShadow
              receiveShadow
              geometry={nodes.Body1536.geometry}
              material={materials["Opaque(228,233,237)"]}
              scale={10}
            />
          </group>
          <group
            name="39060_txm-standard_servo_bracket_v11"
            position={[-16, -20.1394, 19.3753]}
            rotation={[-1.5462, -Math.PI / 2, 0]}
          >
            <mesh
              name="Body1534"
              castShadow
              receiveShadow
              geometry={nodes.Body1534.geometry}
              material={materials["Opaque(228,233,237)"]}
              scale={10}
            />
          </group>
          <group
            name="39068_TXM-288mmChannel_v11"
            position={[-32, 271.332, 35.3182]}
            rotation={[0.0246, 0, 0]}
          >
            <mesh
              name="Body1535"
              castShadow
              receiveShadow
              geometry={nodes.Body1535.geometry}
              material={materials["Opaque(228,233,237)"]}
              scale={10}
            />
          </group>
          <group
            name="39079_txm-motor_shaft_hub_with_set_screw_v11"
            position={[-36.5524, 271.9983, 38.1818]}
            rotation={[-1.5462, 0, Math.PI / 2]}
          >
            <mesh
              name="Body1544"
              castShadow
              receiveShadow
              geometry={nodes.Body1544.geometry}
              material={materials["Opaque(202,209,238)"]}
              scale={10}
            />
            <mesh
              name="Body2146"
              castShadow
              receiveShadow
              geometry={nodes.Body2146.geometry}
              material={materials["Opaque(198,193,188)"]}
              scale={10}
            />
          </group>
          <group
            name="REV-41-1097_v1_(1)1"
            position={[0, 9.1491, 47.278]}
            rotation={[1.6199, 0, 0]}
          >
            <mesh
              name="Body1529"
              castShadow
              receiveShadow
              geometry={nodes.Body1529.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
            <mesh
              name="Body1532"
              castShadow
              receiveShadow
              geometry={nodes.Body1532.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
            <mesh
              name="Body1531"
              castShadow
              receiveShadow
              geometry={nodes.Body1531.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
            <group
              name="D_(1)1"
              position={[0, -30.1, 10.0526]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                name="Body1533"
                castShadow
                receiveShadow
                geometry={nodes.Body1533.geometry}
                material={materials["Steel - Satin"]}
                scale={10}
              />
            </group>
            <mesh
              name="Body1530"
              castShadow
              receiveShadow
              geometry={nodes.Body1530.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="REV-41-1097_v1_(2)1"
            position={[299.4586, 302.5112, 126.8194]}
            rotation={[-0.5863, 0, Math.PI]}
          >
            <group
              name="A_(2)1"
              position={[363.4586, 179.257, -258.7073]}
              rotation={[-2.1571, 0, 0]}
            >
              <mesh
                name="Body1537"
                castShadow
                receiveShadow
                geometry={nodes.Body1537.geometry}
                material={materials["Steel - Satin"]}
                scale={10}
              />
            </group>
            <group
              name="B_(2)1"
              position={[363.4586, 179.257, -258.7073]}
              rotation={[-2.1571, 0, 0]}
            >
              <mesh
                name="Body1540"
                castShadow
                receiveShadow
                geometry={nodes.Body1540.geometry}
                material={materials["Steel - Satin"]}
                scale={10}
              />
            </group>
            <group
              name="C_(2)1"
              position={[363.4586, 179.257, -258.7073]}
              rotation={[-2.1571, 0, 0]}
            >
              <mesh
                name="Body1539"
                castShadow
                receiveShadow
                geometry={nodes.Body1539.geometry}
                material={materials["Steel - Satin"]}
                scale={10}
              />
            </group>
            <group
              name="D_(2)1"
              position={[363.4586, 204.2846, -239.1962]}
              rotation={[0.9845, 0, -Math.PI]}
            >
              <mesh
                name="Body1541"
                castShadow
                receiveShadow
                geometry={nodes.Body1541.geometry}
                material={materials["Steel - Satin"]}
                scale={10}
              />
            </group>
            <group
              name="E_(2)1"
              position={[363.4586, 179.257, -258.7073]}
              rotation={[-2.1571, 0, 0]}
            >
              <mesh
                name="Body1538"
                castShadow
                receiveShadow
                geometry={nodes.Body1538.geometry}
                material={materials["Steel - Satin"]}
                scale={10}
              />
            </group>
          </group>
          <group
            name="REV-41-1349_v11"
            position={[-66.7, 255.3368, 34.9252]}
            rotation={[-2.1571, 0, -Math.PI / 2]}
          >
            <mesh
              name="Body1545"
              castShadow
              receiveShadow
              geometry={nodes.Body1545.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="REV-41-1359_Simple_v11"
            position={[363.4586, 288.8622, 138.3494]}
            rotation={[0.9845, 0, Math.PI]}
          />
          <group
            name="REV-41-1363_v1_(1)1"
            position={[0, 1.3772, 0.6401]}
            rotation={[-3.0925, 0, 0]}
          >
            <mesh
              name="Body1528"
              castShadow
              receiveShadow
              geometry={nodes.Body1528.geometry}
              material={materials["Opaque(202,209,238)"]}
              scale={10}
            />
          </group>
          <group
            name="REV-41-1363_v1_(2)1"
            position={[-64, 0, 56.699]}
            rotation={[0, 0, Math.PI]}
          >
            <mesh
              name="Body1542"
              castShadow
              receiveShadow
              geometry={nodes.Body1542.geometry}
              material={materials["Opaque(202,209,238)"]}
              scale={10}
            />
          </group>
          <group
            name="Wobblygol_hook_chu_v11"
            position={[-32, -39.5742, 27.6805]}
            rotation={[-3.117, 0, 0]}
          >
            <mesh
              name="Body1543"
              castShadow
              receiveShadow
              geometry={nodes.Body1543.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <mesh
            name="Body1546"
            castShadow
            receiveShadow
            geometry={nodes.Body1546.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body2147"
            castShadow
            receiveShadow
            geometry={nodes.Body2147.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="palet_woble_mk_21"
          position={[197.8358, -3.8048, -311.2496]}
          rotation={[2.9425, 0, -1.1345]}
        />
        <group
          name="placuta_Copy_v11"
          position={[150.5, -283.2, -129.5]}
          rotation={[-Math.PI, 1.5705, 0]}
        />
        <group
          name="Profil_aluminiu_v11"
          position={[-100, 20, -20]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body1278"
            castShadow
            receiveShadow
            geometry={nodes.Body1278.geometry}
            material={materials["Plastic - Glossy (Grey)"]}
            scale={10}
          />
        </group>
        <group
          name="reglaj_unghi_aruncare_Component2_v1(Mirror)1"
          position={[-133.8069, -250.4044, -29.2912]}
        >
          <mesh
            name="Body2004"
            castShadow
            receiveShadow
            geometry={nodes.Body2004.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
        </group>
        <group
          name="reglaj_unghi_aruncare_Component2_v11"
          position={[137.0047, -243.5, -30.9954]}
          rotation={[0, 0, -Math.PI]}
        >
          <mesh
            name="Body1303"
            castShadow
            receiveShadow
            geometry={nodes.Body1303.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
        </group>
        <group
          name="REV-31-1153_v11"
          position={[77, -98, -41.9289]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <group name="Body2013" scale={10}>
            <mesh
              name="Body2006_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2006_1.geometry}
              material={materials["Opaque(89,89,89)"]}
            />
            <mesh
              name="Body2006_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2006_2.geometry}
              material={materials["Plastic - Matte (Yellow)"]}
            />
            <mesh
              name="Body2006_3"
              castShadow
              receiveShadow
              geometry={nodes.Body2006_3.geometry}
              material={materials["Opaque(247,247,229)"]}
            />
          </group>
        </group>
        <group
          name="REV-31-1153_v12"
          position={[-68, -98, -41.9289]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body5006"
            castShadow
            receiveShadow
            geometry={nodes.Body5006.geometry}
            material={materials["Opaque(204,204,204)"]}
            scale={10}
          />
          <group name="Body2014" scale={10}>
            <mesh
              name="Body2006_1"
              castShadow
              receiveShadow
              geometry={nodes.Body2006_1.geometry}
              material={materials["Opaque(89,89,89)"]}
            />
            <mesh
              name="Body2006_2"
              castShadow
              receiveShadow
              geometry={nodes.Body2006_2.geometry}
              material={materials["Plastic - Matte (Yellow)"]}
            />
            <mesh
              name="Body2006_3"
              castShadow
              receiveShadow
              geometry={nodes.Body2006_3.geometry}
              material={materials["Opaque(247,247,229)"]}
            />
          </group>
        </group>
        <group
          name="REV-31-1425_v11"
          position={[8, -392.5293, -242.6434]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <group
            name="3mm_LED1"
            position={[14.7907, 160.9082, 41.1004]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <group
            name="REV-31-1425-1-case_top1"
            position={[10.4707, 161.5082, 48.1004]}
          />
          <group
            name="REV-31-1425-2-case_bottom1"
            position={[10.4715, 161.5082, 45.1004]}
            rotation={[-Math.PI, 0, 0.0013]}
          />
          <group
            name="S4B-PH-K-S1"
            position={[13.4707, 157.2882, 41.1004]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <group
            name="soft_press_button1"
            position={[10.4707, 167.0782, 41.1004]}
            rotation={[0, 0, Math.PI]}
          />
          <group
            name="switch_PCB1"
            position={[10.4707, 161.5082, 42.3004]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <group
            name="switch_plunger_11"
            position={[10.4707, 167.0782, 36.2048]}
            rotation={[0, 0, 1.5632]}
          />
        </group>
        <group
          name="REV-31-1425_v12"
          position={[6.6924, -79.4116, -267.5945]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <group
            name="3mm_LED1001"
            position={[14.99, 158.7076, 61.274]}
            rotation={[0, -0.6109, -Math.PI / 2]}
          />
          <group
            name="REV-31-1425-1-case_top1001"
            position={[7.4362, 159.3076, 64.5302]}
            rotation={[0, -0.6109, 0]}
          />
          <group
            name="REV-31-1425-2-case_bottom1001"
            position={[9.1576, 159.3076, 62.0732]}
            rotation={[Math.PI, 0.6109, 0.0013]}
          />
          <group
            name="S4B-PH-K-S1001"
            position={[13.9087, 155.0876, 60.5168]}
            rotation={[-Math.PI / 2, 0, -0.6109]}
          />
          <group
            name="soft_press_button1001"
            position={[11.4513, 164.8776, 58.7961]}
            rotation={[0, -0.6109, Math.PI]}
          />
          <group
            name="switch_PCB1001"
            position={[10.763, 159.3076, 59.7791]}
            rotation={[0, -0.6109, -Math.PI / 2]}
          />
          <group
            name="switch_plunger_11001"
            position={[14.2592, 164.8776, 54.7859]}
            rotation={[0, -0.6109, 1.5632]}
          />
        </group>
        <group
          name="REV-41-1097_v1_(1)2"
          position={[-220.6575, -348.8458, -315.2813]}
          rotation={[1.5954, 0, Math.PI / 2]}
        >
          <group
            name="A_(1)1001"
            position={[69.3058, -95.7664, -22.6072]}
            rotation={[0, 0.0246, 0]}
          >
            <mesh
              name="Body1549"
              castShadow
              receiveShadow
              geometry={nodes.Body1549.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="B_(1)1001"
            position={[69.3058, -95.7664, -22.6072]}
            rotation={[0, 0.0246, 0]}
          >
            <mesh
              name="Body1552"
              castShadow
              receiveShadow
              geometry={nodes.Body1552.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="C_(1)1001"
            position={[69.3058, -95.7664, -22.6072]}
            rotation={[0, 0.0246, 0]}
          >
            <mesh
              name="Body1551"
              castShadow
              receiveShadow
              geometry={nodes.Body1551.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="D_(1)1001"
            position={[69.5527, -125.8664, -12.5577]}
            rotation={[Math.PI, -0.0246, Math.PI]}
          >
            <mesh
              name="Body1553"
              castShadow
              receiveShadow
              geometry={nodes.Body1553.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="E_(1)1001"
            position={[69.3058, -95.7664, -22.6072]}
            rotation={[0, 0.0246, 0]}
          >
            <mesh
              name="Body1550"
              castShadow
              receiveShadow
              geometry={nodes.Body1550.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
        </group>
        <group
          name="REV-41-1097_v1_(1)3"
          position={[41.3121, -229.2069, -94.9507]}
          rotation={[0.0002, -0.0158, 0.0087]}
        >
          <group
            name="A_(1)1002"
            position={[69.3058, -95.7664, -22.6073]}
            rotation={[0, 0.0246, 0]}
          >
            <mesh
              name="Body1558"
              castShadow
              receiveShadow
              geometry={nodes.Body1558.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="B_(1)1002"
            position={[69.3058, -95.7664, -22.6073]}
            rotation={[0, 0.0246, 0]}
          >
            <mesh
              name="Body1561"
              castShadow
              receiveShadow
              geometry={nodes.Body1561.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="C_(1)1002"
            position={[69.3058, -95.7664, -22.6073]}
            rotation={[0, 0.0246, 0]}
          >
            <mesh
              name="Body1560"
              castShadow
              receiveShadow
              geometry={nodes.Body1560.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="D_(1)1002"
            position={[69.5527, -125.8664, -12.5577]}
            rotation={[Math.PI, -0.0246, Math.PI]}
          >
            <mesh
              name="Body1562"
              castShadow
              receiveShadow
              geometry={nodes.Body1562.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
          <group
            name="E_(1)1002"
            position={[69.3058, -95.7664, -22.6073]}
            rotation={[0, 0.0246, 0]}
          >
            <mesh
              name="Body1559"
              castShadow
              receiveShadow
              geometry={nodes.Body1559.geometry}
              material={materials["Steel - Satin"]}
              scale={10}
            />
          </group>
        </group>
        <group
          name="REV-41-1308_v11"
          position={[168.8358, -121.9629, -268.2977]}
          rotation={[1.3963, -Math.PI / 3, Math.PI]}
        />
        <group
          name="REV-41-1319_v11"
          position={[197.8358, -9.9516, -291.6024]}
          rotation={[1.3963, -1.5706, 0]}
        />
        <group
          name="REV-41-1331_v11"
          position={[-18.9411, -338, -245.4411]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body1563"
            castShadow
            receiveShadow
            geometry={nodes.Body1563.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="REV-41-1332_v11"
          position={[115, -317.258, -216.75]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <group
          name="REV-41-1335_v11"
          position={[-16.9411, -370, -245.4411]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body1564"
            castShadow
            receiveShadow
            geometry={nodes.Body1564.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="REV-41-1337_v1_(2)1"
          position={[114.5, -363.5, -212]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <group
          name="REV-41-1349_v12"
          position={[-13.9411, -338, -245.4411]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            name="Body1555"
            castShadow
            receiveShadow
            geometry={nodes.Body1555.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="REV-41-1354_v1_(1)1"
          position={[99.5858, -41.1945, -171.8619]}
          rotation={[0.9599, 0.5787, 0]}
        >
          <mesh
            name="Body2011"
            castShadow
            receiveShadow
            geometry={nodes.Body2011.geometry}
            material={materials["Plastic - Glossy (Black)"]}
            scale={10}
          />
          <mesh
            name="Body1335"
            castShadow
            receiveShadow
            geometry={nodes.Body1335.geometry}
            material={materials["ABS (White)"]}
            scale={10}
          />
        </group>
        <group
          name="REV-41-1354_v1_(1)2"
          position={[-108.2535, -35.8137, -173.4323]}
          rotation={[0.9599, 0.6981, 0]}
        >
          <mesh
            name="Body2012"
            castShadow
            receiveShadow
            geometry={nodes.Body2012.geometry}
            material={materials["Plastic - Glossy (Black)"]}
            scale={10}
          />
          <mesh
            name="Body1336"
            castShadow
            receiveShadow
            geometry={nodes.Body1336.geometry}
            material={materials["ABS (White)"]}
            scale={10}
          />
        </group>
        <group
          name="REV-41-1363_v1_(2)2"
          position={[-78.6911, -338, -245.4411]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        >
          <mesh
            name="Body1557"
            castShadow
            receiveShadow
            geometry={nodes.Body1557.geometry}
            material={materials["Opaque(202,209,238)"]}
            scale={10}
          />
        </group>
        <group
          name="REV-41-1430_v11"
          position={[152.8899, -96.2466, -265.2166]}
          rotation={[-1.7453, Math.PI / 3, Math.PI / 2]}
        />
        <group
          name="REV-41-1432_v11"
          position={[170.25, -392.2033, -213.5391]}
          rotation={[-0.1745, 0, 0]}
        />
        <group
          name="roata_roby_v11"
          position={[60, -450.5016, -26.0615]}
          rotation={[0, 1.5705, 0]}
        >
          <mesh
            name="Body3012"
            castShadow
            receiveShadow
            geometry={nodes.Body3012.geometry}
            material={materials["Plastic - Matte (Gray)"]}
            scale={10}
          />
        </group>
        <group
          name="roata_roby_v12"
          position={[30, -450.5016, -26.0615]}
          rotation={[0, 1.5705, 0]}
        >
          <mesh
            name="Body3013"
            castShadow
            receiveShadow
            geometry={nodes.Body3013.geometry}
            material={materials["Plastic - Matte (Gray)"]}
            scale={10}
          />
        </group>
        <group
          name="roata_roby_v13"
          position={[0, -450.5016, -26.0615]}
          rotation={[0, 1.5705, 0]}
        >
          <mesh
            name="Body3014"
            castShadow
            receiveShadow
            geometry={nodes.Body3014.geometry}
            material={materials["Plastic - Matte (Gray)"]}
            scale={10}
          />
        </group>
        <group
          name="roata_roby_v14"
          position={[-30, -450.5016, -26.0615]}
          rotation={[0, 1.5705, 0]}
        >
          <mesh
            name="Body3015"
            castShadow
            receiveShadow
            geometry={nodes.Body3015.geometry}
            material={materials["Plastic - Matte (Gray)"]}
            scale={10}
          />
        </group>
        <group
          name="roata_roby_v15"
          position={[-60, -450.5016, -26.0615]}
          rotation={[0, 1.5705, 0]}
        >
          <mesh
            name="Body3016"
            castShadow
            receiveShadow
            geometry={nodes.Body3016.geometry}
            material={materials["Plastic - Matte (Gray)"]}
            scale={10}
          />
        </group>
        <group
          name="servo_V_v21"
          position={[118.0433, -20.5585, -320.6009]}
          rotation={[-Math.PI, 0, -Math.PI]}
        >
          <group
            name="A1"
            position={[-79.7925, 16.9222, -61.0133]}
            rotation={[-1.3717, 0, 0]}
          />
          <group
            name="B1"
            position={[-79.7925, 16.9222, -61.0133]}
            rotation={[-1.3717, 0, 0]}
          />
          <group
            name="C1"
            position={[-79.7925, 16.9222, -61.0133]}
            rotation={[-1.3717, 0, 0]}
          />
          <group
            name="D1"
            position={[-79.7925, 20.823, -29.5197]}
            rotation={[1.7699, 0, Math.PI]}
          />
          <group
            name="E1"
            position={[-79.7925, 16.9222, -61.0133]}
            rotation={[-1.3717, 0, 0]}
          />
          <group
            name="REV-41-1363_v11"
            position={[-79.7925, 17.7376, -14.2278]}
            rotation={[0.1991, 0, 0]}
          />
        </group>
        <group
          name="skelet_absortie_v101"
          position={[-74, -268.7526, -81.3747]}
          rotation={[0, 0, Math.PI]}
        >
          <mesh
            name="Body1345"
            castShadow
            receiveShadow
            geometry={nodes.Body1345.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
          <mesh
            name="Body7007"
            castShadow
            receiveShadow
            geometry={nodes.Body7007.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
          <mesh
            name="Body1346"
            castShadow
            receiveShadow
            geometry={nodes.Body1346.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
          <mesh
            name="Body1347"
            castShadow
            receiveShadow
            geometry={nodes.Body1347.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
          <mesh
            name="Body1348"
            castShadow
            receiveShadow
            geometry={nodes.Body1348.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
          <mesh
            name="Body16007"
            castShadow
            receiveShadow
            geometry={nodes.Body16007.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
          <mesh
            name="Body19007"
            castShadow
            receiveShadow
            geometry={nodes.Body19007.geometry}
            material={materials["Steel - Satin"]}
            scale={10}
          />
        </group>
        <group
          name="suport_camera_v31"
          position={[0, 21.5, -42]}
          rotation={[0, 0, Math.PI]}
        >
          <mesh
            name="SUPORT_CAMERA"
            castShadow
            receiveShadow
            geometry={nodes.SUPORT_CAMERA.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
        </group>
        <group
          name="suport_touch_suport_touch_v11"
          position={[188.5082, -395, -179.343]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <group
          name="TRAVERSA_ROBOT_Component1_v11"
          position={[1.0589, -342, -165.4411]}
        >
          <mesh
            name="Body1373"
            castShadow
            receiveShadow
            geometry={nodes.Body1373.geometry}
            material={materials["Plastic - Matte (Black)"]}
            scale={10}
          />
        </group>
        <mesh
          name="Body11008"
          castShadow
          receiveShadow
          geometry={nodes.Body11008.geometry}
          material={materials["Plastic - Matte (Black)"]}
          scale={10}
        />
        <mesh
          name="Body9008"
          castShadow
          receiveShadow
          geometry={nodes.Body9008.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          name="Body10009"
          castShadow
          receiveShadow
          geometry={nodes.Body10009.geometry}
          material={materials["Plastic - Matte (Black)"]}
          scale={10}
        />
        <mesh
          name="Body7009"
          castShadow
          receiveShadow
          geometry={nodes.Body7009.geometry}
          material={materials["Plastic - Matte (Black)"]}
          scale={10}
        />
        <mesh
          name="Body6008"
          castShadow
          receiveShadow
          geometry={nodes.Body6008.geometry}
          material={materials["Plastic - Matte (Black)"]}
          scale={10}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/robotii/sez3.glb");