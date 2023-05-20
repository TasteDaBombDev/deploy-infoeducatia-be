import React from 'react'
// import { Canvas } from 'react-three-fiber'
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import CustomEnv from './components/CustomEnv'
import { OrbitControls, softShadows } from '@react-three/drei'
import { Suspense } from 'react'
import Sase from './components/robotii/Sase'

import AOS from "aos";
import "aos/dist/aos.css";
import Room1 from './components/scenesComponents/Room1';
import SingleRoom from './components/scenesComponents/SingleRoom';
import { MathUtils, Quaternion } from 'three';
import Overlay from './Overlay';
import { CustomEffect } from './components/CustomEffect';
import SpecialLights from './components/SpecialLights';


function SingleScene() {

    return (
        <>
            <Overlay />
            <Canvas camera={{}} style={{
                height: '100vh',
                width: '100vw',
                // position: 'absolute'
            }}>
                <CustomEnv />
                {/* <CustomEffect /> */}
                {/* <SpecialLights /> */}
                {/* <mesh position={[-2, 4.7, -2.1]}>
                    <boxGeometry attach={"geometry"} args={[.1, .1, .1]} />
                    <meshPhongMaterial attach={"material"} color={'red'}/>
                </mesh> */}
                <Suspense fallback={null}>
                    <SingleRoom />
                </Suspense>
                <Suspense fallback={null}>
                    <Sase position={[-1.65, 4.45, -1.5]} />
                </Suspense>
            </Canvas>
        </>
    )
}

export default SingleScene