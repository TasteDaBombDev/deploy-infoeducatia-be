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

    var role = undefined;

    useState(() => {
        if (mode == 'multi') {
            try {
                socket.connect()
            } catch (e) {
                console.log(`[MAIN:SOCKET]: ${e}`)
            }
        }
    }, [])

    socket.on('connect', () => {
        console.log("server connect")
        // seteaza ce caz load a robotilor in funct de camera
        if (hosting == 'true')
            role = 'host'
        else
            role = 'join'

        // post server pentru login cu id si rol
        socket.emit('justConnect', JSON.stringify({
            player_id: localStorage.getItem('horia_id'),
            'role': role
        }))

        // console.log("vezi ca reload")
        // socket.emit('info', "bag update fals")
        // // just in case initializeaza pozitiile
        // console.log({
        //     player_id: localStorage.getItem('horia_id'),
        //     brat_height: 'brat_height',
        //     brat_chassis: 'brat_chassis',
        //     body_chassis: 'body_chassis',
        // })
        // socket.emit('updateData', JSON.stringify({
        //     player_id: localStorage.getItem('horia_id'),
        //     'brat_height': 'brat_height',
        //     'brat_chassis': 'brat_chassis',
        //     'body_chassis': 'body_chassis',
        // }))
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
                    <Scena socket={socket} />
                </Physics>
            </Canvas>
            <Overlay />
        </>
    );
}

export default Assembly;