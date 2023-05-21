import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/notfound/NotFound";
import SingleScene from "./components/galerie/SingleScene";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingleScene />} />
        {/* <Route path="/robot/:sezon" element={<Robot />} /> */}
        {/* <Route path="/simulator" element={<Assembly />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
