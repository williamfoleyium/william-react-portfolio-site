import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js"
import About from "./about/About"

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={About}/>
      </Routes>
    </Router>
  );
}

export default App;
