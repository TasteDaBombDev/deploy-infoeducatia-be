import React, { Suspense } from "react";
import Scene from "./Environment/Scene";
import Field from "./Field/Field";
import Lokione from "./Robot/Lokione";

function Scena() {

    // const mode = sessionStorage.getItem('mode')

    return (
        // <Canvas className="canvas">
        <Suspense fallback={null}>
            {/* <Physics
                    gravity={[0, -9.8, 0]}
                    broadphase="SAP"
                > */}
            <Field />
            <Scene />
            <Lokione player={1} />
            {/* {mode == 'multi' ? <Lokione player={2} /> : null} */}
        </Suspense>
        /* </Physics> */
        /* </Canvas> */
    );
}

export default Scena;