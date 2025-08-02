import { useState, useRef } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./layout/Content";
import Navbar from "./layout/Navbar";
import Add from "./layout/Add";
import Drawer from "./layout/Drawer";

function App() {
  const drawerRef = useRef();

  const openDrawer = () => {
    drawerRef.current?.classList.remove("translate-x-full");
    drawerRef.current?.classList.add("translate-x-0");
  };

  const closeDrawer = () => {
    drawerRef.current?.classList.add("translate-x-full");
    drawerRef.current?.classList.remove("translate-x-0");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex justify-center">
              <Navbar onOpenDrawer={openDrawer} />
              <Content />
              <Drawer ref={drawerRef} onClose={closeDrawer} />
            </div>
          }
        />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
