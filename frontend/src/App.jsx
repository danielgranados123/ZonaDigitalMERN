import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navegation from "./components/Nav.jsx"; // Navegacion

function App() {
  return (
      <Router>
        <Navegation />
      </Router>
  );
}

export default App;
