import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import Scena from "./Scena";
import "../canvas.scss"
import Overlay from "../Overlay";

function Assembly() {

    useEffect(()=>{
        var foot = document.getElementById("footer-id");
        foot.style.display = "none";
    }, [])

    return (
            <>
        <Canvas className="canvas">
            <Physics
                broadphase={'SAP'}
                gravity={[0, -40, 0]}
            >
                <Scena />
            </Physics>
        </Canvas>
        <Overlay />
        </>
    );
}

export default Assembly;