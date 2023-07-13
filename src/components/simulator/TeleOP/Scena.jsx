import React, { Suspense, useEffect, useState } from "react";
import Scene from "./Environment/Scene";
import Field from "./Field/Field";
import Lokione from "./Robot/Lokione";
import { useScroll } from "@react-three/drei";

function Scena({ socket }) {

    const mode = sessionStorage.getItem('mode')
    const host = sessionStorage.getItem('host')

    const [loading, setLoading] = useState(0)

    // PENTRU LOADING 0 ESTE SINGLEPLAYER
    // LOADING 1 TU ESTI HOST
    // LOADING 2 ESTI GUEST
    // pentru ca ca trebuie sa incarc ultimul robot cel controlat de mine
    // astfel incat camera sa ramana pe el

    useEffect(() => {

    }, [])

    return (
        // <Canvas className="canvas">
        <Suspense fallback={null}>
            {/* <Physics
                    gravity={[0, -9.8, 0]}
                    broadphase="SAP"
                > */}
            <Field />
            <Scene />
            {/* <Lokione player={1} /> */}
            {
                (mode == 'multi') ?
                    (host == 'true') ?
                        <>
                            <Lokione player={2} socket={socket}/>
                            <Lokione player={1} socket={socket}/>
                        </>
                        :
                        <>
                            <Lokione player={1} socket={socket}/>
                            <Lokione player={2} socket={socket}/>
                        </>
                    :
                    <Lokione player={1} />
            }

        </Suspense>
        /* </Physics> * /
        /* </Canvas> */
    );
}

export default Scena;