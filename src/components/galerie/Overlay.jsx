import React from 'react'
import './overlay.scss'

function Overlay() {
  return (
    <div className='overlay' id='gal-overlay'>
      <div className="page-galerie" id='general'>
        <div className="title">
          <p>Modelul</p><br />
          <h1>Loki</h1>
        </div>
        <div className="subtitle"><p>A șasea generație</p><br /><h1>THOBOR</h1></div>
        <div className="stripes">
          <div className="stripe">
            <div className="stripe-1" />
            <div className="stripe-2" />
          </div>
          <div className="stripe">
            <div className="stripe-3" />
            <div className="stripe-4" />
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
        </div>
      </div>
      <div className="page-galerie" id='robot'>
        <div className="stripes">
          <div className="stripe">
            <div className="stripe-1" />
            <div className="stripe-3" />
          </div>
          <div className="stripe">
            <div className="stripe-4" />
            <div className="stripe-2" />
          </div>
          <div className="stripe">
            <div className="stripe-4" />
            <div className="stripe-5" />
          </div>
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
        </div>
      </div>
      <div className="page-galerie" id='chassis'>
        <div className="stripes">
          <div className="stripe">
            <div className="stripe-1" />
            <div className="stripe-3" />
          </div>
          <div className="stripe">
            <div className="stripe-4" />
            <div className="stripe-2" />
          </div>
          <div className="stripe">
            <div className="stripe-4" />
            <div className="stripe-5" />
          </div>
        </div>
        <div className="title"><h2>Șasiu proiectat</h2><h1>CUSTOM</h1></div>
        <div className="subtitle"><h2>Dimensiunea</h2><h1>PERFECTA</h1></div>
        <ul className="list">
          <li>Profile GoBilda redimensionate</li>
          <li>Odometrie cu 3 dead-wheels</li>
          <li>Sistem de lift compact</li>
        </ul>
        <div className="stripes">
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
        </div>
      </div>
      <div className="page-galerie" id='arm'>
        <div className="stripes">
          <div className="stripe">
            <div className="stripe-1" />
            <div className="stripe-3" />
          </div>
          <div className="stripe">
            <div className="stripe-4" />
            <div className="stripe-2" />
          </div>
          <div className="stripe">
            <div className="stripe-4" />
            <div className="stripe-5" />
          </div>
        </div>
        <div className="title"><h2>Sistem</h2><h1>INTAKE</h1><h2>custom</h2></div>
        <div className="subtitle"><h2>Bazat pe</h2><h1>MOBILITATE EXTINSA</h1></div>
        <ul className="list">
          <li>Integrat cu ajutorul senzorilor</li>
          <li>Dispune de autocentrare</li>
          <li>Servouri cu forta mare de prindere</li>
        </ul>
        <div className="stripes">
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
        </div>
      </div>
      <div className="page-galerie" id='lift'>
        <div className="stripes">
          <div className="stripe">
            <div className="stripe-1" />
            <div className="stripe-3" />
          </div>
          <div className="stripe">
            <div className="stripe-4" />
            <div className="stripe-2" />
          </div>
          <div className="stripe">
            <div className="stripe-4" />
            <div className="stripe-5" />
          </div>
        </div>
        <div className="title"><h2>Sistem de</h2><h1>LIFT</h1></div>
        <div className="subtitle"><h2>Controlat de</h2><h1>ALGORITM</h1><h2>PIDF</h2></div>
        <ul className="list">
          <li>Viteză autoreglata de algoritm</li>
          <li>Bazat pe glisiere GoRails</li>
          <li>Dispune de opritori speciali</li>
        </ul>
        <div className="stripes">
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
        </div>
      </div>

    </div>
  )
}

export default Overlay