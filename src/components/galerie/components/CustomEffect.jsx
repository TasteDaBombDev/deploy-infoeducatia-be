import { Bloom, EffectComposer } from '@react-three/postprocessing'
import React, { useRef } from 'react'
import { useFrame, useThree } from 'react-three-fiber'
import { MathUtils, Vector3 } from 'three'

export default function CustomEffect() {
    return (
        <EffectComposer
            // multisampling={8}
        >
            <Bloom
                kernelSize={2}
                luminanceThreshold={0.4}
                luminanceSmoothing={0.1}
                height={480}
                intensity={0.3}
            />
        </EffectComposer>
    )
}

// export default CustomEffect