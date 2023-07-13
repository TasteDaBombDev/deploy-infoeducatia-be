import React, { useEffect, useState } from 'react'
import ExternalData from '../TeleOP/Robot/ExternalData'
import './Score.scss'

function Score() {

    const [low, setLow] = useState(0)
    const [med, setMed] = useState(0)
    const [high, setHigh] = useState(0)

    useEffect(() => {


        const keyDown = (e) => {
            setLow(ExternalData.puntaj[0])
            setMed(ExternalData.puntaj[1])
            setHigh(ExternalData.puntaj[2])
        }

        const keyUp = (e) => {
            setLow(ExternalData.puntaj[0])
            setMed(ExternalData.puntaj[1])
            setHigh(ExternalData.puntaj[2])
        }

        window.addEventListener("keydown", keyDown);
        window.addEventListener("keyup", keyUp);
        return () => {
            window.removeEventListener("keydown", keyDown);
            window.removeEventListener("keyup", keyUp);
        };

    }, []);

    return (
        <div className='CEVA_MAGIC'>
            <h5>LOW: {low * 3}</h5>
            <h5>MEDIU: {med * 4}</h5>
            <h5>HIGH: {high * 5}</h5>
            <h4>TOTAL: {low * 3 + med * 4 + high * 5}</h4>
        </div>
    )
}

export default Score