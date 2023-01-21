import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;