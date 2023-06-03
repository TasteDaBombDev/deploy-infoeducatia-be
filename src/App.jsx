import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assembly from "./components/simulator/TeleOP/Assembly";
import Menu from "./components/simulator/Misc/menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/da" element={<><h1>ok</h1></>} />
        <Route path="/" element={<Assembly />} />
        <Route path="/nu_rezist_am_nevoie_de_alcool_macar" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
