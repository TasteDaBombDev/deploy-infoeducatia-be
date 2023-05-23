import React from 'react'
import './overlay.scss'
import Stripes from './components/Stripes'

function Overlay() {
  return (
    <div className='overlay' id='gal-overlay'>
      <div className="page-galerie" id='general'>
        <div className="stripes">
          <Stripes mix={[1, 2]} />
          <Stripes mix={[3, 4]} />
        </div>
        <div className="title">
          <p>Modelul</p><br />
          <h1>Kronos</h1>
        </div>
        <div className="subtitle"><p>A șasea generație</p><br /><h1>THOBOR</h1></div>
        <div className="stripes">
          <Stripes mix={[1, 2]} />
          <Stripes mix={[3, 4]} />
          <Stripes mix={[5]} />
          <Stripes mix={[4]} />
        </div>
      </div>
      <div className="page-galerie" id='robot'>
        <div className="stripes">
          <Stripes mix={[1, 3]} />
          <Stripes mix={[4, 2]} />
          <Stripes mix={[4, 5]} />
        </div>
        <div className="title"><h2>Al</h2><h1>doilea</h1><h2>prototip conceput</h2>
        </div>
        <div className="subtitle"><h2>Proiectat pentru</h2><h1>control extins</h1></div>
        <ul className="list">
          <li>Braț mobilizat cu servouri</li>
          <li>Odometrie cu 3 dead-wheels</li>
          <li>Sistem de lift compact</li>
        </ul>
        <div className="stripes">
          <Stripes mix={[1]} />
          <Stripes mix={[5, 2]} />
          <Stripes mix={[4]} />
          <Stripes mix={[1]} />
        </div>
      </div>
      <div className="page-galerie" id='chassis'>
        <div className="stripes">
          <Stripes mix={[1, 3]} />
          <Stripes mix={[4, 2]} />
          <Stripes mix={[4, 5]} />
        </div>
        <div className="title"><h2>Șasiu proiectat</h2><h1>CUSTOM</h1></div>
        <div className="subtitle"><h2>Dimensiunea</h2><h1>PERFECTA</h1></div>
        <ul className="list">
          <li>Profile GoBilda redimensionate</li>
          <li>Odometrie cu 3 dead-wheels</li>
          <li>Motoare de 312 RPM</li>
        </ul>
        <div className="stripes">
          <Stripes mix={[1, 2]} />
          <Stripes mix={[5]} />
          <Stripes mix={[4]} />
          <Stripes mix={[1]} />
        </div>
      </div>
      <div className="page-galerie" id='arm'>
        <div className="stripes">
          <Stripes mix={[1, 3]} />
          <Stripes mix={[4, 2]} />
          <Stripes mix={[4, 5]} />
        </div>
        <div className="title"><h2>Sistem</h2><h1>INTAKE</h1><h2>custom</h2></div>
        <div className="subtitle"><h2>Bazat pe</h2><h1>MOBILITATE EXTINSA</h1></div>
        <ul className="list">
          <li>Integrat cu ajutorul senzorilor</li>
          <li>Dispune de autocentrare</li>
          <li>Servouri cu forta mare de prindere</li>
        </ul>
        <div className="stripes">
          <Stripes mix={[1, 2]} />
          <Stripes mix={[5]} />
          <Stripes mix={[4]} />
          <Stripes mix={[1]} />
        </div>
      </div>
      <div className="page-galerie" id='lift'>
        <div className="stripes">
          <Stripes mix={[1, 3]} />
          <Stripes mix={[4, 2]} />
          <Stripes mix={[4, 5]} />
        </div>
        <div className="title"><h2>Sistem de</h2><h1>LIFT</h1></div>
        <div className="subtitle"><h2>Controlat de</h2><h1>ALGORITM</h1><h2>PIDF</h2></div>
        <ul className="list">
          <li>Viteză autoreglata de algoritm</li>
          <li>Bazat pe glisiere GoRails</li>
          <li>Dispune de opritori speciali</li>
        </ul>
        <div className="stripes">
          <Stripes mix={[1, 2]} />
          <Stripes mix={[5]} />
          <Stripes mix={[4]} />
          <Stripes mix={[1]} />
        </div>
      </div>
      <div className="page-galerie" id='detectie'>
        <div className="stripes">
          <Stripes mix={[1, 3]} />
          <Stripes mix={[4, 2]} />
          <Stripes mix={[4, 5]} />
        </div>
        <div className="title"><h2>Detectie video prin</h2><h1>OpenCV</h1>
        </div>
        <div className="subtitle"><h1>Flexibil</h1><h2>pentru modificari oricand</h2></div>
        <img alt='' src="./img/detectie.png" />
        <div className="stripes">
          <Stripes mix={[1, 2]} />
          <Stripes mix={[5]} />
          <Stripes mix={[4]} />
          <Stripes mix={[1]} />
        </div>
      </div>
      <div className="page-galerie" id='threads'>
        <div className="stripes">
          <Stripes mix={[1, 3]} />
          <Stripes mix={[4, 2]} />
          <Stripes mix={[4, 5]} />
        </div>
        <div className="title"><h2>Functie de autonom pe baza</h2><h1>Threadurilor</h1></div>
        <div className="subtitle"><h2>Are capacitatea de a executa actiuni</h2><h1>asincron</h1></div>
        <ul className="list">
          <li>Timp de miscare economisit</li>
          <li>Simplificare a structurii codului</li>
          <li>Posibilitatea de cod polimorfic</li>
        </ul>
        <img alt='' src='./img/threads.png' />
        {/* <div className="stripes">
          <div className="stripe">
            <div className="stripe-1" />
            <div className="stripe-2" />
          </div>
          <div className="stripe">
            <div className="stripe-5" />
          </div>
          <div className="stripe">
            <div className="stripe-4" />
          </div>
          <div className="stripe">
            <div className="stripe-1" />
          </div>
        </div> */}
      </div>
      <div className="page-galerie" id='road'>
        <div className="stripes">
          <Stripes mix={[1, 3]} />
          <Stripes mix={[4, 2]} />
          <Stripes mix={[4, 5]} />
        </div>
        <div className="title"><h2>Control total prin</h2><h1>controllere</h1></div>
        <div className="subtitle"><h2>Permite</h2><h1>FLEXIBILITATE</h1><h2>in orice situatie</h2></div>
        <ul className="list">
          <li>Proiectat pentru doi driveri</li>
          <li>Controale separate pe sasiu si intake</li>
          <li>Controalele nu se suprapun</li>
        </ul>
        <div className="stripes" style={{ marginBottom: '50px' }}>
          <Stripes mix={[1, 2]} />
          <Stripes mix={[5]} />
          <Stripes mix={[4]} />
          <Stripes mix={[1]} />
        </div>
      </div>
    </div>
  )
}

export default Overlay