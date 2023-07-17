import React, { useEffect, useState } from 'react'
import './Menu.css'
import { Mouse } from './mouse'


function Menu() {

    const [host, setHost] = useState(false)
    const [part, setPart] = useState(1)

    useEffect(() => {
        if (!localStorage.getItem("horia_id")) {
            localStorage.setItem("horia_id", Date.now())
        } else {
            console.log("assigned id:", localStorage.getItem("horia_id"))
        }
    }, [])

    useEffect(() => {
        Mouse()
    }, [])

    const start_game = () => {
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
                        <li><button onClick={() => { sessionStorage.setItem('host', true); start_game() }} >Host Game</button></li>
                        <li><button onClick={() => { sessionStorage.setItem('host', false); start_game() }}>Join Game</button></li>
                        <li><button onClick={() => { setPart(1) }}>Back</button></li>
                    </ul>

            }
        </div>
    )
}

export default Menu