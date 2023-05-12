import { OrbitControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import Unu from './robotii/Unu'

function Preview() {

    return (
        <Canvas className='canvas'>
            <OrbitControls />
            <Suspense fallback={null}>
                <Unu />
            </Suspense>
        </Canvas>
    )
}

export default Preview