import { useEffect, useState } from "react";
import DoamneIartaCeUrmeaza from "./DoamneIartaCeUrmeaza";
import useGamepads from "./useGamepads";
import { useFrame } from "react-three-fiber";


export const useControls = (vehicleAPI, chassisAPI) => {
    const viteza = 600;
    const turnViteza = 680;
    // const breke = 20;

    const multiTurn = 1.8;
    const multiRotate = 9;

    let [controls, setControls] = useState({});

    // const [onKeyboard, setKeyboard] = useState(true)

    // useEffect(() => {
    //     const foo = (e) => {
    //         if (e.key.toLowerCase() == 'k')
    //             setKeyboard(!onKeyboard)
    //     }
    //     window.addEventListener('keydown', foo)
    //     return () => { window.removeEventListener('keydown', foo) }
    // })

    const variableSteer = (delta) => {
        let fl = 0.35 * multiTurn * delta;
        let fr = 0.35 * multiTurn * delta;
        let rl = -0.1 * multiTurn * delta;
        let rr = -0.1 * multiTurn * delta;

        vehicleAPI.setSteeringValue(fl, 2);
        vehicleAPI.setSteeringValue(fr, 3);
        vehicleAPI.setSteeringValue(rl, 0);
        vehicleAPI.setSteeringValue(rr, 1);
    }

    const variableAccelerate = (delta) => {
        vehicleAPI.applyEngineForce(delta, 0);
        vehicleAPI.applyEngineForce(delta, 1);
        vehicleAPI.applyEngineForce(delta, 2);
        vehicleAPI.applyEngineForce(delta, 3);
    }

    useEffect(() => {

        const keyDown = (e) => {
            setControls((controls) => ({
                ...controls,
                [e.key.toLowerCase()]: true
            }));
        }

        const keyUp = (e) => {
            setControls((controls) => ({
                ...controls,
                [e.key.toLowerCase()]: false
            }));
        }

        window.addEventListener("keydown", keyDown);
        window.addEventListener("keyup", keyUp);
        return () => {
            window.removeEventListener("keydown", keyDown);
            window.removeEventListener("keyup", keyUp);
        };

    }, []);

    useEffect(() => {
        const bagaViteza = (speed) => {
            {
                vehicleAPI.applyEngineForce(speed, 0);
                vehicleAPI.applyEngineForce(speed, 1);
                vehicleAPI.applyEngineForce(speed, 2);
                vehicleAPI.applyEngineForce(speed, 3);
            }
        };

        // if ( || !onKeyboard) {
        //     return;
        // }

        if (!vehicleAPI || !chassisAPI) {
            return;
        }

        if ((controls.w || controls.s) && (controls.a || controls.d)) {
            // stopBrake();
            if (controls.w)
                bagaViteza(turnViteza);
            else if (controls.s)
                bagaViteza(-turnViteza);
        }
        else if (controls.w) {
            // stopBrake();
            bagaViteza(viteza);
        } else if (controls.s) {
            // stopBrake();
            bagaViteza(-viteza);
        } else {
            bagaViteza(0);
            // brake();
        }

        if (controls.a) {
            vehicleAPI.setSteeringValue(0.35 * multiTurn, 2);
            vehicleAPI.setSteeringValue(0.35 * multiTurn, 3);
            vehicleAPI.setSteeringValue(-0.1 * multiTurn, 0);
            vehicleAPI.setSteeringValue(-0.1 * multiTurn, 1);
        } else if (controls.d) {
            vehicleAPI.setSteeringValue(-0.35 * multiTurn, 2);
            vehicleAPI.setSteeringValue(-0.35 * multiTurn, 3);
            vehicleAPI.setSteeringValue(0.1 * multiTurn, 0);
            vehicleAPI.setSteeringValue(0.1 * multiTurn, 1);
        } else {
            for (let i = 0; i < 4; i++) {
                vehicleAPI.setSteeringValue(0, i);
            }
        }


        if (controls.q) {
            vehicleAPI.setSteeringValue(Math.PI / 2, 2);
            vehicleAPI.setSteeringValue(Math.PI / 2, 3);
            vehicleAPI.setSteeringValue(Math.PI / 2, 0);
            vehicleAPI.setSteeringValue(Math.PI / 2, 1);
            bagaViteza(viteza)
        } else if (controls.e) {
            vehicleAPI.setSteeringValue(Math.PI / 2, 2);
            vehicleAPI.setSteeringValue(Math.PI / 2, 3);
            vehicleAPI.setSteeringValue(Math.PI / 2, 0);
            vehicleAPI.setSteeringValue(Math.PI / 2, 1);
            bagaViteza(-viteza)

        }

        if (controls.arrowleft) {
            vehicleAPI.applyEngineForce(-viteza * multiRotate, 0);
            vehicleAPI.applyEngineForce(viteza * multiRotate, 1);
            vehicleAPI.applyEngineForce(-viteza * multiRotate, 2);
            vehicleAPI.applyEngineForce(viteza * multiRotate, 3);
        } else if (controls.arrowright) {
            vehicleAPI.applyEngineForce(viteza * multiRotate, 0);
            vehicleAPI.applyEngineForce(-viteza * multiRotate, 1);
            vehicleAPI.applyEngineForce(viteza * multiRotate, 2);
            vehicleAPI.applyEngineForce(-viteza * multiRotate, 3);
        }

        if (controls.r) {
            chassisAPI.position.set(-22.5, 5, 38);
            chassisAPI.velocity.set(0, 0, 0);
            chassisAPI.angularVelocity.set(0, 0, 0);
            chassisAPI.rotation.set(0, 0, 0);
        }

        DoamneIartaCeUrmeaza.controls = controls;

    }, [controls, vehicleAPI, chassisAPI]);


    // SUPORT PENTRU GAMEPADS, DACA AJUNG SA FAC MULTIPLAYER MA ANGAJEZ
    // const [gamepads, setGamepads] = useState({})
    // useGamepads((gamepads) => setGamepads(gamepads))

    // HARTA SFANTA PENTRU PS4 CONTROLLER DUAL SHOCK
    //
    //  BUTOANE
    //
    // 0: A
    // 1: B
    // 2: X
    // 3: Y
    // 4: LEFT BUMPER
    // 5: RIGHT BUMPER
    // 6: LEFT TRIGGER 0 - 1 (FLOAT)
    // 7: RIGHT TRIGGER 0 - 1 (FLOAT)
    // 8: SHARE (LEFT START-MENU)
    // 9: OPTIONS (RIGHT START-MENU)
    // 10: LEFT JOYSTICK PRESS
    // 11: RIGHT JOYSTICK PRESS
    // 12: DPAD UP
    // 13: DPAD DOWN
    // 14: DPAD LEFT
    // 15: DPAD RIGHT
    // 16: BOTTOM MENU (PS4-ICON)
    // 17: TOUCH PAD PRESS
    //
    //  AXE
    //
    // 0: LEFT JOYSTICK X (FLOAT) LEFT -1 RIGHT 1
    // 1: LEFT JOYSTICK Y (FLOAT) UP -1 DOWN 1
    // 2: RIGHT JOYSTICK X (FLOAT) LEFT -1 RIGHT 1
    // 3: RIGHT JOYSTICK Y (FLOAT) UP -1 DOWN 1

    // IN PUNCTUL ASTA IMI ESTE FRICA SA FOLOSESC FOR
    // PENTRU A TRECE PRIN TOATE MAI REPEDE DE FRICA
    // TIMPULUI DE EXECUTARE SI ACTIONARE
    //
    // IN PUNCTUL ASTA CRED CA SUNT FORTAT SA FOLOSESC FOR
    // useFrame(() => {
    //     // console.log(gamepads)
    //     if (!onKeyboard)
    //         return;
    //     if (Object.keys(gamepads).length) {
    //         //DROP F - A BUTTON
    //         if (gamepads[0].buttons[0].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['f']: true
    //             }));
    //         else if (!gamepads[0].buttons[0].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['f']: false
    //             }));

    //         //ROTIRI BUMPERE
    //         if (gamepads[0].buttons[4].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['q']: true
    //             }));
    //         else if (!gamepads[0].buttons[4].value &&
    //             !(controls.a || controls.d))
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['q']: false
    //             }));

    //         //X BUTTON 
    //         if (gamepads[0].buttons[2].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['q']: true
    //             }));
    //         else if (!gamepads[0].buttons[2].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['q']: false
    //             }));

    //         //B BUTTON DE PULA SA MA TRECI STRADA 
    //         if (gamepads[0].buttons[1].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['e']: true
    //             }));
    //         else if (!gamepads[0].buttons[1].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['e']: false
    //             }));

    //         //LEFT BUMPER 
    //         if (gamepads[0].buttons[4].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['arrowleft']: true
    //             }));
    //         else if (!gamepads[0].buttons[4].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['arrowleft']: false
    //             }));

    //         //RIGHT BUMPER 
    //         if (gamepads[0].buttons[5].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['arrowright']: true
    //             }));
    //         else if (!gamepads[0].buttons[5].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['arrowright']: false
    //             }));

    //         //DPAD LEFT 
    //         if (gamepads[0].buttons[14].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['a']: true
    //             }));
    //         else if (!gamepads[0].buttons[14].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['a']: false
    //             }));

    //         //DPAD RIGHT 
    //         if (gamepads[0].buttons[15].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['d']: true
    //             }));
    //         else if (!gamepads[0].buttons[15].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['d']: false
    //             }));

    //         //DPAD UP 

    //         if (gamepads[0].buttons[12].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['w']: true
    //             }));
    //         else if (!gamepads[0].buttons[12].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['w']: false
    //             }));

    //         //DPAD DOWN 

    //         if (gamepads[0].buttons[13].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['s']: true
    //             }));
    //         else if (!gamepads[0].buttons[13].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['s']: false
    //             }))

    //         //OPTIONS 
    //         if (gamepads[0].buttons[9].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['r']: true
    //             }));
    //         else if (!gamepads[0].buttons[9].value)
    //             setControls((controls) => ({
    //                 ...controls,
    //                 ['r']: false
    //             }))

    //         // if (gamepads[0].axes[0] != 0 && (gamepads[0].buttons[4].value || gamepads[0].buttons[4].value))
    //         // if (!(controls.a && controls.d && controls.q && controls.e))
    //         //     variableSteer(gamepads[0].axes[0])
    //     }

    // })

    return controls;

};