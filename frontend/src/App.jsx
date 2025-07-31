// import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Add from "./layout/Add";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex justify-center">
              <Navbar />
              <Content />
            </div>
          }
        />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
