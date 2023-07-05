import "./App.css";

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
          funcTest={myFunc}
        ></ce-counter>
      </main>
    </div>
  );
}

export default App;
