import React, { useEffect, useState } from 'react'
import DoamneIartaCeUrmeaza from '../TeleOP/Robot/DoamneIartaCeUrmeaza'
import './Score.scss'

function Score() {

    const [low, setLow] = useState(0)
    const [med, setMed] = useState(0)
    const [high, setHigh] = useState(0)

    // ASTA ESTE A 5A IMPLEMENTARE SI DEJA MERGE EXTREM DE PROST
    // DAR MACAR RESTUL DE 4 NU O SA MAI EXISTE

    // TREBUIE ADAUGAT DATA FETCH SI LA CONTROLLER INPUT
    // NU SUNT SIGUR CUM

    useEffect(() => {


        const keyDown = (e) => {
            setLow(DoamneIartaCeUrmeaza.puntaj[0])
            setMed(DoamneIartaCeUrmeaza.puntaj[1])
            setHigh(DoamneIartaCeUrmeaza.puntaj[2])
        }

        const keyUp = (e) => {
            setLow(DoamneIartaCeUrmeaza.puntaj[0])
            setMed(DoamneIartaCeUrmeaza.puntaj[1])
            setHigh(DoamneIartaCeUrmeaza.puntaj[2])
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