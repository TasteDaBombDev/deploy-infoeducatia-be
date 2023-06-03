import React, { useEffect, useState } from 'react'
import './Menu.css'
import { Mouse } from './mouse'


function Menu() {

    const [host, setHost] = useState(false)
    const [part, setPart] = useState(1)

    useEffect(() => {
        Mouse()
    })

    const start_game = () => {
        sessionStorage.setItem('host', host)
        window.location.pathname = '/'
    }

    return (
        <div className='menu'>
            {
                part === 1 ?
                    <ul className="threeD-button-set">
                        <li><button onClick={() => { sessionStorage.setItem('mode', 'single'); start_game() }} >Singleplayer</button></li>
                        <li><button onClick={() => { sessionStorage.setItem('mode', 'multi'); setPart(2) }}>Multiplayer (Local)</button></li>
                    </ul>
                    :
                    <ul className="threeD-button-set">
                        <li><button onClick={() => { setHost(true); start_game() }} >Host Game</button></li>
                        <li><button onClick={() => { start_game() }}>Join Game</button></li>
                        <li><button onClick={() => { setPart(1) }}>Back</button></li>
                    </ul>

            }
        </div>
    )
}

export default Menu