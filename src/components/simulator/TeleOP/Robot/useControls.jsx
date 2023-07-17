import { useEffect, useState } from "react";
import ExternalData from "./ExternalData";
// import useGamepads from "./useGamepads";
import { useFrame } from "react-three-fiber";
import { MathUtils } from "three";

export const useControls = (vehicleAPI, chassisAPI, playerIndex, socket, socketWorker) => {
    const viteza = 600;
    const turnViteza = 680;
    // const breke = 20;

    const multiTurn = 1.8;
    const multiRotate = 9;

    let [controls, setControls] = useState({});

    const [onKeyboard, setKeyboard] = useState(true)
    const [isController, setController] = useState(false)

    const rKeyEvent = {
        "key": "r",
        "keyCode": 82,
        "which": 82,
        "code": "KeyR",
        "location": 0,
        "altKey": false,
        "ctrlKey": false,
        "metaKey": false,
        "shiftKey": false,
        "repeat": false
    }

    const mode = sessionStorage.getItem('mode')
    const host = sessionStorage.getItem('host')

    //reset field on socket request
    useEffect(() => {
        if (socket != undefined)
            socket.on('fieldReset', (stream) => {
                console.log("reset on socket request")
                window.dispatchEvent(new KeyboardEvent('keydown', rKeyEvent));
                window.dispatchEvent(new KeyboardEvent('keyup', rKeyEvent));
            })
    }, [])

    const keyboardMap = {
        1: {
            'forward': 'w',
            'backward': 's',
            'left': 'a',
            'right': 'd',
            'strafeLeft': 'q',
            'strafeRight': 'e',
            'rotateLeft': 'arrowleft',
            'rotateRight': 'arrowright'
        },
        2: {
            'forward': 'w',
            'backward': 's',
            'left': 'a',
            'right': 'd',
            'strafeLeft': 'q',
            'strafeRight': 'e',
            'rotateLeft': 'arrowleft',
            'rotateRight': 'arrowright'
        }
    }

    const getControlsFor = (command) => {
        let key = ''
        let cv = Object.entries(keyboardMap[playerIndex])
        cv.forEach((object) => {
            if (object[0] == command && key == '')
                key = object[1]
            // console.log(object[1])
        })
        return key
    }

    const pressForPlayer = (command) => {
        let result = ''
        let key = getControlsFor(command);
        let controlEntries = Object.entries(controls)
        controlEntries.forEach((object) => {
            if (object[0] == key && result == '')
                result = object[1]
            // console.log(object[1])
            // return object[1]
        })
        return result
    }

    useEffect(() => {
        const foo = (e) => {
            if (e.key.toLowerCase() == 'k') {
                setKeyboard(!onKeyboard)
                ExternalData.gamepadControlled = !ExternalData.gamepadControlled
                for (let i = 0; i < 4; i++) {
                    vehicleAPI.setSteeringValue(0, i);

                    vehicleAPI.applyEngineForce(0, 0);
                    vehicleAPI.applyEngineForce(0, 1);
                    vehicleAPI.applyEngineForce(0, 2);
                    vehicleAPI.applyEngineForce(0, 3);
                }
            }
        }
        window.addEventListener('keydown', foo)
        return () => { window.removeEventListener('keydown', foo) }
    })

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
        vehicleAPI.applyEngineForce(delta * viteza, 0);
        vehicleAPI.applyEngineForce(delta * viteza, 1);
        vehicleAPI.applyEngineForce(delta * viteza, 2);
        vehicleAPI.applyEngineForce(delta * viteza, 3);
    }

    useEffect(() => {
        // if (!onKeyboard) {
        //     return;
        // }
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

        // if (!onKeyboard) { return; }

        if (!vehicleAPI || !chassisAPI) { return; }

        if (mode == 'multi') {
            if (host == 'true' && playerIndex == 2)
                return;
            // console.log('sencondul nu ia power')
            if (host == 'false' && playerIndex == 1)
                return;
            // console.log('primul nu ia control')
        }

        if ((pressForPlayer('forward') || pressForPlayer('backward')) && (pressForPlayer('left') || pressForPlayer('right'))) {
            // stopBrake();
            if (pressForPlayer('forward'))
                bagaViteza(turnViteza);
            else if (pressForPlayer('backward'))
                bagaViteza(-turnViteza);
        }
        else if (pressForPlayer('forward')) {
            // stopBrake();
            bagaViteza(viteza);
        } else if (pressForPlayer('backward')) {
            // stopBrake();
            bagaViteza(-viteza);
            // brake();
        } else if (onKeyboard)
            bagaViteza(0);

        if (pressForPlayer('left')) {
            vehicleAPI.setSteeringValue(0.35 * multiTurn, 2);
            vehicleAPI.setSteeringValue(0.35 * multiTurn, 3);
            vehicleAPI.setSteeringValue(-0.1 * multiTurn, 0);
            vehicleAPI.setSteeringValue(-0.1 * multiTurn, 1);
        } else if (pressForPlayer('right')) {
            vehicleAPI.setSteeringValue(-0.35 * multiTurn, 2);
            vehicleAPI.setSteeringValue(-0.35 * multiTurn, 3);
            vehicleAPI.setSteeringValue(0.1 * multiTurn, 0);
            vehicleAPI.setSteeringValue(0.1 * multiTurn, 1);
        } else if (isController) {
            if (Math.abs(navigator.getGamepads()[ExternalData.gamepadAssignment[playerIndex]].axes[0]) <= 0.1) {
                for (let i = 0; i < 4; i++) {
                    vehicleAPI.setSteeringValue(0, i);
                }
            }
        }
        else
            for (let i = 0; i < 4; i++) {
                vehicleAPI.setSteeringValue(0, i);
            }

        if (pressForPlayer('strafeLeft')) {
            vehicleAPI.setSteeringValue(Math.PI / 2, 2);
            vehicleAPI.setSteeringValue(Math.PI / 2, 3);
            vehicleAPI.setSteeringValue(Math.PI / 2, 0);
            vehicleAPI.setSteeringValue(Math.PI / 2, 1);
            bagaViteza(viteza)
        } else if (pressForPlayer('strafeRight')) {
            vehicleAPI.setSteeringValue(Math.PI / 2, 2);
            vehicleAPI.setSteeringValue(Math.PI / 2, 3);
            vehicleAPI.setSteeringValue(Math.PI / 2, 0);
            vehicleAPI.setSteeringValue(Math.PI / 2, 1);
            bagaViteza(-viteza)

        }

        if (pressForPlayer('rotateLeft')) {
            vehicleAPI.applyEngineForce(-viteza * multiRotate, 0);
            vehicleAPI.applyEngineForce(viteza * multiRotate, 1);
            vehicleAPI.applyEngineForce(-viteza * multiRotate, 2);
            vehicleAPI.applyEngineForce(viteza * multiRotate, 3);
        } else if (pressForPlayer('rotateRight')) {
            vehicleAPI.applyEngineForce(viteza * multiRotate, 0);
            vehicleAPI.applyEngineForce(-viteza * multiRotate, 1);
            vehicleAPI.applyEngineForce(viteza * multiRotate, 2);
            vehicleAPI.applyEngineForce(-viteza * multiRotate, 3);
        }

        if (controls.r) {
            try {
                socketWorker.postMessage({ event: 'fieldReset' })
            }
            catch (e) { }
            chassisAPI.position.set(...ExternalData.robotStates[playerIndex].startPose);
            chassisAPI.velocity.set(0, 0, 0);
            chassisAPI.angularVelocity.set(0, 0, 0);
            chassisAPI.rotation.set(0, 0, 0);
        }

        // ExternalData.controls = controls;
        ExternalData.robotStates[playerIndex].controls = controls;

    }, [controls, vehicleAPI, chassisAPI]);


    // SUPORT PENTRU GAMEPADS
    // const [gamepads, setGamepads] = useState({})
    // useGamepads((gamepads) => setGamepads(gamepads))

    const isGamepadConnected = () => { return (isNaN(navigator.getGamepads()[ExternalData.gamepadAssignment[playerIndex]])) }

    const buttonValue = (gamepad, buttonIndex) => { return (gamepad.buttons[buttonIndex].value) }
    const setControlState = (key, value) =>
        setControls((controls) => ({
            ...controls,
            [key]: value
        }));
    const mapButton2Controls = (gamepad, buttonIndex, controlKey) => {
        if (buttonValue(gamepad, buttonIndex)) {
            setControlState(controlKey, true)
        }
        else {
            setControlState(controlKey, false)
        }
    }

    useFrame((frame) => {
        if (isGamepadConnected() && !onKeyboard) {
            setController(true)
            let gamepad = navigator.getGamepads()[ExternalData.gamepadAssignment[playerIndex]]
            mapButton2Controls(gamepad, 0, 'f')
            mapButton2Controls(gamepad, 1, 'arrowright')
            mapButton2Controls(gamepad, 2, 'arrowleft')
            mapButton2Controls(gamepad, 3, 'r')

            mapButton2Controls(gamepad, 12, 'w')
            mapButton2Controls(gamepad, 13, 's')
            mapButton2Controls(gamepad, 14, 'a')
            mapButton2Controls(gamepad, 15, 'd')

            mapButton2Controls(gamepad, 4, 'q')
            mapButton2Controls(gamepad, 5, 'e')

            if (Math.abs(parseFloat(gamepad.axes[0].toPrecision(2))) > 0.05) {
                variableSteer(parseFloat(-gamepad.axes[0].toPrecision(2)))
            }

            // if(parseFloat(gamepad.buttons[7]).toPrecision(1) > 0.1)
            let lt = parseFloat(gamepad.buttons[6].value.toPrecision(2))
            let rt = parseFloat(gamepad.buttons[7].value.toPrecision(2))
            if (lt > 0.1)
                variableAccelerate(-lt)
            else if (rt >= 0.1)
                variableAccelerate(rt)
            else
                variableAccelerate(0)

        }
    })

    // HARTA PENTRU PS4 CONTROLLER DUAL SHOCK
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


    //         // if (gamepads[0].axes[0] != 0 && (gamepads[0].buttons[4].value || gamepads[0].buttons[4].value))
    //         // if (!(controls.a && controls.d && controls.q && controls.e))
    //         //     variableSteer(gamepads[0].axes[0])
    //     }

    // })

    return controls;

};