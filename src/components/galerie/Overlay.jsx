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
          <li>Brat mobilizat cu servouri</li>
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
        <div className="title">Sasiul</div>
        <div className="subtitle">ceva intereasant</div>
        <div className="list">nush nu intreba</div>
      </div>
      <div className="page-galerie" id='arm'>
        <div className="title">brat</div>
        <div className="subtitle">cati nervi mi-a facut ala</div>
        <div className="list"></div>
      </div>
      <div className="page-galerie" id='lift'>
        <div className="title">lift</div>
        <div className="subtitle">asta este si mai oribil</div>
        <div className="list">simt ca nu mai rezist</div>
      </div>
    </div>
  )
}

export default Overlay