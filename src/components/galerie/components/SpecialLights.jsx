import { useHelper } from '@react-three/drei'
import React from 'react'
import { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { SpotLightHelper, Vector3 } from 'three'

function SpecialLights() {
    const lightProps = {
        color: 'aqua',
        intensity: 1.2,
        position: [0, 8, 1],
        distance: 5,
        angle: Math.PI / 3,
        penumbra: 0.5,
        decay: 0.5,
    }
    const mainLightRef = useRef()
    useHelper(mainLightRef, SpotLightHelper, 'red')

    return (
        <>
            <ambientLight color="#ffffff" intensity={.2}/>
            {/* <spotLight ref={mainLightRef} castShadow {...lightProps} /> */}
        </>
    )
}

export default SpecialLights