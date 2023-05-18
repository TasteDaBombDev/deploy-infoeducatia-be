import { Environment, OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "react-three-fiber";

function CustomEnv({cameraPosition, camerRotation}) {

    // useFrame((frame)=>{
    //     frame.camera
    // })

    useThree((state)=>{
        
    })

    return (
        <Suspense fallback={null}>
            <Environment
                blur={.1}
                preset={"sunset"}
                background={true}
                // files={'./studio_maro.hdr'}
            />
            {/* <ambientLight position={[0, 6, 0]} intensity={.4} /> */}
            {/* <directionalLight
                position={[5, 10, 10]}
                castShadow
                intensity={1.1}
            /> */}
            <PerspectiveCamera
                makeDefault
                position={cameraPosition}
                quaternion={camerRotation}
                rotation={[1, 1, 1]}
                fov={50}
            />
            <OrbitControls enablePan={false} enableRotate={false} enableZoom={false}/>
            {/* <OrbitControls target={[0, -3.5, -0.5]} zoomSpeed={0.5} /> */}
            {/* <gridHelper args={[100, 100]} /> */}
            {/* <OrbitControls target={[0, 0.15, 0]} zoomSpeed={.7}/> */}
        </Suspense>
    );
}

export default CustomEnv;