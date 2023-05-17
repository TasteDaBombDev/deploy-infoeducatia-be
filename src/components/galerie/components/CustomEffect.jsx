import { Bloom, EffectComposer } from '@react-three/postprocessing'
import React from 'react'

function CustomEffect() {
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

export default CustomEffect