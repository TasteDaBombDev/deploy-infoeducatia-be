import React from 'react'
import { Canvas } from "react-three-fiber";
import { Suspense } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import Sase from './components/robotii/Sase'
import SingleRoom from './components/scenesComponents/SingleRoom';
import Overlay from './Overlay';
import { CustomEffect } from './components/CustomEffect';
import CustomEnv from './components/CustomEnv'
import SpecialLights from './components/SpecialLights';


function SingleScene() {

    return (
        <>
            <Overlay />
            <Canvas style={{
                height: '100vh',
                width: '100vw',
                // position: 'absolute'
            }}>
                <CustomEnv />
                <CustomEffect />
                {/* <SpecialLights /> */}
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