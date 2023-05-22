import { Environment, Lightformer, OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "react-three-fiber";
import { MathUtils, Quaternion, Vector3 } from "three";
import { useState } from "react";
import { useEffect } from "react";

function CustomEnv() {

    const [STATE, setState] = useState(1)

    const [ghost_object, setGhost] = useState(new Vector3(0, 0, 0))

    // CONSIDER A FI FOARTE INEFICIENT PROCESUL DE A DETERMINA
    // COORDONATELE PERFECTE PENTRU CAMERA SI SUNT SIGUR
    // CA NU AR TREBUI SA FACA ASTA DAR DEJA AM VAZUT
    // DOUA LIBRARII CU CEVA CINEMATOGRAFIC SI IMI ESTE
    // FRICA
    const CAMERA_STATE = {
        // camera simplu
        1: {
            camera_position: new Vector3(-1, 4.7, -0.2),
            camera_target: new Vector3(-2.5, 4.7, -2),
            camera_fov: 55
        },
        // zoom pe robot
        2: {
            camera_position: new Vector3(-1.5, 4.65, -1),
            camera_target: new Vector3(-1.85, 4.5, -1.5),
            camera_fov: 70
        },
        // pe sasiu laterala
        3: {
            camera_position: new Vector3(-1.5, 4.5, -1.2),
            camera_target: new Vector3(-1.85, 4.5, -1.5),
            camera_fov: 60
        },
        // pe brat
        4: {
            camera_position: new Vector3(-1.65, 4.58, -1.28),
            camera_target: new Vector3(-1.73, 4.48, -1.5),
            camera_fov: 55
        },
        // pe lift
        5: {
            camera_position: new Vector3(-1.72, 4.72, -1.48),
            camera_target: new Vector3(-1.64, 4.58, -1.6),
            camera_fov: 60
        },
        //detectie video
        6: {
            camera_position: new Vector3(-1.65, 4.58, -1.28),
            camera_target: new Vector3(-1.73, 4.48, -1.5),
            camera_fov: 55
        },
        //threads
        7: {
            camera_position: new Vector3(-1.6, 4.66, -1.45),
            camera_target: new Vector3(-1.73, 4.55, -1.48),
            camera_fov: 55
        },
        8: {
            camera_position: new Vector3(-1.65, 4.7, -1.6),
            camera_target: new Vector3(-1.65, 4.55, -1.5),
            camera_fov: 55
        },
    }
    useEffect(() => {
        ghost_object.copy(CAMERA_STATE[1].camera_target)
    }, [])

    // SCROLL STATE CONTROLLER
    // NU MAI REZIST
    useFrame((frame) => {
        // const scroll = window.scrollY
        const scroll = document.getElementById('gal-overlay').scrollTop
        if (scroll <= 540)
            setState(1)
        else if (scroll <= 1200)
            setState(2)
        else if (scroll <= 1950)
            setState(3)
        else if (scroll <= 2700)
            setState(4)
        else if (scroll <= 3390)
            setState(5)
        else if (scroll <= 4040)
            setState(6)
        else if (scroll <= 4765)
            setState(7)
        else
            setState(8)
        // let item = document.getElementById('gal-overlay').scrollTop
        console.log(scroll)
    })

    // CAMERA STATE UPDATER
    // NU MAI STIU A CATA INCERCARE ESTE DAR NU MAI POT
    // THO FUNCTIA LERP E FAINA
    useFrame((state) => {
        let position = new Vector3(0, 0, 0);
        // let quaternion = new Quaternion(0, 0, 0, 1)
        let target = new Vector3(0, 0, 0)

        position.copy(CAMERA_STATE[STATE].camera_position)
        target.copy(CAMERA_STATE[STATE].camera_target)
        let camera_position = position.clone();
        // quaternion.copy(CAMERA_STATE[STATE].camera_rotation)
        // let position = CAMERA_STATE[STATE].camera_position
        // let quaternion = CAMERA_STATE[STATE].camera_rotation

        let calc = new Vector3(0, 0, 0)
        calc.copy(ghost_object)
        calc.lerp(CAMERA_STATE[STATE].camera_target, 0.03)
        setGhost(calc)
        state.camera.lookAt(ghost_object)

        state.camera.position.lerp(camera_position, .05)
        state.camera.fov = MathUtils.lerp(state.camera.fov, CAMERA_STATE[STATE].camera_fov, 0.05)

        // state.camera.position.copy(camera_position);
        // state.camera.lookAt(target)
        // state.camera.fov = CAMERA_STATE[STATE].camera_fov
        state.camera.updateProjectionMatrix()
    })

    useFrame(({ mouse, camera }) => {
        // camera.position.x = MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03)
        //     camera.position.y = MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01)
        // camera.position.z = MathUtils.lerp(camera.position.z, Math.max(4, Math.abs(mouse.x * mouse.y * 8)), 0.01)
        //     camera.rotation.y = MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001)
    })

    return (
        <Suspense fallback={null}>
            <Environment
                blur={.15}
                // preset={"sunset"}
                background={true}
                files={'./studio_maro.hdr'}
            // files={'./low_light.hdr'}
            >
                {/* <Lightformer
                    form={'rect'}
                    intensity={1}
                    color={'white'}
                    // scale={[10, 1]}
                    target={[0, 0, 0]}
                /> */}
            </Environment>
            <ambientLight position={[0, 12, 0]} intensity={.4} />
            {/* <directionalLight
                position={[2, 12, 5]}
                castShadow
                receiveShadow
                intensity={.5}
            /> */}
            {/* <PerspectiveCamera
                makeDefault
                fov={80}
            /> */}
            {/* <OrbitControls /> */}
            {/* <OrbitControls target={[0, -3.5, -0.5]} zoomSpeed={0.5} /> */}
            {/* <gridHelper args={[100, 100]} /> */}
            {/* <OrbitControls target={[0, 0.15, 0]} zoomSpeed={.7}/> */}
        </Suspense>
    );
}

export default CustomEnv;