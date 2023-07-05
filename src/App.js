import "./App.css";
import { CECounter } from "./components/XSearch/XSearch";

function App() {
  function myFunc() {
    alert("Has clicado");
  }
  return (
    <div className="App">
      <main>
        <ce-counter
          name="contador"
          objectTest='{"name":"contador"}'
          funct-test={myFunc}
        ></ce-counter>
      </main>
    </div>
  );
}

export default App;
