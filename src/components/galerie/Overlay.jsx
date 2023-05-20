import React from 'react'
import './overlay.scss'

function Overlay() {
  return (
    <div className='overlay' id='gal-overlay'>
      <div className="page-galerie" id='general'>
        <div className="title">Loki</div>
        <div className="subtitle">A șasea generație Thobor</div>
      </div>
      <div className="page-galerie" id='robot'>
        <div className="title">Al doilea prototip din generatia sa</div>
        <div className="subtitle">Produs pentru depasi limitele tehnicii</div>
        <div className="list">ceva altceva droguri</div>
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