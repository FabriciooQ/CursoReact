import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import ComponenteFuncional from "./components/ComponenteFuncional";
import Propiedades from "./components/propiedades";
import Contador from "./components/EstadoClase";
import Renderizado from "./components/Renderizado";
import {Contador2, Contador3} from "./components/Contador2";
import HookUseState from "./components/UseState";
import ScrollY from "./components/ScrollY";
import { Contador2, Contador3 } from "./components/Contador2";
import { Padre, Hijo } from "./components/ComunicacionEntreComponentes";
import CicloDeVida from "./components/CicloDeVida";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Componente msg="HOla" />
      <ComponenteFuncional msg="Hola soy funcional" s />
      <Propiedades></Propiedades>
      <hr />
      <Contador />
      <hr />
      <Renderizado></Renderizado>
      <hr />
      <Contador2></Contador2>
      <hr />
      <Contador3></Contador3>
      <hr />
      <HookUseState texto="Contador con useState"></HookUseState>
      <hr/>
      <ScrollY></ScrollY>
      <Padre></Padre>
      <hr />
      <CicloDeVida></CicloDeVida>
    </div>
  );
}

export default App;
