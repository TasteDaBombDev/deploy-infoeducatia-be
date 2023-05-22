import React, { Suspense } from "react";
import Scene from "./Environment/Scene";
import Field from "./Field/Field";
import Lokione from "./Robot/Lokione";

function Scena() {

    return (
        // <Canvas className="canvas">
        <Suspense fallback={null}>
            {/* <Physics
                    gravity={[0, -9.8, 0]}
                    broadphase="SAP"
                > */}
            <Field />
            <Scene />
            {/* <Lokione player={2} /> */}
            <Lokione player={1} />
        </Suspense>
        /* </Physics> */
        /* </Canvas> */
    );
}

export default Scena;