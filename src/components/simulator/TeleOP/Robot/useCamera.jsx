import React, { useEffect, useState } from 'react'
import ExternalData from './ExternalData';

const useCamera = () => {

    // #########################
    // #### NU ESTE FOLOSIT ####
    // #########################

    const [controls, setControls] = useState({})

    const cameras = {
        1: new Vector3(47, 40, 0),
        2: new Vector3(47, 40, 47),
        3: new Vector3(0, 40, 47),
        4: new Vector3(-47, 40, 47),
        5: new Vector3(-47, 40, 0),
        6: new Vector3(-47, 40, -47),
        7: new Vector3(0, 40, -47),
        8: new Vector3(47, 40, -47),
        9: new Vector3(0, 69, 0),
    }

    const [cameraController, setCamController] = useState(false);

    useEffect(()=>{
        setControls(ExternalData.controls)
    }, [])

    useFrame((state) => {

        setControls(ExternalData.controls);

        if (controls[0])
            setCamController(false);
        for (let k = 1; k <= 9; k++)
            if (controls[k])
                setCamController(true);

        if (cameraController) {
            let position = new Vector3(0, 0, 0);
            let quaternion = new Quaternion(0, 0, 0, 0);
            let wDir = new Vector3(0, 0, 10);
            wDir.applyQuaternion(quaternion);
            wDir.normalize();

            for (let k = 1; k <= 9; k++)
                if (controls[k]) {
                    var cameraPosition = position.clone().add(wDir.clone().multiplyScalar(1).add(cameras[k]));
                    state.camera.position.copy(cameraPosition);
                }

        } else {

            let position = new Vector3(0, 0, 0);
            position.setFromMatrixPosition(chassisBody.current.matrixWorld);
            // chassisAPI.position.set(vehicle.current.matrixWorld);

            let quaternion = new Quaternion(0, 0, 0, 0);
            quaternion.setFromRotationMatrix(chassisBody.current.matrixWorld);

            let wDir = new Vector3(0, 0, 10);
            // let wDir = new Quaternion(0, 0, 0, 0);
            wDir.applyQuaternion(quaternion);
            wDir.normalize();

            let cameraPosition = position.clone().add(wDir.clone().multiplyScalar(20).add(new Vector3(0, 32, 0)));

            // wDir.add(new Vector3(0, 0.2, 0));
            state.camera.position.copy(cameraPosition);
            state.camera.lookAt(position);
        }

    });

}

export default useCamera