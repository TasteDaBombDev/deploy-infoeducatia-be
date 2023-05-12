import React from "react";
import "./Overlay.scss";

function Overlay() {
  return (
    <div className="wrapper_MAMA_CUIVA">
      <div className="controls">
        <h5>CAMERA PE ROBOT: 0</h5>
        <h5>CAMERE: 1 - 9</h5>
        <h5>CONTROL: W A S D</h5>
        <h5>STRAFES: Q și E</h5>
        <h5>ROTIREA ST-DR: SĂGEȚI</h5>
        <h5>SUS - JOS BRAT: SĂGEȚI</h5>
        <h5>ARUNCĂ CON: F (ȚINE APĂSAT)</h5>
        <h5>RESETARE: R</h5>
        {/* press k to swap camera<br /> */}
        {/* Teren stricat sau robot ce se misca ciudat?<br />
            Apasa R pentru a reseta. */}
      </div>
    </div>
  );
}

export default Overlay;
