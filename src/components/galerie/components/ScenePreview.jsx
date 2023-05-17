import React from 'react'
import { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'

import Room1 from './scenesComponents/Room1'
import Room2 from './scenesComponents/Room2'
import Room3 from './scenesComponents/Room3'
import Room4 from './scenesComponents/Room4'
import Room5 from './scenesComponents/Room5'
import Room6 from './scenesComponents/Room6'
import CustomEnv from './CustomEnv'
import CustomEffect from './CustomEffect'


function ScenePreview({ sezon }) {
    return (
        <Canvas style={{ height: '80vh' }}>
            {/* <Environment
                blur={.1}
                background={true}
                files={'./studio_maro.hdr'}
            /> */}
            {/* <CustomEnv /> */}
            {/* <CustomEffect /> */}
            {/* <PerspectiveCamera
                fov={70}
                position={[0, 0, 0]}
            /> */}
            {/* <OrbitControls /> */}
            <group position={[2.6, -1.1, 3.2]} rotation={[0, -Math.PI / 3.3, 0]}>
                <Suspense fallback={null}>
                    {
                        sezon === 1 ? <Room1 /> :
                            sezon === 2 ? <Room2 /> :
                                sezon === 3 ? <Room3 /> :
                                    sezon === 4 ? <Room4 /> :
                                        sezon === 5 ? <Room5 /> :
                                            sezon === 6 ? <Room6 /> : null
                    }
                </Suspense>
            </group>
        </Canvas>
    )
}

export default ScenePreview