import React from 'react'
import { Canvas } from "react-three-fiber";
import { Suspense } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import Sase from './components/Sase'
import SingleRoom from './components/SingleRoom';
import Overlay from './Overlay';
import CustomEffect from './components/CustomEffect';
import CustomEnv from './components/CustomEnv'
import SpecialLights from './components/SpecialLights';
import Loader from './components/Loader';


function SingleScene() {

    return (
        <>
            <Overlay />
            {/* <Loader /> */}
            <Suspense fallback={<Loader />}>
                <Canvas style={{
                    height: '100vh',
                    width: '100vw',
                }}>
                    <CustomEnv />
                    <SingleRoom />
                    <Sase position={[-1.65, 4.45, -1.5]} />
                </Canvas>
            </Suspense>
        </>
    )
}

export default SingleScene