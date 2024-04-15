import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import ComponenteFuncional from "./components/ComponenteFuncional";
import Propiedades from "./components/propiedades";

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
    </div>
  );
}

export default App;
