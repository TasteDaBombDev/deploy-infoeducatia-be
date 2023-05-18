import React, { useEffect, useState } from 'react'
import { Suspense } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'

import Room1 from './scenesComponents/Room1'
import Room2 from './scenesComponents/Room2'
import Room3 from './scenesComponents/Room3'
import Room4 from './scenesComponents/Room4'
import Room5 from './scenesComponents/Room5'
import Room6 from './scenesComponents/Room6'
import CustomEnv from './CustomEnv'
import CustomEffect from './CustomEffect'
import { useRef } from 'react'
import { MathUtils, Quaternion, Vector3 } from 'three'


function ScenePreview({ sezon }) {

    const [cameraPosition, setCameraPosition] = useState([0, 0, 0])
    const [cameraRotation, setCameraRotation] = useState(new Quaternion(0, 0, 0, 1))

    useEffect(() => {
        if (sezon == 1) {
            setCameraPosition([2, 1, 0])
            setCameraRotation([0, 0, 0])
        }
        else if (sezon === 2) {
            setCameraPosition([0, 0, 0])
            setCameraRotation([Math.PI / 2, 0, 0])
        }
        else if (sezon === 3) {
            setCameraPosition([5, 2, -2])
            setCameraRotation([0, 0, Math.PI / 2])
        }
        else if (sezon === 4) {
            setCameraPosition([0, 0, 0])
            setCameraRotation([0, 0, 0])
        }
        else if (sezon === 5) {
            setCameraPosition([0, 0, 0])
            setCameraRotation([0, 0, 0])
        }
        else if (sezon === 6) {
            setCameraPosition([0, 0, 0])
            setCameraRotation([0, 0, 0])
        }
    }, [])

    return (
        <Canvas style={{ height: '80vh' }}>
            <CustomEnv
                cameraPosition={cameraPosition}
                camerRotation={cameraRotation}
            />
            {/* <CustomEffect /> */}
            {/* <PerspectiveCamera
                fov={70}
                position={[0, 0, 0]}
            /> */}
            {/* <OrbitControls /> */}
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
        </Canvas>
    )
}

export default ScenePreview