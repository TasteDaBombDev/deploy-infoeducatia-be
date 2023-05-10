import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assembly from "./components/simulator/TeleOP/Assembly";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/da" element={<><h1>ok</h1></>} />
        <Route path="/" element={<Assembly />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
