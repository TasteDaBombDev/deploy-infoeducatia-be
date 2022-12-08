import React from "react";

function App({ titlu, p, img, link, codeQR, txt_link }) {
  return (
    <>
      <div className="app">
        <div className="top">
          <div className="img">
            {/* <div className="before" data-aos="fade-right"></div> */}
            <img src={img} alt="" data-aos="fade-up" />
            {/* <div className="after" data-aos="fade-left"></div> */}
          </div>
          <div className="txt">
            <div className="title">
              <h1 data-aos="fade-down">{titlu}</h1>
              <div
                className="linie"
                data-aos="fade-left"
                data-aos-delay="300"
              ></div>
            </div>
            <div className="text">
              <div
                className="linie_vert"
                data-aos="fade-left"
                data-aos-delay="400"
              ></div>
              <p data-aos="fade-left">{p}</p>
            </div>
          </div>
        </div>

        <a href={link} target="_blank" className="button" data-aos="fade-down">
          {txt_link}
        </a>
        {codeQR && (
          <div className="qr_cont">
            <img src={codeQR} className="qr" alt="" data-aos="fade-down" />
          </div>
        )}
        <div className="linie_sep"></div>
      </div>
    </>
  );
}

export default App;
