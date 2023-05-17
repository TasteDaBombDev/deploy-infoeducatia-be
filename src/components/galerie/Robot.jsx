import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Contact from "../utils/Contact";
import Up from "../utils/Up";
import "./blog_post.scss";

import ScenePreview from './components/ScenePreview'
import Datas from "./components/Datas";
import './robot.scss'
import Room1 from "./components/scenesComponents/Room1";
import { Canvas, extend, useThree } from "react-three-fiber";
import { Environment, OrbitControls, PerformanceMonitor } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import CustomEnv from "./components/CustomEnv";

function Robot() {
  const { sezon } = useParams();

  const [title, setTitle] = useState("")
  const [text_scurt, setScurt] = useState("")
  const [text_lung, setLung] = useState("")

  useEffect(() => {
    AOS.init();
    setTitle(Datas.titles[sezon])
    setScurt(Datas.text_scurt[sezon])
    setLung(Datas.text_lung[sezon])
  }, []);

  return (
    <>
      <div className="robot">

        <Canvas style={{ height: '100vh' }}>
          <OrbitControls />
          <directionalLight
            position={[40, 50, 10]}
            castShadow
            intensity={.9}
          />
          {/* <EffectComposer
            multisampling={8}
            renderPriority={1}
          > */}
            {/* <Bloom kernelSize={1} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.4} />
            <Bloom kernelSize={0} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.2} /> */}
            <ambientLight position={[0, 10, 0]} intensity={.4} />
            <Room1 />
            {/* <CustomEnv /> */}
            {/* <Environment
              blur={.1}
              files={'./studio_maro.hdr'}
              background={true}
            /> */}
          {/* </EffectComposer> */}
        </Canvas>

        <div className="wrapper">
          <div className="title">
            <h1>{title}</h1>
            <div className="title2"><h2>{text_scurt}</h2></div>
          </div>
          <div className="desc"><p>{text_lung}</p></div>
        </div>

        <ScenePreview sezon={Number(sezon)} />

        {/* <div className="title">
          <div className="title2">
            <h1>{postare && postare.titlu} </h1>
            <div className="linie"></div>
          </div>
          <h3>
            See post on social} media:{" "}
            <a href={postare && postare.fb} target="_blank">
              <svg
                xmlnsXlink="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#1672E6"
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                />
              </svg>
            </a>
            <a href={postare && postare.insta} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#E1306C"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
          </h3>
        </div> */}
      </div>
      <Contact />
      <Up />
    </>
  );
}

export default Robot;
