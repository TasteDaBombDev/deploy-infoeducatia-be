import React, { useEffect, useState } from 'react'
import DoamneIartaCeUrmeaza from '../TeleOP/Robot/DoamneIartaCeUrmeaza'
import './Score.scss'

function Score() {

    const [low, setLow] = useState(0)
    const [med, setMed] = useState(0)
    const [high, setHigh] = useState(0)

    const [True, setFalse] = useState(false)

    useEffect(() => {
        setLow(DoamneIartaCeUrmeaza.puntaj[0])
        setMed(DoamneIartaCeUrmeaza.puntaj[1])
        setHigh(DoamneIartaCeUrmeaza.puntaj[2])

        setTimeout(() => setFalse(!True), 500);
    }, [True])

    return (
        <div className='CEVA_MAGIC'>
            <h5>LOW: {low * 3}</h5>
            <h5>MEDIU: {med * 4}</h5>
            <h5>HIGH: {high * 5}</h5>
            <h4>TOTAL:{low * 3 + med * 4 + high * 5}</h4>
        </div>
    )
}

export default Score