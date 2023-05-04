import React from "react";
import './Overlay.scss';

function Overlay() {


    return (
        <div className="wrapper_PULA_MEA">
            <div className="controls">
                <div>Camere: 1 - 8</div>
                <div>Camera pe robot: 0</div>
                <div>CONTROL: W A S D</div>
                <div>STRAFES: Q și E</div>
                <div>ROTIREA: SĂGEȚI</div>
                <div>RESETARE: R</div>
                {/* press k to swap camera<br /> */}
                {/* Teren stricat sau robot ce se misca ciudat?<br />
            Apasa R pentru a reseta. */}
            </div>
        </div>
    );

}

export default Overlay;