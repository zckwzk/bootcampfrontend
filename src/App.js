import React from "react";
import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Day8 from "./pages/Day8";

function App() {
  return (
    <>
      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Day8 />} />
        <Route path="/day8" element={<Day8 />} />
      </Routes>
    </>
  );
}

export default App;
