import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { Physics } from "@react-three/cannon";
import Scena from "./Scena";
import "../canvas.scss"
import Overlay from "../Misc/Overlay";
import Score from "../Misc/Score";
import { io } from "socket.io-client";

function Assembly() {

    var socket = io('ws://localhost:3005', { autoConnect: false });

    const mode = sessionStorage.getItem('mode')
    const hosting = sessionStorage.getItem('host')


    useState(() => {
        if (mode == 'multi') { socket.connect() }
    }, [])


    socket.on('connect', () => {
        console.log("mamconectatamam")
        socket.emit('justConnect', { player_id: localStorage.getItem('horia_id') })
    })

    return (
        <>
            <Score />
            <Canvas className="canvas">
                {/* <Stats showPanel={2} /> */}
                {/* <SplitScreen /> */}
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