import React from "react";
import "./Overlay.scss";
import { useEffect } from "react";
import { useState } from "react";
import DoamneIartaCeUrmeaza from "../TeleOP/Robot/DoamneIartaCeUrmeaza";

function Overlay({ playerIndex }) {

  const [activeGamepad, setGamepad] = useState(false)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const gamepadState = () => { setTimeout( ()=>{ setGamepad(DoamneIartaCeUrmeaza.gamepadControlled)}, 300 ) }
    window.addEventListener('keydown', gamepadState)
    return () => {
      window.removeEventListener('keydown', gamepadState)
    }
  })


  return (
    <div className="wrapper_CUIVA">
      <div className="controls">
        <h5>CAMERA PE ROBOT: 0</h5>
        <h5>CAMERE: 1 - 9</h5>
        {
          !activeGamepad ?
            <>
              <h5>CONTROL: W A S D</h5>
              <h5>STRAFES: Q și E</h5>
              <h5>ROTIREA ST-DR: SĂGEȚI</h5>
              <h5>SUS - JOS BRAT: SĂGEȚI</h5>
              <h5>ARUNCĂ CON: F (ȚINE APĂSAT)</h5>
              <h5>RESETARE: R</h5> </> :
            <>
              <h5>FATA - SPATE: TRIGGERS</h5>
              <h5>STRAFES: BUMPERS</h5>
              <h5>ROTIREA ST-DR: X - B</h5>
              <h5>SUS - JOS BRAT: RIGHT JOYSTICK</h5>
              <h5>ARUNCĂ CON: A (ȚINE APĂSAT)</h5>
              <h5>RESETARE: Y</h5>
            </>
        }
        {/* Teren stricat sau robot ce se misca ciudat?<br />
            Apasa R pentru a reseta. */}
      </div>
    </div>
  );
}

export default Overlay;
