import React from "react";
import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Day8 from "./pages/Day8";
import Day9 from "./pages/Day9";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Day8 />} />
        <Route path="/day8" element={<Day8 />} />
        <Route path="/day9" element={<Day9 />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
