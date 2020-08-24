import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
/**useState hook para crear estados */
import { Button, Accordion, Card } from "react-bootstrap";
import { ReactComponent as ReactIcon } from "./assets/react.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacto from "./pages/Contacto";
import QuienSoy from "./pages/QuienSoy";

import "./App.css";

function App() {
  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  /**useEffect se ejecutara cada vez que contar se modifique */
  useEffect(() => {
    console.log("Total: " + contar);
  }, [
    /**Variables que se actualizaran cuando se ejecuta */
    contar,
  ]);

  const encenderApagar = () => {
    setStateCar(!stateCar);
    //setStateCar((prevValue) => !prevValue);
    setContar(contar + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Boostrap</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Clicks: {contar}</h4>
        <br />
        <button onClick={encenderApagar}>Encender / Apagar</button>
        <br />
        <Router>
          <div>
            <Link to="/">
              <Button>Home</Button>
            </Link>

            <Link to="/contacto">
              <Button>Contacto</Button>
            </Link>

            <Link to="/quien-soy">
              <Button>Quien Soy</Button>
            </Link>
          </div>

          <Switch>
            <Route path="/contacto">
              <Contacto />
            </Route>

            <Route path="/quien-soy">
              <QuienSoy />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
