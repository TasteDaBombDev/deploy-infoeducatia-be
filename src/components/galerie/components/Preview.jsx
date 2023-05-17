import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import Unu from './robotii/Unu'
import Doi from './robotii/Doi'
import Trei from './robotii/Trei'
import Patru from './robotii/Patru'
import Cinci from './robotii/Cinci'
import Sase from './robotii/Sase'

function Preview({ sezon }) {

    return (
        <Canvas className='canvas'>
            <Suspense fallback={null}>
                <Environment
                    blur={.1}
                    // preset={"sunset"}
                    background={true}
                    files={'./studio_maro.hdr'}
                />
                <ambientLight position={[0, 6, 0]} intensity={.4} />
                <PerspectiveCamera
                    makeDefault
                    position={[0, 50, 70]}
                    fov={60}
                />
                <OrbitControls target={[0, -3.5, -0.5]}
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={true}
                    autoRotate={true}
                    autoRotateSpeed={2}
                />
                {/* <gridHelper args={[100, 100]} /> */}
                {/* <OrbitControls target={[0, 0.15, 0]} zoomSpeed={.7}/> */}
            </Suspense>
            {/* <OrbitControls /> */}
            <Suspense fallback={null}>
                {
                    sezon === 1 ? <Unu /> :
                        sezon === 2 ? <Doi /> :
                            sezon === 3 ? <Trei /> :
                                sezon === 4 ? <Patru /> :
                                    sezon === 5 ? <Cinci /> :
                                        sezon === 6 ? <Sase /> : null
                }
            </Suspense>
        </Canvas>
    )
}

export default Preview