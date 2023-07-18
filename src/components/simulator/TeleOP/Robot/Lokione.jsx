import React, { Suspense, useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Vector3, Quaternion, Object3D } from "three";
import { useFrame } from "react-three-fiber";
import { useBox, useRaycastVehicle } from "@react-three/cannon";

import { useWheels } from "./useWheels";
import { useControls } from "./useControls";
import { WheelDebug } from "./WheelDebug";
import Brat from "./Brat";

import ExternalData from "./ExternalData";
import { createSearchParams } from "react-router-dom";

export default function Lokione({ player, socket }, props) {
  const { nodes, materials } = useGLTF("/robotNou.glb");

  // create socket worker and default functions
  const [socketWorker, setSocketWorker] = useState(undefined)
  useEffect(() => {
    if ((player == 1 && sessionStorage.getItem('host') == 'true') ||
      (player == 2 && sessionStorage.getItem('host') == 'false'))
      setSocketWorker(new Worker('socketWorker.js'))
  }, [])
  useEffect(() => {
    if (socketWorker) {
      socketWorker.onmessage = (e) => { console.log(`[WORKER]: ${e.data}`) }
      socketWorker.onerror = (e) => { socketWorker.terminate() }
    }
  }, [socketWorker])
  // var [socketWorker, setWorker] = useState(new Worker("socketWorker.js"));

  //player positions
  var position = [-22.5, 2.5, 38];
  if (player == 2)
    position = [22.5, 2.5, 38];

  // robot sizes
  const width = 6;
  const height = 2; //.84
  const front = 2.8;
  const wheelRadius = 1.1;

  const [dataSend, setDataSend] = useState(false)

  // poz camerelor pe robot
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
  };

  const [bratPosition, setBratPosition] = useState(-4.5);
  // const [bratApuca, setBratApuca] = useState(true);
  const bratIncrease = 0.2;

  const [cameraController, setCamController] = useState(false);

  var robotPosition, robotRotation;

  const [controls, setControls] = useState({});

  const chassisBodyArgs = [width, height, front * 2];
  const [chassisBody, chassisAPI] = useBox(
    () => ({
      args: chassisBodyArgs,
      mass: 150,
      position,
    }),
    useRef(null)
  );

  const [bratBody, bratAPI] = useBox(
    () => ({
      // args: [0.3, 0.3, 2, 32],
      args: [2, 1, 2],
      position: [0, 0, 0],
      type: "Static",
    }),
    useRef(null)
  );

  //ad player to active gamepads
  // useEffect(() => { ExternalData.gamepadAssignment[player] = undefined }, [])

  useEffect(() => {
    // let l_robotPosition = new Vector3(0, 0, 0);
    // robotPosition.setFromMatrixPosition(chassisBody.current.matrixWorld);
    ExternalData.robotStates[player] = {
      ...ExternalData.robotStates[player],
      'startPose': position,
      'robotBody': chassisBody,
      'robotApi': chassisAPI,
      'bratBody': bratBody,
      'bratApi': bratAPI,
      'robotPosition': chassisBody.current.position
    }
  }, [chassisBody])
  useFrame(() => {
    let l_robotPosition = new Vector3(0, 0, 0);
    l_robotPosition.setFromMatrixPosition(chassisBody.current.matrixWorld);
    ExternalData.robotStates[player] = {
      ...ExternalData.robotStates[player],
      'startPose': position,
      'robotBody': chassisBody,
      'robotApi': chassisAPI,
      'bratBody': bratBody,
      'bratApi': bratAPI,
      'robotPosition': l_robotPosition
    }
  })

  useEffect(() => {
    const keyDown = (e) => {
      setControls((controls) => ({
        ...controls,
        [e.key.toLowerCase()]: true,
      }));
    };

    const keyUp = (e) => {
      setControls((controls) => ({
        ...controls,
        [e.key.toLowerCase()]: false,
      }));
    };

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);


    ExternalData.robotStates[player] = {
      ...ExternalData.robotStates[player],
      'controls': controls
    }

    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, [controls]);

  const isGamepadConnected = () => { return (isNaN(navigator.getGamepads()[ExternalData.gamepadAssignment[player]])) }
  useFrame(() => {
    if (isGamepadConnected()) {
      let gamepad = navigator.getGamepads()[ExternalData.gamepadAssignment[player]]
      if (gamepad.axes[3] < -0.1 && bratPosition <= 12)
        setBratPosition(bratPosition + (-gamepad.axes[3] / 7))
      if (gamepad.axes[3] > 0.1 && bratPosition >= -6)
        setBratPosition(bratPosition - (gamepad.axes[3] / 7))
    }
  })

  useEffect(() => {
    // ExternalData.robotStates[player].controls = controls;
    ExternalData.robotStates[player] = {
      ...ExternalData.robotStates[player],
      'controls': controls
    }

    // partea asta controleaza bratul din sageati
    if (sessionStorage.getItem('mode') == 'multi' || sessionStorage.getItem('mode') === null)
      if (sessionStorage.getItem('mode') === null || (sessionStorage.getItem('host') == 'true' && player == 1) || (sessionStorage.getItem('host') == 'false' && player == 2) || sessionStorage.getItem('mode') == 'single' ) {
        if (controls.arrowup)
          if (bratPosition <= 12) {
            setBratPosition(bratPosition + bratIncrease);

          }

        if (controls.arrowdown)
          if (bratPosition >= -6) {
            setBratPosition(bratPosition - bratIncrease);
          }
      }


    if (controls[0]) setCamController(false);
    for (let k = 1; k <= 9; k++) if (controls[k]) setCamController(true);
  }, [controls]);

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

  const [vehicle, vehicleAPI] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef(null)
  );

  useControls(vehicleAPI, chassisAPI, player, socket, socketWorker);

  // const isGamepadConnected = () => { return (isNaN(navigator.getGamepads()[0])) }
  // useFrame((frame) => {
  //   if(isGamepadConnected())
  //   {
  //     let gamepad = navigator.getGamepads()[0]
  //     let buttons = []
  //     for(let i=0; i<=17; i++)
  //       buttons.push(gamepad.buttons[i].value)
  //     console.log(buttons)
  //   }
  // })

  // const [gamepads, setGamepads] = useState({})
  // useGamepads((gamepads) => setGamepads(gamepads))
  // useEffect(() => {
  //   if (Object.keys(gamepads).length == 0)
  //     return;
  //   let buttons = []
  //   for (let i = 0; i <= 17; i++)
  //     buttons.push(gamepads[0].buttons[i].value)
  //   console.log(buttons)
  // }, [gamepads])

  //POSIBIL CONTROLLER PENTRU COLIZIUNEA BRATULUI DACA EXISTA
  useFrame((state) => {
    robotPosition = new Vector3(0, 0, 0);
    robotPosition.setFromMatrixPosition(chassisBody.current.matrixWorld);
    robotRotation = new Quaternion(0, 0, 0, 0);
    robotRotation.setFromRotationMatrix(chassisBody.current.matrixWorld);

    let holiad = bratPosition + 2.7;
    let vec = new Vector3(0, holiad, -4.6);

    vec.applyQuaternion(robotRotation);

    let bratPose = vec.clone().add(robotPosition);

    bratAPI.position.copy(bratPose);
  });

  // AICI CONTROLLER UL PENTRU CAMERA 
  useFrame((state) => {
    // console.log(ExternalData.junctions)
    // if(player == 2)
    //   return;

    if (cameraController) {
      let position = new Vector3(0, 0, 0);
      let quaternion = new Quaternion(0, 0, 0, 0);
      let wDir = new Vector3(0, 0, 10);
      wDir.applyQuaternion(quaternion);
      wDir.normalize();

      for (let k = 1; k <= 9; k++)
        if (controls[k]) {
          var cameraPosition = position
            .clone()
            .add(wDir.clone().multiplyScalar(1).add(cameras[k]));
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

      let cameraPosition = position
        .clone()
        .add(wDir.clone().multiplyScalar(20).add(new Vector3(0, 32, 0)));

      // wDir.add(new Vector3(0, 0.2, 0));
      state.camera.position.copy(cameraPosition);
      state.camera.lookAt(position);
    }
  });

  // pentru multiplayer
  // daca este multi si nu e controled atunci copiaza datele primite in asta
  // useFrame(() => {
  //   socket.emit('info', "bag update real")
  //   socket.emit('updateData', JSON.stringify({
  //     'player_id': localStorage.getItem('horia_id'),
  //     'brat_height': bratPosition,
  //     'brat_chassis': bratBody,
  //     'body_chassis': chassisBody
  //   }))
  // }) 

  // useEffect(() => {
  // socket.emit('info', "bag update real")
  // console.log("am trimis date reale")
  // console.log(JSON.stringify([bratPosition, bratBody, chassisBody]))
  // socket.emit('updateData', JSON.stringify({
  //   'player_id': localStorage.getItem('horia_id'),
  //   'brat_height': bratPosition,
  //   'brat_chassis': bratBody,
  //   'body_chassis': chassisBody
  // }))
  // console.log("trimit")
  // setTimeout(()=>{setDataSend(!dataSend)}, 5000)

  //   async function sendUpdateData() {
  //     socket.emit('updateData', JSON.stringify({
  //       'player_id': localStorage.getItem('horia_id'),
  //       'brat_height': bratPosition,
  //       'brat_chassis': bratBody,
  //       'body_chassis': chassisBody
  //     }))
  //     console.log("am trimis")
  //   }
  //   setTimeout(()=>{sendUpdateData(); setDataSend(!dataSend)}, 5000)
  // }, [dataSend])

  //main function
  // const sendUpdateData = (bratPosition, bratBody, chassisBody) => {
  //   importScripts("https://cdn.socket.io/4.6.0/socket.io.min.js")
  //   const worker_socket = io("ws://localhost:3005")
  //   worker_socket.emit('updateData', JSON.stringify({
  //     'player_id': localStorage.getItem('horia_id'),
  //     'brat_height': bratPosition,
  //     'brat_chassis': bratBody,
  //     'body_chassis': chassisBody
  //   }))
  // }
  // const [updateDataWorker] = useWorker(sendUpdateData);
  // const runSendWorker = async (bratPosition, bratBody, chassisBody) => { updateDataWorker(bratPosition, bratBody, chassisBody) }

  //dubla trei workers

  // async function makeSocketData() {
  //   return (JSON.stringify({
  //     event: 'updateData', data: {
  //       'brat_height': bratPosition,
  //       'brat_chassis': bratBody,
  //       'robot_chassis': chassisBody
  //     }
  //   }))
  // }      

  // dubla 4 cu procesare optimizata si alte lucruri
  useEffect(() => {
    if (sessionStorage.getItem('mode') == 'multi' && socketWorker && vehicle.current != undefined) {
      if ((player == 1 && sessionStorage.getItem('host') == 'true') ||
        (player == 2 && sessionStorage.getItem('host') == 'false')) {
        let pose = new Vector3(0, 0, 0)
        let dir = new Vector3(0, 0, 0)
        let quat = new Quaternion(0, 0, 0, 1)
        chassisBody.current.getWorldPosition(pose)
        chassisBody.current.getWorldDirection(dir)
        chassisBody.current.getWorldQuaternion(quat)
        let data = {
          event: 'updateData',
          player_id: localStorage.getItem('horia_id'),
          once: sessionStorage.getItem('once'),
          brat_height: bratPosition,
          chassis_position: pose,
          chassis_direction: dir,
          chassis_quaternion: quat
        }
        // socket.emit('dataUpdate', JSON.stringify(data))
        socketWorker.postMessage(data)
      }
    }
    setTimeout(() => { setDataSend(!dataSend) }, 50)
  }, [dataSend])

  useEffect(() => {
    // if (sessionStorage.getItem('mode') == 'multi' && chassisBody.current != undefined)
    if (socket != undefined) {
      socket.on('dataReload', (stream) => {
        // let obj = JSON.parse(stream)
        if (((player == 2 && sessionStorage.getItem('host') == 'true') ||
          (player == 1 && sessionStorage.getItem('host') == 'false'))) {
          if (localStorage.getItem('horia_id') != stream.substring(14, 27)) {
            let data = JSON.parse(stream)
            setBratPosition(data.brat_height)

            let wDir = new Vector3(...(Object.values(data.chassis_position)))
            let quater = new Quaternion(...((Object.values(data.chassis_quaternion)).slice(1)))
            chassisAPI.position.copy(wDir)
            chassisAPI.quaternion.copy(quater)

            chassisAPI.angularVelocity.set(0, 0, 0)
            chassisAPI.velocity.set(0, 0, 0)
          }
        }
      })

    }
  }, [])

  return (
    <Suspense callback={null}>
      <group {...props} dispose={null} ref={vehicle} name="vehicle">
        {/* <group ref={bratBody}>
          <mesh>
            <cylinderGeometry args={[0.5, 0.5, 12, 32]} />
            <meshPhongMaterial attach={"material"} color="B00B00" />
          </mesh>
        </group> */}
        <group ref={bratBody}>
          <mesh>
            <meshPhongMaterial
              color={"#ffffff"}
              attach={"material"}
              transparent
              opacity={0}
            />
            <boxGeometry args={[2, 1, 2]} />
          </mesh>
        </group>
        <group>
          <WheelDebug wheelRef={wheels[0]} wheelRadius={wheelRadius} />
          <WheelDebug wheelRef={wheels[1]} wheelRadius={wheelRadius} />
          <WheelDebug wheelRef={wheels[2]} wheelRadius={wheelRadius} />
          <WheelDebug wheelRef={wheels[3]} wheelRadius={wheelRadius} />
        </group>
        <group ref={chassisBody}>
          <group>
            {/* position={[0, 0, 11.2]} */}
            <group
              scale={[0.3, 0.3, 0.3]}
              rotation={[0, Math.PI, 0]}
              position={[-0.67, bratPosition, 1.2]}
            >
              <Brat />
            </group>
          </group>
          <mesh ref={chassisBody}>
            <boxGeometry args={[6, 1.5, 6]} />
            <meshPhongMaterial
              attach={"material"}
              color="#FFFF00"
              transparent
              opacity={0}
            />
          </mesh>
          <WheelDebug wheelRef={wheels[0]} wheelRadius={wheelRadius} />
          <WheelDebug wheelRef={wheels[1]} wheelRadius={wheelRadius} />
          <WheelDebug wheelRef={wheels[2]} wheelRadius={wheelRadius} />
          <WheelDebug wheelRef={wheels[3]} wheelRadius={wheelRadius} />
          <group scale={[0.3, 0.3, 0.3]} ref={chassisBody} name="chassisBody">
            <group rotation={[0, Math.PI, 0]} position={[-1.5, -12, 3]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.suport_baterie.geometry}
                material={materials.verde}
                position={[-8.31, 10, 8.55]}
                rotation={[0, -1.57, 0]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.baterie.geometry}
                material={materials["Material.003"]}
                position={[-8.36, 10.78, 8.2]}
                rotation={[0, 1.57, 0]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["REV-31-1153_v1"].geometry}
                material={materials["Material.003"]}
                position={[-9.12, 13.85, -5.03]}
                rotation={[-Math.PI, -1.57, 0]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["REV-31-1153_v1001"].geometry}
                material={materials["Material.003"]}
                position={[-9.12, 13.85, 1.48]}
                rotation={[0, 1.57, 0]}
                scale={-0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FL.geometry}
                material={materials["negru roti"]}
                position={[7.37, 7.83, 11.39]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FLcover.geometry}
                material={materials["galben "]}
                position={[8.02, 7.78, 11.36]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FR.geometry}
                material={materials["negru roti"]}
                position={[-11.14, 7.83, 11.39]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={-0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.channel_baterie.geometry}
                material={materials["Material.001"]}
                position={[-10.02, 14.61, -0.89]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.FRcover.geometry}
                material={materials["galben "]}
                position={[-11.78, 7.78, 11.36]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={-0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.RRcover.geometry}
                material={materials["galben "]}
                position={[-11.78, 7.78, -6.32]}
                rotation={[Math.PI, 0, Math.PI / 2]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane023.geometry}
                material={materials["Material.003"]}
                position={[-1.86, 7.87, -7.64]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.RLcover.geometry}
                material={materials["galben "]}
                position={[8.05, 7.78, -6.32]}
                rotation={[0, 0, Math.PI / 2]}
                scale={-0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.RR.geometry}
                material={materials["negru roti"]}
                position={[-11.14, 7.83, -6.35]}
                rotation={[Math.PI, 0, Math.PI / 2]}
                scale={0.06}
              />
              {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle002.geometry}
                material={materials["Material.001"]}
                position={[-1.49, 12.7, 9.87]}
                scale={0.04}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle003.geometry}
                material={materials["Material.001"]}
                position={[-3.58, 12.7, 9.81]}
                rotation={[-Math.PI, 0, 0]}
                scale={-0.04}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle004.geometry}
                material={materials["Material.001"]}
                position={[-1.49, 12.11, 9.87]}
                scale={0.04}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle005.geometry}
                material={materials["Material.001"]}
                position={[-3.58, 12.11, 9.81]}
                rotation={[-Math.PI, 0, 0]}
                scale={-0.04}
              /> */}
              {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes["gheara-noua-1-1"].geometry}
                material={materials["Material.005"]}
                position={[-4.22, 12.41, 11.36]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.04}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["gheara-noua-1-1001"].geometry}
                material={materials["Material.005"]}
                position={[-0.88, 12.41, 11.45]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={0.04}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["gheara-noua-1-1002"].geometry}
                material={materials["Material.005"]}
                position={[-4.22, 11.84, 11.36]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.04}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["gheara-noua-1-1003"].geometry}
                material={materials["Material.005"]}
                position={[-0.88, 11.84, 11.45]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={0.04}
              /> */}
              {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes["Gheara-sup"].geometry}
                material={materials["Material.005"]}
                position={[-2.52, 15.08, 4.43]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={0.06}
              /> */}
              {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes["Prindere-gh-de-gls"].geometry}
                material={materials["Material.005"]}
                position={[-1.41, 16.24, -3.42]}
                scale={0.06}
              /> */}
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.MotorMosor.geometry}
                material={materials["Material.002"]}
                position={[4.59, 13.58, 0.06]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle055.geometry}
                material={materials.verde}
                position={[4.5, 13.63, -4.66]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glisiera.geometry}
                material={materials["Material.001"]}
                position={[4.62, 22.28, -6.36]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.06, 0.06, 0.37]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glisiera001.geometry}
                material={materials["Material.001"]}
                position={[3.05, 22.28, -6.36]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.06, 0.06, 0.37]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.glisiera002.geometry}
                material={materials["Material.001"]}
                position={[1.47, 22.28, -6.36]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.06, 0.06, 0.37]}
              />
              {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes.glisiera003.geometry}
                material={materials["Material.001"]}
                position={[-0.11, 22.28, -6.36]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.06, 0.06, 0.37]}
              /> */}
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane045.geometry}
                material={materials.negru}
                position={[4.58, 35.3, -5.86]}
                rotation={[0, -1.57, 0]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane047.geometry}
                material={materials.negru}
                position={[2.99, 35.3, -5.86]}
                rotation={[0, -1.57, 0]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane049.geometry}
                material={materials.negru}
                position={[1.43, 35.3, -5.86]}
                rotation={[0, -1.57, 0]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.RL.geometry}
                material={materials["negru roti"]}
                position={[7.41, 7.83, -6.35]}
                rotation={[0, 0, Math.PI / 2]}
                scale={-0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.profil_6_gauri002.geometry}
                material={materials["Material.001"]}
                position={[4.55, 11.29, -0.22]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.profil_13_gauri.geometry}
                material={materials["Material.001"]}
                position={[4.56, 8.29, 2.62]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.profil_6_gauri001.geometry}
                material={materials["Material.001"]}
                position={[-1.94, 8.29, 1.18]}
                rotation={[0, 1.57, 0]}
                scale={0.06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.profil_13_gauri001.geometry}
                material={materials["Material.001"]}
                position={[-8.29, 8.29, 2.62]}
                scale={0.06}
              />
            </group>
          </group>
        </group>
      </group>
    </Suspense>
  );
}

// useGLTF.preload('/robotNou.gltf');
// useGLTF.preload("/robotNou.glb");
useGLTF.preload("/robotNou.glb");
