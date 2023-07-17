import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox, useCylinder } from '@react-three/cannon';
import { Quaternion, Vector3 } from 'three';
import ExternalData from '../Robot/ExternalData';
import { useState } from 'react';
import { useFrame } from 'react-three-fiber';
import Score from '../../Misc/Score';

export default function Cone({ position, id, socket, props }) {

  const { nodes, materials } = useGLTF('/cone.glb');

  materials.da = 1;

  // ID UL PENTRU FIECARE CON REPREZINTA NUMARUL INDEX DIN
  // VECTORUL CU CONURI IN SERVER 
  // also nota: doar conul cu id-ul 1 detine un socket cat sa trimita datele

  const [onJunction, setOnJunction] = useState(false);
  const [homeJunction, setHomeJunction] = useState(0);
  const [homeHeight, setHomeHeight] = useState(0);
  const [fallHeight, setFallHeight] = useState(0)


  const [coneBodyCylinder, coneAPICylinder] = useCylinder(
    () => ({
      args: [.71, 1.4, 3.4, 6, 1, true],
      // args: [1, 1, 3.4, 32, 1, true],
      mass: 1,
      position: position,
      type: 'Dynamic'
    }),
    useRef(null)
  );

  // useEffect(() => {
  //   socket.on('conesReload', (stream) => {
  //     // return;
  //     if (localStorage.getItem('horia_id') != stream.substring(652, 665)) {
  //       let data = (JSON.parse(stream))[id]
  //       let position = new Vector3(data.position.x, data.position.y, data.position.z)
  //       let host = sessionStorage.getItem('host')
  //       let me_pose = new Vector3(0, 0, 0)
  //       let other_pose = new Vector3(0, 0, 0)
  //       if(host == 'true')
  //       {
  //         me_pose = ExternalData.robotStates[1].robotBody.current.position
  //         console.log(me_pose)
  //       }
  //     }
  //   })

  // }, [])

  //CEVA CONTROLLER SA STEA PE JUNCTION
  useFrame(() => {
    Object.keys(ExternalData.robotStates).forEach((key) => {
    })
    if (!onJunction) {
      let conePosition = new Vector3(0, 0, 0)
      conePosition.setFromMatrixPosition(coneBodyCylinder.current.matrixWorld);

      for (let i = 1; i <= ExternalData.junctionCount && !onJunction; i++) {
        let junctionPosition = new Vector3(0, 0, 0)
        junctionPosition.copy(ExternalData.junctions[i])

        let xDiff = Math.abs(conePosition.x - junctionPosition.x);
        let yDiff = conePosition.y - ExternalData.junctionsHeight[i];
        let zDiff = Math.abs(conePosition.z - junctionPosition.z);

        if (xDiff <= 1 && zDiff <= 1 && yDiff > 0.5 && yDiff < 3) {
          // coneAPICylinder.position.copy(ExternalData.junctions[i]);
          // coneAPICylinder.position.copy(junctionPosition)
          // ExternalData.conesCount++;
          // ExternalData.conesPerJunction[i]++;
          // ExternalData.conesOnJunction[ExternalData.conesCount] = junctionPosition
          if (isNaN(ExternalData.conesInJunction[i])) {
            ExternalData.conesInJunction[i] = 1
            setHomeHeight(1);
          }
          else {
            ExternalData.conesInJunction[i]++;
            setHomeHeight(1 * ExternalData.conesInJunction[i]);
          }

          setFallHeight(ExternalData.junctionsHeight[i])
          setHomeJunction(i);
          setOnJunction(true);

          if (ExternalData.junctionsHeight[i] === ExternalData.high)
            ExternalData.puntaj[2]++
          else if (ExternalData.junctionsHeight[i] === ExternalData.med)
            ExternalData.puntaj[1]++
          else
            ExternalData.puntaj[0]++

          coneAPICylinder.collisionResponse.set(false);
          break;
        }
      }
    }
    else if (onJunction) {
      let homePosition = new Vector3(0, 0, 0);
      homePosition.copy(ExternalData.junctions[homeJunction]);
      homePosition.add(new Vector3(0, homeHeight, 0))
      coneAPICylinder.position.copy(homePosition)

      // coneAPICylinder.position.copy(ExternalData.conesOnJunction[homeJunction]);
      // coneAPICylinder.position.copy(toStay)
      coneAPICylinder.quaternion.set(0, 0, 0, 1)
      coneAPICylinder.angularVelocity.set(0, 0, 0);
      coneAPICylinder.velocity.set(0, 0, 0);
    }

  })

  //CEVA CONTROLLER PENTRU CAND SE APROPIE BRATUL
  useFrame((state) => {
    Object.keys(ExternalData.robotStates).forEach((playerIndex) => {
      if (playerIndex != 0)
        if (!onJunction) {
          let bratPosition = new Vector3(0, 0, 0);
          bratPosition.setFromMatrixPosition(ExternalData.robotStates[playerIndex].bratBody.current.matrixWorld)

          let bratQuaternion = new Quaternion(0, 0, 0, 0);
          bratQuaternion.setFromRotationMatrix(ExternalData.robotStates[playerIndex].bratBody.current.matrixWorld);

          let conePosition = new Vector3(0, 0, 0)
          conePosition.setFromMatrixPosition(coneBodyCylinder.current.matrixWorld);

          let dist = conePosition.distanceTo(bratPosition)

          if (dist <= 2 && conePosition.y >= 1.5 && !ExternalData.robotStates[playerIndex].controls.f) {
            // coneAPICylinder.position.copy(bratPosition)
            // coneAPICylinder.quaternion.copy()

            let carrierPosition = new Vector3(0, 0, 0);
            // carrierPosition.applyQuaternion(bratQuaternion);

            // let finalCarryPosition = carrierPosition.clone().add(bratPosition);
            // coneAPICylinder.position.copy(finalCarryPosition);
            // coneAPICylinder.quaternion.copy(bratQuaternion);
            coneAPICylinder.position.copy(bratPosition.add(new Vector3(0, 1.6, 0)))

            coneAPICylinder.velocity.set(0, 0, 0);
            coneAPICylinder.angularVelocity.set(0, 0, 0);
            coneAPICylinder.quaternion.copy(new Quaternion(0, 0, 0, 1))
          }
        }
    })
  })

  useEffect(() => {

    const keyDown = (e) => {
      if (e.key === "r") {
        setOnJunction(false);
        coneAPICylinder.collisionResponse.set(true);

        ExternalData.conesInJunction.fill(0)
        ExternalData.puntaj.fill(0)

        coneAPICylinder.position.set(position[0], position[1], position[2]);
        coneAPICylinder.velocity.set(0, 0, 0);
        coneAPICylinder.angularVelocity.set(0, 0, 0);
        coneAPICylinder.rotation.set(0, 0, 0);
      }
    }

    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
    };

  }, [coneAPICylinder.angularVelocity, coneAPICylinder.rotation, coneAPICylinder.velocity, coneAPICylinder.position, position]);

  //CONTROLLER PENTRU A ADAUGA FIECARE CON IN EXTERNAL DATA
  //pentru a trimite datele de la conuri sa faca sync
  // useFrame(() => {
  //   // return; // DISABLED
  //   let quaternion = coneBodyCylinder.current.quaternion
  //   delete quaternion._onChangeCallback
  //   ExternalData.conesPositions = {
  //     ...ExternalData.conesPositions,
  //     [id]: {
  //       position: coneBodyCylinder.current.position,
  //       quaternion: quaternion
  //     }
  //   }

  // })

  return (
    <>
      <group ref={coneBodyCylinder}>
        {/* <mesh position={[0, (3.4 / 2) - 1.5, 0]}>
        <cylinderGeometry args={[2, 2, 3.4, 32, 1, true]} attach="geometry" />
        <meshStandardMaterial attach={"material"} color={0x000000} />
      </mesh> */}
        <group {...props} dispose={null} scale={[0.028, 0.028, 0.028]} position={[0, -1.55, 0]}>
          <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
            <meshStandardMaterial attach={"material"} color={0x373cdb} />
          </mesh>
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/cone.glb')
