import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useBox, useCylinder } from '@react-three/cannon';
import { Quaternion, Vector3 } from 'three';
import DoamneIartaCeUrmeaza from '../Robot/DoamneIartaCeUrmeaza';
import { useState } from 'react';
import { useFrame } from 'react-three-fiber';

export default function Cone({ position, props }) {

  const { nodes, materials } = useGLTF('/cone.glb');

  //nush de unde a aparut asta dar imi este frica sa il sterg
  materials.da = 1;

  const [onJunction, setOnJunction] = useState(false);
  const [picked, setPicked] = useState(false);
  const [homeJunction, setHomeJunction] = useState(0);
  const [homeHeight, setHomeHeight] = useState(0);
  const [fallHeight, setFallHeight] = useState(0)

  const [coneBodyCylinder, coneAPICylinder] = useCylinder(
    () => ({
      args: [.71, 1.4, 3.4, 32, 1, true],
      // args: [1, 1, 3.4, 32, 1, true],
      mass: 1,
      position: position,
      type: 'Dynamic'
    }),
    useRef(null)
  );

  //CEVA CONTROLLER SA STEA PE JUNCTION
  useFrame(() => {
    if (!onJunction) {
      let conePosition = new Vector3(0, 0, 0)
      conePosition.setFromMatrixPosition(coneBodyCylinder.current.matrixWorld);

      for (let i = 1; i <= DoamneIartaCeUrmeaza.junctionCount && !onJunction; i++) {
        let junctionPosition = new Vector3(0, 0, 0)
        junctionPosition.copy(DoamneIartaCeUrmeaza.junctions[i])

        let xDiff = Math.abs(conePosition.x - junctionPosition.x);
        let yDiff = conePosition.y - DoamneIartaCeUrmeaza.junctionsHeight[i];
        let zDiff = Math.abs(conePosition.z - junctionPosition.z);

        if (xDiff <= 1 && zDiff <= 1 && yDiff > 0.5 && yDiff < 3) {
          // coneAPICylinder.position.copy(DoamneIartaCeUrmeaza.junctions[i]);
          // coneAPICylinder.position.copy(junctionPosition)
          // DoamneIartaCeUrmeaza.conesCount++;
          // DoamneIartaCeUrmeaza.conesPerJunction[i]++;
          // DoamneIartaCeUrmeaza.conesOnJunction[DoamneIartaCeUrmeaza.conesCount] = junctionPosition
          if (isNaN(DoamneIartaCeUrmeaza.conesInJunction[i])) {
            DoamneIartaCeUrmeaza.conesInJunction[i] = 1
            setHomeHeight(1);
          }
          else {
            DoamneIartaCeUrmeaza.conesInJunction[i]++;
            setHomeHeight(1 * DoamneIartaCeUrmeaza.conesInJunction[i]);
          }

          setFallHeight(DoamneIartaCeUrmeaza.junctionsHeight[i])
          setHomeJunction(i);
          setOnJunction(true);

          if (DoamneIartaCeUrmeaza.junctionsHeight[i] == DoamneIartaCeUrmeaza.high)
            DoamneIartaCeUrmeaza.puntaj[2]++
          else if (DoamneIartaCeUrmeaza.junctionsHeight[i] == DoamneIartaCeUrmeaza.med)
            DoamneIartaCeUrmeaza.puntaj[1]++
          else
            DoamneIartaCeUrmeaza.puntaj[0]++

          coneAPICylinder.collisionResponse.set(false);
          break;
        }
      }
    }
    else if (onJunction) {
      let homePosition = new Vector3(0, 0, 0);
      homePosition.copy(DoamneIartaCeUrmeaza.junctions[homeJunction]);
      // homePosition.add(new Vector3(0, homeHeight, 0))
      coneAPICylinder.position.copy(homePosition)

      // coneAPICylinder.position.copy(DoamneIartaCeUrmeaza.conesOnJunction[homeJunction]);
      // coneAPICylinder.position.copy(toStay)
      coneAPICylinder.quaternion.set(0, 0, 0, 1)
      coneAPICylinder.angularVelocity.set(0, 0, 0);
      coneAPICylinder.velocity.set(0, 0, 0);
    }

  })

  //CEVA CONTROLLER PENTRU CAND SE APROPIE BRATUL
  useFrame((state) => {
    if (!onJunction) {
      let bratPosition = new Vector3(0, 0, 0);
      bratPosition.setFromMatrixPosition(DoamneIartaCeUrmeaza.bratBody.current.matrixWorld)

      let bratQuaternion = new Quaternion(0, 0, 0, 0);
      bratQuaternion.setFromRotationMatrix(DoamneIartaCeUrmeaza.bratBody.current.matrixWorld);

      let conePosition = new Vector3(0, 0, 0)
      conePosition.setFromMatrixPosition(coneBodyCylinder.current.matrixWorld);

      let dist = conePosition.distanceTo(bratPosition)

      if (dist <= 2 && conePosition.y >= 1.5 && !DoamneIartaCeUrmeaza.controls.f) {
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

  useEffect(() => {

    const keyDown = (e) => {
      if (e.key === "r") {
        setOnJunction(false);
        coneAPICylinder.collisionResponse.set(true);

        DoamneIartaCeUrmeaza.conesInJunction.fill(0)
        DoamneIartaCeUrmeaza.puntaj.fill(0)

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

  return (
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
  )
}

useGLTF.preload('/cone.glb')
