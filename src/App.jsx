import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
