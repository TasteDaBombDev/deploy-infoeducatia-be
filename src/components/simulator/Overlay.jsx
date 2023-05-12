import React from "react";
import "./Overlay.scss";

function Overlay() {
  return (
    <div className="wrapper_MAMA_CUIVA">
      <div className="controls">
        <div>Camere: 1 - 9</div>
        <div>Camera pe robot: 0</div>
        <div>CONTROL: W A S D</div>
        <div>STRAFES: Q și E</div>
        <div>ROTIREA ST-DR: SĂGEȚI</div>
        <div>SUS - JOS BRAT: SĂGEȚI</div>
        <div>ARUNCĂ CON: F (ȚINE APĂSAT)</div>
        <div>RESETARE: R</div>
        {/* press k to swap camera<br /> */}
        {/* Teren stricat sau robot ce se misca ciudat?<br />
            Apasa R pentru a reseta. */}
      </div>
    </div>
  );
}

export default Overlay;
