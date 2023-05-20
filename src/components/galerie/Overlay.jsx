import React from 'react'
import './overlay.scss'

function Overlay() {
  return (
    <div className='overlay'>
      <div className="page-galerie" id='general'>
        <div className="title">Titlul geeric</div>
        <div className="subtitle">Subtitlul descirere</div>
        <div className="list">ceva lista cu termenii</div>
      </div>
      <div className="page" id='robot'>
        <div className="title"></div>
        <div className="subtitle"></div>
        <div className="list"></div>
      </div>
      <div className="page" id='chassis'>
        <div className="title"></div>
        <div className="subtitle"></div>
        <div className="list"></div>
      </div>
      <div className="page" id='arm'>
        <div className="title"></div>
        <div className="subtitle"></div>
        <div className="list"></div>
      </div>
      <div className="page" id='lift'>
        <div className="title"></div>
        <div className="subtitle"></div>
        <div className="list"></div>
      </div>
    </div>
  )
}

export default Overlay