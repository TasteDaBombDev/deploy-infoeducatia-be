import { Bloom, EffectComposer } from '@react-three/postprocessing'
import React, { useRef } from 'react'
import { useFrame, useThree } from 'react-three-fiber'
import { MathUtils, Vector3 } from 'three'

export function CustomEffect() {
    return (
        <EffectComposer
            multisampling={8}
        >
            <Bloom
                kernelSize={3}
                luminanceThreshold={0}
                luminanceSmoothing={0.1}
                intensity={0.3}
            />
        </EffectComposer>
    )
}

export function Rig({ children }) {
    const ref = useRef()
    const vec = new Vector3()
    const { camera, mouse } = useThree()
    useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * 0.2, 0, 3.5), 0.005)
        ref.current.position.lerp(vec.set(mouse.x * 0.1, mouse.y * 0.05, 0), 0.1)
        ref.current.rotation.y = MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
    })
    return <group ref={ref}>{children}</group>
}

// export default CustomEffect