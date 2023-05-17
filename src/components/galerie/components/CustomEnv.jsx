import { Environment, OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";

function CustomEnv() {

    return (
        <Suspense fallback={null && console.log("se rupe environ")}>
            <Environment
                blur={.1}
                // preset={"sunset"}
                background={true}
                files={'./studio_maro.hdr'}
            />
            <ambientLight position={[0, 6, 0]} intensity={.4} />
            <directionalLight
                position={[5, 10, 10]}
                castShadow
                intensity={1.1}
            />
            <PerspectiveCamera
                makeDefault
                position={[10, 2, 11]}
                fov={70}
            />
            <OrbitControls enablePan={false} enableRotate={false} enableZoom={false}/>
            {/* <OrbitControls target={[0, -3.5, -0.5]} zoomSpeed={0.5} /> */}
            {/* <gridHelper args={[100, 100]} /> */}
            {/* <OrbitControls target={[0, 0.15, 0]} zoomSpeed={.7}/> */}
        </Suspense>
    );
}

export default CustomEnv;