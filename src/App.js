import logo from "./logo.svg";
import "./App.css";
import { Gestion } from "./components/Gestion";
import { Tareas } from "./components/Tareas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Gestion /> {/*   ejercicio como metodo memo*/}
        {/* <Tareas /> ejercion con hook use memo */}
      </header>
    </div>
  );
}

export default App;
