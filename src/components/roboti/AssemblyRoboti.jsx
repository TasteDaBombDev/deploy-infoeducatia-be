import React from "react";
import './Assembly.css';
import Scena from "./Components/three/Scena";

export default function AssemblyRoboti(props) {

    return (
        <div className="assembly">
            {/* <Display /> */}
            <Scena />
        </div>
    );

}